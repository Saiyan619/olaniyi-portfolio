import React from 'react'
import UiBtn from './uiBtn'
import MyToolsData from './MyToolsData'
import { motion } from 'framer-motion'
import './about.css'


export default function About() {
  function createBtn(item) {
    return(<UiBtn
      key={item.id}
      name={item.name} />)
  }
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
      <p>Hello👋, my name is Niyi, I'm a Front-End Developer from Nigeria, West Africa, I'm an Undergraduate in the department of Urban and Regional Planning.</p>
      <p>I have 2 years total experience using various front-end technologies. and oh, i love foods, alot</p>
      <p>Some of the few technologies i've worked with and still use:</p>
      </motion.div>
      <div className='tools-container'>
        {MyToolsData.map(createBtn)}
        </div>
      </div>
      
      <div className='about-right'>
        <img src='./avatar-1.png' alt='avatar-2' className='avatar-2'/>
        </div>
    
    </div>
  )
}
