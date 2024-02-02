import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import './home.css'

export default function Home() {
  const [ref, InView] = useInView({
    triggerOnce: true,
    threshold:0.2
  })
  return (
    <div className='home-container'>

      <div className='home-first-part'>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
      animate={{opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }} className='home-first-part1'>
        <span className='shadow-text'>Hi</span>
        <span className='page-number'>01</span>
        <div className='line1'></div>
        <div className='line2'></div>
        <span className='home-under-line'>Home</span>
      </motion.div>

        <div className='home-first-part2'>
        
          <motion.div initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2, delay: 1 }} >
          <span className='im-word'>i'm</span>
          <h2><span className='first-name'>olaniyi</span> <br></br>
          <span className='last-name'>arokoyu</span></h2>
          </motion.div>
          
          <motion.div ref={ref}
          initial={{ opacity: 0, x: -20 }}
      animate={InView ? {opacity: 1, x: 0 } : {}}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
        <span className='my-profession'>A frontend web designer and developer</span>
        <p>I'm a passionate and creative web developer,with strong foundation
          in frontend technologies, I have a knack for turning ideas into beautifully crafted websites
          and web applications.
        </p>
        <p className='to-projects'>Check out <Link to='/projects'>My Projects</Link> </p>
        </motion.div>
        </div>
      
      </div>
      
      <div className='home-second-part'>
        <div>
          <img src='/src/assets/Saly-11.png' alt='avatar' className='avatar'/>
      </div>
    </div>
    
    </div>
  )
}
