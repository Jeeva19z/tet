import React from 'react'
import { useState } from 'react'

const Score = () => {

    const [count, setCount] = useState(99)


const handlereduce = ()=>{
setCount(()=>count-1)
}


const handleincrese = ()=>{
    setCount(()=>count+1)
}
  return (
    <div>
        

    <button onClick={()=>handlereduce()}>-</button>
    {/* onClick={handlereduce}  it's work  */}

    <p >the score is right now {count}</p>
    <button onClick={()=>handleincrese()}>+</button>


    </div>
  )
}

export default Score