// Objects in JavaScript
/* An Object is a collection of properties, and a property is an association between
a name(or key) and a value. A property's value can be a function, in which case the 
property is known as a method.
*/

/* Question 2 - Create a function multiplyByTwo(obj) that multiples all numeric
property values of nums by 2.*/

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

function multiplyByTwo(nums) {
  for (key in nums) {
    if (typeof nums[key] === "number") {
      nums[key] *= 2;
    }
  }

  return nums;
}

console.log(multiplyByTwo(nums));

/* Correct Output

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

//// const Obj = { name: "abc", marks: 99, address: "bcd_street" };
// console.log(JSON.stringify(Obj));
// console.log(JSON.stringify(Obj, ["marks"]));
// console.log(JSON.parse(JSON.stringify(Obj, ["marks"])));
// console.log(Obj);
// const a = {};
// const b = {key:'b'};
// const c = {key :'c'};

// a[b] = 123;
// console.log(a[b]); //123

// a[c] = 456;
// console.log(a[c]); //456

// console.log(a) // { '[object Object]': 456 }

// console.log(a[b]) //456
// console.log(a[c]) //456

/* Question */

/* Correct Output

 */
