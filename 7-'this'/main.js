// 'this' keyword in JavaScript (Implicit binding)

/* Question 2 - What is the result of accessing its ref? Why? */

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name);

console.log(user); //{name:"John", ref:Window}

/* Correct Output

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
