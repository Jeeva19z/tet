import React from "react";
import { FaPlus } from "react-icons/fa";

const AddItem = ({newItem,setnewItem,handleSubmit})=>{
    return(
        <form className="form" onSubmit={(e)=>handleSubmit(e)}>

        <input type="text"
               placeholder="Add Item"
               autoFocus
               required
               id="additem"
               value={newItem}
               onChange={(e)=>setnewItem(e.target.value)}
        />
        <button type="submit"
                aria-label="Add item">
                    <FaPlus />
        </button>
        






        </form>
    )
}

export default AddItem