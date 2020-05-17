const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn")
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("started");
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion(); 
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);

};

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if(answer.correct) {
        button.dataset.correct = answer.correct;
    } 
    button.addEventListener("click", selectAnswer); 
    answerButtons.appendChild(button);
    })
};

function resetState() {
    nextButton.classList.add("hide");
    while ( answerButtons.firstChild) {
        answerButtons.removeChild;
        (answerButtons.firstChild);
    };
};

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtons.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if(correct){
        element.classList.add("correct");
    } else {
        element.classList.add("wrong")
    }
};



}

const questions = [
    {
        question: "What do you use to indicate a string in Java Script?",
        answers: [
            {text: "using parenthasis", correct: false},
            {text: "Put a $ in front of it", correct: false},
            {text: "Use < and > to wrap it", correct: false},
            {text: "Put quotation marks around it", correct: true}
        ],

        question: "How do you add a listener for a button?",
        asnwers: [
            {text: ".addEventListener", correct: true},
            {text: ".onClick", correct: false},
            {text: ".whenClicked", correct: false},
            {text: ".listenForClick,", correct: false}
        ],

        question: "What Syntax do you use to link Java Script in your HTML?",
        asnwers: [
            {text: "<JavaScript", correct: false },
            {text: "<script>", correct: true },
            {text: "<java>", correct: false },
            {text: "<link>", correct: false}
        ],

        question: "What is a boolean?",
        answers: [
            {text: "An if/else statement", correct: false},
            {text: "A complex function", correct: false},
            {text: "A true/false statement", correct: true},
            {text: "A fancy Egyptian garmet", correct: false}
        ]
    }
]