import PropTypes from 'prop-types';

export function Statistics({onGood, onNeutral, onBad, onTotal, onPositivefeedback}) {
    return(
        <>
            <ul>
                <li>Good: {onGood}</li>
                <li>Neutral: {onNeutral}</li>
                <li>Bad: {onBad}</li>
            </ul>
            <p>Total: {onTotal}</p>
            <p>Positive feedback: {onPositivefeedback}</p>
        </>
    );
};

Statistics.propTypes = {
    onGood: PropTypes.number, 
    onNeutral: PropTypes.number, 
    onBad: PropTypes.number,
}