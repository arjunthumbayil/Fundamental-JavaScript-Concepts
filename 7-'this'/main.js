// 'this' keyword in JavaScript (Implicit binding)

/* Question 1 - What is the output? */

const user = {
  firstName: "Rahul",
  getName() {
    const firstName = "Samba!";
    return this.firstName;
  },
};
console.log(user.getName()); //

/* Correct Output
Rahul
 */

/* Question */

/* Correct Output

 */
