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
qTexts[0]="I am not easily swayed in my resolve";
qTexts[1]="I take pride in having a good work ethic"; 
qTexts[2]="I am willing to make sacrifices to accomplish what I set out to do"; 
qTexts[3]="I do not back down, even when I have clearly lost"; 
qTexts[4]="Insults seldom faze me";
qTexts[5]="I am not easily riled up";
qTexts[6]="I am able to keep going after most people run out of steam";
qTexts[7]="I am not bothered by what other people think";
qTexts[8]="I do not panic when I am caught off-guard";
qTexts[9]="I can still perform well in unstable conditions";
qTexts[10]="I am good at switching gears on the fly";
qTexts[11]="When things go wrong, I keep my cool";
qTexts[12]="I do extensive research on topics I encounter regularly";
qTexts[13]="I have a good memory";
qTexts[14]="I prefer to prepare extensively for a situation, if possible";
qTexts[15]="I thoroughly consider a subject before offering my input";
qTexts[16]="I can usually tell if people are lying";
qTexts[17]="I am fluent in sarcasm";
qTexts[18]="I am quick to notice subtle changes about my surroundings";
qTexts[19]="I am good at coming up with clever things to say in the moment";
qTexts[20]="I can keep a conversation flowing comfortably";
qTexts[21]="People talk about me the way I want/have taught them to";
qTexts[22]="I am good at diffusing conflicts";
qTexts[23]="I can keep people&apos;s attention/interest when I communicate";
qTexts[24]="Which do you usually run out of first?";
qTexts[25]="How do you function in emergency situations?";
qTexts[26]="How do you react when something surprises you?";
qTexts[27]="After you explain something trivial, someone is confused and asks for clarification";
qTexts[28]="How do you approach casual conversation?";
qTexts[29]="What do you utilize when you want people to listen?";

// arrays for answers
let aAnswers = new Array(30);
let bAnswers = new Array(30);
let cAnswers = new Array(30);
let dAnswers = new Array(30);

// fill in the first 24 answer boxes
for (let i = 0; i < 24; i++) {
	aAnswers[i]="Yes";
	bAnswers[i]="Kinda";
	cAnswers[i]="No";
	dAnswers[i]="In fact, the opposite";
}

// answer text for box A
aAnswers[24]="Steam";
aAnswers[25]="I can keep my cool and act rationally"
aAnswers[26]="With an impulsive gut punch"
aAnswers[27]="Of course! &lowast;you explain your point from a different angle&lowast;"
aAnswers[28]="I have strategized and am prepared for small talk"
aAnswers[29]="Sound"

// Answer text for box B
bAnswers[24]="Motivation";
bAnswers[25]="Having a job to do helps me stay calm"
bAnswers[26]="I don&apos;t react, because I wasn&apos;t surprised"
bAnswers[27]="I probably COULD. &lowast;you stare at your listener silently&lowast;"
bAnswers[28]="I mean... I see someone I know and I talk to them"
bAnswers[29]="Silence"

// variables to keep track of quiz stat answers
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;

// variables to determine top two stats
let statName1 = "";
let statNum1 = 0;
let statName2 = "";
let statNum2 = 0;


