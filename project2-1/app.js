const startButton = document.getElementById('start');
const quizContainer = document.getElementById('quiz');

startButton.addEventListener('click', loadNextQuestion);

function loadNextQuestion() {

	const questionContainer = createElement('div', 'questionContainer');
	quizContainer.appendChild(questionContainer);

	const question = createElement('h2', 'question', "what is next question");
	
	questionContainer.appendChild('question');

	const answers = createElement('div', 'answers');
	questionContainer.appendChild(answers);

	const option1 = createElement('div', 'option', '8');
	const option2 = createElement('div', 'option', '5');
	const option3 = createElement('div', 'option', '4');
	answers.appendChild(option1);
	answers.appendChild(option2);
	answers.appendChild(option3);


}
function createElement(tagNamme, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.ass(className);
	elem.textContent = text;
	return elem;
}
