import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ButtonStyles = styled.div`
    margin-top: 2rem;
    
    .button {
        font-size: 2.2rem;
        background-color: ${(props) => props.btnBorder ? 'transperant' : 'var(--text)'};
        padding: 0.7em 2em;
        border: 2px solid var(--text);
        border-radius: 8px;
        display: inline-block;
        color: ${(props) => (props.btnBorder ? 'var(--text)' : 'var(--first-bg)')}; 
        &:hover{
          background-color: ${(props) => props.btnBorder ? 'transperant' : 'var(--blue)'};
          color: ${(props) => (props.btnBorder ? 'var(--blue)' : 'var(--second-bg)')};
          border: 2px solid var(--blue);
      }
    }
    @media only screen and (max-width: 1000px) {
        .button {
            font-size: 1.8rem;
        }
    }
`;

export default function Button({ btnLink = "Test", btnLabel="Test", btnBorder = false }) {
  return (
    <ButtonStyles btnBorder={btnBorder}>
      <Link className='button' to={btnLink}>{ btnLabel}</Link>
    </ButtonStyles>
  )
}
