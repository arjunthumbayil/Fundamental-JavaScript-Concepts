console.log("start");

const proms = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = true;
    if (result) {
      resolve("This is coming from proms.");
    } else reject(new Error("The request didn't go through!"));
  }, 2000);
});

proms
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

console.log("stop");
