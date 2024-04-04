import React from 'react'
import Header_p from './header/Header_p';
import Topcontainer from './topcontainer/Topcontainer';
import Skill from './skill/Skill';
import Project from './projects/Project';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import Footer from './footer/Footer';


const Main_P = () => {
  return (
    <div>
         < Header_p />
         <Topcontainer />
         <Skill />
         <Project />
         <Experience />
         <Contact />
         <Footer />
    </div>
  )
}

export default Main_P;