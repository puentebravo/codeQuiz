var timerEl = document.querySelector("#timeRemaining");
var questionEl = document.querySelector("#qBlock");
var choiceEl = document.querySelector("#chBlock");
var statusEl = document.querySelector("#answerStat");
var fameList = document.querySelector("#fameList");
var startBtn = document.querySelector("#startBtn");

// Array of objects to load quiz questions from

var question1 = {
  question: "What kind of code makes up the backbone of a website?",
  choices: ["The Matrix", "CSS", "HTML", "Javascript"],
  answer: "HTML",
};

console.log(question1);

var question2 = {
  question: "In CSS, how do you refer to a specific ID?",
  choices: ["#", "by its html element", ".", "{}"],
  answer: "#",
};

console.log(question2);

var question3 = {
  question: "In Javascript, a For Loop is used to:",
  choices: [
    "loop a function until a condition is met",
    "Play music until it ends",
    "call a function within your code",
    "execute a function a certain number of times",
  ],
  answer: "execute a function a certain number of times",
};

var question4 = {
  question: "An array must be enclosed in which characters?",
  choices: [" '  '", "< >", "( )", "[ ]"],
  answer: "[ ]",
};

var question5 = {
  question:
    "Last one. What language uses $ and a CDN to replace a significant amount of Javascript syntax?",
  choices: ["JSON", "Node.js", "JQuery", "SQL"],
  answer: "JQuery",
};

var bonus = {
  question:
    "Here's a bonus, but it's not code related! WHAT... is the air speed velocity of an unladen swallow?",
  choices: [
    "Well I don't know that",
    "African or european? This matters!",
    "Roundabouts 24 miles per hour, if it's European.",
    "(Random being flung into the pit noises)",
  ],
  answer: "Roundabouts 24 miles per hour, if it's European.",
};

var qArray = [question1, question2, question3, question4, question5, bonus];
console.log(qArray);

var time = "";
var score = 0;
var interval;
var i = 0;

function audioRight() {
  var yes = new Audio("assets/sounds/correct.wav");
  yes.play();
}

function audioWrong() {
  var no = new Audio("assets/sounds/wrong.wav");
  no.play();
}

function timeDisplay() {
  timerEl.textContent = "Time Remaining: " + time + " seconds.";
  if (time <= 0) {
    clearInterval(interval);
    console.log("time's up");
    alert("Time's up! Better luck next time.");
    location.reload();
  }
}

function gameTimer() {
  time = 30;
  interval = setInterval(function () {
    time--;
    timeDisplay();
  }, 1000);
}

//Starts the game, displaying questions and iterating through the object array
function startGame(event) {
  event.stopPropagation();
  gameTimer();
  i = -1;
  startBtn.style.display = "none";
  questionEl.textContent = "";
  choiceEl.textContent = "";
  nextQuestion();
}

function nextQuestion() {
  questionEl.textContent = "";
  choiceEl.textContent = "";
  i++;
  questionEl.textContent = qArray[i].question;
  for (j = 0; j < qArray[i].choices.length; j++) {
    var cLi = document.createElement("li");
    cLi.setAttribute("data-index", i);
    cLi.setAttribute("class", "btn btn-dark choiceBtn");
    choiceEl.appendChild(cLi);
    cLi.textContent = qArray[i].choices[j];
  }
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".choiceBtn")) {
    if (event.target.textContent === qArray[i].answer) {
      statusEl.textContent = "Correct!";
      score++;
      audioRight();
      console.log("WOOT! WORKING");
      console.log(score);
      nextQuestion();
    } else {
      statusEl.textContent = "Wrong!";
      time -= 10;
      console.log("WORKING");
      audioWrong();
      nextQuestion();
    }
  }
});

startBtn.addEventListener("click", startGame);
