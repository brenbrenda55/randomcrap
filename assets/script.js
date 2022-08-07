// generate elements
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var questionsEl = document.querySelector('questions');
var qtextEl = document.getElementById('q-text')
var choice1El = document.getElementById('choice-1')
var choice2El = document.getElementById('choice-2')
var choice3El = document.getElementById('choice-3')
var choice2El = document.getElementById('choice-4')
var answersEl = document.getElementById('answers')










// timer countdown
var message =
  'rip game over';
var words = message.split(' ');

function countdown() {
    var timeLeft = 15;
  
    // TODO: Add a comment describing the functionality of the setInterval() method:
    var timeInterval = setInterval(function () {
      // TODO: Add comments describing the functionality of the `if` statement:
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } // TODO: Add comments describing the functionality of the `else if` statement:
      else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } // TODO: Add comments describing the functionality of the `else` statement:
      else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
  }

  // Displays the message one word at a time
function displayMessage() {
    var wordCount = 0;
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[wordCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        mainEl.textContent = words[wordCount];
        wordCount++;
      }
    }, 1000);
  }
  
  countdown();




//questions
var questions = [
    {
        question: "What song did Doja Cat create all by her self; including costume, music video, and lyrics?",
        answers : [
            "moo",
            " streets",
            " woman ",
            " get into it",
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Who is jennifer lopez married to as of august 2022?",
        answers : [
            "marc anthony",
            " ben affleck",
            " cris judd ",
            " ojani noa",
        ],
        correctAnswerIndex: 2
    },
    {
        question: "What is juice wrlds most famous song?",
        answers : [
            "all girls are the same",
            " burn",
            " lucid dreams ",
            " lean wit me",
        ],
        correctAnswerIndex: 3
    },
    {
        question: "i like to eat, eat, eat, apples and _____?",
        answers : [
            "oranges",
            " kiwis",
            " pineapples",
            " bananas",
        ],
        correctAnswerIndex: 4
    },
    {
        question: "Whos house did mr. krabs panty raid?",
        answers : [
            "mama krabs",
            " sandy cheeks",
            " mrs. puff ",
            " karen plankton",
        ],
        correctAnswerIndex: 1
    },
];




//call back function
var startbuttonEl = document.getElementById('start-button');

function startquiz() {
    qtextEl.textContent = questions[0].question
    console.log(questions)
    choice1El.textContent = questions[1].answers
    console.log(questions.answers)
    //choice2El.textContent = questions[2].answers
    //choice3El.textContent = questions[3].answers
    //choice4El.textContent = questions[4].answers
   
  

  

  

}

//add listner
startbuttonEl.addEventListener('click', startquiz);
