import PropTypes from 'prop-types';
import { Component } from "react";
import { Section } from "./Section/section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

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
    };
};
