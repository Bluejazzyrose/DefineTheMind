"use strict";
/*  JavaScript 7th Edition
    Author: Jasmine Frye
    Questionaire Template

    Application to determine the user's
	personality using a quiz format
  
    Filename: quiz.js
*/

window.addEventListener("load", buildQuiz);

// variables to keep track of quiz stat answers
let se = 0;
let si = 0;
let ne = 0;
let ni = 0;
let fe = 0;
let fi = 0;
let te = 0;
let ti = 0;
let pe = 0;
let pi = 0;
let je = 0;
let ji = 0;

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
	if (counter > 29) {
		calculate();
		
		// display Type result
		question.innerHTML = "We have defined your mind as: " + acronym[0] + acronym[1] + acronym[2] + acronym[3];
		ans1.innerHTML = "Home"
		ans2.innerHTML = "Retake the Quiz"
		
		ans1.onclick = function() {
			window.location.href = "index.html";
		}
		
		ans2.onclick = function() {
			window.location.href = "quizMBTI.html";
		}
	} else {
		question.innerHTML = qTexts[counter];
		ans1.innerHTML = aAnswers[counter];
		ans2.innerHTML = bAnswers[counter];
		if (counter === 16 || counter === 17) {
			ans3.innerHTML = cAnswers[counter];
			ans4.innerHTML = dAnswers[counter];
			ans3.id = "ans3";
			ans4.id = "ans4";
		} else {
			ans3.id = "null3";
			ans4.id = "null4";
		}
	}
}


// function to build and run the quiz
function buildQuiz() {
	//set up the first question
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
		if (counter === 16 || counter === 17) {
			userAnswers[counter] = 'c'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
	
	// if ans1 is clicked
	ans4.onclick = function() {
		if (counter === 16 || counter === 17) {
			userAnswers[counter] = 'd'; // add to result array
			counter++;
			askQuestion(); // progress quiz
		}
	}
}