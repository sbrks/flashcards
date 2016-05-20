window.onload = function() {

  // Check for LocalStorage support.
  if (localStorage) {

    // Add an event listener for form submissions
    document.getElementById('flashCard').addEventListener('submit', function() {
      // Get the value of the name field.
      var question = document.getElementById('question').value;

      // Save the name in localStorage.
      localStorage.setItem('question', question);
    });

  }

  // Retrieve the users name.
  var question = localStorage.getItem('question');

  if (question != "undefined" || question != "null") {
    document.getElementById('testFront').innerHTML = "Question: " + question;
  } else
    document.getElementById('testFront').innerHTML = "Hello!";

//same for answer:
  if (localStorage) {
    // Add an event listener for form submissions
    document.getElementById('flashCard').addEventListener('submit', function() {
      // Get the value of the name field.
      var answer = document.getElementById('answer').value;

      // Save the name in localStorage.
      localStorage.setItem('answer', answer);
    });

  }

  // Retrieve the users name.
  var answer = localStorage.getItem('answer');

  if (answer != "undefined" || answer != "null") {
    document.getElementById('testBack').innerHTML = "Answer: " + answer;
  } else
    document.getElementById('testBack').innerHTML = "There doesn't seem to be an answer here.";

  };

