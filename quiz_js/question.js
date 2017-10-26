class Question {
	constructor( question, choices, correctAnswer ) {
		this.question = question;
		this.choices = choices;
		this.correctAnswer = correctAnswer;
	}
	
	isCorrectAnswer(choice) {
		return this.correctAnswer == choice;
	}
}

