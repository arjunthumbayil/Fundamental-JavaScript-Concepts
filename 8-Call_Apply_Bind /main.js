/* Call Apply & Bind

 */

/* Question 2 - What is Apply? */

function sayHello(day, status) {
  return (
    "Hello " +
    this.name +
    "," +
    " today is " +
    day +
    " and do feel " +
    status +
    "!"
  );
}

var obj = { name: "John" };

console.log(sayHello.apply(obj, ["tuesday", "good"]));

/* Correct Output
Hello John, today is tuesday and do feel good!
 */

/* Question 1 - What is Call?*/

// var obj = { name: "John" };
// function sayHello(age) {
//   return "Hello " + this.name + " " + age + "!";
// }

// console.log(sayHello.call(obj, 28));

/* Correct Output
Hello John 28!
 */

/* Question */

/* Correct Output

 */
