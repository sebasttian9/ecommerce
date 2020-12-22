import ItemDetail from '../itemDetail/itemDetail';
import {useState, useEffect} from 'react';


const ItemDetailContainer = () => {

    const [prod, setProd] = useState([]);

    const producto = [{

        nombre: 'Bujia',
        precio: 4690,
        descripcion : 'Bujia para automoviles'
    }];

    // creo una funcion que devuelva una promesa con un delay de 2 segundos
    const getProduct = new Promise((resolve, reject)=>{
        setTimeout(()=>{
                resolve(producto);
        },2000);
    })

    // Utilizo el UseEffect para setear el estado prod
    useEffect(() => {
        getProduct.then(rta => setProd(rta));
    }, [])

    return (
        <>
        {
         prod.length ? 
        <ItemDetail  item={prod} />
        :
        <h5 className="col-12 text-center mt-5" >Cargando Detalle...</h5>
        }
        </>
    )
};


export default ItemDetailContainer;

