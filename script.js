const startButton = document.getElementById("start-button");
const nextButton = document.getElementById("next-button");
const questionsPage = document.getElementById("questionContainer");
const questionEffect = document.getElementById("question");
const answerButton = document.getElementById("answer-button");


let shuffledQuestions, currentQuestion;

const questions = [
    {
        question: "What year was JavaScript created?",
        answers: ["1.1995","2.2020","3.2000","4.1999"],
        correct:"1"
    },
    {
        question: "What is the correct example of camel casing?",
        answers: ["1.likethis","2.likeThis","3.LikeThis","4.lIKeThIs"],
        correct:"2"
    },
    {
        question: "Are you enjoying this test?",
        answers: ["1.Oh Yeah","2.kinda","3.nah","4.I guess"],
        correct:"1"
    },
    {
        question: "Which is the best Gen 1 Pokemon starter?",
        answers: ["1.Bulbasaur","2.Squirtle","3.Charmander","4.Pikachu"],
        correct:"2"
    }

] 
var score = 0;
var currentQuestion = -1;

var timer; 

startButton.addEventListener("click", StartQuiz);

function startTimer() {
    timeLeft = 150;
    document.getElementById("timeLeft").innerHTML = timeLeft;

    timer = setInterval(function(){
        timeLeft--;
        document.getElementById("timeLeft").innerHTML = timeLeft;
        if(timeLeft = 0){
            clearInterval(timer);
            endQuiz();
        }
    },1000);
    nextQuestion();


    // var timer = duration, min, seconds;
    // setInterval(function() {
    //     min = parseInt(timer / 60, 10);
    //     seconds = parseInt(timer % 60, 10);

    //     min = min < 10 ? "0" + min: min;
    //     seconds = seconds < 10 ? "0" + seconds: seconds;

    //     display.textContent = min + ":" + seconds;

    //     if(--timer < 0){
    //         timer=duration;
    //     }
    //     if(seconds === 0){
    //         alert("Times Up!")
    //     }
    // },1000);
}

function endQuiz(){
    clearInterval(timer);
    var quizResults =`
    <h1>Times up!</h1>
    <`
    
   document.getElementById("quizBody").innerHTML = quizResults;
}

function highScore(){
    localStorage.setItem("highscore",score);
    localStorage.setItem("highscoreName", document.getElementById("name").value);
    getScore();
}

function getScore(){
    var quizContent =`
    <h2>` + localStorage.getItem("highscoreName")+ `highscore is:</h2>
    <h1>` + localStorage.getItem("highscore") + `</h1><br>
    <button> onclick = "clearScore()">clear score</button><button onclick="resetGame()">Try again</button>
    `;
    document.getElementById("quizBody").innerHTML = quizContent;
}

{/* // startButton.addEventListener("click", StartQuiz);
startButton.addEventListener("click", function(){
    var oneMin = 60
    display = document.querySelector("#time");
    startTimer(oneMin, display);
});

function StartQuiz(){
    startButton.classList.add("hide");
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    questionsPage.classList.remove("hide");
    currentQuestion= 0;
    nextQuestion();
    nextButton.classList.remove("hide")
}



function visualQuestion(questions){
    questionEffect.innerText = questions.question
    console.log(questions)
    question.answers.forEach(answers => {
        const button = document.createElement("button")
        button.innerText = answers.text
        button.classList.add("button")
        if(answers.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButton.appendChild(button)
    })
}

function reset (){
    clearStatus(document.body)
    nextButton.classList.add("hide")
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild)
    }
}

function testLoop(questions){
    for(var i = 0; i <questions.length; i++);
    questions.innerText("#question");
    if (answer.correct){
        button.dataset.correct = answer.correct
        score ++;
    }
    score.innerText("correct")
}

function nextQuestion(){
   visualQuestion(shuffledQuestions[currentQuestion]);
} */}