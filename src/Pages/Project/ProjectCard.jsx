import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export default function ProjectCard(props) {
  const [ref, InView] = useInView({
    triggerOnce: true,
    threshold:0.2
  })
  return (
      <motion.div ref={ref}
      initial={{ opacity: 0, x: -20 }}
  animate={InView ? {opacity: 1, x: 0 } : {}}
  exit={{ opacity: 0, x: 20 }}
      transition={{ duration: 0.5, delay: 0.1 }} className='main-card-container'>
          <div className='card'>
              
                  <img src={props.image} alt='pics' className='project-img'/>
            
              <div className='project-details'>
          <span>{props.name}</span>
          <a className='project-link' href={props.link} target="_blank" rel="noopener noreferrer">go to site</a>
                  <p>{props.overview}</p>
                  <p>Tools: {props.tools}</p>
              </div>
              <div className='project-btn'></div>
          </div>
    </motion.div>
  )
}
