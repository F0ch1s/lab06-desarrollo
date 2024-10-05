import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const ReactPage = () => {
  return (
    <>
        <h1>REACT PAGE</h1>
        <div>
        <Link to={"/ReactDef"}>Definicion de React</Link>
        </div>
        <Outlet/>
    </>
  )
}

export default ReactPage;