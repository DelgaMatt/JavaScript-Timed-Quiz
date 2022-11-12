
// DOM elements
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var startBtn = document.querySelector("#start");
var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials")
var feedbackEl = document.querySelector("#feedback")

// quiz variables
var secondsLeft = 60;


// startquiz function
startBtn.addEventListener("click", setTime);


// timer function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000)};

// getquestion function

// choiceselection function

// feeback function

// end quiz function

// save highscore function

// clear highscore function