import './producto.css';
import prod from '../../assets/26000-2A.jpg';

function Producto({nombre,precio}){

    return(

        <>
           <div className="col-3">
            <div className="card anchoCard" >
                <img className="card-img-top" src={prod} alt="Card image cap"/>
                <div className="card-body">
                <h5 className="card-title">{nombre}  ${precio}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
          </div>
        </>

    );

}

export default Producto;