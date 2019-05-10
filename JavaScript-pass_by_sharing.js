// Considering the following

// ---------- Example 1 -----------
function changeStuff(num, obj1, obj2)
{
  num = num * 10;
  obj1.item = "changed";
  obj2 = {item: "changed"};
}

let num = 10;
let obj1 = {item: "unchanged"};
let obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item); // changed
console.log(obj2.item); // unchanged
/**
 * An easier way to remember is
 * When you are modify argument as one, it is pass by value
 * When you are modify properties of object, it is pass by reference
 */


// ---------- Example 2 -----------
// When using ES6 const, a similar situation happens
const obj3 = {item: "unchanged"};
const obj4 = {item: "unchanged"};

obj3.item = "changed";
try {
  obj4 = {item : "changed"}; // throw error
} catch (err) {
  console.log("You cannot change obj3 and the Error is: \n" + err.toString());
}

console.log(obj3.item); // changed
console.log(obj4.item); // unchanged
/**
 * For the above example,
 * You cannot reassign constant or it throws an error
 * However, modifying the properties of a constant is not considered as an error
 */


// ---------- Example 3 -----------
// So the good practice for creating alias(or reference) to a variable would be
let origin = {item: "unchanged"};
const alias = origin;

alias.item = "changed";

console.log(origin.item); // Changed
/**
 * This way, you make sure you will not lose the reference by reassigning alias to something else
 * and when using it, keep in mind that alias is a reference not a copy
 */


// ---------- Conclusion -----------
/**
 * When assign a variable to another (var1 = var2), pay attention to how you are using your new variable (var1)
 * If you are reassigning it (var1 = {}), you lose the reference to the origin (var2)
 * If you are modifying properties (var1.item = xxx OR var1["item"] = xxx), you are also modifying the origin (var2)
 * 
 * This is not limited to variable assignment but also arguments of functions (since it it basically assigning origin to the argument variable)
 */
