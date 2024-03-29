import React from 'react'
import styled from 'styled-components';

const TitleStyles = styled.div`
    background-color:var(--blue);
    width:60%;
    margin:0 auto;
    text-align:center;
    margin-top:7rem;
    margin-bottom:4rem;
    border-radius : 10px;
    padding-top:1rem;
    padding-bottom:1rem;
    p{
        font-size:3em;
        color: var(--title);
    }

    @media only screen and (max-width: 1000px) {
        width:70%;
        p{
            font-size:3em;
        }
    }

    @media only screen and (max-width: 400px) {
      margin-top:3rem;
      p{

        font-size:2em;
      }
    }
  }
`;

export default function TitleSection({title}) {
  return (
    <TitleStyles>
    <p>{title}</p>
    </TitleStyles>
  )
}
