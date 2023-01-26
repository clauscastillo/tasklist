import React from 'react'
import { useState } from 'react'

const Formulario = ({list, setList}) => {

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState(false)

  const id = list.length+1
  const formHandle = (event) => {
    event.preventDefault()
    const newTask = {
      id, title, description, status
    }
    setList([...list, newTask])
    
    
  }
  return (
    <div>
      <form onSubmit={formHandle}>
        <div className='mb-3 mt-3'>
          <label htmlFor="">Title</label>
          <input type="text" onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className='mb-3'>
        <label htmlFor="">Description</label>
        <input type="text" name="" id="" onChange={(event) => setDescription(event.target.value)} />
        </div>
        <button className='btn btn-primary mb-3' type="submit">Create Task</button>
      </form>
    </div>
  )
}

export default Formulario