const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Paris", "Rome", "Madrid"],
    correct: 1
  },
  {
    question: "Which language is used for web apps?",
    options: ["Python", "Java", "C++", "JavaScript"],
    correct: 3
  },
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyper Text Markup Leveler"
    ],
    correct: 2
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score');
const quizEl = document.getElementById('quiz');

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach((option, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => selectAnswer(index);
    li.appendChild(button);
    optionsEl.appendChild(li);
  });
}

function selectAnswer(index) {
  const correct = quizData[currentQuestion].correct;
  if (index === correct) score++;

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizEl.classList.add("hide");
  resultEl.classList.remove("hide");
  scoreEl.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  quizEl.classList.remove("hide");
  resultEl.classList.add("hide");
  loadQuestion();
}

nextBtn.style.display = "none"; // not used in this version
loadQuestion();
