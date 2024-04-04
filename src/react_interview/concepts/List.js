import React, { useState } from 'react'

const List = () => {
    const items = ["sepal","shoe","formal dress"];
    const out = items.map((val,index)=> <h3 key={index} > {val}</h3> )

    const group = [
        {id:1,frontend:"reactjs",backend:"python"},
        {id:1,frontend:"javascript",backend:"mysql"},
        {id:1,frontend:"css",backend:"django"}
                    ];
    const group1 =  group.map((valu)=><h2 key={valu.id}> im a { valu.frontend } developer.and i learned  {valu.backend}</h2> )

    const[name,setName]=useState(" ");
    const handleChange =(e)=>{
        setName(
            e.target.value
        )
    }
    const handleSum = (e)=>{
        e.preventDefault();
        console.log({head:name});
    }
  return (
    <div>
        <div>
           {out}
        </div>
        <div>
            {group1}
        </div>
        <div>
            <form onSubmit={handleSum}>
                <input onChange={handleChange} type="text" value={name} placeholder={'enter your name : '}/>
                <button type='submit'>sumbit</button>
            </form>
        </div>
    </div>
  )
}

export default List;