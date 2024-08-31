import React from 'react'
import {useState} from "react"
import '../TodoList/ToDoListCSS.css'
import Header from '../Component/header'
export default function ToDoListProject() {
    let [toDoList,setToDoList] = useState([]);
    let SaveToDoList =(event)=>{
      let value = event.target.InputValueGet.value;
      if(!toDoList.includes(value))
      {
        let uploadDataOnSetToDoList = [...toDoList,value];
        setToDoList(uploadDataOnSetToDoList);
      }
      else
      {
        alert("To Do list Already Exits")
      }
      
      event.preventDefault();
    }
    let updateDataIntoList = toDoList.map((data,index)=>{
        let sendTodoList = {
            toDoList,
            setToDoList,
            index
        }
             return(
              <ToDoListItems key={index} data={data} sendTodoList={sendTodoList}/>
             )
    })
    return (
      <div >
          <Header/>
          <h1>ToDo List</h1>
          <form onSubmit={SaveToDoList}>
              <input type="text" name="InputValueGet"/>
              <button>Save</button>
          </form>
  
          <div className='outerDiv'>
              <ul>
                  {updateDataIntoList}
              </ul>
          </div>
      </div>
    );
}

function ToDoListItems({data,sendTodoList})
{
  let deleteRow = ()=>{
    let filterTodoList = sendTodoList.toDoList.filter((i,j)=>j!=sendTodoList.index)
    sendTodoList.setToDoList(filterTodoList);
 
  }
  let [status,setStatus] = useState(false);
  let checkStatus=()=>{
    setStatus(!status)
  }
   return(
      <li className={status?"conpleteTodo":""} onClick={checkStatus}>({sendTodoList.index+1 }) {data} <span onClick={deleteRow}> &times;</span></li>
   )
}