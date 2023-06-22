alert(`AVISO IMPORTANTE:

   Este Quiz deve ser encarado  APENAS como objeto de estudo e de maneira alguma deve ser entendido como apoio às "políticas" e "opiniões" compartilhadas pela autora da obra.

Toda a minha solidariedade a comunidade Trans \u{1F3F3}`)

const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = [
   "B", "B", "A", "D",
   "C", "B", "C", "B",
   "C", "A", "D", "B",
   "C", "C", "C", "D",
   "A", "B", "D", "D",
];

let score = 0;

const getUserAnswers = () => correctAnswers.map((_, index) =>
   form[`inputQuestion${index + 1}`].value);

const calculateUserScore = (userAnswers) => {
   userAnswers.forEach((userAnswer, index) => {
      const isCorrectAnswer = userAnswer === correctAnswers[index];
      const isScoreLessThan100 = score < 100;

      if (isCorrectAnswer) {
         score += 5;
      }

      if (isScoreLessThan100) {
         showTryAgain();
      }
   });
};

const showFinalScore = () => {
   scrollTo({
      top: 10,
      left: 0,
      behavior: "smooth",
   });
   finalResult.classList.remove("d-none");
};

const animateFinalScore = () => {
   let counter = 0;

   const finalScore = finalResult.querySelector("span");

   const timer = setInterval(() => {
      if (counter === score) {
         clearInterval(timer);
      }

      finalScore.textContent = `Você acertou ${counter++}% do Quiz!`;
   }, 30);
};

const resetUserScore = () => {
   score = 0
}

const result = (event) => {
   event.preventDefault();

   const userAnswers = getUserAnswers();

   resetUserScore()
   calculateUserScore(userAnswers);
   showFinalScore();
   animateFinalScore();
};

const showTryAgain = () => {
   const tryAgainBtn = document.querySelector(".tryAgainBtn");

   tryAgainBtn.classList.remove("d-none");

   tryAgainBtn.addEventListener("click", () => location.reload());
};

form.addEventListener("submit", result);
