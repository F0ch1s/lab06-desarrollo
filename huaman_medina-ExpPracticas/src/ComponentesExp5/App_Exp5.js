import React, { useEffect, useState } from 'react'

const AppExp5 = () => {

    //Se define el contador y su funcion de cambio, inicio en 0
    const [count, setCount] = useState(0);

    //UseEffect para modificar el titulo de la pagina cada vez que se aumentan los clicks
    useEffect(() => {
        document.title = `React App (${count})`;
    }, [count]//Lista de dependencias, useEffect actua cada vez que varia 'count'
    );

    //Funcion que aumenta el contador
    const addClick = () => {
        setCount(count + 1)
    }

    //Texto del componente
    return (
        <div>
            <h1>Contador de clicks</h1>
            <button onClick={addClick}>Clic </button>
            <p className='salida'> &lt; &lt; Has hecho clic {count} veces.  &gt; &gt;</p>
        </div>
    );
}

export default AppExp5;