// This binding of arrow functions works slightly different from normal function definition

// Instead of bind to the parent it is created, it inherits the parent from its current scope

const GrandParent = {name: "GrandParent"};
GrandParent.Parent = {name: "Parent"}

GrandParent.Parent.arrowFunction = () => {
  console.log(this); 
};

GrandParent.Parent.normalFunction = function () {
  console.log(this);
}

GrandParent.Parent.arrowFunction(); // Window 
GrandParent.Parent.normalFunction(); // Parent (since it is called from Parent)

const step = {name: "step"};
step.arrowFunction = GrandParent.Parent.arrowFunction;
step.normalFunction = GrandParent.Parent.normalFunction;

step.arrowFunction(); // Window 
step.normalFunction();  // step (since it is called from step)

// ------------------------------------------------------------------------------

const myObject = {
  name: "myObject",
  myArrowFunction: null,
  myMethod: function () { // If we change it to arrow function, "this" becomes global
    console.log(this);
    this.myArrowFunction = () => { console.log(this) };
  }
};
myObject.myMethod();  // myObject
myObject.myArrowFunction(); // myObject (since at that scope of binding, the parent is myObject)

// --------------------------------------------------------------------------------
const obj = {
  name: "obj",
  myArrowFunction: () => {console.log(this)},
  innerObj: {
    name: "innerObj",
    myMethod: function () {
      console.log(this);
      obj.myArrowFunction = function (){console.log(this)}; // This will be obj
    },
    myMethod2: function () {
      obj.myArrowFunction = () => {console.log(this)}; // This will be innerObj
    },
    myInnerArrow: () => {
      console.log(this);
    }
  }
};
obj.myArrowFunction() // Window (in the scope of binding(obj), the parent is global)
obj.innerObj.myInnerArrow(); // Window (in the scope of binding(obj.innerObj), the parent is global)

obj.innerObj.myMethod();  // innerObj (at binding, the binding target is innerObj)
obj.myArrowFunction();  // obj (this used function, so it binds to the directly parent obj)

obj.innerObj.myMethod2();
obj.myArrowFunction();  // innerObj (in the scope of binding(obj.innerObj.myMethod2), the parent is innerObj)