import React from 'react';
import { Link } from 'react-router-dom';

function Start(props) {
    return (
        <div className="start-page">
            <div className="content">
                <p>Test Your trivia skills</p>
                <Link to='/trivia' className="start-button" >Start Trivia</Link>
            </div>
        </div>
    );
}

export default Start;