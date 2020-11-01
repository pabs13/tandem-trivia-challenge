import React, { Component } from 'react';
import {triviaContent} from './triviaContent'
import Finish from './FinishComponent'

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          triviaContent: triviaContent,
          index: 0,
          score: 0,
          defaultClass: 'answer-button__default',
          disabled: false,
          correct: '',
          incorrect: '',
          finish: false
        };
    }
    nextQuestion(e) {
      let i = this.state.index
      if ( i < 10 ) {
        i++
      }
      this.setState({
        index: i,
        disabled: false,
        defaultClass: this.state.defaultClass,
        correct: '',
        incorrect: ''
      })
    }

    finish() {
      this.setState({
        finish: true
      })
    }

    checkAnswer(q) {
      let currentAnswer = this.state.triviaContent[this.state.index].correct
      let score = this.state.score

      if (q.target.innerText === currentAnswer) {
        score++
        this.setState({
          score: score,
          disabled: true,
          correct: 'answer-button__correct',
          defaultClass: ''
        })
      } else {
        this.setState({
          incorrect: 'answer-button__incorrect',
          defaultClass: '',
          disabled: true,
          score: score,
          correct: 'answer-button__correct'
        })
      }
    }

    renderNextButton() {
      if (this.state.index < 10) {
        return <button className="next-button" onClick={ event => this.nextQuestion() }>Next</button>
      } else {
        return <button onClick = { event => this.finish()} className="next-button">Finish</button>
      }
    }

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    render() {
      
      const currentQuestion = triviaContent[this.state.index]
      const answers = currentQuestion.incorrect.concat(currentQuestion.correct);
      const randomAnswer = this.shuffle(answers);

      if (this.state.finish === false) {
        return (
          <div className="quiz-page">
            <div className="quiz-content">
              <div className="progress-container">
                <p>Question: {this.state.index + 1} of 10</p>
                <progress value={this.state.index + 1} max={10} className="progress"></progress>
              </div>
              <div className="display-content">
                <h3>{currentQuestion.question}</h3>
              </div>
              <div className="answers-button">
                {
                  randomAnswer.map((q, i) => (
                    <button
                      disabled={this.state.disabled}
                      className={`${ q === currentQuestion.correct ? this.state.correct : this.state.incorrect } answer-button__default`} 
                      onClick={ (event) => this.checkAnswer(event) } >
                        {q}
                    </button>
                  ))
                }
              </div>
              {this.renderNextButton()}
            </div>
          </div>
        );
      } else {
        return <Finish score={this.state.score} triviaContent={triviaContent} />
      }
    }

}

export default Trivia;