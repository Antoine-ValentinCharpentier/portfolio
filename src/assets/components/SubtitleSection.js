import React from 'react'
import styled from 'styled-components';

const SubtitleStyles = styled.div`
    width:60%;
    margin:0 auto;
    text-align:center;
    margin-top:2rem;
    margin-bottom:2rem;
    p{
        font-size:2em;
        color: var(--white);
    }

    @media only screen and (max-width: 1000px) {
        width:70%;
        p{
            font-size:1.5em;
        }
    }
`;

export default function TitleSection({subtitle}) {
  return (
    <SubtitleStyles>
        <p>{subtitle}</p>
    </SubtitleStyles>
  )
}
