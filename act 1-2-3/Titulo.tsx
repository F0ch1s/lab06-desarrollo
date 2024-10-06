function Titulo() {
  const nombre = "Mundo";

  if (nombre) {
    return <p>Hola {nombre}</p>;
  }
  return <p> Hola mundo</p>;
}

export default Titulo;
