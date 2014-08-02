var Mammal = function(name) {
  this.name = name;
  this.offspring = [];
};

Mammal.prototype.sayHello = function() {
  return "My name is " + this.name + ", I'm a Mammal";
};

Mammal.prototype.haveBaby = function() {
  var babyName = "Baby " + this.name;
  var newBaby = new this.constructor(babyName);
  this.offspring.push(newBaby);
  return newBaby;
};

var Cat = function(name, color) {
  Mammal.call(this, name);
  this.color = color;
};

Cat.prototype = Object.create(Mammal.prototype);
Cat.prototype.constructor = Cat;


Cat.prototype.haveBaby = function(color) {
  debugger;
  var parentCat = this;
  var kitten = Mammal.prototype.haveBaby.call(parentCat);
  kitten.color = color;
  return kitten;
};