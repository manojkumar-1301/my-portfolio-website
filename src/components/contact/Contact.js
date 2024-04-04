import React from 'react'
import { Element } from 'react-scroll';
import './contact.css'

const Contact = () => {
  return (
    <Element name="contact">
        <div className='contact_1'>
            <div className='box-1'>
                {/* <div> */}
                     <h2>Manoj Kum<span>ar</span> </h2>
                     <h4> Full Stact Developer</h4>
                {/* </div> */}
            </div>
            <div className='box-2'>
                    <h2>Pag<span>es</span></h2>
                    <h4>About Me</h4>
                    <h4>Skills</h4>
                    <h4>Projects</h4>
                    <h4>Exerience</h4>
                    <h4>Contact</h4>
            </div>
            <div className='box-3'>
                    <h2>Conta<span>ct</span></h2>
                    <h4>manokumar@1301gmail.com</h4>
                    <h4>Navalur,Chennai</h4>
                    <h4>6369108003</h4>
            </div>
            <div className='box-4'>
                    {/* <p>sayan_renesh</p>
                    <p>git</p> */}
                  <div>
                    <img src="./png" alt="" />
                  </div>
            </div>
        </div>

    </Element>
  )
}

export default Contact;