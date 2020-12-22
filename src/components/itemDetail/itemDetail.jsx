import img from '../../assets/26000-2A.jpg';
import './itemDetail.css';

const ItemDetail = (prod) =>{

       console.log(prod.item[0]);

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
                            <span className="titulo">{prod.item[0].nombre} </span>

                        </div>                        
                        <div className="col-12 mt-4">
                            <span className="precio">Precio: <span className="precioValor">$ {prod.item[0].precio}</span> </span>

                        </div>
                        <div className="col-12 mt-3">
                            <span className="descripcion">Descripcion : 
                                <span className="descripcionTexto">
                                    {prod.item[0].descripcion}
                                </span>
                            </span>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        </>
    );
}

export default ItemDetail;