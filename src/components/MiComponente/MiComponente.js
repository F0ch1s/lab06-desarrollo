import React, { Component } from 'react';
import './MiComponente.css';

class MiComponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: this.props.mensaje // props para definir el estado inicial
    };
  }

  render() {
    return (
      <div>
        <h1 className='mi-componente'>{this.state.mensaje}</h1>
      </div>
    );
  }
}

export default MiComponente;
