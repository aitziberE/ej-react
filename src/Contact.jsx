import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ContactFunc() {

  const initialState = {
    name: '',
    email: '',
  }

  const [data, setData] = useState(initialState)

  const navigate = useNavigate()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
    if (data.name.length + 1 < 3) {
      setMessage('Name must be at least 3 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setData({ ...data, [event.target.name]: event.target.value })
   }

  const clearState = () => {
    setData({ ...initialState })
   }
   
   const handleSubmit = (event) => {
    event.preventDefault()
    
    localStorage.setItem(`${data.email}`, JSON.stringify({
      name: data.name,
      mail: data.email,
      }))
  
    clearState()
    setTimeout(() => {
      navigate('/')
    }, 1000)
   }

  return (
    <div className='Contact'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="email"
          placeholder="email"
          onChange={handleInputChange}
          name="email"
        />
        <button type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
      </form>
    </div>
  )
}

export default ContactFunc