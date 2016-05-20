	



	/*

//one attempt at assigning 
var randomNumber = Math.floor(Math.random()*questionSource.length);
var selectedQuestion = questionSource[randomNumber].question;
console.log(selectedQuestion);

var selectedAnswer = function () {
	var x = selectedQuestion.indexOf;
	return questionSource.x.choice;

};


console.log(selectedAnswer);



//another stab at assigning corresponding answer to random question
if (question) = X, questionSource[X].answer;

if qnum === 1 {
	return questionSource[0].answer
}

*/

$(document).ready(function(){

	//css animations
$('h2').addClass('animated bounceInDown');
$('a').addClass('animated bounceInUp');
$('button').addClass('animated bounceInUp'); 


	// question object

	var questionSource =[
	{
		question: "Which of the following is NOT an acceptable way to create an object?",
		choices: ["var myObject = new Object();", "var myObject = {}", "*myObject function() = {}", "function Object (prop1, prop2) { this.prop1=a; this.prop2=b}"],
		answer: "myObject function() = {}"
	},

	{
		question: "What does 'this' mean?",
		choices: ["'This' is a keyword that refers to the current object.", "'This' what?", "The name of the function being called.", "'This' is a jQuery method."],
		answer: "'This' is a keyword that refers to the current object."
	},


	{
		question: "What does a for...in loop do?",
		choices: ["It's a method that iterates over an array", "*It's a method that traverses all enumerable properties of an object and its prototype chain.", "For every index value in array, it calls a specified function", "For...in? More like foreign."],
		answer: "It's a method that traverses all enumerable properties of an object and its prototype chain."
	},


	{
		question: "What does 'true || false' evaluate to?",
		choices: ["True", "*False", "Null", "Undefined"],
		answer: "*False"
	},


	{
		question: "How do you find the square root of a number?",
		choices: ["Math.pow(num1, num2)", "Math.square(num)", "Math.root(num)", "*Math.sqrt(num)"],
		answer: "*Math.sqrt(num)"
	},


	{
		question: "How do you create scope?",
		choices: ["Declare a variable.", "Write a function.", "Use a callback function.", "Create an object."],
		answer: "Write a function."
	},


	{
		question: "What is AJAX used for?",
		choices: ["To request asynchronous events...", "As a front-end framework.", "To clean the kitchen.", "DOM manipulation."],
		answer: "'This' is a keyword that refers to the current object."
	},


	{
		question: "How do you create an object?",
		choices: ["Brackets, key/value pairs", "XX", "XX", "XX"],
		answer: "'This' is a keyword that refers to the current object."
	},


	{
		question: "Why is the .Map function useful?",
		choices: ["It makes calls to the Google Maps API", "It's a cleaner way to write a for loop", "It concatenates arrays.", "It iterates through an array and performs a specified action on each index value."],
		answer: "It iterates through an array and performs a specified action on each index value."
	},


	{
		question: "What's the difference between a for and while loop?",
		choices: ["For makes use of an iterator XX", "XX", "XX)", "XX)"],
		answer: "testanswer1"
	},

	{
		question: "Why is the .Map function useful?",
		choices: ["It makes calls to the Google Maps API", "It's a cleaner way to write a for loop", "It concatenates arrays.", "It iterates through an array and performs a specified action on each index value."],
		answer: "testanswer2"
	},

	{
		question: "What is jQuery?",
		choices: ["A back end library", "A library to make API calls", "A front-end framework.", "A CSS framework."],
		answer: "testanswer3"
	},

	{
		question: "How do you write a function in jQuery?",
		choices: ["It makes calls to the Google Maps API", "It's a cleaner way to write a for loop", "It concatenates arrays.", "It iterates through an array and performs a specified action on each index value."],
		answer: "testanswer4"
	},

	{
		question: "Why would .forEach be preferable to a for loop?",
		choices: ["It makes calls to the Google Maps API", "It's a cleaner way to write a for loop", "It concatenates arrays.", "It iterates through an array and performs a specified action on each index value."],
		answer: "testanswer5"
	},

	{
		question: "Why is the .Map function useful?",
		choices: ["It makes calls to the Google Maps API", "It's a cleaner way to write a for loop", "It concatenates arrays.", "It iterates through an array and performs a specified action on each index value."],
		answer: "testanswer6"
	}

];


var question = $('#cardFront p').text();
var sourceLength = questionSource.length;
var randomNumber= Math.floor(Math.random()*sourceLength);
var newQuestionText = questionSource[randomNumber].question;
var timeAnimation = 80;
var cardFront = $('#cardFront');

	//random question generator
	$('.btn-success').click(function(event){
			//define the containers of the info we target
			var question = $('#cardFront p').text();
			var choices = $('.cardBack').text();
			//prevent browser's default action
			event.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = questionSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
	for(i=0; i<=sourceLength; i++){
	var questionSelected = questionSource[randomNumber].answer;
	//console.log(questionSelected);

	var newQuestionText = questionSource[randomNumber].question;
	var newAnswerText = questionSource.answer;
	//var newQuestionChoices = questionSource[randomNumber].choices;
      var timeAnimation = 80;
      var cardFront = $('#cardFront');
      var cardBack = $('.cardBack1');
      //fade out animation with callback
      cardFront.fadeOut(timeAnimation, function (){
        cardFront.html('');
				cardFront.append('<p>'+newQuestionText+'</p>'); 
        
        //fadein animation.
       	cardFront.addClass('animated flipinY');
        cardFront.fadeIn(timeAnimation);
      });  

      cardBack.fadeOut(timeAnimation, function () {
      	cardBack.html('');
      		cardBack.append('<p>' + questionSelected + '</p>');

      		cardBack.addClass('animated flipinY');
      		cardBack.fadeIn(timeAnimation);
      });
			break;
		}//end for loop
	
	});//end questionButton function


//new answer button 7:51pm
/*
$('.btn-info').click(function(event) {

	event.preventDefault();



	var timeAnimation = 100;
	var cardBack = $('#cardBack');

	cardback.fadeOut(timeAnimation, function () {
		cardBack.html('');
			cardBack.append('<p>' + answervariable + '</p>');

			cardBack.addClass('animated flipinY');
			cardBack.fadeIn(timeAnimation);
	})

})

*/
//answer generator
	$('.btn-info').click(function(event){

			//define the containers of the info we target
			//var question = $('#cardFront p').text();
			 var choices = $('.cardBack1').text();
			//prevent browser's default action
			event.preventDefault();
			//getting a new random number to attach to a question and setting a limit
			var sourceLength = questionSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0; i<=sourceLength; i++){
			//var newQuestionText = questionSource[randomNumber].question;
	  var newAnswer = questionSource[randomNumber].answer;
      var timeAnimation = 1000;
      var cardBack = $('.cardBack1');
      //fade out animation with callback
      cardBack.fadeOut(timeAnimation, function(){
        cardBack.html('');
				cardBack.append('<p>'+newAnswer+'</p>'); 
        
        //fadein animation.
        cardBack.addClass('animated flipInY');
        cardBack.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end questionButton function


	$('.btn-danger').click(function(event) {
		document.location.href = '';
	});


$("#").click(function () {
	$("cardBack1").toggleClass("cardBack2");
	console.log("hello!");
});
		
});//end document ready

