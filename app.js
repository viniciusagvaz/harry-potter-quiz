const form = document.querySelector(".quiz-form");
const finalResult = document.querySelector(".result");
const send = document.querySelector("button .send");

const questions = [
	{
		id: 1,
		question:
			"Qual é o nome do professor ou professora de Transfiguração durante o período em que Harry estudou em Hogwarts",
		a: "Professor Quirinus Quirrel",
		b: "Professora Minerva McGonagoll",
		c: "Professor Gilderoy Lockhart",
		d: " Professora Rolanda Hooch",
	},
	{
		id: 2,
		question: "O endereço da casa em que cresceu Harry Potter é:",
		a: "Rua dos Alfeneiros, numero 4",
		b: "Rua dos Alfaneiros, numero 24",
		c: "Rua dos Alfedeiros, numero 4",
		d: "Rua dos Alfeneiros, numero 24",
	},
	{
		id: 3,
		question: "Ronald Weasley era o nome do irmão mais novo de:",
		a: "Fred e George",
		b: "Dino e Lino",
		c: "Gui e Arthur",
		d: "Lino e Fred",
	},
	{
		id: 4,
		question: "Qual era o nome da amiga da Corvinal de Harry e seus amigos ?",
		a: "D'lua Lovegood",
		b: "Luna Lonvigood",
		c: "D'lua Lovinggood",
		d: "Luna Lovegood",
	},
	{
		id: 5,
		question: "Qual destes presentes foi o primeiro dado a Harry por seu amigo Hagrid ?",
		a: "Uma vassoura Nimbus 2000",
		b: "A coruja Edwiges",
		c: "Um bolo de aniversário",
		d: "Uma capa de invisibilidade",
	},
	{
		id: 6,
		question: "Bicuço e Norberto são o nome de quê criaturas respectivamente ?",
		a: "Um hipogrifo e um dragão",
		b: "Um elfo doméstico e um dragão",
		c: "Um explosivim e um hipogrifo",
		d: "Um dragão e um hipogrifo",
	},
	{
		id: 7,
		question: "No segundo livro, seu amigo Dobby é o responsável por qual incidente ?",
		a: "Harry quebra a mão jogando Quadribol",
		b: "Harry perde os ossos do pé",
		c: "Harry é acusado de usar magia fora da escola",
		d: "Harry é envenenado",
	},
	{
		id: 8,
		question: "Qual o nome do primeiro par romântico de Hermione na série ?",
		a: "Ronald Weasley",
		b: "Vitor Krum",
		c: "Draco Malfoy",
		d: "Neville Longbottom",
	},
	{
		id: 9,
		question: "A qual casa pertence o aluno Simas Finnigan ?",
		a: "Lufa-lufa",
		b: "Corvinal",
		c: "Grifinória",
		d: "sonserina",
	},
	{
		id: 10,
		question: "Trevor é o nome de qual criatura em Harry Potter ?",
		a: "O sapo de Neville",
		b: "O gato de Hermione",
		c: "O rato de Rony",
		d: "O cachorro de Hagrid",
	},
	{
		id: 11,
		question: "Qual dessas duas alunas de Hogwarts não são jogadoras de Quadribol?",
		a: "Katie Bell e Cho Chang",
		b: "Angelina Jones e Anna Abbot",
		c: "Gina Weasley e Alícia Spinnet",
		d: "Susana Bones e Lilá Brown",
	},
	{
		id: 12,
		question: "Qual amigo Harry encontra por acaso na copa mundial de Quadribol?",
		a: "Dino Thomas",
		b: "Simas Finnigan",
		c: "Nevile Longbottom",
		d: "Lino Jordan",
	},
	{
		id: 13,
		question: " Qual desses alunos pertence a casa da Lufa Lufa?",
		a: "Pansy Parkinson",
		b: "Parvati Padma",
		c: "Justino Finch-Fletchey",
		d: "Gregório Goyle",
	},
	{
		id: 14,
		question: "Que tipo de criatura é Peeves(Pirraça) ?",
		a: "Uma assombração",
		b: "Um fantasma",
		c: "Um poltergeist",
		d: "Um bicho-papã",
	},
	{
		id: 15,
		question:
			"Quais são os animais que tomam forma do patrôno de Severo Snape e Hermione Granger respectivamente ?",
		a: " Uma cobra e uma lontra",
		b: "Uma cobra e um gato",
		c: "Uma corsa e uma lontra",
		d: "Um veado e uma corsa",
	},
	{
		id: 16,
		question: "'Príncipe Mestiço' é apelido de qual desses personagens ?",
		a: "Albus Dumbledore",
		b: "Tom Riddle",
		c: "Sirius Black",
		d: "Severo Snape",
	},
	{
		id: 17,
		question:
			"Qual desses personagens passa a jogar Quadribol profissionalmente após concluir os estudos em Hogwarts ?",
		a: "Gina Weasley",
		b: "Harry Potter",
		c: "George Weasley",
		d: "Draco Malfoy",
	},
	{
		id: 18,
		question: "Ainda sobre Quadribol, de qual time Ronny tem um poster pendurado em sua parede ?",
		a: "Holyhead Harpies",
		b: "Chudley Cannons",
		c: "Puddlemere United",
		d: "Appleby Arrows",
	},
	{
		id: 19,
		question: "Qual era o lema do Mapa dos Marotos ?",
		a: "Eu prometo solenemente que não farei nada de bom!",
		b: "Eu juro somente que não farei nada de bom!",
		c: "Eu prometo levemente que não farei nada de bom!",
		d: "Eu juro solenemente que não farei nada de bom!",
	},
	{
		id: 20,
		question: "Qual desses feitiços lançam raios vermelhos ?",
		a: "Sectumsempra",
		b: "Expelliarmus",
		c: "Flippendo",
		d: "Estupefaça",
	},
];

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

