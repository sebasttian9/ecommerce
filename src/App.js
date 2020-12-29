import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import imagen from './assets/gabtec-logo_135.gif';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {useState, useEffect} from 'react';
import Listado from './components/ListProdHome/ListadoProdHome';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {

  return (
    <>
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
          <Route path="*">
            <Listado/>
          </Route>          
      </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
