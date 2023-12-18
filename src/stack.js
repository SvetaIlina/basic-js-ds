const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor () {
    this.stack = {},
    this.length = 0
  }

  push(element) {
    this.length ++
    this.stack[this.length] = element;
  }

  pop() {
    let remove = this.stack[this.length];
    delete this.stack[this.length];
    this.length --;
    return remove;
    
  }

  peek() {
    return this.stack[this.length] ? this.stack[this.length] : 1;
  }
}



module.exports = {
  Stack
};