const printQuestions = () => {
	questions.forEach((question) => {
      const index = question.id
		const questions = question.question;
		const anwserA = question.a;
		const anwserB = question.b;
		const anwserC = question.c;
		const anwserD = question.d;


		document.querySelector("#questions").innerHTML += `                  
    <div id="question${index}" class="question">
   <p class="lead px-4 text-warning fw-bold px-4 my-5">
   ${index}. ${questions}
   </p>
   <div class="form-check my-2 px-5 text-white">
      <label class="form-check-label">
         <input type="radio" class="radio-color"
            name="inputQuestion${index}" value="A" />
            ${anwserA}
      </label>
   </div>
   <div class="form-check my-2 px-5 text-white">
      <label class="form-check-label">
         <input type="radio" class="radio-color"
            name="inputQuestion${index}" value="B" />
            ${anwserB}
      </label>
   </div>
   <div class="form-check my-2 px-5 text-white">
      <label class="form-check-label">
         <input type="radio" class="radio-color"
            name="inputQuestion${index}" value="C" />
            ${anwserC}
      </label>
   </div>
   <div class="form-check my-2 px-5 text-white">
      <label class="form-check-label">
         <input type="radio" class="radio-color"
            name="inputQuestion${index}" value="D" />
            ${anwserD}
      </label>
   </div>
`;
	});
};

printQuestions();
console.log(correctAnswers.length)
const getUserAnswers = () => {
	correctAnswers.map((_, index) => form[`inputQuestion${index}`].value);
};

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
	score = 0;
};

const result = (event) => {
	event.preventDefault();

	const userAnswers = getUserAnswers();

	resetUserScore();
	calculateUserScore(userAnswers);
	showFinalScore();
	animateFinalScore();
};

const showTryAgain = () => {
	const tryAgainBtn = document.querySelector(".tryAgainBtn");

	tryAgainBtn.classList.remove("d-none");

	tryAgainBtn.addEventListener("click", () => {
		finalResult.classList.add("d-none");
		form.reset();
	});
};

send.addEventListener("submit", result);
// printQuestions(getQuestions())
// alert(`AVISO IMPORTANTE:

//    Este Quiz deve ser encarado  APENAS como forma de estudo e de maneira alguma deve ser entendido como apoio as terríveis "políticas" e "opiniões" compartilhadas pela autora da obra.

// Toda a minha solidariedade a comunidade Trans \u{1F3F3}`)
