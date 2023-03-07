import { Component } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "components/Statistics/Statistics";

export class Feedback extends Component {

    static defaultProps = {
        initialGood: 0,
        initialNeutral: 0,
        initialBad: 0,
    };

    static propTypes = {
        initialGood: PropTypes.number,
        initialNeutral: PropTypes.number,
        initialBad: PropTypes.number,
    };

    state = {
        good: this.props.initialGood,
        neutral: this.props.initialNeutral,
        bad: this.props.initialBad,
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
        console.log(this.countTotalFeedback());
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return (this.total = good + neutral + bad);
           
    };


    countPositiveFeedbackPercentage = () => {
        const { good, neutral, bad } = this.state;
        this.positivePercentage = Math.round((good / (good + neutral + bad)) * 100);

        if (this.positivePercentage) {
        return this.positivePercentage;
        } else {
        return 0;
        };
    };

    render() {
        return (
            <>
            <ul>
                <li><button type="button" onClick={this.handleGood}>good</button></li>
                <li><button type="button" onClick={this.handleNeutral}>neutral</button></li>
                <li><button type="button" onClick={this.handleBad}>bad</button></li>
            </ul>

            <Statistics 
                onGood={this.state.good} 
                onNeutral={this.state.neutral} 
                onBad={this.state.bad}
                onTotal={this.countTotalFeedback()}
                onPositivefeedback={this.countPositiveFeedbackPercentage()}
            />
            
            </>
        );
    }
};