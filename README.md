
# flashcards

When you're learning something new, it can be forgotten pretty quickly unless it's repeatedly brought back to the forefront of your mind. You can do this by immersing yourself in the learning process, like what we are doing!, where the new concepts you're learning will be brought up by chance. But memory research shows that an effective and efficient time for a new fact to be remembered is right before you were about to forget it. 

Thus, I was interested in building a studying tool that implements this memory research and allows a user to easily make their own flashcards they can use to learn/reinforce concepts. These flashcards will provide users with the ability to populate index cards on a subject they are interested in learning, and the program will ultimately help users memorize and learn in a fun, easy to use way.




## Technologies used

### HTML
Through this project I learned that HTML is the backbone of every other technnology I used. The changes and development in Javascript and CSS almost invariably affected, or were affected by, HTML in some way. I relied heavily on divs/classes/ids and learned more about the important of all three when you want different elements on a page to do different things and look different ways.

### CSS/Bootstrap
This was my first shot at Bootstrap, and I'm happy with how easy it made working with two responsive columns. There are still some bugs to work out, such as when the screen is minimized, the 'answer' card doesn't align directly under the 'question' card, but is offset to the right by ~20px. In any case, I got a lot of CSS practice in, and began to (attempt to) implement a more class-based CSS approach, with mixed results.

### Animate.css
I implemented a few animations, one on page load, and another when the 'New Question' and 'Answer' buttons are clicked to try to simulate a flipped-card look.

### jQuery
I chose to work with jQuery primarily so I could learn how to use it, and through using it found it to be a faster, easier way to manipulate DOM elements than pure Javascript. That said, I need to learn more about how to declare jQuery functions -- right now the majority of my functions are all living under the 'New Question' button click function, which is living under the document.ready function. I would like to pull these functions out into a "functions spellbook" but didn't prioritize this and will need to refactor. 


## User Stories
1. One deck of cards (face down)

2. Click button, new card flips and shows question

3. User answers question on their own

4. Click 'answer' button, card flips over and reveals answer. 

5. Repeat through set of randomly sorted cards. Click 'new card' button to repeat.

6. User has option to test themselves with pre-populated Qs/As (Javascript, Spanish), or input their own data

## Planned Features
1. The working version where a user can generate their own content needs a lot of work. I have begun working on a separate form/localStorage project where users can enter questions and answers of their own. Once I solidify the logic I hope to connect this feature to the main site.

2. Implement a calendar or reminder system to make use of 'spaced repetition' learning

3. Score/progress tracker so user can keep track of their progress

## Issues & Unsolved Problems

1. toggleClass isn't working properly so that the answer is hidden when a new question card is clicked. I will fix this so that a user won't be able to see the answer unless they click the 'Answer' button.

2. Version where user can generate their own content needs work. I have begun working on a separate form/localStorage project where users can enter questions and answers of their own. Once I solidify the logic I hope to connect this feature to the site.

3. Need to change the interface, and combine the two cards into one card, so that a user can click a button to see the front (question) and back (answer) to test themselves. Working version of this in progress. 

4. Refactor code - everything now lives in document.ready - would like to clean up/define all functions outside this

