import React from 'react'
import styled from 'styled-components';

const SubtitleStyles = styled.div`
    width:60%;
    margin: 4rem auto;
    text-align:center; 

    p {
        font-size:2em;
        width: 100%; 
        text-align: center; 
        border-bottom: 3px solid var(--details); 
        line-height: 0.1em;
        color: var(--details);

        span { 
            background-color: var(--first-bg);
            padding:2rem;
         }
     } 

     @media only screen and (max-width: 1000px) {
        width:70%;
    }

    @media only screen and (max-width: 500px) {
        p{
            font-size:1.5em;
        }
        width:70%;
    }

    @media only screen and (max-width: 400px) {
        width:100%;
    }
`;

export default function TitleSection({subtitle}) {
  return (
    <SubtitleStyles>
        <p><span>{subtitle}</span></p>
    </SubtitleStyles>
  )
}
