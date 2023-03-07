import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return(
        <>
            {total === 0 ?
            (<Notification message="There is no feedback" />) :
            (<>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage} %</p>
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