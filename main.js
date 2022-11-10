function importantAction1(message, callback) {
  setTimeout(() => {
    callback(`Step 1 - ${message}`);
  }, 200);
}

function importantAction2(msg, cb) {
  setTimeout(() => {
    cb(`Step 2 - ${msg}`);
  }, 600);
}

function importantAction3(msg, cb) {
  setTimeout(() => {
    cb(`Step 3 - ${msg}`);
  }, 1000);
}

const msg = importantAction1("I would say that,", function (message) {
  console.log(message);
  importantAction2("this example is awesome!", (msg) => console.log(msg));
  importantAction3(
    "I think I am understanding call back hell and pyramid of doom!",
    (msg) => console.log(msg)
  );
});

// Well, comes to rescue promises!
