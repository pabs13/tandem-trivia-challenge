import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

class Trivia extends Component {
    constructor(props) {
        super(props);
    }

    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    return array;
    }

    //setting the state for selected question from the rendered question title cards
    randomTriviaContentGenerator() {
      const randomIndexPosition = Math.floor(Math.random() * this.props.triviaContent.length - 1);
      const trivia = this.props.triviaContent[randomIndexPosition];
      const answers = trivia.incorrect.concat(trivia.correct);
      console.log(answers);
      // const randomAnswer = Math.floor(Math.random() * answers.length - 1;
      const randomAnswer = this.shuffle(answers);
      console.log(randomAnswer);


      return (
        <div className="col-md-12 m-1">
          {/* renders the actual small card with only the question */}
            <Card>
              <CardTitle>{trivia.question}</CardTitle>  
              <div>
                <Button className="col-md-4 m-1">{randomAnswer[0]}</Button>
                <Button className="col-md-4 m-1">{randomAnswer[1]}</Button>
              </div>
              <div>
                <Button className="col-md-4 m-1">{randomAnswer[2]}</Button>
                <Button className="col-md-4 m-1">{randomAnswer[3]}</Button>
              </div>
            </Card>
        </div>
    );
    }

    //rendering the card once you select the question

    render() {
        return (
          <div className="container">
            <div className="row">
                {this.randomTriviaContentGenerator()}
            </div>
          </div>
        );
    }
}

export default Trivia;