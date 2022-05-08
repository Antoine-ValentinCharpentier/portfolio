import React from 'react';
import styled from 'styled-components';
import personalInfos from '../data/PersonalInfoData';
import { AiTwotonePhone, AiOutlineMail } from 'react-icons/ai';
import { MdOutlinePlace } from 'react-icons/md';

const FooterStyle = styled.div`
    background-color: var(--deep-dark);
    
    padding-bottom: 5rem;
  
    .container {
        display: flex;
        gap: 5rem;
    }

    .footer_left_column ,.footer_right_column {
        width:50%;
        margin:0 auto;
    }

    .footer_left_column_title, .footer_right_column_title {
        font-size: 3rem;
        margin-bottom: 1rem;
    }

    .footer_left_column_title:after{
        content:' Charpentier';
        color: var(--blue)
    }

    .footer_right_column_title:after{
        content:' contact';
        color: var(--blue)
    }

    @media only screen and (min-width: 1000px) {
        padding-top: 5rem;
    }

    @media only screen and (max-width: 1000px) {
        .container {
            flex-direction: column;
            gap: 0rem;
            
            & > div {
                margin-top: 5rem;
            }
        }
    }
`;

const ContentStyles = styled.div`
    border-left: 3px solid var(--blue);
    padding-left: 2rem;

    max-width: 500px;
    margin: 0 auto;
    font-size: 1.8rem;
    line-height: 1.5em;
    text-align: justify;
    text-justify: auto;
    
    @media only screen and (max-width: 1000px){
        font-size: 1.4 rem;
    }

`;

const PhoneStyles = styled(AiTwotonePhone)`

    fill:var(--blue); 
    width:1em;
    height:1em;
`;

const EmailStyles = styled(AiOutlineMail)`
    fill:var(--blue); 
    width:1em;
    height:1em;
`;

const PlaceStyles = styled(MdOutlinePlace)`
    fill:var(--blue); 
    width:1em;
    height:1em;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <div className="container">
        <div className="footer_left_column">
          <h2 className="footer_left_column_title">Antoine-Valentin</h2>
          <ContentStyles>
              <p>Étudiant en première année du cycle ingénieur (BAC+3) en Informatique et Systèmes d'Information à l’Université de Technologie de Troyes.</p>
          </ContentStyles>
        </div>
        <div className="footer_right_column">
            <h2 className="footer_right_column_title">Informations de </h2>
            <ContentStyles>
                <ul>
                    <li><PhoneStyles/> {personalInfos.phone}</li>
                    <li><a href={"mailto:"+personalInfos.email} target="_blank" rel="noreferrer"><EmailStyles/> {personalInfos.email}</a></li>
                    <li><PlaceStyles/> {personalInfos.place}</li>
                </ul>
            </ContentStyles>
        </div>
      </div>
    </FooterStyle>
  )
}
