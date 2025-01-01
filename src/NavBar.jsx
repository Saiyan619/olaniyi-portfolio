import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import './navbar.css'


export default function NavBar() {

  const [currentTime, setCurrentTime] = useState(moment().format('hh:mm:ss A'));
  const [currentDate, setCurrentDate] = useState(moment().format('MMMM D, YYYY'));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format('hh:mm:ss A'));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const [isOpen, setOpen] = useState(false)

  function toggleMenu() {
    setOpen(!isOpen)
  }

  return (
    <div>
      
 
      
      <div className='navbar_container'>
        <div><Link className='list-link' to='/'><span>OLANIYI</span></Link></div>

        <div className='hamburger'>
        <Hamburger size={20}  toggled={isOpen} toggle={setOpen} />
        </div>
        
        <nav className={isOpen ? 'nav_active' : 'nav'}>
          <ul>
          <li><Link onClick={toggleMenu} className='list-link' to='/'>Home</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/projects'>Projects</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/about'>About</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/contact'>Contact Me</Link></li>
          </ul>
        </nav>

        <div className='time_date'>
          <span>{currentTime}</span>
          <span>{currentDate}</span>
        </div>
      </div>
    </div>
  )
}
