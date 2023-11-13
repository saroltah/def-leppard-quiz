// variables

const question = document.getElementById("question");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");
const nextQuestion = document.getElementById("next-question");
const currentPoints = document.getElementById("current-points");
const optionButtons = document.getElementsByClassName("option-buttons");
const mainContent = document.getElementById("main-content");
let i = -1;

const allQuestions = [
  {
    question: "What year was Def Leppard formed?",
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
    question: "Which is their debut album?",
    first: "Pyromania",
    second: "On Through the Night",
    third: "High'n' Dry",
    right: "On Through the Night",
  },
  {
    question: "What instrument is Phil Collen playing?",
    first: "Keyboard",
    second: "Bass",
    third: "Guitar",
    right: "Guitar",
  },
  {
    question: "What happened in Rick Allan's accident?",
    first: "He lost his finger",
    second: "He lost his arm",
    third: "He lost his leg",
    right: "He lost his arm",
  },
  {
    question: "On which album did the song 'Tonight' debut?",
    first: "Adrenalize",
    second: "Hysteria",
    third: "Retro active",
    right: "Adrenalize",
  },
  {
    question: "Which member died in 1991?",
    first: "Steve Clark",
    second: "Vivian Campbell",
    third: "Pete Willis",
    right: "Steve Clark",
  },
  {
    question: "Continue the lyrics: Out of touch, out of reach, yeah... ",
    first: "You can't hide, it's just a one-way street",
    second: "Better start believin’",
    third: "You could try to get closer to me",
    right: "You could try to get closer to me",
  },
  {
    question:
      "Which of the album covers has a graphic of a black-and-white eye?",
    first: "Euphoria",
    second: "Diamond Star Halos",
    third: "Yeah!",
    right: "Diamond Star Halos",
  },
  {
    question: "Who did they tour with in 2023?",
    first: "Skid Row",
    second: "Mötley Crüe",
    third: "Whitesnake",
    right: "Mötley Crüe",
  },
  {
    question: "Which pop star has sung duets with Def Leppard?",
    first: "Taylor Swift",
    second: "Lady Gaga",
    third: "Camila Cabello",
    right: "Taylor Swift",
  },
  {
    question:
      "How many Spotify listeners do they have on average / per month in 2023?",
    first: "5.900.000",
    second: "6.700.000",
    third: "7.200.000",
    right: "7.200.000",
  },
  {
    question: "How many video clips do they published?",
    first: "46",
    second: "54",
    third: "60",
    right: "46",
  },
  {
    question: "Who's song was originally the Def Leppard cover, Rock on? ",
    first: "David Essex",
    second: "Donny Osmond",
    third: "David Cassidy",
    right: "David Essex",
  },
  {
    question: "Which book does not exist?",
    first: "Def Leppard: Animal Instinct",
    second: "Let's Get Rocked with Def Leppard",
    third: "Adrenalized: Life, Def Leppard, and Beyond",
    right: "Let's Get Rocked with Def Leppard",
  },
  {
    question: "last",
    first: "last",
    second: "last",
    third: "last",
    right: "last",
  },
];

// change the question's inner HTML and change the option's inner HTML

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

// add one point score if right button is clicked

function addPoint() {
  for (let optionButton of optionButtons) {
    let oldPoints = parseInt(currentPoints.innerText);

    if (optionButton.classList.contains("right-background")) {
      currentPoints.innerHTML = oldPoints + 1;
    }
  }
}

// if right button clicked, turn green, if wrong turn red.

for (let optionButton of optionButtons) {
  optionButton.addEventListener("click", function () {
    let textValue = optionButton.textContent;
    if (nextQuestion.style.backgroundColor !== "var(--yellow-color)") {
      if (textValue === allQuestions[i].right) {
        optionButton.classList.add("right-background");
        nextQuestion.style.backgroundColor = "var(--yellow-color)";
        addPoint();
      } else {
        optionButton.classList.add("wrong-background");
        nextQuestion.style.backgroundColor = "var(--yellow-color)";
      }
    }
  });
}

// next question button loads the next question

function showNext() {
  nextQuestion.innerHTML = "Next";
  i += 1;
  changeQuestion();
  deleteBackgroundcolor();
  showResult();
}

// change next button innerhtml before the last question
// show the result after last question

function showResult() {
  let secondLastQuestion = allQuestions[allQuestions.length - 2];
  let lastQuestion = allQuestions[allQuestions.length - 1];

  if (secondLastQuestion.question === question.innerHTML) {
    nextQuestion.innerHTML = "Show result";
  }

  if (lastQuestion.question === question.innerHTML) {
    if (parseInt(currentPoints.textContent) < 7) {
      mainContent.innerHTML = `<div class="result">
        <h3>Congratulations!</h3>
        <p>
          You have reached <span>${currentPoints.textContent}</span> point(s). You might not
          be the biggest fan of this band, but it is never too late to become
          one. Check out the 
          <a
            href="https://www.youtube.com/watch?v=FEHaEuiN3CA&ab_channel=PederRoos"
            target="_blank"
            aria-label="click to open a Youtube link to watch the Def Leppard:Hysteria movie, it opens in new tab"
            >Def Leppard movie</a
          > 
          and catch up!
        </p>

        <button id="start-again" onclick="refreshPage()">Start again</button>
      </div>`;
    } else if (parseInt(currentPoints.textContent) < 11) {
      mainContent.innerHTML = `<div class="result">
        <h3>Congratulations!</h3>
        <p>
          You have reached <span>${currentPoints.textContent}</span> points. I believe you
          love Def Leppard, but you might have missed out on some events in the
          band’s life. Watch the 
          <a
            href="https://www.youtube.com/watch?v=FEHaEuiN3CA&ab_channel=PederRoos"
            target="_blank"
            aria-label="click to open a Youtube link to watch the Def Leppard:Hysteria movie, it opens in new tab"
            >Def Leppard movie</a
          >
           and catch up!
        </p>

        <button id="start-again" onclick="refreshPage()">Start again</button>
      </div>`;
    } else if (parseInt(currentPoints.textContent) >= 11) {
      mainContent.innerHTML = `<div class="result">
        <h3>Congratulations!</h3>
        <p>
          You have reached <span>${currentPoints.textContent}</span> points. That shows you
          are a true and loyal metalhead. Keep going on listening to good music!
          Rock on mate! Enjoy the
          <a
            href="https://www.youtube.com/watch?v=FEHaEuiN3CA&ab_channel=PederRoos"
            target="_blank
            aria-label="click to open a Youtube link to watch the Def Leppard:Hysteria movie, it opens in new tab"
            >Def Leppard movie</a
          >
         as your reward!
        </p>

        <button id="start-again" onclick="refreshPage()">Start again</button>
      </div>`;
    }
  }
}

// start again button refreshes the page

function refreshPage() {
  document.location.reload();
}
