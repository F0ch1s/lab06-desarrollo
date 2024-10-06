import React from 'react';
import './Boton.css'; // Puedes añadir un archivo CSS si quieres personalizar el estilo

const Boton = ({ texto, onClick }) => {
  return (
    <button onClick={onClick} className="boton">
      {texto}
    </button>
  );
};

export default Boton;
