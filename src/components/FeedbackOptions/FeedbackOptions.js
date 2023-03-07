import PropTypes from 'prop-types';


export function FeedbackOptions({options, onLeaveFeedback}) {
    return (  
        <ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button  type="button" name={option} onClick={() => {onLeaveFeedback(option);}}>
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};