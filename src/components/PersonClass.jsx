import React, { Component } from 'react'

export default class PersonClass extends Component {
  render() {
    return (
        <div>
            <p>Nombre: <span>{this.props.name}</span></p>
            <p>Apellido: <span>{this.props.surname}</span></p>
            <p>Edad: <span>{this.props.age}</span></p>
        </div>
    )
  }
}
