import ItemDetail from '../itemDetail/itemDetail';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

    // declaro el state
    const [prod, setProd] = useState([]);

    //recibo parametro del id del producto
    const {idProducto} = useParams();

    // constante es una API
    const  products = [

        {
            id: 1,
            titulo: 'Bujia',
            category: '1',
            descripcion: 'Resistencia normal',
            precio: 1100
        },
        {
            id: 2,
            titulo: 'bujia 2',
            category: '1',
            descripcion: 'Resistencia premiun',
            precio: 600
        },
        {
            id: 3,
            titulo: 'Amortiguador',
            category: '2',            
            descripcion: 'Delantero para chevrolet luv',
            precio: 900
        },
        {
            id: 4,
            titulo: 'Axial',
            category: '3',            
            descripcion: 'Tren delantero 1',
            precio: 800
        },
        {
            id: 5,
            titulo: 'Axial 2',
            category: '3',            
            descripcion: 'Tren delantero 2',
            precio: 1000
        }
    ];

    // creo una funcion que devuelva una promesa con un delay de 2 segundos
    const getProduct = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const productoDetail = products.find(product => product.id == idProducto);
            //console.log(productoDetail);
                resolve(productoDetail);
        },2000);
    });

    // Utilizo el UseEffect para setear el estado prod
    useEffect(() => {
        setProd([]);
        getProduct.then(rta => {setProd(rta); console.log(rta);});
        //console.log(prod,'despues del set');
        
    }, []);

    return (
        <>
        {
         prod!='' ? 
        <ItemDetail  item={prod} />
        :
        <h5 className="col-12 text-center mt-5" >Cargando Detalle...</h5>
        }
        </>
    )
};


export default ItemDetailContainer;

