import React from 'react'

const Mano1 = (props) => {
   const dummyClick =()=>{
        console.log("thanks for this...");
    }
  return (
    <>
    <h1> Restart Again.......</h1>

    <h2> hii  im {props.name}. im a {props.course}developer </h2>
    <h3>{props.children}</h3>

    {/* event handlind... */}

    <div>
        <button onClick={dummyClick}> welcome </button>
    </div>

    </>
  )
}

export default Mano1;