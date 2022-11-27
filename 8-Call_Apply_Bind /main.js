/* Call Apply & Bind

 */

/* Question */

/* Correct Output

 */

/* Question 4 - What is the output? */

// const person = { name: "John" };

// function sayHi(age) {
//   return `${this.name} is ${age} years`;
// }

// console.log(sayHi.call(person, 24)); //?
// console.log(sayHi.bind(person, 24)); //?

/* Correct Output
John is 24 years
ƒ sayHi(age) {
  return `${this.name} is ${age} years`;
}*/

/* Question 3 - What is Apply? */

// function sayHello(age, profession) {
//   return "Hello " + this.name + " is " + age + " and is " + profession;
// }

// var obj = { name: "John" };

// const helloFn = sayHello.bind(obj); //We can reuse hellFn function in Bind

// console.log(helloFn(25, "a Software Engineer."));
// console.log(helloFn(29, "a Technical Lead."));

/* Correct Output
Hello John is 25 and is a Software Engineer.
Hello John is 29 and is a Technical Lead.
 */

/* Question 2 - What is Apply? */

// function sayHello(day, status) {
//   return (
//     "Hello " +
//     this.name +
//     "," +
//     " today is " +
//     day +
//     " and do feel " +
//     status +
//     "!"
//   );
// }

// var obj = { name: "John" };

// console.log(sayHello.apply(obj, ["tuesday", "good"]));

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
