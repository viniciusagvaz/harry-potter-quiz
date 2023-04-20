const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");

const correctAnswers = ["B", "A", "A", "D", "C", "B", "D", "B", "C", "A", "D", "B", "C", "C", "C"];

form.addEventListener("submit", (event) => {
	event.preventDefault();

	let score = 0;
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

	userAnswers.forEach((userAnswer, index) => {
		if (userAnswer == correctAnswers[index]) {
			score += 1;
		}
	});

	scrollTo(0, 100);

	finalResult.classList.remove("d-none");

	let counter = 0;

	const timer = setInterval(() => {
		if (counter === score) {
			clearInterval(timer);
		}

		finalResult.querySelector("span").textContent = `${counter}%`;
		counter++;
	}, 85);
});