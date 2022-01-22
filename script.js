let cardNumbers = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9];

const colorMap = { 1: "#7FDBFF", 2: "#39CCCC", 3: "#B10DC9", 4: "#85144b", 5: "#FF4136", 6: "#FF851B", 7: "#3D9970", 8: "#FFDC00", 9: "#2ECC40" };

let circleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]

let currentCircleNumberIndex = 0;

let cards = [];

for (let index = 0; index < 49; index++) {
  cards[index] = document.getElementById(`card${index}`);
}

const circle = document.getElementById("number-circle");

const shuffleButton = document.getElementById("shuffle-button");

const nextNumberButton = document.getElementById("next-number-Button");

function shuffleCards() {
  cardNumbers.sort((a, b) => 0.5 - Math.random())
  for (let index = 0; index < cards.length; index++) {
    cards[index].innerHTML = cardNumbers[index];
    cards[index].style.backgroundColor = colorMap[cardNumbers[index]];
  }
}

function shuffleCircleNumbers() {
  circleNumbers.sort((a, b) => 0.5 - Math.random());
}

function nextCircleNumber() {
  if (currentCircleNumberIndex == circleNumbers.length) {
    shuffleCircleNumbers();
    currentCircleNumberIndex = 0;
  }

  circle.innerHTML = circleNumbers[currentCircleNumberIndex];

  currentCircleNumberIndex++;
}

shuffleCards();
shuffleCircleNumbers();
nextCircleNumber();

shuffleButton.addEventListener("click", shuffleCards);
nextNumberButton.addEventListener("click", nextCircleNumber);
