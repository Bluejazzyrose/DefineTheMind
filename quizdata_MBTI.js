"use strict";
/*  JavaScript 7th Edition
    Author: Jasmine Frye
    MBTI quiz data
  
    Filename: quizdata_MBTI.js
*/

// answer list Array
let userAnswers = new Array(25);

// Text for questions in quiz
let qTexts = new Array(30);
qTexts[0]="An opportunity arises to do something fun, but on uncomfortably short notice. How do you respond?";
qTexts[1]="What ambitions drive you?"; 
qTexts[2]="What are you like when you are bored?"; 
qTexts[3]="When choosing a course of action, which is more important?"; 
qTexts[4]="Your friend laments to you about something another friend said. How do you respond?";
qTexts[5]="When studying a subject, whose conclusions do you trust more?";
qTexts[6]="When challenged on your personal beliefs, how do you respond?";
qTexts[7]="You are working on a group project, and there are a few tasks nobody wants to do. What role do you fill?";
qTexts[8]="Choose the word that fits your personality most accurately";
qTexts[9]="Choose the word that fits your personality most accurately";
qTexts[10]="Choose the word that fits your personality most accurately";
qTexts[11]="Choose the word that fits your personality most accurately";
qTexts[12]="Choose the word that fits your personality most accurately";
qTexts[13]="Choose the word that fits your personality most accurately";
qTexts[14]="Which behavior are you more prone toward?";
qTexts[15]="When you have a great idea, what do you do with it?";
qTexts[16]="When you encounter something unfamiliar, what is your gut reaction?";
qTexts[17]="What really drives you insane?";
qTexts[18]="Which skills would you rely on in a zombie apocalypse?";
qTexts[19]="Choose the word that fits your personality most accurately";
qTexts[20]="Choose the word that fits your personality most accurately";
qTexts[21]="Choose the word that fits your personality most accurately";
qTexts[22]="Choose the word that fits your personality most accurately";
qTexts[23]="Choose the word that fits your personality most accurately";
qTexts[24]="Choose the word that fits your personality most accurately";
qTexts[25]="Hypothetically, what kind of murder would you commit?";
qTexts[26]="How do you view new experiences?";
qTexts[27]="Which method for completing tasks do you prefer?";
qTexts[28]="Which part of brainstorming are you more comfortable doing?";
qTexts[29]="Which is more important to you when making value judgements?";

// Answer text for box A
let aAnswers = new Array(30);
aAnswers[0]="Yes! I will rearrange my schedule later";
aAnswers[1]="A specific goal or dream that I am striving toward"; 
aAnswers[2]="Hyperactive"; 
aAnswers[3]="Has it worked well before?"; 
aAnswers[4]="I would comfort them, but I would try not to get involved";
aAnswers[5]="My own";
aAnswers[6]="I am not great with confrontation, but I am firmly rooted in my beliefs";
aAnswers[7]="An efficient leader. I would organize everyone and delegate";
aAnswers[8]="Ambitious";
aAnswers[9]="Witty";
aAnswers[10]="Charismatic";
aAnswers[11]="Conviction";
aAnswers[12]="Idealism";
aAnswers[13]="Traditional";
aAnswers[14]="Acting before thinking things through thoroughly";
aAnswers[15]="I would ponder over it for awhile and maybe do something with it eventually";
aAnswers[16]="Approach and gather information";
aAnswers[17]="Being pushed to move at a pace I am not comfortable with";
aAnswers[18]="Luck and quick thinking";
aAnswers[19]="Spontaneous";
aAnswers[20]="Prepared";
aAnswers[21]="Analytical";
aAnswers[22]="Potent";
aAnswers[23]="Inquisitive";
aAnswers[24]="Deliberate";
aAnswers[25]="2nd degree. It would be an impulsive action with little to no forethought"
aAnswers[26]="They are enticing, but also overwhelming"
aAnswers[27]="Planning every detail out so the actual task takes very little effort to complete"
aAnswers[28]="Generating cool new ideas!"
aAnswers[29]="Whether it feels like the right thing to do"

