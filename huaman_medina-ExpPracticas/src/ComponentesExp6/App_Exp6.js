import React, { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import PaginaA from './PaginaA';
import HomePage from './HomePage';
import ReactPage from './ReactPage';
import Login from './Login';
import PrivatePage from './PrivatePage';
import PrivateRoute from './PrivateRoute';
import AuthContext from './AuthContext';
import './Exp6.css';
import ReactDef from './ReactDef';

const AppExp6 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {/*Usado para que funcione mejor con el navegador*/}
        <BrowserRouter>
            <PaginaA/> {/*Cabecera*/}
            <Routes> {/* Contenedor de rutas */}
                <Route path='/HomePage' element={<HomePage/>}/>
                <Route path='/ReactPage' element={<ReactPage/>}/>
                  <Route path='/ReactDef' element={<ReactDef/>}/> {/* Ruta anidada */}
                <Route path='/Login' element={<Login/>} />
                <Route
                  path='/private'
                  element={
                    <PrivateRoute>
                      <PrivatePage />
                    </PrivateRoute>
                  }
                />
            </Routes>
        </BrowserRouter>
      </AuthContext.Provider>

    </>
  )
}

export default AppExp6;
