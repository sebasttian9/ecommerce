import './styles/App.css';
import Home from './components/Home/Hero';
import Navbar from './components/Navbar/Navbar';
import imagen from './assets/gabtec-logo_135.gif';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState} from 'react';
import {useEffect} from 'react';
import Listado from './components/ListProdHome/listadoProdHome';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const [nombre, setNombre] = useState('lalala');
  useEffect(() => {
    console.log('holaa');
    //efecto
    // return () => {
    //   cleanup
    // }
  }, [nombre]);

  return (
    <>
      
        <Navbar src={imagen}/>

        
         <Listado/>
        {/* <Home/> */}

      {/* <p>{nombre}</p>
      <input name="btnCambiar" id="" className="btn btn-primary" onClick={() => setNombre('Seba')} type="button" value="Cambiar nombre" /> */}

      
    </>
  );
}

export default App;
