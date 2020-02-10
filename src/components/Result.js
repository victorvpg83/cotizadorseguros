import React from 'react';
import styled from '@emotion/styled'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const Message = styled.p`
    background-color: rgb(127,224,237);
    margin-top: 2 rem;
    padding: 1 rem;
    text-align: center;
    font-size: 2rem;
    font-weigth: bold;
`

const DivMessage = styled.div`
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    position: relative;
    background-color: rgb(127,224,237);

`

const Result = ({cotization}) => {
    return (
    <DivMessage>
        <TransitionGroup component= 'span' className='result' >
            <CSSTransition classNames='result' key={cotization} timeout={{enter: 100, exit: 100}} >
                <Message>El total es: <span>{cotization}€</span> </Message>
            </CSSTransition>
        </TransitionGroup>
        
    </DivMessage> 
    );
};

Result.propTypes = {
    cotization: PropTypes.number.isRequired
}

export default Result;