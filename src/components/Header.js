import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContentHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`
const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'slabo 27px', serif;
    text-aligun: center;
`

const Header = ({title}) => {
    return (
        <ContentHeader>
            <TextHeader>{title}</TextHeader>
        </ContentHeader>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header;