function Hero() {

    const saludar = () => { alert('Holaaa');}

    return(
        <>
            <h1>Hola soy Hero</h1>
            <button onClick={saludar}>Saludar</button>
        </>

    );
}

export default Hero;