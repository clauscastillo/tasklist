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
  
  const taskDone = (taskStatus) => {
    if (taskStatus == true) {
      setStatus('done')
      
    } else {
      setStatus('undone')
    }
  }
  


  return (
    <div>
      {list.map((task) =>
        <>
        <p className={status}>{task.title}</p>
        <input onChange={(evento)=> taskDone(evento.target.checked)} type="checkbox" name="" id="" />
        <p>{task.description}</p>
        <button className='btn btn-danger' onClick={() => deleteTask(task.id, task.status)}>Delete</button> 
        </>
        
      )
      }
    </div>
  ) 
}

export default Lista  