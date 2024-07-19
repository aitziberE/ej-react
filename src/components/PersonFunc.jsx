import React from 'react'

const PersonFunc = (props) => {
  return (
    <div>
      <p>Nombre: <span>{props.name}</span></p>
      <p>Apellido: <span>{props.surname}</span></p>
      <p>Edad: <span>{props.age}</span></p>
    </div>
  )
}

export default PersonFunc