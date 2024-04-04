import React from 'react'
import { Element } from 'react-scroll';
// import skilling from '../../assets/skill1.jpg'
import './skill.css'

const skill = () => {
  return (
    <Element  className="skilltop" name="skills">
      <div>
           <div className='skill-heading'>
             <h1> Skills </h1>
             <p> My technical level </p>
           </div>
        <div className='skill-box'>
           <div className='skill-box1'>
             <h3> Fronte<span>nd</span> develop<span>er</span> </h3>
             <div className='skill-fr'>
                <div className='skill-f1'>
                    <p>&#x2611; HTML </p>
                      <h5>experts</h5>
                    <p>&#x2611; CSS </p>
                       <h5>experts</h5>
                    <p>&#x2611; Java Script</p>
                      <h5>experts</h5>
                </div>
                <div className='skill-f2'>
                    <p>&#x2611; Bootstrap</p>
                        <h5>experts</h5>
                    <p> &#x2611; Git </p>               
                        <h5>basic</h5>
                    <p> &#x2611; React JS </p>        
                        <h5> intermediate </h5>
                </div>
             </div>
           </div>
           <div className='skill-box2'>
             <h3> Backe<span>nd</span> Develop<span>er</span></h3>
             <div className='skill-ba'>
                <div className='skill-b1'>
                    <p> &#x2611; Python </p>
                      <h5> intermediate </h5>
                    <p> &#x2611; SQL </p>
                      <h5>experts</h5>
                    <p> &#x2611; .net </p>
                      <h5>basic</h5>
                </div>
                <div className='skill-b2'>
                    <p> &#x2611; MYSQL </p>
                      <h5>experts</h5>
                    <p> &#x2611; Django </p>
                      <h5>intermediate</h5>
                    <p> &#x2611; nodejs </p>
                      <h5>basic</h5>
                </div>
             </div>
           </div>
        </div>
      </div>
    </Element>
  )
}

export default skill;