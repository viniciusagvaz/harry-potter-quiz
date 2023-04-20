const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = [
 "B", "B", "A",
 "D", "C", "B",
 "C", "B", "C",
 "A", "D", "B",
 "C", "C", "C"
];

const showResults = (event) => {
	event.preventDefault();

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
	];

	let score = 0;

	const addScore = (userAnswer, index) => {
		if (userAnswer == correctAnswers[index]) {
			score += 1;
		}
	};

	userAnswers.forEach(addScore);

	scrollTo(0, 100);

	finalResult.classList.remove("d-none");

	let counter = 0;

	const scoreAnimation = setInterval(() => {
		if (counter === score) {
			clearInterval(scoreAnimation);
		}

		finalResult.querySelector("span").textContent = `${counter} de 15`;

		counter++;
	}, 85);
  
  const tryAgain = document.querySelector(".tryAgainBtn");
  if (score < 15) {

    tryAgain.classList.remove("d-none");
    tryAgain.addEventListener("click", () => {
      location.reload();
    });
  }
};

form.addEventListener("submit", showResults);
