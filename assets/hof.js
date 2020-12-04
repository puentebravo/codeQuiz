var fameList = document.querySelector("#fameList");
var clrBtn = document.querySelector("#clrHall");

function renderScore() {
  var highScore = JSON.parse(localStorage.getItem("highScore"));
  var hLi = document.createElement("li");
  hLi.setAttribute("class", "list-group-item");
  fameList.appendChild(hLi);
  hLi.textContent = highScore;
}

function clearHall() {
  localStorage.clear();
  location.reload();
}

document.addEventListener("DOMContentLoaded", renderScore());
clrBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  clearHall();
});
