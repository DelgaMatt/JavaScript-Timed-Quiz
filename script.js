/* Acceptance Criteria 
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/


// DOM elements
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var homePage = document.querySelector("#home")

var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#question-title")
var choicesEl = document.querySelectorAll("#choices");
var answerbtn1 = document.querySelector("#Btn1");
var answerbtn2 = document.querySelector("#Btn2");
var answerbtn3 = document.querySelector("#Btn3");
var answerbtn4 = document.querySelector("#Btn4");
var feedbackEl = document.querySelector("#feedback");

var submitBtn = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var clearBtn = document.querySelector("#clear-button");

// quiz variables
var secondsLeft = 10;
var totalScore = 0;
var questionCount = 1;
var questionNumber = 0;

// questions content
var questions = [
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<script>", "<javascript>", "<js>", "<scripting>"],
        answer: "<script>"
    },

    {
        title: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: ["concat()", "join()", "pop()", "map()"],
        answer: "concat()"
    },

    {
        title: "Which of the following type of variable is visible only within a function where it is defined?",
        choices: ["global variable", "local variable", "both of the above", "none of the above"],
        answer: "local variable"
    },

    {
        title: "What is 'this' keyword in JavaScript?",
        choices: ["refers to a function", "refers to your current existential crisis", "refers to the first variable in a function", "refers to the object from where it was called"],
        answer: "refers to the object from where it was called"
    },

    {
        title: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        choices: ["if (i <> 5)", "if (i != 5)", "if i =! 5 then", "if i = 5"],
        answer: "if (i != 5)"
    },

    {
        title: "How do you call a function named 'myFunction?'",
        choices: ["call my function myFunction()", "call function(myFunction)", "myFunction()", "Come here my precious function!"],
        answer: "myFunction()"
    }
];

startBtn.addEventListener("click", startQuiz);

// startquiz function
function startQuiz() {
    setTime();
    getQuestion();
    var homePage = document.getElementById("home")
    homePage.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
};



// timer function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timerEl.textContent = "Time is up!"
            gameOver();
        } else if (questions >= questionCount.length +1) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
};

// getquestion function
function getQuestion() {

};

// choiceselection function

// feeback function

// end quiz function
function gameOver() {
};

// save highscore function

// clear highscore function

// call to start quiz
// startBtn.onclick = startQuiz();