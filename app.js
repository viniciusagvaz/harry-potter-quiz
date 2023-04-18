const form = document.querySelector("form");
const scoreDisplay = document.querySelector(".final-score");
const send = document.querySelector(".sendBtn");
const tryAgain = document.querySelector(".tryAgain");

const correctAnswers = ["B", "A", "A", "D", "C", "B", "D", "B", "C", "A", "D", "B", "C", "C", "C"];

scoreDisplay.style.display = "none";

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const totalScoreDisplay = document.querySelector(".final-score p");
	const userAnswers = [
		form.question1.value,
		form.question2.value,
		form.question3.value,
		form.question4.value,
		form.question5.value,
		form.question6.value,
		form.question7.value,
		form.question8.value,
		form.question9.value,
		form.question10.value,
		form.question11.value,
		form.question12.value,
		form.question13.value,
		form.question14.value,
		form.question15.value,
	];

	let score = 0;

	userAnswers.forEach((answer, index) => {
		const selectedAnswer = document.querySelector(`input[name='question${index + 1}']:checked`);

		const isCorrectAnswer = answer === correctAnswers[index];

		if (isCorrectAnswer) {
			score += 1;
			selectedAnswer.closest("label").classList.add("text-success", "fw-bolder");
			return;
		} else {
			selectedAnswer.closest("label").classList.add("text-danger", "fw-bolder");
		}
	});

	scoreDisplay.style.display = "block";
	send.style.display = "none";
	totalScoreDisplay.innerText = `${score} de 15`;

	if (score < 15) {
		tryAgain.style.display = "block";

		tryAgain.addEventListener("click", () => {
			document.location.reload();
		});
	}
});

tryAgain.style.display = "none";
