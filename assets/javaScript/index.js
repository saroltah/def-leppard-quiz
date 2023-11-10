//variables
const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");
const currentPoints = document.getElementById("current-points");
const result = document.getElementById("result");
const startAgain = document.getElementById("start-again");
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
];

//change the question's inner HTML and change the option's inner HTML
function changeQuestion() {
  question.innerHTML = allQuestions[i].question;
  option1.innerHTML = allQuestions[i].first;
  option2.innerHTML = allQuestions[i].second;
  option3.innerHTML = allQuestions[i].third;
}

//if right button clicked, turn green, if wrong turn red.

//add one point score if right button is clicked

//next question button loads the next question
function showNext() {
  i = i + 1;
  changeQuestion();
}
//show the result after last question

// start again button refreshes the page
