"use strict";
/*  JavaScript 7th Edition
    Author: Jasmine Frye
    Questionaire Template

    Application to determine the user's
	personality using a quiz format
  
    Filename: quiz.js
*/

window.addEventListener("load", buildQuiz);

// counter to cycle through quiz questions
let counter = 0;

// parts of the quiz field
let question = document.getElementById("question");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
	

// function to set up 1 question
function askQuestion() {
	if (counter < qTexts.length) {
		question.innerHTML = qTexts[counter];
		ans1.innerHTML = aAnswers[counter];
		ans2.innerHTML = bAnswers[counter];
		if (cAnswers[counter] === undefined) {
			ans3.id = "null3";
			ans4.id = "null4";
		} else {
			ans3.innerHTML = cAnswers[counter];
			ans4.innerHTML = dAnswers[counter];
			ans3.id = "ans3";
			ans4.id = "ans4";
		}
	} else {
		calculate();
		
		ans1.innerHTML = "Home"
		ans2.innerHTML = "Retake the Quiz"
		
		ans1.onclick = function() {
			window.location.href = "index.html";
		}
		
		ans2.onclick = function() {
			window.location.href = "quizMBTI.html";
		}
	}
}


// function to build and run the quiz
function buildQuiz() {
	// set up the first question
	askQuestion();
	
	// if ans1 is clicked
	ans1.onclick = function() {
		if (counter < qTexts.length) {
			userAnswers[counter] = 'a'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
	
	// if ans2 is clicked
	ans2.onclick = function() {
		if (counter < qTexts.length) {
			userAnswers[counter] = 'b'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
	
	// if ans1 is clicked
	ans3.onclick = function() {
		if (counter in dAnswers) {
			userAnswers[counter] = 'c'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
	
	// if ans1 is clicked
	ans4.onclick = function() {
		if (counter in dAnswers) {
			userAnswers[counter] = 'd'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
}
