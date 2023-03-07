import PropTypes from 'prop-types';

export function Statistics({onGood, onNeutral, onBad}) {
    return(
        <ul>
            <li>Good: {onGood}</li>
            <li>Neutral: {onNeutral}</li>
            <li>Bad: {onBad}</li>
        </ul>
        
    );
};

Statistics.propTypes = {
    onGood: PropTypes.number, 
    onNeutral: PropTypes.number, 
    onBad: PropTypes.number,
}