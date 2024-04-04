import React, { useState } from 'react'

const Todo1 = () => {
    const[todo,setTodo]=useState(" ");
    const[todo1,setTodo1]=useState([])
    const handleChange=(e)=>{
        setTodo(e.target.value)
    }
    const handleSumbit = (e)=>{
        e.preventDefault();
        let templist = todo1;
        templist.push(todo);
        setTodo1(templist);
        // console.log(todo1);
        setTodo(" ")
    }

  return (
    <div>
        <form onSubmit={handleSumbit}> 
            <input value={todo} onChange={handleChange} type="text" />
            <button type="submit">submit</button>

        </form >
        {todo1.map((val,index)=><h3 key={index}>{val}</h3>)}
    </div>
  )
}

export default Todo1;