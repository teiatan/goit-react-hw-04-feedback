import { Component } from "react";

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
  

    handleGood = () => {
        console.log("good");
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    handleNeutral = () => {
        console.log("neutral");
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    handleBad = () => {
        console.log("bad");
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
    };


    render() {
        return (
            <>
            <ul>
                <li><button type="button" onClick={this.handleGood}>good</button></li>
                <li><button type="button" onClick={this.handleNeutral}>neutral</button></li>
                <li><button type="button" onClick={this.handleBad}>bad</button></li>
            </ul>

            <span>Good: {this.state.good}</span>
            <span>Neutral: {this.state.neutral}</span>
            <span>Bad: {this.state.bad}</span>
            </>
        );
    }
};