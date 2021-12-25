var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

var incrementa = document.getElementById("increment");
var decrementa = document.getElementById("decrement");

incrementa.addEventListener("click", function increment() {
  if (currentNumber <= 10) {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  if (currentNumber >= 0) {
    currentNumberWrapper.classList.remove("negative");
  }
});
decrementa.addEventListener("click", function decrement() {
  if (currentNumber >= -10) {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  }
  if (currentNumber < 0) {
    currentNumberWrapper.classList.add("negative");
  }
});
