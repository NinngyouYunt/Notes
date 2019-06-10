// Class Definition ES6
class Thing{
  field = null;
  #privateField = null;
  constructor(){}
  method(){}
  get getter(){}
  set setter(){}
  static staticMethod() {}
}

function Thing2 (field) {
  this.field = field;
  this.method = () => {};
}
