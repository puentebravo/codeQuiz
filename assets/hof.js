var fameList = document.querySelector("#fameList");
var clrBtn = document.querySelector("#clrHall");

var highScore = [];

function getScores() {
  var newData = JSON.parse(localStorage.getItem("highScore"));
  if (newData !== null) {
    highScore = newData;
    console.log(highScore);
    renderScore();
  }
}

function renderScore() {
  for (i = 0; i < highScore.length; i++) {
    var hLi = document.createElement("li");
    hLi.setAttribute("class", "list-group-item");
    fameList.appendChild(hLi);
    hLi.textContent = highScore[i];
  }
}

function clearHall() {
  localStorage.clear();
  location.reload();
}

document.addEventListener("DOMContentLoaded", getScores());
clrBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  clearHall();
});
