import React from 'react'
import LineItem from './LineItem';


const ItemList = ({items,handleCheck,handleDelete}) => {
  return (
    <div>
         <ul className='list'>




{items.map((item)=>(

     <LineItem
     item={item}
     key={item.id}
     handleCheck = {handleCheck}
     handleDelete={handleDelete}
     />

))}

     

    </ul>
    </div>
  )
}

export default ItemList