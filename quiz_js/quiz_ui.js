class QuizUI {
    displayNext() {
        if( quiz.isEnded() ) {
            this.displayScore();
        } else {
            this.displayQuestion();
            this.displayChoices();
            this.displayProgress();
        }
    }

    displayQuestion() {
        this.populateIdWidthHTML('question', quiz.getCorrentQuestion().question);
    }

    displayChoices() {
        let choices = quiz.getCorrentQuestion().choices;
        console.log(choices);
        for(let i = 0; i < choices.length; i++) {
            this.populateIdWidthHTML('choice'+i, choices[i]);
            this.guessHandler('guess'+i, choices[i]);
        }
    }

    displayScore() {
        let gameOverHTML = "<h1 class='page-header'>Game Over</h1>";
        gameOverHTML     += "<h2 class='alert alert-warning'>Your score is: ";
        gameOverHTML     += '<span class="badge">' +  quiz.score + '</span>';
        gameOverHTML     += '</h2><a href="/" class="btn btn-info">Repeat</a>';
        this.populateIdWidthHTML('quiz', gameOverHTML);
    }


    populateIdWidthHTML(id, text) {
        let element = document.getElementById(id);
        element.innerHTML = text;

    }

    guessHandler(id, guess) {
        let button = document.getElementById(id);
        button.onclick = () => {
            quiz.guess(guess);
            this.displayNext();
        }
    }

    displayProgress() {
        let correntQuestionNumber = quiz.correntQuestionIndex + 1;
        let progressHTML = 'Question ';
        progressHTML +=  '<span class="label label-success">';
        progressHTML +=  correntQuestionNumber + '</span>';
        progressHTML +=  ' of <span class="label label-danger">';
        progressHTML +=   quiz.questions.length + '</span>';
        this.populateIdWidthHTML('progress', progressHTML );
    }



}