import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

export default function ProjectCard({key,
  name,
  image,
  overview,
  tools,
  link}) {
  const [ref, InView] = useInView({
    triggerOnce: true,
    threshold:0.2
  })
  return (
 
    <motion.div ref={ref}
        initial={{ opacity: 0, x: 20 }}
    animate={InView ? {opacity: 1, x: 0 } : {}}
    exit={{ opacity: 0, x: -10 }}
        transition={{ duration: 0.5, delay: 0.1 }} key={key} className='card_container'>
      <div className='card_img_container'><img src={image} alt="card_image" className='card_img' /></div>
      
      <div>
        <div className='title_link_container'> 
          <span>{name}</span>
           <a className='project-link' href={link} target="_blank" rel="noopener noreferrer">Go to Site</a>
          </div>

        <div className='overview_tools_container'>
          <span>{overview}</span>
          <span>Tools: {tools}</span>
        </div>
      </div>
    </motion.div>
  )
}
