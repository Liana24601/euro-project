const questions = [
  {
    question: "The Renaissance marks the beginning of the modern era in large part due to the development of all of the following EXCEPT:",
    options: ["the foundations of capitalism were laid at this time", "individualism emerged as a trend", "trade with the new western world began trend of Global trade", "scientific thought emerged with an emphasis on the scientific method", "northern Europe began to dominate southern europe"],
    answer: "northern Europe began to dominate southern europe"
  },
  {
    question: "Fifteenth-century attempts by the cardinals to reform, reunite, and reinvigorate the Church are known collectively as:",
    options: ["the Reformation", "the Counter-Reformation", "the Inquisition", "the Conciliar Movement", "the Court of the Star Chamber"],
    answer: "the Conciliar Movement"
  },
  {
    question: "'Geography is Destiny' proved true for the Italians of the 14th and 15th centuries for all of the following reasons EXCEPT:",
    options: ["their proximity to the Mediterranean", "the establishment of overland trade with Asia", "their role as the 'middlemen' of Europe", "their ability to adapt to victimization by more united peoples", "their seagoing trade with the eastern Mediterranean"],
    answer: "the establishment of overland trade with Asia"
  },
  {
    question: "Which of the following was NOT an effect of the Hundred Years War?",
    options: ["a significant decrease in the population", "a series of peasant rebellions", "the unification of Castile and Aragon", "a more politically unified France", "an economically weaker England"],
    answer: "the unification of Castile and Aragon"
  },
  {
    question: "The 'Black Death' refers:",
    options: ["to the ruthlessness of the Norman Kings of England", "to the outbreak of plague in Europe that killed between one-quarter and one-third of the population between 1347 and 1352", "to the Spanish Inquisition", "was a fifteenth-century phenomenon", "increased the authority of traditional European institutions like the Church and the nobility"],
    answer: "to the outbreak of plague in Europe that killed between one-quarter and one-third of the population between 1347 and 1352"
  },
  {
    question: "Which of the following is NOT a way in which fifteenth-century armies differed from their predecessors?",
    options: ["They were commanded by officers of noble birth.", "They were composed of mercenary soldiers.", "They fought for pay and spoils rather than honor and feudal obligation.", "They relied on artillery and infantry more than on cavalry.", "They created a greater need for taxes."],
    answer: "They were commanded by officers of noble birth."
  },
  {
    question: "In the fifteenth century, the Holy Roman Emperor:",
    options: ["was another name for the pope", "was dethroned in the Hundred Years War", "was elected by a seven-member council of German archbishops and nobles", "was Ferdinand of Aragon", "sponsored the voyages of Christopher Columbus"],
    answer: "was elected by a seven-member council of German archbishops and nobles"
  },
  {
    question: "The era of daring exploration and discovery at the end of the fifteenth and beginning of the sixteenth centuries was inspired by:",
    options: ["the Reformation", "the invention of the steam engine", "the need to escape the Black Death", "the search for gold and competition for the spice trade", "the successful circumnavigation of the globe by the Magellan expedition"],
    answer: "the search for gold and competition for the spice trade"
  },
  {
    question: "Which of the following was NOT an effect of the creation of a Spanish Empire in the New World?",
    options: ["inflation in the economy of Europe", "the establishment of Roman Catholicism in the New World", "the rise of a wealthy merchant class in Europe", "the establishment of a hierarchical social structure in Europe", "the establishment of a system of economic dependence between Europe and the New World"],
    answer: "the establishment of a hierarchical social structure in Europe"
  },
  {
    question: "Which of the following is NOT a Renaissance value?",
    options: ["mastery of ancient languages", "patronage of the arts", "scholarly achievement", "proficiency in the military arts", "civic duty"],
    answer: "proficiency in the military arts"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
  },
  {
    question: "--",
    options: ["a", "b", "c", "d", "e"],
    answer: "a"
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
}

