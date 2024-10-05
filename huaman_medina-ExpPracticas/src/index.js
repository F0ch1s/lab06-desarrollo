import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Importar app de experiencia 3
import AppExp3 from './ComponentesExp3/App_Exp3';

// Importar app de experiencia 4
import AppExp4 from './ComponentesExp4/ExperienciaA/App_Exp4';
import AppExp4b from './ComponentesExp4/ExperienciaB/App_Exp4b';

// Importar app de experiencia 5
import AppExp5 from './ComponentesExp5/App_Exp5';

//Importar app de experiencia 6
import AppExp6 from './ComponentesExp6/App_Exp6';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <StrictMode>
          {/*
          <AppExp3/>
          <AppExp4/>
          <AppExp4b/>
          <AppExp5/>
          */}
          <AppExp6/>
     </StrictMode>
);