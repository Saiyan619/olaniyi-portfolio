import React from 'react'
import ProjectCard from './ProjectCard'
import projectsData from './projectsData'
import './projects.css'

// const StickyComponent = () => {
//   return (
//     <div className="sticky-component">
//       <h6>My Projects</h6>
//     </div>
//   );
// };

// const ScrollComponent = () => {
//   function createProjectCard(project) {
//     return (<ProjectCard
//       key={project.id}
//       name={project.name}
//       image={project.image}
//       overview={project.overview}
//       tools={project.tools}
//       link={project.link}
//     />)
//   }
//   return (
//     <div className="scroll-component">

//       {projectsData.map(createProjectCard)}

//     </div>
//   );
// };

export default function Projects() {
  // function createProjectCard(project) {
  //   return (<ProjectCard
  //     key={project.id}
  //     name={project.name}
  //     image={project.image}
  //     overview={project.overview}
  //     tools={project.tools}
  //     link={project.link}
  //   />)
  // }
  return (
    // <div className='main-project-container'>
    <div className="page-container">
      {/* <StickyComponent /> */}
      {/* <ScrollComponent /> */}

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
