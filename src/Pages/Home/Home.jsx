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
      <div className='home_content_con'>
      <motion.div 
          initial={{ opacity: 0, x: -20 }}
      animate={{opacity: 1, x: 20 }}
      exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}  className='first_content'>
          <span>Hi, I am</span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
      animate={{opacity: 1, x: 20 }}
      exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }} className='second_content'>
          <span>OLANIYI AROKOYU</span>
        </motion.div>
        

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
      animate={{opacity: 1, x: 20 }}
      exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}  className='third_content'>
          <span>FRONTEND DEVELOPER - WEB3 DEVELOPER</span>
          <span></span>
        </motion.div>

        
        <div className='last_hero_content'>
          
          
          <span className='action_two'>
          <a href="/Arokoyu-Niyi-Ebenezer-Resume.pdf" download="Arokoyu-Niyi-Ebenezer-Resume.pdf">
  Download CV
</a>
          </span>
          
          
          <span ><Link className='action_one' to='/projects'>Check out my Works &rarr;</Link></span>

        </div>
        
      </div>
     
    
    </div>
  )
}
