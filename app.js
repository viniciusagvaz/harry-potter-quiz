const form = document.querySelector("form");
const scoreDisplay = document.querySelector(".final-score");

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

	// const finalScore = document.
	let score = 0;
	userAnswers.forEach((answer, index) => {
		if (answer === correctAnswers[index]) {
			score += 1;
      return
		}
	});
  
  // userAnswers.classList.add('text-success')
	scoreDisplay.style.display = "block";
	totalScoreDisplay.innerText = `${score} de 15`;
});
