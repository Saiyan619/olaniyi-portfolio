import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa'; 
import './navbar.css'


export default function NavBar() {
  const [openMenu, setopenMenu] = useState(true)
  const [isSticky, setIsSticky] = useState(false)
  function toggleMenu() {
    setopenMenu(!openMenu)
  }
  useEffect(() => {
    const handleScroll = () => {
      const halfScreen = window.innerHeight / 2;
      setIsSticky(window.scrollY >= halfScreen);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className={isSticky ? 'navbar-container_active' : 'navbar-container'}>

      
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
       
    </div>
  )
}
