import React, {useState, useEffect} from 'react'

function GreetingFunc(props) {
  
      const [username, setUsername] = useState(props.username)

      useEffect(() => {
        const timer = setTimeout(() => {
          setUsername('Alfonsina');
        }, 3000)
      }, [])
      
  return (
    <div className="Greeting">
        <p>Hola {username}</p>
    </div>
  )
}

export default GreetingFunc
