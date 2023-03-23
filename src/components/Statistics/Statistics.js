import PropTypes from 'prop-types';
import { useState } from 'react';
import { Ul, Li, P, Div } from './Statistics.styled';

export function Statistics({good, neutral, bad}) {
    const [total, setTotal] = useState(good+neutral+bad);
    const [positivePercentage, setPositivePercentage] = useState(Math.round(good/total *100));

    return(
        <>
            <Ul>
                <Li>Good: {good}</Li>
                <Li>Neutral: {neutral}</Li>
                <Li>Bad: {bad}</Li>
            </Ul>
            <Div>
                <P>Total: {total}</P>
                <P>Positive feedback: {positivePercentage} %</P>
            </Div>
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