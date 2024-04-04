import React from 'react'
import'./Topcontainer.css'
import { Element } from 'react-scroll'
import TopContent from '../topcontent/TopContent'

const Topcontainer = () => {
  return (
    <Element name="about" className='topContainer'>
      < TopContent />

    </Element>
  )
}

export default Topcontainer;