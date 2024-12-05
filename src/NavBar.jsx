import React from 'react'
import { useState, useEffect } from 'react';
import moment from 'moment';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa'; 
import './navbar.css'


export default function NavBar() {

  // Get the current time (e.g., "10:45:32 AM")
const currentTime = moment().format('hh:mm:ss A');

// Get the current date (e.g., "December 3, 2024")
const currentDate = moment().format('MMMM D, YYYY');


  const [isOpen, setOpen] = useState(false)
  // const [openMenu, setopenMenu] = useState(false)
  // const [isSticky, setIsSticky] = useState(false)
  function toggleMenu() {
    setOpen(!isOpen)
  }
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const halfScreen = window.innerHeight / 2;
  //     setIsSticky(window.scrollY >= halfScreen);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);
  
  return (
    // <div className={isSticky ? 'navbar-container_active' : 'navbar-container'}>
    <div>
{/* 
      
      <Link style={{textDecoration:"none"}} to='/'><h1>OLANIYI</h1></Link>
      
       
        
        <div className={openMenu ? 'menu-wrapper_active' : 'menu-wrapper'}>
        <ul className={openMenu ? 'menu' : 'menu_active'}>
          <div className='close-nav-btn' onClick={toggleMenu}><FaTimes /></div>
                 <li><Link onClick={toggleMenu} className='list-link' to='/'>Home</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/projects'>Project</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/about'>About</Link></li>
                 <li><Link onClick={toggleMenu} className='list-link' to='/contact'>Contact</Link></li>
          </ul>
          </div>
     
      <div className='open-nav-btn' onClick={toggleMenu}> <FiMenu size={40} style={{ position: "absolute", top: '50%', left: "50%", transform:"translate(-50%,-50%)"}} color="black" /></div>
        */}
      
      <div className='navbar_container'>
        <div><Link onClick={toggleMenu} className='list-link' to='/'><span>OLANIYI</span></Link></div>

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
