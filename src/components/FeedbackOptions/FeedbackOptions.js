import PropTypes from 'prop-types';

export function FeedbackOptions({state}) {
    return (
        <ul>
            {Object.keys(state).map((element) => {
                return (
                    <li key={element}>
                        <button type="button">{element}</button>
                    </li>
                    );
          })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    state: PropTypes.object,
}