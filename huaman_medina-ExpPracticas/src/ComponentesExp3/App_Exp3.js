import React, { Component } from 'react';
import '../App.css';
import Titulo from './Componente1';
import Table from './Table';
import   Boton1 from './Botones';

class AppExp3 extends Component {
  render() {
    const characters = [
        {
          name: 'Charlie',
          job: 'Janitor',
          age: 28,
        },
        {
          name: 'Mac',
          job: 'Bouncer',
          age: 36,
        },
        {
          name: 'Dee',
          job: 'Aspring actress',
          age: 27,
        },
        {
          name: 'Dennis',
          job: 'Bartender',
          age: 19,
        },
      ]
    
  return (
    <>
      <div className="App-header">
      <Titulo />
      </div>
      <div className="App-table">
      <Table characterData={characters} />
      </div>
      <div>
        <Boton1 />
      </div>
    </>
  )
  }
 }

export default AppExp3;
