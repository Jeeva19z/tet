import Header from "./Header";
// import Score from "./Score";
import Footer from "./Footer";
import Content from "./Content";
import AddItem from "./AddItem"
import { useState } from 'react'


function App() {


      
  const [items, setitems] =  useState([
      {
          id:1,
          checked:true,
          item:"Create todo"
      },
      {
          id:2,
          checked:false,
          item:"Chess playing"
      },
      {
          id:3,
          checked:true,
          item:"Book reading"
      }
  
  
  ])
  
  const handleCheck = (id)=>{
      const listItem = items.map(item=>item.id===id?{...item,checked:!item.checked}:item)
      setitems(listItem)
      localStorage.setItem("todo_list",JSON.stringify(listItem))
  }
  
  const handleDelete =(id)=>{
      const listItem = items.filter(item=>item.id!==id)
      setitems(listItem)
      localStorage.setItem("todo_list",JSON.stringify(listItem))
  
  
  }
const [newItem,setnewItem]=useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!newItem) return
    console.log("value entered")

    setnewItem('')

  }
  return (
    <div className="App">
      
     
      <Header />
      <AddItem 
      newItem={newItem}
      setnewItem={setnewItem}
      handleSubmit={handleSubmit}/>
      <Content
        
      items = {items}
      handleCheck={handleCheck}
      handleDelete = {handleDelete}
      
      
      />
      <Footer />

       
      
    </div>
  );
}

export default App;
