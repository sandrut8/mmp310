class Question {
	constructor(question, answer, options) {

		this.answerAttempted = false;

		this.questionContainer = createElement('div', 'questionContainer');
		const questionHeader = createElement('h2', 'question', question);

		this.questionContainer.appendChild(questionHeader);

		const answers = createElement('div', 'answers');
		this.questionContainer.appendChild('answers');

		 const answerDiv = createElement('div', 'option', answer);
		 answer.appendChild(answerDiv);
		 answerDiv.addEventListener('click', funciton(){
		 	if (!this.answerAttempted){
				answerDiv.classList.add('correct-answer');
				this.answerAttempted = true;
				questionAnswered(true);
		  }

		 });

		 for (let i = 0; i < options.length; i++) {
		 	let option = createElement('div', 'option', options[i]);
		 	answers.appendChild(option);
		 }
}

	getHTML() {
		return this.questionContainer;

	}
}