import React from 'react'
import Todo from './Todo';

const Todos = (props) => {
  return (
    <div className='container'>
      <h4 className=' my-4'>Todo List</h4>

        {props.todos.length === 0? "No Todos to Display" :

          props.todos.map((todo)=>{
      
              return <Todo todo={todo} key = {todo.sno} onDelete={props.onDelete}/>
          })
        }    
    </div>
  )
}

export default Todos;
