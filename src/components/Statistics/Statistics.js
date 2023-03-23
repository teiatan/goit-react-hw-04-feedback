import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Notification } from 'components/Notification/Notification';
import { Ul, Li, P, Div } from './Statistics.styled';

export function Statistics({good, neutral, bad}) {
    const [total, setTotal] = useState(0);
    const [positivePercentage, setPositivePercentage] = useState(0);

    useEffect(()=>{
        setTotal(good+neutral+bad);
        setPositivePercentage(Math.round(good/total *100));
    }, [good, neutral, bad, total]);
    
    return(<>
        {total === 0
        ?
        <Notification message="There is no feedback" />
        :
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
        }
    </>);
};

Statistics.propTypes = {
    good: PropTypes.number, 
    neutral: PropTypes.number, 
    bad: PropTypes.number,
}