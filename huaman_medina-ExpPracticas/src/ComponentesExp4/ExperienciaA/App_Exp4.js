import React, { Component } from 'react';
import Table from '../../ComponentesExp3/Table'; // Asegúrate de la ruta correcta del archivo Table
import '../../App.css';

class AppExp4 extends Component {
    state = {
        characters: [
            { name: 'Charlie', job: 'Janitor', age: 28 },
            { name: 'Mac', job: 'Bouncer', age: 36 },
            { name: 'Dee', job: 'Aspiring actress', age: 27 },
            { name: 'Dennis', job: 'Bartender', age: 19 },
        ]
    }

    removeCharacter = (index) => {
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => i !== index),
        });
    }

    render() {
        const { characters } = this.state;
        return (
          <div className="App-table">
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
            </div>
        );
    }
}

export default AppExp4;