// function to tally stat totals
function tally() {
	strength = 0;
	constitution = 0;
	dexterity = 0;
	intelligence = 0;
	wisdom = 0;
	charisma = 0;
	
	for (let i = 0; i < qTexts.length; i++) {
		if (userAnswers[i] == 'a') {
			switch (i) {
				case 0:  // for question 1
				case 1:  // for question 2
				case 2:  // for question 3
				case 3:  // for question 4
					strength += 2;
					break;
				case 4:  // for question 5
				case 5:  // for question 6
				case 6:  // for question 7
				case 7:  // for question 8
					constitution += 2;
					break;
				case 8:  // for question 9
				case 9: // for question 10
				case 10: // for question 11
				case 11: // for question 12
					dexterity += 2;
					break;
				case 12: // for question 13
				case 13: // for question 14
				case 14: // for question 15
				case 15: // for question 16
					intelligence += 2;
					break;
				case 16: // for question 17
				case 17: // for question 18
				case 18: // for question 19
				case 19: // for question 20
					wisdom += 2;
					break;
				case 20: // for question 21
				case 21: // for question 22
				case 22: // for question 23
				case 23: // for question 24
					charisma += 2;
					break;
				case 24: // for question 25
					strength++;
					break;
				case 25: // for question 26
				case 26: // for question 27
					dexterity++;
					break;
				case 27: // for question 28
				case 28: // for question 29
					intelligence++;
					break;
				case 29: // for question 30
					wisdom++;
					break;
			} // end switch
		} 	// end 'a' if

		else if (userAnswers[i] == 'b') {
			switch (i) {
				case 0:  // for question 1
				case 1:  // for question 2
				case 2:  // for question 3
				case 3:  // for question 4
				case 25: // for question 26
					strength++;
					break;
				case 4:  // for question 5
				case 5:  // for question 6
				case 6:  // for question 7
				case 7:  // for question 8
				case 24: // for question 25
				case 26: // for question 27
					constitution++;
					break;
				case 8:  // for question 9
				case 9: // for question 10
				case 10: // for question 11
				case 11: // for question 12
					dexterity++;
					break;
				case 12: // for question 13
				case 13: // for question 14
				case 14: // for question 15
				case 15: // for question 16
					intelligence++;
					break;
				case 16: // for question 17
				case 17: // for question 18
				case 18: // for question 19
				case 19: // for question 20
				case 27: // for question 28
					wisdom++;
					break;
				case 20: // for question 21
				case 21: // for question 22
				case 22: // for question 23
				case 23: // for question 24
				case 28: // for question 29
				case 29: // for question 30
					charisma++;
					break;
			} // end switch
		} 	// end 'b' if

		else if (userAnswers[i] == 'c') {
			switch (i) {
				case 0:  // for question 1
				case 1:  // for question 2
				case 2:  // for question 3
				case 3:  // for question 4
					strength--;
					break;
				case 4:  // for question 5
				case 5:  // for question 6
				case 6:  // for question 7
				case 7:  // for question 8
					constitution--;
					break;
				case 8:  // for question 9
				case 9: // for question 10
				case 10: // for question 11
				case 11: // for question 12
					dexterity--;
					break;
				case 12: // for question 13
				case 13: // for question 14
				case 14: // for question 15
				case 15: // for question 16
					intelligence--;
					break;
				case 16: // for question 17
				case 17: // for question 18
				case 18: // for question 19
				case 19: // for question 20
					wisdom--;
					break;
				case 20: // for question 21
				case 21: // for question 22
				case 22: // for question 23
				case 23: // for question 24
					charisma--;
					break;
			} // end switch
		} // end 'c' if
		
		else if (userAnswers[i] == 'd') {
			switch (i) {
				case 0:  // for question 1
					strength--;
					constitution--;
					break;
				case 1:  // for question 2
					strength--;
					intelligence--;
					break;
				case 2:  // for question 3
					strength--;
					dexterity--;
					break;
				case 3:  // for question 4
					strength--;
					wisdom--;
					break;
				case 4:  // for question 5
					constitution--;
					charisma--;
					break;
				case 5:  // for question 6
					constitution--;
					dexterity--;
					break;
				case 6:  // for question 7
					constitution--;
					strength--;
					break;
				case 7:  // for question 8
					constitution--;
					wisdom--;
					break;
				case 8:  // for question 9
					dexterity--;
					constitution--;
					break;
				case 9: // for question 10
					dexterity--;
					strength--;
					break;
				case 10: // for question 11
					dexterity--;
					wisdom--;
					break;
				case 11: // for question 12
					dexterity--;
					charisma--;
					break;
				case 12: // for question 13
					intelligence--;
					strength--;
					break;
				case 13: // for question 14
					intelligence--;
					constitution--;
					break;
				case 14: // for question 15
					intelligence--;
					charisma--;
					break;
				case 15: // for question 16
					intelligence--;
					wisdom--;
					break;
				case 16: // for question 17
					wisdom--;
					charisma--;
					break;
				case 17: // for question 18
					wisdom--;
					dexterity--;
					break;
				case 18: // for question 19
					wisdom--;
					strength--;
					break;
				case 19: // for question 20
					wisdom--;
					intelligence--;
					break;
				case 20: // for question 21
					charisma--;
					wisdom--;
					break;
				case 21: // for question 22
					charisma--;
					constitution--;
					break;
				case 22: // for question 23
					charisma--;
					dexterity--;
					break;
				case 23: // for question 24
					charisma--;
					intelligence--;
					break;
			} // end switch
		} // end 'd' if
	} // end for loop
} // end of tally function


// function to calculate functions based on tallied scores
function calculate() {	
	// calculate dominant stats
	while (true) {
		tally();
		
		// determine top two stats
		// set strength as the default
		statName1 = "strength";
		statNum1 = strength;
		
		// check dexterity
		if (dexterity > statNum1) {
			statName2 = statName1;
			statNum2 = statNum1;
			statName1 = "dexterity";
			statNum1 = dexterity;
		} else {
			statName2 = "dexterity";
			statNum2 = dexterity;

		}
		// check constitution
		if (constitution > statNum1) {
			statName2 = statName1;
			statNum2 = statNum1;
			statName1 = "constitution";
			statNum1 = constitution;
		} else if (constitution > statNum2) {
			statName2 = "constitution";
			statNum2 = constitution;

		}
		// check intelligence
		if (intelligence > statNum1) {
			statName2 = statName1;
			statNum2 = statNum1;
			statName1 = "intelligence";
			statNum1 = intelligence;
		} else if (intelligence > statNum2) {
			statName2 = "intelligence";
			statNum2 = intelligence;

		}
		// check wisdom
		if (wisdom > statNum1) {
			statName2 = statName1;
			statNum2 = statNum1;
			statName1 = "wisdom";
			statNum1 = wisdom;
		} else if (wisdom > statNum2) {
			statName2 = "wisdom";
			statNum2 = wisdom;

		}
		// check charisma
		if (charisma > statNum1) {
			statName2 = statName1;
			statNum2 = statNum1;
			statName1 = "charisma";
			statNum1 = charisma;
		} else if (charisma > statNum2) {
			statName2 = "charisma";
			statNum2 = charisma;

		}
		
		break;
	} // end while loop
	// end function calculations
	
	// test logic
	console.log("strength: " + strength);
	console.log("dexterity: " + dexterity);
	console.log("constitution: " + constitution);
	console.log("intelligence: " + intelligence);
	console.log("wisdom: " + wisdom);
	console.log("charisma: " + charisma);

	// display Type result
	question.innerHTML = "Your top two stats are " + statName1 + " and " + statName2;
}

// function to retake the quiz
function retake() {
	window.location.href = "quizDND.html";
}