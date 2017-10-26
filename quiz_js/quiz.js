class Quiz {
	constructor( questions ) {
		this.correntQuestionIndex = 0;
		this.score = 0;
		this.questions = questions;
	}

	guess(answer) {
		if(this.getCorrentQuestion().isCorrectAnswer(answer)) {
			this.score++;
		}

		this.correntQuestionIndex++;
	}
	
	getCorrentQuestion() {
		return this.questions[this.correntQuestionIndex];
	}

	isEnded() {
		return this.correntQuestionIndex >= this.questions.length;
	}	
}