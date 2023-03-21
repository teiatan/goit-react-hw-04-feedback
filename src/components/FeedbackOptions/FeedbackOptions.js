import PropTypes from 'prop-types';
import { Ul, Li, Button } from './FeedbackOptions.styled';


export function FeedbackOptions({options, onLeaveFeedback}) {
    return (  
        <Ul>
            {options.map(option => {
                return (
                    <Li key={option}>
                        <Button  type="button" name={option} onClick={onLeaveFeedback}>
                            {option}
                        </Button>
                    </Li>
                );
            })}
        </Ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};