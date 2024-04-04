import React from 'react';
import {Link} from 'react-scroll';
import './Header.css';

const Header_p = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1> Pyth<span>on</span> Fullsta<span>ck</span> Develop<span>er</span></h1>
        </div>
        <div className='header__right'>

            <Link to="about" smooth={true} duration={500}>
                 <h3> About Me </h3>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
                 <h3> Skills </h3>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
                 <h3> Projects </h3>
            </Link>
            <Link to="experience" smooth={true} duration={500}>
                 <h3> Experience </h3>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
                 <h3> Contact </h3>
            </Link>
            <Link className='header__rightButton'>
            Join with me
            </Link>
            

        </div>
        

    </div>
  )
}

export default Header_p;