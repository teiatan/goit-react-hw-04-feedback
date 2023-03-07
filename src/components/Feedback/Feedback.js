import React from 'react';

export class Feedback extends React.Component {
    handleGood = () => {
        console.log("good");
    };

    handleNeutral = () => {
        console.log("neutral");
    };

    handleBad = () => {
        console.log("bad");
    };


    render() {
        return (
            <ul>
                <li><button type="button" onClick={this.handleGood}>good</button></li>
                <li><button type="button" onClick={this.handleNeutral}>neutral</button></li>
                <li><button type="button" onClick={this.handleBad}>bad</button></li>
            </ul>
        );
    }
};