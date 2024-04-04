import React, { useEffect, useState } from 'react'


const Header = ({phone}) => {

     function work(){
      const name = ["easy","hard","very hard"]
      const random = Math.round(Math.random()*3)
      return name[random]
    }

    const years = new Date()

    const second ={backgroundColor:'blue',color:'white'}

    const handleButton = (sayan) =>{
        return console.log(" react is set of your memory level "+ sayan);
    }

    const insta = () =>{
        console.log("sayan_renesh !");
    }
    
    // const no = ["r15","bmw","ducati v4","ninjahr"]
    const[bikes,setBikes] =useState("")
    const duke = ()=>{
        return setBikes("ducativ4 panigle")
    }

    const[count,setCount]=useState(0)
    const handleAdd = ()=>{
        return setCount(count => count+1)
    }
    const handleSub = ()=>{
        return setCount(count => count-1)
    }

    const[yamaha,setYamaha]=useState(" ")

    const comingBike = ()=>{
        const no1 = ["bmw","ninjah2","ducati v4"]
        const no3 = Math.round(Math.random()*3)
          setYamaha(no1[no3])
    }
    // use effect.....
    useEffect(()=>{
        console.log("enku vela kadaikuma...");
    },[yamaha])

  return (

     <div>

        <header>
           <h2> Python fullstack developer </h2>
           <h3> my phone is {phone}</h3>
        </header>

        <section>
            <h2 style={second}> React 1st topic </h2>

        <p> react is very {work()} for cse students </p>

        <button onClick={ ()=> handleButton('manoj')}> amaa </button>

        </section>

        <section>
            <p> copyrights &copy; { years.getFullYear()} </p>
        </section>

        <article>
            <h1 onDoubleClick={insta}> manoj to insta name </h1>
        </article>

        <article>
            <h3> manoj upcoming bikes...{bikes}</h3>
            <button onClick={duke}> wait nd see. </button>
        </article>

        <article>
            <h1> count : {count} </h1>

            <button onClick={handleAdd}> increment </button>

            <button onClick={handleSub}> decrement </button>
        </article>

        <section>
            <h1> Manoj upcoming bikes : {yamaha} </h1>
            <button onClick={comingBike}> wait nd see. </button>
        </section>

     </div>
   
  )
}

export default Header;