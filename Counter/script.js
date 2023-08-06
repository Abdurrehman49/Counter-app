const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

let count = 0;

incrementButton.addEventListener('click', () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  count--;
  updateCounter();
});

function updateCounter() {
  countElement.textContent = count;
}
