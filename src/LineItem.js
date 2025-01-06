import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item,handleCheck,handleDelete}) => {
  return (
   

<li >
       <div className='spertor-list'>

           <input className='tickbox' type="checkbox"
           checked={item.checked}

           onChange={()=>handleCheck(item.id)}
           />
          
            
           <label style={item.checked?{textDecoration:'line-through',color:'red'}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
           </div>
           <FaTrashAlt className='deletetn'
           role='button'
           tabIndex="0"
           aria-label={`Delete ${item.item}`}
           
           onClick={()=>handleDelete(item.id)}
           />




</li>

    
  )
}

export default LineItem