import Producto from '../Product/producto';

const Listado = () =>{

    return(

        <>
                 <h3 className="prodDestacados">Productos destacados</h3>
                 <div className="row col-12">
                    <Producto nombre='Bujia' precio='500'/>
                    <Producto nombre='Alternador' precio='200'/>
                    <Producto nombre='Amortiguador' precio='350'/>
                    <Producto nombre='Correa' precio='4500'/>
                </div>
        </>
    );
}

export default Listado;