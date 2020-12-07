import './styles/App.css';
import Hero from './components/Home/Hero';
import Navbar from './components/Navbar/Navbar';
import imagen from './assets/gabtec-logo_135.gif';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

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
    <Navbar src={imagen}/>
    <Hero/>
    {/* <img src={imagen} alt="imagen" /> */}
    <button className="btn btn-primary">Primary</button>
    </>
  );
}

export default App;
