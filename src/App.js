import React from'react'
import'./App.css';


function App(){
 const[todos,setTodos]=React.useState([])
 const[todo,setTodo]=React.useState("")
 const[todoEditing, setTodoEditing]= React.useState(null)
 const[editingText, setEditingText]= React.useState("")




 function handleSubmit(e){

   e.preventDefault()
   const newTodo={
     id:new Date().getTime(),
      text:todo,
      completed:false,
   }
   setTodos([...todos].concat(newTodo))
   setTodo("")
  }

  function deleteTodo(id){
    const updatedTodos=[...todos].filter((todo) => todo.id!==id)
    setTodos(updatedTodos)
  }

  function toggleComplete(id){
    const updatedTodos = [...todos].filter((todo)=>{
      if(todo.id===id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  function editTodo (id){
    const updatedTodos = [...todos].map((todo)=>{
      if(todo.id ===id){
        todo.text = editingText
      }
      return todo
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("")
  }

return(
  <div className="App h-screen bg-gradient-to-b from-purple-200 to-red-200">

      <h1 className="font-mono pt-2 text-3xl">Todo List</h1>
      
        <div className='bg-white w-1/2 h-4/5 items-center justify-center h-screen ml-[330px] rounded-lg overflow-scroll'>
          <div className="h-[450px] overflow-scroll">
          {todos.map((todo)=><div key={todo.id}>
            <div class="text-xl flex space-x-20 flex justify-center">
              <input 
                  className='space-x-5 '
                  type="checkbox"   
                  onChange={()=>toggleComplete(todo.id)}
                  checked={todo.completed}/>
              <span>{todo.text}</span>
              <button onClick={() => deleteTodo(todo.id)}>&#10060;</button>  
            </div>
                 
          </div>)}
          </div>
          <div className="fixed bottom-2 ml-[230px]"> 
            <form onSubmit={handleSubmit}>
              
            <div>
              <input class="block rounded-lg px-2.5 pb-2.5 pt-2.5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 mb-1 peer" placeholder="Add new Todo"   type="text"onChange={(e)=>setTodo(e.target.value)}value={todo}/>
            </div>

            <div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-2 rounded-full" type="submit"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" /></svg></button>
            </div>
            
            </form>
          </div>
        </div>

  </div>



);
}
export default App; 