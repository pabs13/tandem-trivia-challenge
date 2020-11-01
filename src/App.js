import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Start from './components/StartComponent'
import Trivia from './components/TriviaComponent';

class App extends Component {

    render() {
        return (
            <Router>
              <Switch>
                <Route path="/" exact component={Start}/>
                <Route path="/trivia" component={Trivia}/>
              </Switch>
            </Router>
        );
    }
}

export default App;
