//Closure in JavaScript

//Question 1 - What will be logged to console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; //Shadowing
    console.log(count);
  } // block scope of let ends here.
  console.log(count);
})();

/* Correct Output
1
0
 */

//// setTimeout(
//   () => (document.getElementById("text").innerHTML = "This is new testing..."),
//   3000
// );
