	$(document).ready(function(){
		var questionSource=[
	{
		question: "Which of the following is NOT an acceptable way to create an object?",
		choices: ["var myObject = new Object();", "var myObject = {}", "*myObject function() = {}", "function Object (prop1, prop2) { this.prop1=a; this.prop2=b}"]
	},

	{
		question: "What does 'this' mean?",
		choices: ["*'This' is a keyword that refers to the current object.", "'This' what?", "The name of the function being called.", "'This' is a jQuery method."],
		answer: [0]
	},


	{
		question: "What does a for...in loop do?",
		choices: ["It's a method that iterates over an array", "*It's a method that traverses all enumerable properties of an object and its prototype chain.", "For every index value in array, it calls a specified function", "For...in? More like foreign."],
		answer: [1]
	},


	{
		question: "What does 'true || false' evaluate to?",
		choices: ["True", "*False", "Null", "Undefined"],
		answer: [1]
	},


	{
		question: "How do you find the square root of a number?",
		choices: ["Math.pow(num1, num2)", "Math.square(num)", "Math.root(num)", "*Math.sqrt(num)"],
		answer: [3]
	}

];

	$('h2').addClass('animated bounceInDown');
	$('a').addClass('animated bounceInUp');
		

	$('.btn-success').click(function(event){
			//define the containers of the info we target
			var question = $('#cardFront p').text();
			var choices = $('#cardBack').text();
			//prevent browser's default action
			event.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = questionSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0; i<=sourceLength; i++){
			var newQuestionText = questionSource[randomNumber].question;
			var newQuestionChoices = questionSource[randomNumber].choices;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var cardFront = $('#cardFront');
      //fade out animation with callback
      cardFront.fadeOut(timeAnimation, function(){
        cardFront.html('');
				cardFront.append('<p>'+newQuestionText+'</p>' + newQuestionChoices +'</p>'); 
        
        //fadein animation.
        cardFront.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end questionButton function


//answer button event
	$('.btn-info').click(function(event){

			var answerButtonFunction;
			//define the containers of the info we target
			//var question = $('#cardFront p').text();
			 var choices = $('#cardBack').text();
			//prevent browser's default action
			event.preventDefault();
			//getting a new random number to attach to a quote and setting a limit
			var sourceLength = questionSource.length;
			var randomNumber= Math.floor(Math.random()*sourceLength);
			//set a new quote
			for(i=0; i<=sourceLength; i++){
			//var newQuestionText = questionSource[randomNumber].question;
			var newQuestionChoices = questionSource[randomNumber].choices;
			//console.log(newQuoteText,newQuoteGenius);
      var timeAnimation = 500;
      var cardBack = $('#cardBack');
      //fade out animation with callback
      cardBack.fadeOut(timeAnimation, function(){
        cardBack.html('');
				cardBack.append('<p>'+newQuestionChoices+'</p>'); 
        
        //fadein animation.
        cardBack.fadeIn(timeAnimation);
      });  
			
			break;
		};//end for loop
	
	});//end questionButton function


	$('.btn-danger').click(function(event) {
		document.location.href = '';
	});
		
		
});//end document ready

