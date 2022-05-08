import React from 'react'
import TitleSection from '../TitleSection'
import ContactItem from '../Card'
import LanguageData from '../../data/LanguageData'
import styled from 'styled-components';

const LanguagesSectionStyles = styled.div`
    width:70%;
    display:flex;
    flex-direction:row;
    margin:3rem auto;

    @media only screen and (max-width:1000px){
        flex-direction:column;
        *{
            margin: 1rem auto;
        }
    }
`;

export default function LanguagesSection() {
  return (
    <>
      <TitleSection title="Langues"/>
      <LanguagesSectionStyles>
        {LanguageData.map((language,index)=>{
            return <ContactItem icon={<img src={language.img} alt=""/>} desc={
                    <ul>
                        <li>{language.label}</li>
                        {language.test !== "" ? 
                            <>
                                <li>Certification : {language.test}</li>
                                <li>Niveau : {language.level} ({language.score} pts)</li>
                                <li>Délivrée le : {language.dateIssue}</li>
                                <li>Validité : {language.periodValidity}</li>
                            </> : <li>{language.level}</li>
                        }
                    </ul>   
            }/>
        })}
      </LanguagesSectionStyles>
      
    </>
  )
}
