/* Call Bind & Apply

 */

/* Question 1 - What is Call?*/

var obj = { name: "John" };
function sayHello(age) {
  return "Hello " + this.name + " " + age + "!";
}

console.log(sayHello.call(obj, 28));

/* Correct Output
Hello John 28!
 */

/* Question */

/* Correct Output

 */
