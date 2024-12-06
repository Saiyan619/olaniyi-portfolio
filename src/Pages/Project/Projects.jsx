import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from './projectsData'
import './projects.css'

export default function Projects() {

  return (
    <div className="page-container">

      <div className='hero_text_card_container'>
      
      <div className='project-hero-text-con'>
        <h6>My Projects</h6>
        </div>
      <div>

        <div className='project_card_container_for_padding'>
        {projectsData.map((items) => {
          return (<ProjectCard
                key={items.id}
      name={items.name}
      image={items.image}
      overview={items.overview}
      tools={items.tools}
      link={items.link}
          />)
        })}
          </div>
        </div>
        
      </div>
      </div>
  )
}
