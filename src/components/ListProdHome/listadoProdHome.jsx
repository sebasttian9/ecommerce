import Producto from '../Product/producto';

const Listado = () =>{

    return(

        <>
                 <h3 className="prodDestacados">Productos destacados</h3>
                 <div className="row col-12">
                    <Producto nombre='Bujia' precio='500' stock='10'/>
                    <Producto nombre='Alternador' precio='200' stock='15' />
                    <Producto nombre='Amortiguador' precio='350' stock='10'/>
                    <Producto nombre='Correa' precio='4500' stock='10'/>
                    <Producto nombre='Axial' precio='7000' stock='10'/>
                </div>
        </>
    );
}

export default Listado;