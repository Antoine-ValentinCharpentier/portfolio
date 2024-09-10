import React from 'react'
import Footer from '../components/Footer'
import ProjectsSection from '../components/project/ProjectsSection'
import TitleSection from '../components/TitleSection'
import projectData from '../assets/data/ProjectsData'

export default function Projects() {
  return (
    <> 
      <TitleSection title="Mes projets personnels & Pédagogique "/>
      {projectData.map((project,index)=>{
          return <ProjectsSection key={index} subtitle={project.category} listProjects={project.listProjects}/>
      })}
      <Footer/>
    </>
  )
}
