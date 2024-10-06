import './App.css';
import MiComponente from './components/MiComponente/MiComponente';
import Titulo from './components/Titulo/Titulo';
import Parrafo from './components/Parrafo/Parrafo';
import Tabla from './Tabla/Tabla';
import Boton from './components/Boton/Boton';

function Saludo() {
  return <h1>Hola esta es una prueba de Rodrigo usando React</h1>;
}

function App() {
  const handleClick = () => {
    alert('¡Botón activo!');
  };

  return (
    <div>
      <MiComponente mensaje="¡Este es un mensaje pasado como prop!" />
      <Saludo />
      <Titulo texto="Esto es un título" />
      <Parrafo descripcion="Esto es un párrafo" />
      <Tabla />
      <Boton texto="Haz clic aquí" onClick={handleClick} />
    </div>
  );
}

export default App;
