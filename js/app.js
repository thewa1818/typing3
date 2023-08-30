const questions = ["java", "react", "html", "css"];

const entered = document.getElementById("entered");
const remained = document.getElementById("remained");
const inputText = document.getElementById("inputText");
const game = document.getElementById("game");
const message = document.getElementById("message");
const replayBtn = document.getElementById("replayBtn");

let remainedTextWords = remained.textContent.split("");
let enteredTextWords = [];
let currentKey;
let currentText;

const setQuestion = () => {
  currentKey = Math.floor(Math.random() * questions.length);
  currentText = questions[currentKey];

  questions.splice(currentKey, 1);

  entered.textContent = "";
  remained.textContent = currentText;
  inputText.value = "";

  enteredTextWords = [];
  remainedTextWords = currentText.split("");
};
setQuestion();

console.log(remainedTextWords);

document.addEventListener("input", (e) => {
  if (remainedTextWords[0] === e.data) {
    enteredTextWords.push(remainedTextWords[0]);
    remainedTextWords.shift();
    console.log("入力済み" + enteredTextWords);
    console.log("未入力" + remainedTextWords);

    entered.textContent = enteredTextWords.join("");
    remained.textContent = remainedTextWords.join("");

    if (remainedTextWords.length <= 0) {
      if (questions.length <= 0) {
        game.classList.add("hidden");
        message.classList.remove("hidden");
      } else {
        setQuestion();
      }
    }
  }
});

replayBtn.addEventListener("click", () => {
  window.location.reload();
});
