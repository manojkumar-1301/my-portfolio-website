import React, { useState } from 'react' 

const ConditionalRendering = () => {
    const[first,setFirst] = useState(true)
    let output;
  if(first){
       output = <h1> Samreen...</h1>
  }else{
         output = <h2> suvii......</h2>
  }
  return <div>
        {output}
        </div> 
        
}

export default ConditionalRendering;