// Answer text for box B
let bAnswers = new Array(30);
bAnswers[0]="Nope. Other opportunities will come up at a better time";
bAnswers[1]="Grand plans and ideas that change regularly"; 
bAnswers[2]="Lethargic"; 
bAnswers[3]="Is it beneficial in the long run?"; 
bAnswers[4]="I am a good mediator and WOULD get involved";
bAnswers[5]="Those of a trusted friend or reliable outside source";
bAnswers[6]="I have solid rationale behind my beliefs and love a friendly debate";
bAnswers[7]="A diligent worker. I would take the tasks that need to get done";
bAnswers[8]="Meticulous";
bAnswers[9]="Straightforward";
bAnswers[10]="No-nonsense";
bAnswers[11]="Rationality";
bAnswers[12]="Realism";
bAnswers[13]="Funky";
bAnswers[14]="Overthinking and missing the opportunity to participate";
bAnswers[15]="I want to act on it right away, otherwise what is the point of the idea?";
bAnswers[16]="Evaluate from a safe distance";
bAnswers[17]="Focusing too much on details and not getting things done";
bAnswers[18]="My planning and preparation skills";
bAnswers[19]="Thoughtful";
bAnswers[20]="Productive";
bAnswers[21]="Methodical";
bAnswers[22]="Peppy";
bAnswers[23]="Eager";
bAnswers[24]="Sensible";
bAnswers[25]="3rd degree. If I am going to kill somebody I am going to do it the right way"
bAnswers[26]="They are my favorite thing!"
bAnswers[27]="Jumping straight to the task; at the end of the day excessive planning does not get things done"
bAnswers[28]="Examining data and narrowing down options"
bAnswers[29]="Whether it makes the most logical sense"

// Answer text for box C
let cAnswers = new Array(30);
cAnswers[16]="Think on my feet and take action";
cAnswers[17]="Firmly laid plans changing at the last minute";

// Answer text for box D
let dAnswers = new Array(30);
dAnswers[16]="Jump in and gather hands-on experience";
dAnswers[17]="Menial tasks keeping me from doing things I want to do";

// acronym array for Type result
let acronym = new Array(4);

let qNum = 25;

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


// function to tally stat totals
function tally() {
	se = 0;
	si = 0;
	ne = 0;
	ni = 0;
	fe = 0;
	fi = 0;
	te = 0;
	ti = 0;
	pe = 0;
	pi = 0;
	je = 0;
	ji = 0;
	
	for (let i = 0; i < qNum; i++) {
		if (userAnswers[i] == 'a') {
			switch (i) {
				case 0:  // for question 1
				case 2:  // for question 3
					se++;
					break;
				case 1:  // for question 2
				case 8:  // for question 9
					ni++;
					break;
				case 3:  // for question 4
					si++;
					break;
				case 4:  // for question 5
				case 6:  // for question 7
				case 11: // for question 12
				case 29: // for question 30
					fi++;
					break;
				case 5:  // for question 6
					ti++;
					break;
				case 7:  // for question 8
				case 10: // for question 11
					fe++;
					break;
				case 9: // for question 10
				case 28: // for question 29
					ne++;
					break;
				case 12: // for question 13
					fi++;
					te++;
					break;
				case 13: // for question 14
					si++;
					ne++;
					break;
				case 14: // for question 15
				case 19: // for question 20
					pe++;
					break;
				case 15: // for question 16
				case 16: // for question 17
				case 17: // for question 18
				case 21: // for question 22
				case 26: // for question 27
					ji++;
					break;
				case 18: // for question 19
				case 25: // for question 26
					pe++;
					ji++;
					break;
				case 20: // for question 21
				case 27: // for question 28
					pi++;
					break;
				case 22: // for question 23
					je++;
					break;
				case 23: // for question 24
					ji += 2;
					pe++;
					break;
				case 24: // for question 25
					pi += 2;
					je++;
					break;
			} // end switch
		} 	// end 'a' if

		else if (userAnswers[i] == 'b') {
			switch (i) {
				case 0:  // for question 1
				case 8:  // for question 9
					si++;
					break;
				case 1:  // for question 2
				case 2:  // for question 3
					ne++;
					break;
				case 3:  // for question 4
				case 28: // for question 29
					ni++;
					break;
				case 4:  // for question 5
					fe++;
					break;
				case 5:  // for question 6
				case 7:  // for question 8
				case 10: // for question 11
					te++;
					break;
				case 6:  // for question 7
				case 11: // for question 12
				case 29: // for question 30
					ti++;
					break;
				case 9: // for question 10
					se++;
					break;
				case 12: // for question 13
					ti++;
					fe++;
					break;
				case 13: // for question 14
					ni++;
					se++;
					break;
				case 14: // for question 15
				case 16: // for question 17
				case 21: // for question 22
					pi++;
					break;
				case 15: // for question 16
				case 17: // for question 18
				case 20: // for question 21
				case 27: // for question 28
					je++;
					break;
				case 18: // for question 19
				case 25: // for question 26
					je++;
					pi++;
					break;
				case 19: // for question 20
					ji++;
					break;
				case 22: // for question 23
				case 26: // for question 27
					pe++;
					break;
				case 23: // for question 24
					pe += 2;
					ji++;
					break;
				case 24: // for question 25
					je += 2;
					pi++;
					break;
			} // end switch
		} 	// end 'b' if

		else if (userAnswers[i] == 'c') {
			switch (i) {
				case 16: // for question 17
					je++;
					break;
				case 17: // for question 18
					pi++;
					break;
			} // end switch
		}		// end 'c' if

		else if (userAnswers[i] == 'd') {
			switch (i) {
				case 16: // for question 17
				case 17: // for question 18
					pe++;
					break;
			} // end switch
		} // end 'd' if
	} // end for loop
} // end of tally function


