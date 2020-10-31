import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Trivia from './components/TriviaComponent';
import { TRIVIA_CONTENT } from './shared/triviaContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        triviaContent: TRIVIA_CONTENT
    };
  }
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Trivia Challenge</NavbarBrand>
                </div>
                </Navbar>
                <Trivia triviaContent={this.state.triviaContent}/>
            </div>
        );
    }
}

export default App;
