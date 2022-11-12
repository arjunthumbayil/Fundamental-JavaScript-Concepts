//Promises in JavaScript

//Question 1 - What is the output?

console.log("start");

const promise1 = new Promise((resolve, reject) => {
  console.log(1);
  resolve(2);
});

promise1.then((res) => {
  console.log(res);
});

console.log("end");

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
