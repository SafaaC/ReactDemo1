import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer'
import { useState,useEffect } from 'react';

function App() {
  let initTodo;
  
  if(localStorage.getItem("todolist") === null){
    initTodo=[];
    
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todolist"));
  }
  const onDelete =(todo) =>{
    console.log("I'm On delete of todo",todo);
    // Deleting data this way does not work
    // let index = todoslist.indexOf(todo);
    // todoslist.splice(index,1);
    setTodolist (todolist.filter((todoItem)=>{
        return todoItem!==todo;
    }
    
    ));
    localStorage.setItem("todolist",JSON.stringify(todolist));

  }

  const addTodo=(task,desc)=>{
      console.log("addiing this todo", task,desc)
      let sno;
      if(todolist.length === 0){ 
        sno =0;
      }
      else{
         sno= todolist[todolist.length-1].sno + 1;
      }
      const myTodo={
        sno :sno,
        task: task,
        desc : desc
      }
      setTodolist ([...todolist,myTodo]);
      console.log(myTodo);
  }

  const[todolist, setTodolist]= useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todolist",JSON.stringify(todolist));
  },[todolist])
  return (
    <>
      
      <Header title ="My Todos List"/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todolist} onDelete={onDelete}/>
      <Footer/>{/*  {Footer()} */}
    </>
  );
}

export default App;
