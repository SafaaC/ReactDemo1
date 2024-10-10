import React from 'react'

const Todo = (props) => {
  return (
    <div>
        
        <h6>{props.todo.task}</h6>
        <p>{props.todo.desc}</p>
        <button className='btn btn-sm btn-danger' onClick={()=>{props.onDelete(props.todo)}}>Delete</button>


    </div>
  )
}

export default Todo
