import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import imagen from './assets/gabtec-logo_135.gif';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState} from 'react';
import Listado from './components/ListProdHome/ListadoProdHome';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {Store} from './store';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  const [data,setData] = useState({
    items: [],
    cantidad: 0,
  });


  return (
    <>
    <Store.Provider value={[data,setData]}>
      <BrowserRouter>
        <Navbar src={imagen}/>
        <Switch>
            <Route exact path="/">
              <Listado titulo="Productos destacados" />
            </Route>
            <Route exact path="/category/:id">
              <Listado titulo="Categoria" />
            </Route>          
            <Route path="/detail/:idProducto?"> {/* /:id -> (Parametro obligatorio), /:id? -> opcional */}
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <Cart/>
            </Route>          
            <Route path="*">
              <Listado/>
            </Route>          
        </Switch>
      </BrowserRouter>
    </Store.Provider>
    </>
  );
}

export default App;
