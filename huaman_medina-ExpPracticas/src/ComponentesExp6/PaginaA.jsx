import React from 'react'
import { Link } from 'react-router-dom'

const PaginaA = () => {
  return (
    <>
        <header>
            <h1>Bienvenido a la pagina</h1>
            <nav> {/* Area que tiene los elementos Link, el equivalente a la etiqueta 'a' en html */}
                <Link to="/HomePage">Home</Link>
                <Link to="/ReactPage">React</Link>
                <Link to={"/Login"}>Login</Link>
            </nav>
        </header>
    </>
  )
}

export default PaginaA;