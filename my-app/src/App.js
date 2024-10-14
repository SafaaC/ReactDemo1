import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import AddTodo from './MyComponents/AddTodo';
import Footer from './MyComponents/Footer'
import { useState } from 'react';

function App() {

  const onDelete =(todo) =>{
    console.log("I'm On delete of todo",todo);
    // Deleting data this way does not work
    // let index = todoslist.indexOf(todo);
    // todoslist.splice(index,1);
    setTodolist (todolist.filter((todoItem)=>{
        return todoItem!==todo;
    }

    ));

  }

  const addTodo=(task,desc)=>{
      console.log("addiing this todo", task,desc)
      let sno;
      if(todolist.length===0){ sno=1}
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

  const[todolist, setTodolist]= useState(
    [
      {
        sno: 1,
        task: "Excercise" ,
        desc:"Do basic wor outs"
      },
      {
        sno: 2,
        task: "Course",
        desc: "Do the online course of React"
      },
      {
        sno: 3,
        task: "Language",
        desc: "Improve the English Language and learn new language"
      },
  
    ]

  );

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
