import React from 'react'
import { Link } from 'react-scroll';
import'./TopContent.css'
// import exp1 from '../../components/'/

const TopContent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent1'>
          <h1> Mr.Manoj kum<span>ar</span></h1>
          <p> Python Fullstack Developer </p>
             <a href=''>
                <button className='but1'>Download CV </button>
                   <Link to="projects" smooth={true} duration={5000} >
                     <button className='but2'> my work </button>
                  </Link>
             </a>
        </div>
    </div>
  )
}

export default TopContent;