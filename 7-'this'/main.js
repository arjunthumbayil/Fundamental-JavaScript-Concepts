// 'this' keyword in JavaScript (Implicit binding)

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
