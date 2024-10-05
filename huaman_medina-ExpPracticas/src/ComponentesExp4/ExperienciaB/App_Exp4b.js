import React, { useState } from 'react';
import Table from './TableExp4'; // Asegúrate de la ruta correcta del archivo Table
import '../../App.css';

const AppExp4b = () => {
    // Utiliza useState para definir el estado
    const [characters, setCharacters] = useState([
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
          job: 'Aspiring actress',
          age: 27,
        },
        {
          name: 'Dennis',
          job: 'Bartender',
          age: 19,
        },
    ]);

    // Función para eliminar un personaje
    const removeCharacter = (index) => {
        // Actualiza el estado utilizando setCharacters
        setCharacters(characters.filter((character, i) => i !== index));
    };

    return (
        <div className="App-table">
            <Table characterData={characters} removeCharacter={removeCharacter} />
        </div>
    );
};

export default AppExp4b;