import React from 'react'

import ItemList from './ItemList';




const Content = ({items,handleCheck,handleDelete})=>{


    return(
        <div>
            {items.length?(
           <ItemList 
           items={items}
           handleCheck={handleCheck}
      handleDelete = {handleDelete}
      
      />
        ) :(<p className='mt-200 text-center'>Your List is Empty</p>)}
        </div>
    )
}

export default Content