// function to calculate functions based on tallied scores
function calculate() {	
	// calculate dominant functions
	while (true) {
		tally();
		
		// determine letter sequence pt 1
		// Perceiving Types
		if ((pe + ji) > (je + pi)) {
			acronym[3] = 'P';
			// letter in first position
			if (pe > ji) {
				acronym[0] = 'E';
			} else if (pe < ji) {
				acronym[0] = 'I';
			} else { // EP or IP
				qNum = 27;
				console.log("the Perceiving Type functions were equal");
				continue;
			}
		} // end P-type if

		// Judging Types
		else if ((pe + ji) < (je + pi)) {
			acronym[3] = 'J';
			// letter in first position
			if (je > pi) {
				acronym[0] = 'E';
			} else if (je < pi) {
				acronym[0] = 'I';
			} else { // EJ or IJ
				qNum = 28;
				console.log("the Judging Type functions were equal");
				continue;
			}
		} // end J-type else-if

		else { // P or J
			qNum = 26;
			console.log("the function Type sums were equal");
			continue;
		} 
		// end letter sequence determination pt 1
	
	
		// determine letter sequence pt 2
		if (acronym[3] = 'P') {
			// letter in second position
			if ((ni + se) < (si + ne)) {
				acronym[1] = 'N';
			} else if ((ni + se) > (si + ne)) {
				acronym[1] = 'S';
			} else {
				qNum = 29;
				console.log("the P perceiving functions were equal");
				continue;
			} // end perceiving function IF
			// letter in third position
			if ((fi + te) > (ti + fe)) {
				acronym[2] = 'F';
			} else if ((fi + te) < (ti + fe)) {
				acronym[2] = 'T';
			} else {
				qNum = 30;
				console.log("the P judging functions were equal");
				continue;
			} // end judging function IF
		} // end P-type if

		// Judging Types
		else if (acronym[3] = 'J') {
			// letter in second position
			if ((ni + se) < (si + ne)) {
				acronym[1] = 'S';
			} else if ((ni + se) > (si + ne)) {
				acronym[1] = 'N';
			} else {
				qNum = 29;
				console.log("the J perceiving functions were equal");
				continue;
			} // end perceiving function IF
			// letter in third position
			if ((fi + te) > (ti + fe)) {
				acronym[2] = 'T';
			} else if ((fi + te) < (ti + fe)) {
				acronym[2] = 'F';
			} else {
				qNum = 30;
				console.log("the J judging functions were equal");
				continue;
			} // end judging function IF
		} // end J-type else-if 
		// end letter sequence determination pt 2
		break;
	} // end while loop
	// end function calculations

	// display Type result
	question.innerHTML = "We have defined your mind as: " + acronym[0] + acronym[1] + acronym[2] + acronym[3];
}

// function to retake the quiz
function retake() {
	window.location.href = "quizMBTI.html";
}
