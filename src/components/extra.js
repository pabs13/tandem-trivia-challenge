


// shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   return array;
//   }

//   //setting the state for selected question from the rendered question title cards
//     const randomIndexPosition = Math.floor(Math.random() * this.props.triviaContent.length - 1);
//     const trivia = this.props.triviaContent[randomIndexPosition];
//     const answers = trivia.incorrect.concat(trivia.correct);
//     console.log(answers);
//     // const randomAnswer = Math.floor(Math.random() * answers.length - 1;
//     const randomAnswer = this.shuffle(answers);
//     console.log(randomAnswer);