//Closure in JavaScript

//Question 2 - Write a function that would allow you to do this.

function createBase(x) {
  return function (y) {
    return x + y;
  };
}

var addsix = createBase(6);
console.log(addsix(10)); // returns 16
console.log(addsix(21)); // returns 27

/* Correct Output
16
27
 */

// //Question 1 - What will be logged to console?

// let count = 0;
// (function printCount() {
//   if (count === 0) {
//     let count = 1; //Shadowing
//     console.log(count);
//   } // block scope of let ends here.
//   console.log(count);
// })();

// /* Correct Output
// 1
// 0
//  */

//// setTimeout(
//   () => (document.getElementById("text").innerHTML = "This is new testing..."),
//   3000
// );
