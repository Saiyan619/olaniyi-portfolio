import React from 'react'
import { motion } from 'framer-motion'
import './contact.css'


export default function Contact() {
  return (
    <div className='contact-container'>
      <motion.div initial={{ opacity: 0, x: -20 }}
      animate={ {opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}>
        <h5>Reach Out!</h5>
      </motion.div>
      
      <motion.div initial={{ opacity: 0, x: -20 }}
      animate={ {opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 1 }} className='contact-brief-container'>
      <p>Are You Interested In A Web Developer That Loves Fun Builds And Projects? Hit Me Up.
        I'm Open To Internsihps, Freelance, Part Time And Junior Developer Roles. Get In Touch With Me</p>
      </motion.div>
      
      <motion.div
        
          initial={{ opacity: 0, x: -20 }}
      animate={ {opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5, delay: 1.2 }} className='reachout-container'>
        <div className='gmail-container'>
          <img style={{width:"30px"}} src='/src/assets/icons8-gmail-48.png' alt='gmail' />
          <span>arokoyueb11@gmail.com</span>
        </div>
        
        <div className='phone-container'>
          <img style={{width:"30px"}} src='/src/assets/icons8-phone-48.png' alt='phone' />
          <span>08169615422</span>
          </div>
      </motion.div>
    </div>
  )
}
