import { Component } from "react";
import PropTypes from 'prop-types';
import { Statistics } from "components/Statistics/Statistics";
import { Section } from "./Section/section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {

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
  
    onLeaveFeedback = key => {
      this.setState(prevState => {
        return { [key]: prevState[key] + 1 };
      });
    };

    handleGood = () => {
        this.setState(prevState => {
            return {
                good: prevState.good + 1,
            };
        });
    };

    handleNeutral = () => {
        this.setState(prevState => {
            return {
                neutral: prevState.neutral + 1,
            };
        });
    };

    handleBad = () => {
        this.setState(prevState => {
            return {
                bad: prevState.bad + 1,
            };
        });
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
        const { good, neutral, bad } = this.state;
        return (
            <>
              <Section name="feedback" title="Please, leave feedback">

                <FeedbackOptions 
                  options={Object.keys(this.state)}
                  onLeaveFeedback={this.onLeaveFeedback}
                />
                <ul>
                    <li><button type="button" onClick={this.handleGood}>good</button></li>
                    <li><button type="button" onClick={this.handleNeutral}>neutral</button></li>
                    <li><button type="button" onClick={this.handleBad}>bad</button></li>
                </ul>
              </Section>
              
              <Section name="statistics" title="Statistics">
                <Statistics 
                    good={good} 
                    neutral={neutral} 
                    bad={bad}
                    total={this.countTotalFeedback()}
                    positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              </Section>
            
            
            </>
        );
    }
};
