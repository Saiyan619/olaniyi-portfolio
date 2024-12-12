import React from 'react'
import UiBtn from './Tools'
import MyToolsData from './MyToolsData'
import { motion } from 'framer-motion'
import './about.css'
import Tools from './Tools'


export default function About() {
 
  return (
    <div className='About-main-container'>
      
      <div className='about-left'>
     
        <motion.div  initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}>
          <h4>ABOUT ME</h4>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2, delay: 1 }}>
          <p>
            Hello👋, I'm Niyi a skilled Front-End Developer with a passion for creating seamless digital experiences. I enjoy transforming designs into functional, responsive websites and web apps.
                </p>
          <p>
            I'm always eager to learn and explore new technologies to deliver innovative solutions.
          </p>
      <p>I have 3 years total experience using various front-end technologies.</p>
      <p>Some of the few technologies i've worked with and still use:</p>
      </motion.div>
        <div className='tools_container'>
        {MyToolsData.map((item) => {
          return <Tools item={item} />
        })}
        </div>
        
        
      </div>
      
      <div className='about-right'>
        <img src='./avatar-1.png' alt='avatar-2' className='avatar-2'/>
        </div>
    
    </div>
  )
}
