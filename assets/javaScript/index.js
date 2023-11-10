//variables
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");
const currentPoints = document.getElementById("current-points");
const result = document.getElementById("result");
const startAgain = getElementById("start-again");

let allQuestions = [
  "Which year was Def Leppard formed?",
  "Which is the band's home-country?",
];
let allAnswers = [
  {
    option1: "1976",
    option2: "1978",
    option3: "1992",
    right: "[0]",
  },
  {
    option1: "USA",
    option2: "UK",
    option3: "Sweden",
    right: "[1]",
  },
];

//change the question's inner HTML
function changeQuestion() {
  for (i = 0; i < allQuestions.length; i++) {
    question.innerHTML = "allQuestions[i]";
  }
}
//change the option's inner HTML
function changeAnswer() {
  for (i = 0; i < allAnswers.length; i++) {
    option1.innerHTML = "allQuestions[0][i]";
    option2.innerHTML = "allQuestions[0][i]";
    option3.innerHTML = "allQuestions[0][i]";
  }
}
//if right button clicked, turn green, if wrong turn red.

//add one point score if right button is clicked

//next question button loads the next question

//show the result after last question

// start again button refreshes the page
