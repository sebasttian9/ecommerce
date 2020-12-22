import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import imagen from './assets/gabtec-logo_135.gif';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState, useEffect} from 'react';
import Listado from './components/ListProdHome/listadoProdHome';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const [message, setmessage] = useState('');

// Promesa 
  // const task = new Promise((resolve, reject) =>{

  //   if(true){
  //     setTimeout(()=> {
  //         resolve('aca estan los datos');
  //     }, 3000);
  //   }else{
  //     reject('todo mal');
  //   }
  // })

  // task
  // .then(rta => setmessage(rta))
  // .catch(error => console.log(error))


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


         <ItemDetailContainer/>
      
    </>
  );
}

export default App;
