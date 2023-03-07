import { Section } from './Section/section';
import { Feedback } from './Feedback/Feedback';
//import { state } from 'data/FeedbackOptions';

export const App = () => {
  return (
    <>

      <Section name="feedback" title="Please leave feedback">
        <Feedback />
      </Section>

      <Section name="statictics" title="Statictics">
        
      </Section>

    </>
  );
};
