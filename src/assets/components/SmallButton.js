import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SmallButtonStyles = styled.div`
    margin: 0.5rem;
    
    .button {
        font-size: 1.2rem;
        background-color: ${(props) => props.btnBorder ? 'transperant' : 'var(--gray-1)'};
        padding: 0.5em 1.5em;
        border: 2px solid var(--gray-1);
        border-radius: 8px;
        display: inline-block;
        color: ${(props) => (props.btnBorder ? 'var(--gary-1)' : 'var(--deep-dark)')};
        

        &:hover{
            background-color: ${(props) => props.btnBorder ? 'transperant' : 'var(--blue)'};
            color: ${(props) => (props.btnBorder ? 'var(--blue)' : 'var(--deep-dark)')};
            border: 2px solid var(--blue);
        }
    }
    @media only screen and (max-width: 1000px) {
        .button {
            font-size: 1.2rem;
        }
    }
`;

export default function Button({ btnLink = "Test", btnLabel="Test", btnBorder = false, outside=false}) {
  return (
    <SmallButtonStyles btnBorder={btnBorder}>
        { outside ? <a className='button' href={btnLink} target="_blank" rel="noreferrer">{ btnLabel}</a>: <Link className='button' to={btnLink}>{ btnLabel}</Link>}
    </SmallButtonStyles>
  )
}
