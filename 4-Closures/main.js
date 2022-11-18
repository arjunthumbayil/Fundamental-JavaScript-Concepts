//Closure in JavaScript

//Question 8 - Make a once function pollyfill (generalization on qn. 7).

function once(callback, context) {
  let ran;
  return function () {
    if (callback) {
      ran = callback.apply(context || this, arguments);
      callback = null;
    }
    return ran;
  };
}

const hello = once(() => console.log("hello"));
hello();
hello();
hello();
const hello2 = once((a, b) => console.log("hello", a, b));
hello2(1, 2);
hello2(1, 2);
hello2(1, 2);

/* Correct Output
hello     // is printed only once eventhough it is called thrice.
hello 1 2 // same, logs to the console only single time. 
*/

//Question 7 - Make this run only once.

// let view;
// function doSomething() {
//   view = "Something is done.";
//   console.log("Yes! " + view);
// }
// doSomething();
// doSomething();
// doSomething();
// doSomething();

// let view;
// function doSomething() {
//   let counter = 0;

//   return function () {
//     if (counter > 0) {
//       console.log("Already done.");
//     } else {
//       view = "Something is done.";
//       console.log("Yes! " + view);
//       counter++;
//     }
//   };
// }

// const task = doSomething();
// task();
// task();
// task();

/* Correct Output
Yes! Something is done.
Already done.
Already done

*/

//Question 6 - What is Module Pattern?

// var Module = (function () {
//   function privateMethod() {
//     //private method
//     console.log("private");
//   }

//   return {
//     publicMethod: function () {
//       //can call private method
//       console.log("public");
//     },
//   };
// })();

// Module.publicMethod();
// Module.privateMethod();

/* Correct Output
public
Uncaught TypeError: Module.privateMethod is not a function at main.js:20:8
*/

//Question 5 - How would you use closure to create a private counter?

// function counter() {
//   var counter = 0;
//   function add(increment) {
//     counter += increment;
//   }
//   function retrive() {
//     return "Counter = " + counter;
//   }
//   return { add, retrive };
// }
// const c = counter();
// c.add(5);
// c.add(10);
// c.add(15);
// console.log(c.retrive());
/* Correct Output
30 i.e. 5+10+15
*/

//Question 4 - Block Scope and SetTimeout.

//case 4 is same as case 3, but in the IIFE (Immediately invoked function expression)way
// for (var i = 0; i < 3; i++) {
//   (function (i) {
//     setTimeout(() => console.log(i), 1000);
//   })(i);
// }

//case 3
// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => console.log(i), 1000);
//   }
//   inner(i);
// }

//case 2
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

//case 1
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
/* Correct Output

*/

//Question 3 - Time Optimization with Closures.

// With closures - Check for the logged time output.
// function find() {
//   const arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i * i;
//   }
//   return function (index) {
//     console.log(arr[index]);
//   };
// }

// const closure = find();
// console.time("6");
// closure(6); //36
// console.timeEnd("6"); // 6: 0.175048828125 ms
// closure(12); //144
// console.timeEnd("12"); // 12: 0.100830078125 ms

// Without closures - Check for the logged time output.
// function find(index) {
//   const arr = [];
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i * i;
//   }
//   console.log(arr[index]);
// }

// console.time("6");
// find(6); //36
// console.timeEnd("6"); //6: 31.614990234375 ms
// console.time("12");
// find(12); //144
// console.timeEnd("12"); //12: 25.547119140625 ms

/* Correct Output
These time stamp values could change in every run.
 */

// //Question 2 - Write a function that would allow you to do this.

// function createBase(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// var addsix = createBase(6);
// console.log(addsix(10)); // returns 16
// console.log(addsix(21)); // returns 27

// /* Correct Output
// 16
// 27
//  */

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

//refer this one too
//https://www.youtube.com/watch?v=RCgJQq_pDfg
