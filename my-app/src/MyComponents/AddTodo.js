import React, { useState } from 'react'

const AddTodo = ({addTodo}) => {

    const[task, setTask]=useState("");
    const[desc, setDesc]=useState("");

    const submit= (e)=>{
            e.preventDefault();

            if(!task ||!desc){
                alert("Task or Description can nor be blank");
            }
            addTodo(task,desc)

    }
    return (
        <div className='container my-3'>
            <h4>Add a Todo</h4>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="task" className="form-label">Todo Task</label>
                    <input type="text" value={task} onChange={(e)=>setTask(e.target.value)} className="form-control" id="task" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Todo</button>
            </form>
        </div>
    )
}

export default AddTodo
