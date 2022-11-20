//Currying in JavaScript
/* Currying is a function that takes one argument and returns a new function expecting
the next argument. It is a conversion of functions from callable as f(a,b) -> f(a)(b).
And curried functions are constructed by chaining closures by immediately returning their
inner functions simultaneously.

*/

//Question 5 - Manipulating DOM

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("change");
updateHeader("Currying is lit!");
updateHeader("Currying is confusing for the newb!");
updateHeader("Currying");

//Question 4 - Currying vs Partial Application

// function sum(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }
// const x = sum(10);
// console.log(x(5, 6));
// //or
// console.log(sum(20)(1, 4));

//This is called partial application

//Question 3 - Infinite Currying -> add(1)(2)(3)....(n)

// function add(x) {
//   return function (y) {
//     if (y) return add(x + y);
//     return x;
//   };
// }

// console.log(add(5)(2)(4)(8)());

/* Correct Output
19
 */

/*Question 2 -
   evaluate("add")(4)(2) => 6
   evaluate("multiply")(4)(2) => 8
   evaluate("divide")(4)(2) => 2
   evaluate("substract")(4)(2) => 2
   */

// function evaluate(operation) {
//   return function (x) {
//     return function (y) {
//       if (operation === "add") return x + y;
//       else if (operation === "multiply") return x * y;
//       else if (operation === "divide") return x / y;
//       else if (operation === "substract") return x - y;
//       else return "Invalid! Please provide a valid operation(+,-,/,*).";
//     };
//   };
// }

// console.log(evaluate("add")(4)(2));
// console.log(evaluate("multiply")(4)(2));
// console.log(evaluate("divide")(4)(2));
// console.log(evaluate("substract")(4)(2));
// console.log(evaluate("integrate")(4)(2));

//Use case of Currying

// const product = evaluate("multiply");
// console.log(product(2)(3));
// console.log(product(233)(322));

/* Correct Output
6
8
2
2

6
75026
Invalid! Please provide a valid operation(+,-,/,*).

 */

//Question 1 - sum(2)(6)(1)?

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

/* Correct Output

*/

//Question

/* Correct Output

 */
