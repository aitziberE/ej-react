import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reserve() {

  const initialState = {
    name: '',
    phone: '',
    date: '',
    hour: '',
    diners: '',
  }

  const [data, setData] = useState(initialState)

  const navigate = useNavigate()
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleInputChange = (event) => {
   /*  if (data.name.length + 1 < 3) {
      setMessage('Name must be at least 3 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setData({ ...data, [event.target.name]: event.target.value }) */
   }

  const clearState = () => {
    setData({ ...initialState })
   }
   
   const handleSubmit = (event) => {
    event.preventDefault()
    
    localStorage.setItem(`${data.phone}`, JSON.stringify({
      name: data.name,
      phone: data.phone,
      date: data.date,
      hour: data.hour,
      diners: data.diners,
      }))
  
    clearState()
    setTimeout(() => {
      navigate('/')
    }, 1000)
   }

  return (
    <div className='Reserve'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={handleInputChange}
          name="name"
        />
        <input
          type="number"
          placeholder="657255698"
          onChange={handleInputChange}
          name="phone"
        />
        <input
          type="date"
          onChange={handleInputChange}
          name="date"
        />
        <input
          type="time"
          onChange={handleInputChange}
          name="hour"
        />
        <input
          type="number"
          placeholder="diners"
          onChange={handleInputChange}
          name="diners"
        />
        <button type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
      </form>
    </div>
  )
}

export default Reserve