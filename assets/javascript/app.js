var timeRemaining = 90;
var timer;


function run(){
    timer = setInterval(decrement, 1000);
}

function decrement() {
    timeRemaining --;
    $("#timer").html("<h2>" + timeRemaining + "</h2>");
    if (timeRemaining === 0) {
        stop();
        showResults();
    }
}

function stop() {
    clearInterval(timer)
}

run();

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

const myQuestions = [
    {
        question: "What year was Iron Maiden Formed?",
        answers: {
            a: "1978",
            b: "1980",
            c: "1975"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the name of the last track on Iron Maiden's first album, 'Iron Maiden'?",
        answers: {
            a: "Iron Maiden",
            b: "Charlotte the Harlot",
            c: "Remember Tomorrow"
        },
        correctAnswer: "a"
    },
    {
        question: "How many albums have Iron Maiden released?",
        answers: {
            a: "5",
            b: "10",
            c: "22",
            d: "16"
        },
        correctAnswer: "d"
    },
    {
        question: "How many guitarists currently play in Iron Maiden?",
        answers: {
            a: "1",
            b: "3",
            c: "2"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of Iron Maiden's mascot?",
        answers: {
            a: "Albert",
            b: "Eddie",
            c: "Frankfurt"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the lead singer of Iron Maiden?",
        answers: {
            a: "Brent Midland",
            b: "Bruce Dickenson",
            c: "Bruce Mathis"
        },
        correctAnswer: "b"
    },
    {
        question: "What is the name of the Boeing 757 Iron Maiden uses on tour?",
        answers: {
            a: "The Maiden Voyage",
            b: "The Flying Maiden",
            c: "Ed Force One"
        },
        correctAnswer: "c"
    },
    {
        question: "What instrument does Nicko McBrain play in Iron Maiden?",
        answers: {
            a: "Guitar",
            b: "Drums",
            c: "Bass"
        },
        correctAnswer: "b"
    },
    {
        question: "From what country did Iron Maiden originate?",
        answers: {
            a: "The United States",
            b: "Japan",
            c: "Britian"
        },
        correctAnswer: "c"
    },
    {
        question: "How many singers have Iron Maiden had throughout the bands existence?",
        answers: {
            a: "3",
            b: "1",
            c: "2"
        },
        correctAnswer: "a"
    },
];

function buildQuiz() {
    var output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            var answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    
                    `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label><br>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
 }

function showResults() { 
    stop();
    var answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        var answerContainer = answerContainers[questionNumber];
        var selector = 'input[name=question' + questionNumber + ']:checked';
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

       
        if (userAnswer === currentQuestion.correctAnswer) {
            numCorrect++;
            answerContainers[questionNumber].style.color = 'lightgreen';
        }
    
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

buildQuiz();

submitButton.addEventListener('click', showResults);