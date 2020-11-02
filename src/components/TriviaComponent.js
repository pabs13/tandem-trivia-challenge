import React, { Component } from 'react';
import {triviaContent} from './triviaContent'
import Finish from './FinishComponent'

class Trivia extends Component {
    constructor(props) {
        super(props);
        this.state = {
          triviaContent: triviaContent,
          questionCount: 0,
          score: 0,
          defaultClass: 'answer-button__default',
          disabled: false,
          correct: '',
          incorrect: '',
          finish: false,
          roundCount: 1
        };
    }

    nextQuestion(e) {
      let questionCount = this.state.questionCount

      if(questionCount < 10) {
        
        questionCount++

      }
      this.setState({
        questionCount: questionCount,
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

    newRound() {
      let roundCount = this.state.roundCount

      roundCount++

      this.shuffle(triviaContent)

      this.setState({
        questionCount: 0,
        score: 0,
        defaultClass: 'answer-button__default',
        disabled: false,
        correct: '',
        incorrect: '',
        finish: false,
        roundCount: roundCount
      })
    }

    checkAnswer(q) {
      let currentAnswer = this.state.triviaContent[this.state.questionCount].correct
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
      if (this.state.questionCount < 9) {
        return <button className="next-button" onClick={ event => this.nextQuestion() }>Next</button>
      } else {
        return (
          <div>
            <button onClick = { event => this.newRound()} className="next-button">Next Round</button>
            <button onClick = { event => this.finish()} className="next-button">End Game</button>
          </div>
        );
      }
    }

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }

    rednerAnswers(currentQuestion) {
      const answers = this.shuffle(currentQuestion.incorrect.concat(currentQuestion.correct));
      return(
        <div className="answers-button">
          {
            answers.map((q, i) => (
              <button
                disabled={this.state.disabled}
                className={`${ q === currentQuestion.correct ? this.state.correct : this.state.incorrect } answer-button__default`} 
                onClick={ (event) => this.checkAnswer(event) } >
                  {q}
              </button>
            ))
          }
        </div>
      );
    }

    render() {
      const currentQuestion = triviaContent[this.state.questionCount]
      // let randomAnswer = this.shuffle(answers);
        
      if (this.state.finish === false) {
        
        return (
          <div className="quiz-page">
            <div className="quiz-content">
              <div className="time-container">
                <h4>Round: {this.state.roundCount}</h4>
                <h4>Score: {this.state.score} out of 10</h4>
              </div>
              <div className="progress-container">
                <p>Question: {this.state.questionCount + 1} of 10</p>
                <progress value={this.state.questionCount + 1} max={10} className="progress"></progress>
              </div>
              <div className="display-content">
                <h3>{currentQuestion.question}</h3>
              </div>
              {this.rednerAnswers(currentQuestion)}
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