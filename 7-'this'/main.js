/* 'this' keyword in JavaScript (Implicit binding)
Just like how we use the pronoun ‘this’ to reference something in English, in
JavaScript the ‘this’ keyword is used to reference something — an object!

Implicit Binding is applied when you invoke a function in an Object using the dot 
notation. this in such scenarios will point to the object using which the function 
was invoked. Or simply the object on the left side of the dot.

In Explicit Binding, you can force a function to use a certain object as its this.
Explicit Binding can be applied using call(), apply(), and bind(). */

/* Question 3 - What logs to console the following code snippet? */

const user = {
  name: "Rahul Kudiyal!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user.logMessage, 1000);

/* Correct Output
Nothing on console or undefined, While setTimeout() function uses the object.logMessage
as a callback, still, it invokes object.logMessage as a regular function, rather than
a method.

And during a regular function invocation this equals the global object which is window
in the case of the browser environment.

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
 */

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
Rahul
 */

/* Question */

/* Correct Output

 */
