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

var question2 = {
  question: "In CSS, how do you refer to a specific ID?",
  choices: ["#", "by its html element", ".", "{}"],
  answer: "#",
};

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
var hScores = [];

var time = "";
var score = 0;
var interval;
var cQuestion = 0;
var lastQuestionIndex = qArray.length - 1;

function gameOver() {
  clearInterval(interval);
  statusEl.style;
  questionEl.textContent = "";
  choiceEl.textContent = "";
  statusEl.textContent = "";
  var hofForm = document.createElement("div");
  var hofInput = document.createElement("input");
  var submitBtn = document.createElement("button");
  hofForm.setAttribute("class", "form-group");
  hofInput.setAttribute("class", "form-control hofEntry");
  submitBtn.setAttribute("class", "btn btn-dark formBtn");
  questionEl.textContent = "You earned " + score + " points out of 5.";
  questionEl.appendChild(hofForm);
  choiceEl.appendChild(hofInput);
  submitBtn.textContent = "Submit";
  choiceEl.appendChild(submitBtn);
}

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
    alert("Time's up! Better luck next time.");
    gameOver();
  }
}

function gameTimer() {
  time = 30;
  interval = setInterval(function () {
    time--;
    timeDisplay();
  }, 1000);
}

function getScores() {
  var update = JSON.parse(localStorage.getItem("highScore"));
  if (update !== null) {
    hScores = update;
  }
}

//Starts the game, displaying questions and iterating through the object array
function startGame(event) {
  event.stopPropagation();
  gameTimer();
  cQuestion = -1;
  startBtn.style.display = "none";
  questionEl.textContent = "";
  choiceEl.textContent = "";
  nextQuestion();
}

function nextQuestion() {
  questionEl.textContent = "";
  choiceEl.textContent = "";
  cQuestion++;
  if (cQuestion <= lastQuestionIndex) {
    questionEl.textContent = qArray[cQuestion].question;
    for (j = 0; j < qArray[cQuestion].choices.length; j++) {
      var cLi = document.createElement("li");
      cLi.setAttribute("data-index", cQuestion);
      cLi.setAttribute("class", "btn btn-dark choiceBtn");
      choiceEl.appendChild(cLi);
      cLi.textContent = qArray[cQuestion].choices[j];
    }
  } else {
    gameOver();
  }
}

document.addEventListener("click", function (event) {
  if (event.target.matches(".choiceBtn")) {
    if (event.target.textContent === qArray[cQuestion].answer) {
      statusEl.textContent = "Correct!";
      score++;
      audioRight();
      nextQuestion();
    } else {
      statusEl.textContent = "Wrong!";
      time -= 10;
      audioWrong();
      nextQuestion();
    }
  }
});

document.addEventListener("click", function (event) {
  event.stopPropagation();
  if (event.target.matches(".formBtn")) {
    var hofID = document.querySelector(".hofEntry").value + " - " + score;
    getScores();
    hScores.push(hofID);
    localStorage.setItem("highScore", JSON.stringify(hScores));
    window.location.href = "highscore.html";
  }
});

startBtn.addEventListener("click", startGame);
