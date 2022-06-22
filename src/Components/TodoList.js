

import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

import { FaEdit } from "react-icons/fa";


const TodoList = ({todos, setTodos, setEditTodo }) => {
   

    const handleEdit = ({id}) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setEditTodo(findTodo);
    }

    const handleDelete = ({id}) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

   

    
  return (
    <>
    <div>
      {todos.map((todo) => (
        <li className='list-item' key={todo.id}>
            <input type="text" 
            value={todo.title} 
            className='list '
            onChange={(event) => event.preventDefault()}/>
             <br/>
           
                
            
            <div>
           
                
                <button className='button-edit task-button'
                onDoubleClick={()=> handleEdit(todo)}>
                    <FaEdit/>
                    
                </button>&emsp;
                <button className='button-delete task-button'
                onClick={() => handleDelete(todo)}>
                    <FaTrashAlt/>
                </button>
            </div>
           
        </li>
        
        
      )
      
      )}
      { 
      todos.length === 0 ? <h1 className='alert'>There are no tasks to do!!</h1> 
      :
            <div>
                    
               <p className='left-todos'>You have {todos.length} tasks to do</p>
            </div>

      }
      
    </div>
    </>
  )
}

export default TodoList
