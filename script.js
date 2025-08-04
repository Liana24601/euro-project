const questions = [
  {
    question: "-----",
    options: ["a", "b", "c", "d"],
    answer: "b"
  },
  {
    question: "------",
    options: ["a", "b", "c", "d"],
    answer: "c"
  },
  {
    question: "-----",
    options: ["a", "b", "c", "d"],
    answer: "d"
  }
];

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultDiv = document.getElementById("result");
const backBtn = document.getElementById("back-btn");

startBtn.addEventListener("click", () => {
  startScreen.style.display = "none";
  quizForm.style.display = "block";
  submitBtn.style.display = "block";
  buildQuiz();
});

submitBtn.addEventListener("click", () => {
  let score = 0;
  questions.forEach((q, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === q.answer) {
      score++;
    }
  });

  resultDiv.textContent = `You got ${score} out of ${questions.length} correct.`;
  backBtn.style.display = "block";
});

backBtn.addEventListener("click", () => {
  quizForm.innerHTML = "";
  resultDiv.textContent = "";
  backBtn.style.display = "none";
  submitBtn.style.display = "none";
  quizForm.style.display = "none";
  startScreen.style.display = "block";
});

function buildQuiz() {
  quizForm.innerHTML = "";

  questions.forEach((q, index) => {
    const div = document.createElement("div");
    div.classList.add("question");
    div.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

    q.options.forEach(option => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${index}" value="${option}">
          ${option}
        </label><br>
      `;
    });

    quizForm.appendChild(div);
  });
}