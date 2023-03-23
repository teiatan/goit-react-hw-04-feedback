import { useState } from "react";
import { Section } from "./Section/section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";
import { Notification } from 'components/Notification/Notification';

export function App() {

    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = event => {
        switch (event.target.textContent) {
            case "good":
                setGood(prevState => prevState + 1);
                break;
            case "neutral":
                setNeutral(prevState => prevState + 1);
                break;
            case "bad":
                setBad(prevState => prevState +1);
                break;
            default:
                return;
        };
    };

    const total = good + neutral + bad;
    const positivePercentage = Math.round(good/total *100);

    return (
        <>
            <Section name="feedback" title="Please, leave feedback">
                <FeedbackOptions 
                    options={["good", "neutral", "bad"]}
                    onLeaveFeedback={onLeaveFeedback}
                />                
            </Section>
            <Section name="statistics" title="Statistics">
                {total === 0 ?
                    <Notification message="There is no feedback" /> :
                    <Statistics 
                        good={good} 
                        neutral={neutral} 
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />
                }
            </Section>
        </>
    );
};
