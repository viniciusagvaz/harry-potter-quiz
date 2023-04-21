const form = document.querySelector(".quiz-form");
const resultDisplay = document.querySelector(".result");

const correctAnswers = [
  "B", "B", "A", "D", "C",
  "B", "C", "B", "C", "A",
  "D", "B", "C", "C", "C",
  "D", "A", "B", "D", "D"
];

const result = (event) => {
	event.preventDefault();
	const finalScore = resultDisplay.querySelector("span");
	
  let score = 0;
	let counter = 0;

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

	const checkAnswer = (userAnswer, index) => {
		const isRightAnswers = userAnswer === correctAnswers[index];
    const isWrongAnswers = score < 15
		
    if (isRightAnswers) {
			score += 5;
		}

		if (isWrongAnswers) {
			const tryAgain = document.querySelector(".tryAgainBtn");
			tryAgain.classList.remove("d-none");
			tryAgain.addEventListener("click", () => {
			location.reload();
			});
		}
	};

	const addScoreAnimation = setInterval(() => {
		scrollTo(0, 100);
		resultDisplay.classList.remove("d-none");

		if (counter === score) {
			clearInterval(addScoreAnimation);
		}

		finalScore.textContent = `Você acertou ${counter}% do Quiz!`;
		counter++;
	}, 150);

	userAnswers.forEach(checkAnswer);
};

form.addEventListener("submit", result);
