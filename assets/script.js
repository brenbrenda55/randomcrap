// generate elements
var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var questionsEl = document.querySelector('questions');
var qtextEl = document.getElementById('q-text')
var choice1El = document.getElementById('choice-1')
var choice2El = document.getElementById('choice-2')
var choice3El = document.getElementById('choice-3')
var choice4El = document.getElementById('choice-4')
var answersEl = document.getElementById('answers')
var submitBtn = document.getElementById('submit-button')

let scores = [];
let userScore = 0;

//var incorrect = document.createElement('incorrect')


// timer countdown
var message =
    'rip game over';
var words = message.split(' ');

var timeLeft

function countdown() {
    timeLeft = 20;


    var timeInterval = setInterval(function () {

        if (timeLeft === 0 || currentquestion >= questions.length - 1) {
            // TODO: Then game is over
            //const newScore = { userName: "Patrick", score: userScore }
           // scores.push(newScore)
            //localStorage.setItem("scores", JSON.stringify(scores))
            clearInterval(timeInterval);
            return alert("Game is over!!");
        }

        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}


function displayMessage() {
    var wordCount = 0;


    var msgInterval = setInterval(function () {

        if (words[wordCount] === undefined) {

            clearInterval(msgInterval);
        } else {

            mainEl.textContent = words[wordCount];
            wordCount++;
        }
    }, 1000);
}



// subtract time from answering wrong questions
//document.createElement('incorrect').addEventListener ('click', countdown())
//  sec -= 3;
//document.getElementById('countdown').innerHTML='00:'+sec;





//questions
var questions = [
    {
        question: "What song did Doja Cat create all by her self; including costume, music video, and lyrics?",
        answers: [
            "moo",
            "streets",
            "woman ",
            "get into it",
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Who is jennifer lopez married to as of august 2022?",
        answers: [
            "marc anthony",
            "ben affleck",
            "cris judd ",
            "ojani noa",
        ],
        correctAnswerIndex: 1
    },
    {
        question: "What is juice wrlds most famous song?",
        answers: [
            "all girls are the same",
            "burn",
            "lucid dreams ",
            "lean wit me",
        ],
        correctAnswerIndex: 2
    },
    {
        question: "i like to eat, eat, eat, apples and _____?",
        answers: [
            "oranges",
            "kiwis",
            "pineapples",
            "bananas",
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Whos house did mr. krabs panty raid?",
        answers: [
            "mama krabs",
            "sandy cheeks",
            "mrs. puff ",
            "karen plankton",
        ],
        correctAnswerIndex: 0
    },
];




//tips from will   keep track of what question im on-var    i-question im currently on    loop-will immeditately,
//loop go through each elemt-button and the question div and uupdate corresponding the question array im in. 
//need to occur on click, update the next question and the tthing im evualiting set a data attrivute to the element or the string text 
var currentquestion = 0
function updatequestion() {
    qtextEl.textContent = questions[currentquestion].question
    choice1El.textContent = questions[currentquestion].answers[0]
    choice2El.textContent = questions[currentquestion].answers[1]
    choice3El.textContent = questions[currentquestion].answers[2]
    choice4El.textContent = questions[currentquestion].answers[3]


}



// loop
//for (let currentquestion = 0; questions.length; currentquestion++) {
//textContent+= questions [currentquestion] + "<br>";
//}


//  data attribute ex
//var answerchoice = document.querySelector(".answerchoice")
//var anchoices = answerchoice.getAttribute('choice-1',"choice-2", "choice-3", "choice-4")







//call back function
var startbuttonEl = document.getElementById('start-button');

function startquiz() {
    console.log(startquiz)
    countdown();
    updatequestion()


}
function evaluate(event) {
    console.log(event.target)//all the liogc to evealuate a right or wrong answer 
    var answerschoice = Number(event.target.dataset.index);
    console.log(answerschoice)
    console.log(questions[currentquestion].correctAnswerIndex)
    if (answerschoice != questions[currentquestion].correctAnswerIndex) {
        timeLeft -= 3
    } else {
        // Yayy we select the correct answer
        // TODO: we got the correct answer here
        // alert("Yayy correct selected!");
        userScore += 1.50;
    };

    /// TODO: Figure out when the game ends
    if (timeLeft === 0 || currentquestion >= questions.length - 1) {
        // TODO: Then game is over
        // [ {  userName: "john", score: 20 }, {  userName: "john", score: 20 } ]

        // TODO: Dynamic usernamme to be generated
        const newScore = { userName: "Patrick", score: userScore }
        scores.push(newScore)
        localStorage.setItem("scores", JSON.stringify(scores))
        return alert("Game is over!!");
    }
    currentquestion++
    updatequestion()
}
//add listner
startbuttonEl.addEventListener('click', startquiz);



choice1El.addEventListener('click', evaluate)
choice2El.addEventListener('click', evaluate)
choice3El.addEventListener('click', evaluate)
choice4El.addEventListener('click', evaluate)

function loadUserScore() {
    scores = JSON.parse(localStorage.getItem("scores"));

    if (!scores) {
        return null;
    }

    for (let i = 0; i < scores.length; i++) {
        const currentScore = scores[i]; // { userName: "john", score: 20 }

        const scoreEl = document.createElement("div")

        // Backtick
        // scoreEl.innerText = `Username: ${currentScore.userName}, score: ${currentScore.score}`
        scoreEl.innerText = "Username: " + currentScore.userName + ", score: " + currentScore.score;

        const userScoreDisplay = document.querySelector("#user-scores")

        userScoreDisplay.appendChild(scoreEl)
    }
}

loadUserScore();

/*
    User Story
        - Save a list of user score and username inside localstorage
        - Retrieve once they come back to the application
        - Display to the page for them

*/