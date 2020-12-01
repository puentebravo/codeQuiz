console.log("IS WORKING");

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
  answer: "execute a function until a condition is met",
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
  answer: "Jquery",
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

var time = 30;
var score = 0;

var timerEl = document.querySelector("#timeRemaining");
var questionEl = document.querySelector("#qBlock");
var choiceEl = document.querySelector("#chBlock");
var statusEl = document.querySelector("#answerStat");
var fameList = document.querySelector("#fameList");

//var timeElapsed = 0;
//var timeLeft = time - timeElapsed;

//Timer function to count down- look back at the tomato timer project, see how that worked.

//While loop to keep cycling through the array while there's time left

//Function to subtract seconds from timer for wrong answers

//Array of objects: each object is a question, with properties for the question itself, its choices, and its answer key
