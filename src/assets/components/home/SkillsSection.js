import React from 'react'
import skills from '../../data/Skill'
import SmallCard from '../SmallCard'
import TitleSection from '../TitleSection'
import styled from 'styled-components';

const SkillsStyles = styled.div`
    display:grid;
    grid-template-columns: repeat(4, 1fr);

    width:70%;
    margin:0 auto;

    @media only screen and (max-width:1000px){
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default function SkillsSection() {
  return (
    <>
        <TitleSection title="Mes compétences"/>
 
        <SkillsStyles>
            {skills.map((skill,index)=>{
                return <SmallCard key={index} icon={skill.icon} desc={skill.name}/>
            })}
        </SkillsStyles>

        
    </>
  )
}
