import React from 'react'
import styled from 'styled-components';

const Btn = styled.button`
    background-color: red;
    color: var(--primary-font-color);
    text-transform: capitalize;
    font-weight: 700;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    border: solid 2px transparent;
    border-radius: 9px;
    transition: background-color 0.25%;
    cursor: pointer;
    display: flex;

    &:hover {
        background-color: var(--primary-color-hover);
    }

    & div {
        font-size: 1em;
        margin: 0 0.5em -0.25em -0.25em;        
    }
`;

const ButtonStyled = ({ onClick, children, icon }) => {
    return (
        <Btn onClick={onClick}>
            {icon && <div>{icon}</div>}
            {children}
        </Btn>
    )
}


export default ButtonStyled
