import { useState } from "react"
import React from 'react'

const Lista = ({list, setList}) => {


  const [status, setStatus] = useState('')


  const deleteTask = (taskToDelete) => {
      const filteredList = list.filter((tasksToStay) => {
        return tasksToStay.id !== taskToDelete
      })
      setList(filteredList)
    } 
  
  const taskDone = (taskStatus, taskIndex) => {
    if (taskStatus === true) {
      const newList = [...list];
      newList[taskIndex].status = true;
      setList(newList)
    } else {
      const newList = [...list];
      newList[taskIndex].status = false;
      setList(newList)
    }
  }
  


  return (
    <div>
      {list.map((task, index) => {
        const title = task.status ? 'done': 'undone';
        return (
          <>
          <p className={title}>{task.title}</p>
          <input onChange={(evento)=> taskDone(evento.target.checked, index)} type="checkbox" name="" id="" />
          <p>{task.description}</p>
          <button className='btn btn-danger' onClick={() => deleteTask(task.id, task.status)}>Delete</button> 
          </>
        )
        
        }   
      )
      }
    </div>
  ) 
}

export default Lista  