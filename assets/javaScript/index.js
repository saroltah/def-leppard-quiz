//variables
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");
const currentPoints = document.getElementById("current-points");
const result = document.getElementById("result");
const startAgain = document.getElementById("start-again");
const optionButtons = document.getElementsByClassName("option-buttons");
const mainContent = document.getElementById("main-content");
let i = -1;

let allQuestions = [
  {
    question: "Which year was Def Leppard formed?",
    first: "1976",
    second: "1978",
    third: "1992",
    right: "1976",
  },
  {
    question: "Which is the band's home country?",
    first: "USA",
    second: "UK",
    third: "Sweden",
    right: "UK",
  },
  {
    question: "last",
    first: "last",
    second: "last",
    third: "last",
    right: "last",
  },
];
//change the question's inner HTML and change the option's inner HTML
function changeQuestion() {
  question.innerHTML = allQuestions[i].question;
  option1.innerHTML = allQuestions[i].first;
  option2.innerHTML = allQuestions[i].second;
  option3.innerHTML = allQuestions[i].third;
}
// add function to delete background

function deleteBackgroundcolor() {
  for (let optionButton of optionButtons) {
    optionButton.classList.remove("right-background");
    optionButton.classList.remove("wrong-background");
    nextQuestion.style.backgroundColor = "transparent";
  }
}
//if right button clicked, turn green, if wrong turn red.

for (let optionButton of optionButtons) {
  optionButton.addEventListener("click", function ifCorrect() {
    let textValue = optionButton.textContent;
    if (nextQuestion.style.backgroundColor !== "blue") {
      if (textValue === allQuestions[i].right) {
        optionButton.classList.add("right-background");
        nextQuestion.style.backgroundColor = "blue";
        addPoint();
      } else {
        optionButton.classList.add("wrong-background");
        nextQuestion.style.backgroundColor = "blue";
      }
    }
  });
}
//add one point score if right button is clicked
function addPoint() {
  for (let optionButton of optionButtons) {
    let oldPoints = parseInt(currentPoints.innerText);

    if (optionButton.classList.contains("right-background")) {
      currentPoints.innerHTML = oldPoints + 1;
    }
  }
}

//next question button loads the next question
function showNext() {
  nextQuestion.innerHTML = "Next";
  i = i + 1;
  changeQuestion();
  deleteBackgroundcolor();
  showResult();
}

// change next button innerhtml before the last question
//show the result after last question
function showResult() {
  let secondLastQuestion = allQuestions[allQuestions.length - 2];
  let lastQuestion = allQuestions[allQuestions.length - 1];

  if (secondLastQuestion.question === question.innerHTML) {
    nextQuestion.innerHTML = "Show result";
  }

  if (lastQuestion.question === question.innerHTML) {
    mainContent.innerHTML = `<p> Your score is ${currentPoints.textContent}, good job, mate! </p>
    <p id="result">
          <button id="start-again" onclick="refreshPage()">Start again</button>
        </p>
    `;
  }
}

// start again button refreshes the page
function refreshPage() {
  location.reload();
}
