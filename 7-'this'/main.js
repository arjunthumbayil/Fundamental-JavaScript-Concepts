/* 'this' keyword in JavaScript (Implicit binding)
Just like how we use the pronoun ‘this’ to reference something in English, in
JavaScript the ‘this’ keyword is used to reference something — an object!

this points to the owner of the function call, I repeat, THE FUNCTION CALL, and NOT 
the function itself. The same function can have different owners in different scenarios.

Implicit Binding is applied when you invoke a fun ction in an Object using the dot 
notation. this in such scenarios will point to the object using which the function 
was invoked. Or simply the object on the left side of the dot.

In Explicit Binding, you can force a function to use a certain object as its this.
Explicit Binding can be applied using call(), apply(), and bind(). */

/* Question 3 - What logs to console the following code snippet? */

const user = {
  name: "Rahul Kudiyal",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user.logMessage, 1000);

/* Correct Output
While setTimeout() function uses the object.logMessage as a callback,
still, it invokes object.logMessage as a regular function, rather than a method.

And during a regular function invocation this equals the global object which is
window in the case of the browser environment.

That's why console.log(this.message) inside logMessage method logs window.message, 
which is undefined.

How can you fix this code so that 'Rahul Kudiyal' is logged to console?
 */

/* Question 2 - What is the result of accessing its ref? Why? */

// function makeUser() {
//   return {
//     name: "John",
//     ref: this,
//   };
// }

// let user = makeUser();

// console.log(user.ref.name);

// console.log(user); //{name:"John", ref:Window}

/* Correct Output
Nothing, as it points to window object.

Here the value of this inside makeUser() is undefined, because it is called as a 
function, not as a method with “dot” syntax. The value of this is one for the whole 
function, code blocks and object literals do not affect it.

So ref: this actually takes current this of the function.

We can rewrite the function and return the same this with undefined value:
How do u make it work?
*/

// function makeUser() {
//   return {
//     name: "John",
//     ref() {
//       return this;
//     },
//   };
// }

// let user = makeUser();

// console.log(user.ref().name); // John

/* Question 1 - What is the output? */

// const user = {
//   firstName: "Rahul",
//   getName() {
//     const firstName = "Samba!";
//     return this.firstName;
//   },
// };
// console.log(user.getName());

/* Correct Output
Rahul is logged to the console. 
user.getName() is a method invocation, that's why this inside the method equals object.
 */

/* Question */

/* Correct Output

 */
