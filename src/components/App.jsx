import { Section } from './Section/section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { state } from 'data/feedbackMarks';

export const App = () => {
  return (
    <>

      <Section name="feedback" title="Please leave feedback">
        <FeedbackOptions state={state}/>
      </Section>

      <Section name="statictics" title="Statictics">
        
      </Section>

    </>
  );
};
