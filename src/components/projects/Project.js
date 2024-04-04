import React from 'react'
import { Element } from 'react-scroll';
import'./project.css'
import exp1 from '../../assets/photo-1498050108023-c5249f4df085.jpeg'
import exp2 from '../../assets/photo-1504639725590-34d0984388bd.jpeg'
import exp3 from '../../assets/photo-1520085601670-ee14aa5fa3e8.jpeg'
import exp from '../../assets/Animated-Video-Characters-In-eLearning-7-Tips.jpg'

const Project = () => {
  return (
   <Element name="projects">
   <section className='proj-sec'>
          <div className='proj-heading'>
             <h1>My Proje<span>cts</span> </h1>
             <p>As a python fullstack developer.I done in many projects in my trainee period.basic level and full projects done in frontend .I done in 2 projects in backend with database.</p>
          </div>
       <div className='proj-box'>
          <div className='proj-1'>
             <img src={exp} alt="" />
              <div className='pro'>
                 <h5> Online Food Resturant Website </h5>
                 <p> I Create a own Online Food Resturant website. to order the food in online to easy way and this project clone or inspered swigy and zomato </p>
                 <a href=""> see profile </a>
              </div>
          </div>
          <div className='proj-2'>
             <img src={exp2} alt="" />
              <div className='pro'>
                 <h5> Kiss Flow Clone </h5>
                 <p> I recreate a kiss flow website.Technology used in html,css,javascript and bootstrap.  </p>
                 <a href=""> see profile </a>
              </div>
          </div>
          <div className='proj-3'>
             <img src={exp3} alt="" />
              <div className='pro'>
                 <h5> Porfolio Website </h5>
                 <p> I create a my own portfolio website. technology used in react js. </p>
                 <a href=""> see profile </a>
              </div>
          </div>
          <div className='proj-4'>
             <img src={exp1} alt="" />
              <div className='pro'>
                 <h5> Bike Rental Website</h5>
                 <p> I create a own website.its full and fully a backend project for .technology used in python,sql and django. </p>
                 <a href=""> see profile </a>
              </div>
          </div>
          {/* <div className='proj-5'>
             <img src={exp} alt="" />
              <div>
                 <h5> card title</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad. </p>
                 <a href=""> see profile </a>
              </div>
          </div>
          <div className='proj-6'>
             <img src={exp} alt="" />
              <div>
                 <h5> card title</h5>
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad. </p>
                 <a href=""> see profile </a>
              </div>
          </div> */}
       </div>
   </section>
   </Element>
  )
}

export default Project;


