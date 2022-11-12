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
      resolve(`Step 2 - ${msg}`);
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

// Async Await - Best approach for executing promises one after the other.

//With try catch block

const result = async () => {
  try {
    const message1 = await importantAction1("I, ");
    console.log(message1);
    const message2 = await importantAction2("Understand, ");
    console.log(message2);
    const message3 = await importantAction3("Promises.");
    console.log(message3);

    console.log(message1, message2, message3);
  } catch (error) {
    console.error("Promise failed", error);
  }
};

result();

//Without try catch block
// const result = async () => {
//   const message1 = await importantAction1("I, ");
//   const message2 = await importantAction2("Understand, ");
//   const message3 = await importantAction3("Promises.");

//   console.log(message1, message2, message3);
// };

// result();
