import img from '../../assets/26000-2A.jpg';
import './itemDetail.css';
import { useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ItemDetail = (prod) =>{

       //console.log(prod.item);
        
       const history = useHistory();

       function activateLasers() {
           alert('Producto Agregardo');
         history.push("/cart");
       }



        // recibir parametro enviado por la ruta
       const {id} = useParams();

       useEffect(() => {
        console.log(id);

       }, [id]);

    return (



        // Detalle del producto (ficha de presentacion)
        <>
       
        <div className="container">
            <div className="row mt-4">
                <div className="col-8 text-center">
                    <img src={img} width="500" />

                </div>
                <div className="col-4">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <span className="titulo">{prod.item.titulo} </span>

                        </div>                        
                        <div className="col-12 mt-4">
                            <span className="precio">Precio: <span className="precioValor">$ {prod.item.precio}</span> </span>

                        </div>
                        <div className="col-12 mt-3">
                            <span className="descripcion">Descripcion : 
                                <span className="descripcionTexto">
                                    {prod.item.descripcion}
                                </span>
                            </span>

                        </div>
                        <div className="col-12 mt-3">
                            <button className="btn btn-success" onClick={activateLasers}>Agregar al Carro</button>
                            <Link to={'/'} className="btn btn-danger ml-3">Volver</Link>
                        </div>                        

                    </div>

                </div>
            </div>
        </div>

        </>
    );
}

export default ItemDetail;