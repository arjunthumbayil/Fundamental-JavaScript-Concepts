//Promises in JavaScript

//Question 6 - What is the output?

function job(state) {
  return new Promise(function (resolve, reject) {
    if (state) {
      resolve("success");
    } else {
      reject("error");
    }
  });
}

let promise = job(true); //resolve("success")

promise
  .then(function (data) {
    console.log(data); // success
    return job(true);
  })
  .then(function (data) {
    if (data !== "victory") {
      throw "Defeat"; //as this is an error it will go to the next immediate catch block
    }
    return job(true); // this is ignored
  })
  .then(function (data) {
    console.log(data); // this .then block is also ignored because of the throw "defeat"
  })
  .catch(function (error) {
    console.log(error); // Defeat
    return job(false); //reject("error")
  })
  .then(function (data) {
    //block ignored bcos of above reject
    return job(true);
    console.log(data);
  })
  .catch(function (error) {
    console.log(error); // error
    return "Error caught"; /*This is a resolved promise so goes to next .then block */
  })
  .then(function (data) {
    console.log(data); //Error caught
    return new Error("test"); // this is not a reject, it just resoves to an error so the next .then block
  })
  .then(function (data) {
    // block ignored
    console.log("Success: ", data.message); //Success: test
  })
  .catch(function (data) {
    console.log("Error: ", data.message);
  });

/* Correct Output
success
Defeat
error
Error caught
Success: test

 */

//Question 5 - What is the output?

// function job(state) {
//   return new Promise(function (resolve, reject) {
//     if (state) {
//       resolve("success");
//     } else {
//       reject("error");
//     }
//   });
// }

// let promise = job(true);

// promise
//   .then(function (data) {
//     console.log(data);
//     return job(false);
//   })
//   .catch(function (error) {
//     console.log(error);
//     return "error caught"; /* this catch will behave like a resolved promise as it is returning a string */
//   })
//   .then(function (data) {
//     console.log(data);
//     return job(true);
//   })
//   .catch(function (error) {
//     console.log(
//       error
//     ); /* As the job(true) returned from .then above resolves to success, it wont enter this catch block. */
//   });

/* Correct Output
success
error
error caught

 */

//Question 4 - What is the output?

// function job() {
//   return new Promise(function (resolve, reject) {
//     reject();
//   });
// }

// let promise = job();

// promise
//   .then(function () {
//     console.log("success 1");
//   })
//   .then(function () {
//     console.log("success 2");
//   })
//   .then(function () {
//     console.log("success 3");
//   })
//   .catch(function () {
//     console.log("error 1");
//   })
//   .then(function () {
//     console.log("success 4");
//   });

/* Correct Output
error 1
success 4

Got right till 'error 1' part
 */

//Question 3 - What is the output?

// console.log("start");

// const fn = () => {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     resolve("success");
//   });
// };

// console.log("middle");

// fn().then((res) => {
//   console.log(res);
// });

// console.log("end");

/* Correct Output
start
middle
1
end
success

Got it right, duh!
 */

//Question 2 - What is the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
//   console.log(3);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

/* Correct Output
start
1
3
end
2

Got it right, duh!
 */

//Question 1 - What is the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve(2);
// });

// promise1.then((res) => {
//   console.log(res);
// });

// console.log("end");

/* Correct Output
start
1
end
2

My first answer was: 'start end 1 2'
But JavaScript runs all the synchronus tasks first and then the async.
So when a promise is encountered, on skimming through the promise,
when any synchronus tasks are encountered, it's performed first &
then the async tasks.
 */
