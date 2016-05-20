
# flashcards



Repitition of concepts is a key component to learning and advancing skills in a topic of study. More speficially, repitition of concepts that are already understood is an effective way to learn. Any Deck provides users with the ability to populate index cards on a subject they are interested in learning better, and the program will help users memorize and implement in a fun, easy to use way.


//Technologies used

HTML: Through this project I learned that HTML really is the backbone of the internet. The changes and development in Javascript and CSS almost invariably affected, or were affected by, HTML in some way. I relied heavily on divs/classes/ids and learned more about the important of all three when you want different elements on a page to do different things and look different ways.

CSS/Bootstrap: This was my first shot at Bootstrap, and I'm happy with how easy it made working with two responsive columns. There are still some bugs to work out, such as when the screen is minimized, the 'answer' card doesn't align directly under the 'question' card, but is offset to the right by ~20px. In any case, I got a lot of CSS practice in, and began to (attempt to) implement a more class-based CSS approach, with mixed results.

Animate.css: I implemented a few animations, one on page load, and another when the 'New Question' and 'Answer' buttons are clicked to try to simulate a flipped-card look.

jQuery: I chose to work with jQuery primarily so I could learn how to use it, and through using it found it to be a faster, easier way to manipulate DOM elements than pure Javascript. That said, I need to learn more about how to declare jQuery functions -- right now the majority of my functions are all living under the 'New Question' button click function, which is living under the document.ready function. I would like to separate these functions out, but felt like I lacked the proficiency to name/call more piecemeal jQuery functions and making use of global variables.




//Original mockup sequence of player steps
One deck of cards (with answer showing)

New card shows question

Click 'answer' button to show answer 

Card flips over and reveals answer

Click 'new card' button

New card shows question

Click 'answer' button to show answer

Card flips over and reveals answer


//Issues & Unsolved Problems

1. toggleClass isn't working properly so that the answer is hidden when a new question card is clicked. I will fix this so that a user won't be able to see the answer unless they click the 'Answer' button.

2. Version where user can generate their own content needs work. I have begun working on a separate form/localStorage project where users can enter questions and answers of their own. Once I solidify the logic I hope to connect this feature to the site.

3. Eventually need to change the interface, and combine the two cards into one card, so that a user can click a button to see the front (question) and back (answer) to test themselves.

4. Refactor code - everything now lives in document.ready - would like to clean up/define all functions outside this

5. Need to implement a way for user to keep track of their score and progress

