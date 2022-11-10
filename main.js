const proms1 = Promise.resolve("Coming from promise-resolve");

console.log(proms1);

proms1.then((res) => console.log(res));

const proms2 = Promise.reject("Err - Coming from promise-reject");

console.log(proms2);

proms2.then((res) => console.log(res)).catch((err) => console.error(err));
