import React from 'react';
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ResumeContainer=styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color:#FFF;
    margin-top: 1rem;
` 

const Resume = ({data}) => {

    const {brand,year,plan} = data

    return (
    <ResumeContainer>
        <h2>Resumen de cotización</h2>
        <ul>
            <li>Marca: {brand}  </li>
            <li>Plan: {plan}  </li>
            <li>Año: {year} </li>
        </ul>
    </ResumeContainer>
    );
};

Resume.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resume;