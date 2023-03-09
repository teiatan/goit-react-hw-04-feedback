import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';
import { Ul, Li, P, Div } from './Statistics.styled';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return(
        <>
            {total === 0 ?
            (<Notification message="There is no feedback" />) :
            (<>
                <Ul>
                    <Li>Good: {good}</Li>
                    <Li>Neutral: {neutral}</Li>
                    <Li>Bad: {bad}</Li>
                </Ul>
                <Div>
                    <P>Total: {total}</P>
                    <P>Positive feedback: {positivePercentage} %</P>
                </Div>
            </>)}
        </>
    );
};

Statistics.propTypes = {
    good: PropTypes.number, 
    neutral: PropTypes.number, 
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
}