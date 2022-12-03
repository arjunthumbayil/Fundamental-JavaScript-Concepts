// document.getElementById("button").addEventListener("click", function () {
//   document.getElementById("text").innerText = "Yes, it is!";
// });

document.getElementById("button").addEventListener("click", function () {
  document.getElementById("text").innerText = output;
});

const url = "https://test.whizco.co/banner/";

async function getData(url) {
  const response = await fetch(url);
  const data = await response.json();

  return JSON.stringify(data);
}
console.log(getData(url));
const output = getData(url);

// const displayData = getElementbyId("data");
// displayData.innerHTML(getData());

// const newHtml = JSON.stringify(getData());

// document.getElementById("data").innerHTML = newHtml;
