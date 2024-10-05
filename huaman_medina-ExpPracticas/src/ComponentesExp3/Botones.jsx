const Boton1 = () => {
    
    let num = Number.parseInt(0);

    const aumentoNum = () =>{
        num = num + 1;
    }

    const muestraNum = () =>{
        console.log(num);
    }

    return(
        <div>
            <button onClick={e => aumentoNum()}>Boton aumento</button>
            <button onClick={e => muestraNum()}>Actualizar</button>
        </div>
    )
}

export default Boton1;