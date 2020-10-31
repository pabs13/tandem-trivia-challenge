import React, { Component } from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';

class Trivia extends Component {
    constructor(props) {
        super(props);
    }
    //setting the state for selected question from the rendered question title cards
    randomTriviaContentGenerator() {
      const randomIndexPosition = Math.floor(Math.random() * this.props.triviaContent.length - 1);
      const trivia = this.props.triviaContent[randomIndexPosition];
      return (
        <div className="col-md-5 m-1">
          {/* renders the actual small card with only the question */}
            <Card>
              <CardTitle>{trivia.question}</CardTitle>  
              <div>
                <Button>{trivia.incorrect[1]}</Button>
                <Button>{trivia.incorrect[2]}</Button>
                <Button>{trivia.incorrect[0]}</Button>
                <Button>{trivia.correct}</Button>
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