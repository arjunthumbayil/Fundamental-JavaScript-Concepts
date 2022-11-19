//Currying in JavaScript
/* Currying is a function that takes one argument and returns a new function expecting
the next argument. It is a conversion of functions from callable as f(a,b) -> f(a)(b).
And curried functions are constructed by chaining closures by immediately returning their
inner functions simultaneously.
*/

//Question 1 - sum(2)(6)(1)?

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(2)(6)(1));

/* Correct Output

*/

//Question

/* Correct Output

 */
