// Objects in JavaScript
/* An Object is a collection of properties, and a property is an association between
a name(or key) and a value. A property's value can be a function, in which case the 
property is known as a method.
*/

/* Question 4 - What's JSON.stringify and JSON.parse ? */

const obj = { name: "abc", marks: 99, address: "bcd_street" };
const strObj = JSON.stringify(obj);
console.log(strObj); // {"name":"abc","marks":99,"address":"bcd_street"}

console.log(strObj.name); // is undefined as strObj is a string now

const objObj = JSON.parse(strObj);
console.log(objObj); // {"name":"abc","marks":99,"address":"bcd_street"}

localStorage.setItem("test", strObj);
console.log(JSON.parse(localStorage.getItem("test"))); /* {
    "name": "abc",
    "marks": 99,
    "address": "bcd_street"
}
*/

console.log(JSON.stringify(obj, ["marks"]));
// console.log(JSON.parse(JSON.stringify(Obj, ["marks"])));
// console.log(Obj);

/* Correct Output

 */

/* Question 3 - What is the output of the following code? */

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123; //  is basically a["[object Object]"]
// a[c] = 456; // so is a["[object Object]"], this the second value of 456(latest) is taken

// console.log(a); // { '[object Object]': 456 }

// console.log(a[b]); //456
/* Correct Output

{"[object Object]": 456} //when JS tries to convert the key (which is an object)

456

 */

/* Question 2 - Create a function multiplyByTwo(obj) that multiples all numeric
property values of nums by 2.*/

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyByTwo(nums) {
//   for (key in nums) {
//     if (typeof nums[key] === "number") {
//       nums[key] *= 2;
//     }
//   }

//   return nums;
// }

// multiplyByTwo(nums);
// console.log(nums);

/* Correct Output

Object 
  a: 200
  b: 400
  title: "My nums"
  [[Prototype]]: Object


 */

/* Question 1 - What's the output? */

// const obj = {
//   a: "one",
//   b: "two",
//   a: "three",
// };
// console.log(obj);

/* Correct Output
{ a: "three",b: "two"}
 */

/* Question */

/* Correct Output

 */
