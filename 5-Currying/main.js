//Currying in JavaScript
/* Currying is a function that takes one argument and returns a new function expecting
the next argument. It is a conversion of functions from callable as f(a,b) -> f(a)(b).
And curried functions are constructed by chaining closures by immediately returning their
inner functions simultaneously.
*/

/*Question 2 -
   evaluate("add")(4)(2) => 6
   evaluate("multiply")(4)(2) => 8
   evaluate("divide")(4)(2) => 2
   evaluate("substract")(4)(2) => 2
   */

function evaluate(operation) {
  return function (x) {
    return function (y) {
      if (operation === "add") return x + y;
      else if (operation === "multiply") return x * y;
      else if (operation === "divide") return x / y;
      else if (operation === "substract") return x - y;
      else return "Invalid! Please provide a valid operation(+,-,/,*).";
    };
  };
}

console.log(evaluate("add")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));
console.log(evaluate("integrate")(4)(2));

/* Correct Output

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
