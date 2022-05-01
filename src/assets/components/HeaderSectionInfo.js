import React from 'react'
import styled from 'styled-components';

const InfoStyles = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.3em;
  text-align: justify;
  text-justify: auto;
  @media only screen and (max-width: 1000px){
    font-size: 1.4 rem;
  }
`;

export default function HeaderSectionInfo({ children }) {
  return (
    <InfoStyles>
        <p>{children}</p>
    </InfoStyles>
  )
}
