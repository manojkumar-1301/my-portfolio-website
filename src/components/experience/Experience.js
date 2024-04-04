import React from 'react'
import { Element } from 'react-scroll';
import './experience.css'
import exp from '../../assets/Animated-Video-Characters-In-eLearning-7-Tips.jpg'

const Experience = () => {
  return (
    <Element name="experience">
       <div className='exp-box'>
        <div className='exp-img'>
          <img src={exp} alt="photo varum" />
        </div>
        <div className='exp_content'>
             <h1> Pyth<span>on</span> FullSta<span>ck</span>  Develop<span>er</span>  </h1>
             <h3> HTML / CSS / JAVA SCRIPT / BOOTSTRAP / REACT JS  PYTHON / MYSQL / DJANGO </h3>
             <p>Im manoj kumar having a 8 months experiences as a trainee at besant technologies chennai with cetrification  Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi iusto pariatur distinctio minima quia veniam quis, eveniet corporis obcaecati labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat eos modi reprehenderit, et id laborum ipsum sunt praesentium temporibus mollitia! </p>
         </div>
       </div>
    </Element>
  )
}

export default Experience;