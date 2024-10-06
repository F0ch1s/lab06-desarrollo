import React from "react";
import "./Tabla.css";

const Tabla = () => {
    const personas = [
      { nombre: 'Rodrigo', edad: 18 },
      { nombre: 'Guillermo', edad: 20 },
      { nombre: 'Piero', edad: 25 },
      { nombre: 'Matias', edad: 28 }
    ];
  
    return (
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {/*  método map() para iterar sobre el arreglo */}
          {personas.map((persona, index) => (
            <tr key={index}>
              <td>{persona.nombre}</td>
              <td>{persona.edad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
export default Tabla;
