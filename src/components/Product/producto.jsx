import './producto.css';
import prod from '../../assets/26000-2A.jpg';
import ItemCount from '../ItemCount/ItemCount';
import {useState} from 'react';

function Producto({nombre,precio,stock}){

    const [count, setCount] = useState(1);

    const add = () => {

        console.log(stock,count);

            if(count<stock){
                setCount(count + 1);
            }else{
                alert('Stock Insuficiente!');
            }
    }

    const less = () => {

        if(count>0){

            setCount(count - 1);

        }
    }

    const CarroAdd = () => {

        alert('Agregado al carro, ' + count +' Unidad(es)');

    }

    return(

        <>
           <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="card anchoCard" >
                <img className="card-img-top" src={prod} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{nombre}  ${precio}</h5>
                    <p className="card-text">Stock : {stock}</p>
                    <ItemCount
                        count={count}
                        add={add}
                        less={less}
                    />
                    <a href="#!" className="btn btn-outline-primary btn-sm btn-block" onClick={() => CarroAdd()}>Agregar al carro</a>
                </div>
            </div>
          </div>
        </>

    );

}

export default Producto;