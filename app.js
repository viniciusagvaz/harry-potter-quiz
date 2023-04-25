const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = [
	"B",
	"B",
	"A",
	"D",
	"C",
	"B",
	"C",
	"B",
	"C",
	"A",
	"D",
	"B",
	"C",
	"C",
	"C",
	"D",
	"A",
	"B",
	"D",
	"D",
];

let score = 0;

const getUserAnswers = () => correctAnswers.map((_, index) =>
  form[`inputQuestion${index + 1}`].value);

/* let userAnswers = []
  correctAnswers.forEach((_, index) => {
  const userAnswer = form[`inputQuestion${index + 1}`].value;
  userAnswers.push(userAnswer);
*/

const calculateUserScore = (userAnswers) => {
	userAnswers.forEach((userAnswer, index) => {
		const isCorrect = userAnswer === correctAnswers[index];
		const isWrong = score < 100;

		if (isCorrect) {
			score += 5;
		}

		if (isWrong) {
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

const result = (event) => {
	event.preventDefault();

	const userAnswers = getUserAnswers();

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
