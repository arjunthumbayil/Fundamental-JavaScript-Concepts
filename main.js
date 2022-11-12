function importantAction1(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Step 1 - ${message}`);
    }, 200);
  });
}

function importantAction2(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(`Step 2 - ${msg}`);
    }, 600);
  });
}

function importantAction3(msg) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Step 3 - ${msg}`);
    }, 1000);
  });
}

// Below is Promise combinators - promise.all - even if one of the promise fails,
// the whole thing fails.

Promise.all([
  importantAction1("I would say that,"),
  importantAction2("this example is awesome!"),
  importantAction3("Trying to appreciate promises!"),
  importantAction3("Now I understand promise chaining, phew!!"),
])
  .then((result) => console.log(result))
  .catch((error) => console.error("Error: Promise failed", error));

// Below is the promise chaining

// importantAction1("I would say that,")
//   .then((res) => {
//     console.log(res);
//     return importantAction2("this example is awesome!");
//   })
//   .then((res) => {
//     console.log(res);
//     return importantAction3("Trying to appreciate promises!");
//   })
//   .then((res) => {
//     console.log(res);
//     return importantAction3("Now I understand promise chaining, pheww!!");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.error(err));

// Below is the promise approach

// importantAction1("I would say that,")
//   .then((res) => {
//     console.log(res);
//     importantAction2("this example is awesome!").then((res) => {
//       console.log(res);
//     });
//     importantAction3("Trying to appreciate promises!").then((res) => {
//       console.log(res);
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//

// Below is the call back hell

// const msg = importantAction1("I would say that,", function (message) {
//   console.log(message);
//   importantAction2("this example is awesome!", (msg) => console.log(msg));
//   importantAction3(
//     "I think I am understanding call back hell and pyramid of doom!",
//     (msg) => console.log(msg)
//   );
// });

// Well, comes to rescue promises!
