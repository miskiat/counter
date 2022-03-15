const countEl = document.getElementById("count");
const lowerCountEl = document.getElementById("lowerCount");
const addCountEl = document.getElementById("addCount");
let count = 7;
console.log(lowerCountEl);
countEl.textContent = count;

lowerCountEl.addEventListener("click", () => {
  count = count - 1;
  countEl.textContent = count;
});

addCountEl.addEventListener("click", () => {
  count = count + 1;
  countEl.textContent = count;
});
