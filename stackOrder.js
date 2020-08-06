var Stack = function () {
  this.count = 0;
  this.storage = {};

  this.push = function (value) {
    this.storage[this.count] = value; /* Adding the value to the storage */
    this.count++; /* Adding one everytime this is called  */
  };

  this.pop = function () {
    /* If the count === to zero then return 0 and end code */
    if (this.count === 0) {
      return undefined;
    }
    /* Else  */
    this.count--; /* Remove one from count */
    var result = this.storage[
      this.count
    ]; /* Store the count in the storage object as result */
    delete this.storage[this.count]; /* delete the storage  */
    return result; /* give the value of the result variable */
  };
  /*  */
  this.size = function () {
    return this.count;
  };

  this.peek = function () {
    return this.storage[this.count - 1];
  };
};

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("I did this lol");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
