import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SmallButtonStyles = styled.div`
    margin: 0.5rem;
    
    .button {
        font-size: ${(props) => props.big ? '2rem' : '1.5rem'};
        background-color: ${(props) => props.btnBorder ? 'transperant' : 'var(--text)'};
        padding: 0.5em 1.5em;
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
            font-size: ${(props) => props.big ? '1.7rem' : '1.2rem'};
        }
    }

    @media only screen and (max-width: 500px) {
        .button {
            font-size: 1.2rem;
        }
    }
`;

export default function Button({ btnLink = "Test", btnLabel="Test", btnBorder = false, outside=false, form=false, big=false}) {
  return (
    <SmallButtonStyles btnBorder={btnBorder} big={big}>
        {outside && <a className='button' href={btnLink} target="_blank" rel="noreferrer">{ btnLabel}</a>}
        { (outside === false && form === false) &&  <Link className='button' to={btnLink}>{ btnLabel}</Link>}
        { (outside === false && form === true) &&  <button className='button'>{ btnLabel}</button>}
    </SmallButtonStyles>
  )
}
