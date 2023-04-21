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

const getUserAnswers = () => {
	const userAnswers = [
		form.inputQuestion1.value,
		form.inputQuestion2.value,
		form.inputQuestion3.value,
		form.inputQuestion4.value,
		form.inputQuestion5.value,
		form.inputQuestion6.value,
		form.inputQuestion7.value,
		form.inputQuestion8.value,
		form.inputQuestion9.value,
		form.inputQuestion10.value,
		form.inputQuestion11.value,
		form.inputQuestion12.value,
		form.inputQuestion13.value,
		form.inputQuestion14.value,
		form.inputQuestion15.value,
		form.inputQuestion16.value,
		form.inputQuestion17.value,
		form.inputQuestion18.value,
		form.inputQuestion19.value,
		form.inputQuestion20.value,
	];

	return userAnswers;
};

const calculateUserScore = (userAnswers) => {
	userAnswers.forEach((userAnswer, index) => {
		const isRightAnswers = userAnswer === correctAnswers[index];
		const isWrongAnswers = score < 100;

		if (isRightAnswers) {
			score += 5;
		}

		if (isWrongAnswers) {
      showTryAgain()
		}
	});
};

const showFinalScore = () => {
	scrollTo(0, 100);
	finalResult.classList.remove("d-none");
};

const animateFinalScore = () => {
	let counter = 0;

	const finalScore = finalResult.querySelector("span");

	const timer = setInterval(() => {
		if (counter === score) {
			clearInterval(timer);
		}

		finalScore.textContent = `Você acertou ${counter}% do Quiz!`;
		counter++;
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

  const tryAgain = () => {
		location.reload();
	};

	tryAgainBtn.addEventListener("click", tryAgain)
};

form.addEventListener("submit", result);
