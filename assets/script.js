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
var answerschoice = document.querySelector('.answerchoice')


// timer countdown
var message =
    'rip game over';
var words = message.split(' ');

function countdown() {
    var timeLeft = 15;


    var timeInterval = setInterval(function () {

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



// subtracttime from answering wrong questions
//document.getElementById('incorrect').addEventListener ('click', countdown())
  //  sec -= 3;
    //document.getElementById('countdown').innerHTML='00:'+sec;





//questions
var questions = [
    {
        question: "What song did Doja Cat create all by her self; including costume, music video, and lyrics?",
        answers: [
            "moo",
            " streets",
            " woman ",
            " get into it",
        ],
        correctAnswerIndex: 1
    },
    {
        question: "Who is jennifer lopez married to as of august 2022?",
        answers: [
            "marc anthony",
            " ben affleck",
            " cris judd ",
            " ojani noa",
        ],
        correctAnswerIndex: 2
    },
    {
        question: "What is juice wrlds most famous song?",
        answers: [
            "all girls are the same",
            " burn",
            " lucid dreams ",
            " lean wit me",
        ],
        correctAnswerIndex: 3
    },
    {
        question: "i like to eat, eat, eat, apples and _____?",
        answers: [
            "oranges",
            " kiwis",
            " pineapples",
            " bananas",
        ],
        correctAnswerIndex: 4
    },
    {
        question: "Whos house did mr. krabs panty raid?",
        answers: [
            "mama krabs",
            " sandy cheeks",
            " mrs. puff ",
            " karen plankton",
        ],
        correctAnswerIndex: 1
    },
];




//tips from will   keep track of what question im on-var    i-question im currently on    loop-will immeditately,
//loop go through each elemt-button and the question div and uupdate corresponding the question array im in. 
//need to occur on click, update the next question and the tthing im evualiting set a data attrivute to the element or the string text 
var currentquestion = 0
function updatequestion(){
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

function startquiz() {countdown();
   updatequestion()


}
function evaluate (event){
    console.log(event.target)//all the liogc to evealuate a right or wrong answer 
    currentquestion ++
    updatequestion()
}
//add listner
startbuttonEl.addEventListener('click', startquiz);

answerschoice.addEventListener('click', evaluate)

choice1El.addEventListener('click', evaluate)
choice2El.addEventListener('click', evaluate)
choice3El.addEventListener('click', evaluate)
choice4El.addEventListener('click', evaluate)



