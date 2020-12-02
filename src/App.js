import './styles/App.css';
import Hero from './components/Home/Hero';
import imagen from './assets/filtros_nuevos2.jpg';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload..22
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>
    // <h1 className="rojo">Hola Mundo </h1>
    // <p>Este es mi E-commerce</p>
    // </div>
    <>
    <Hero/>
    <img src={imagen} alt="imagen" />
    </>
  );
}

export default App;
