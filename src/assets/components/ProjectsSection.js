import React from 'react'
import ProjectCard from './ProjectCard'
import SubtitleSection from './SubtitleSection'
import styled from 'styled-components';

const CardsStyles = styled.div`

  display:flex;
  flex-direction : column;
  margin-bottom: 5rem;
  width: 60%;
  margin: 3rem auto;

  @media only screen and (max-width: 1000px) {
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
  }
`;
export default function ProjectsSection({subtitle, listProjects}) {
  return (
    <>
        <>
            <SubtitleSection subtitle={subtitle}/>
            <CardsStyles>
              {listProjects.map((project,index)=>{
                  return <ProjectCard index={index} project={project}/>
              })}
            </CardsStyles>
        </>
    </>
  )
}
