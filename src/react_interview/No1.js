import React, { useState } from 'react'

// class No1 extends React.Component{
//     render(){
//         return <h1>
//             message :{this.props.mess}
//             </h1>
//     }
// }

// export default No1 ;

// props are immutable => we cannot change the value...

// const No1 = ({topic,topic1}) => {
//   return (
//     <div> 
//         <h1> we have study weel and concetrate the {topic } and { topic1}</h1>
//     </div>
//   )
// }

// destructing method : 
const No1 = (props) => {
    const{topic,topic1}=props;
    const [count,setCount]=useState(0)
    const handleIncrease=()=>{
        setCount(count+1)
    }
    const [come,setUpdate]=useState(" ")
    const handleUpdate=()=>{
        setUpdate("september...!")
    }
   
    return (
        <div>
              <div> 
                  <h1> we have study weel and concetrate the {topic } and { topic1}</h1>¬
              </div>
              <div>
                <h2> Count value : {count}</h2>
                <button onClick={handleIncrease}> Increment </button>
              </div>
              <div>
                <h2> manoj coming his native in : {come}</h2>
                <button onClick={handleUpdate}> Update </button>
              </div>
        </div>
    )
  }


export default No1;