import {useState, useEffect} from 'react';
import Producto from '../Product/producto';


const ItemList = () =>{


    const [items, setItems] = useState([]);

    // constante es una API
    const  products = [

        {
            id: 1,
            titulo: 'Producto 1',
            descripcion: '',
            precio: 500
        },
        {
            id: 2,
            titulo: 'Producto 2',
            descripcion: '',
            precio: 500
        },
        {
            id: 3,
            titulo: 'Producto 3',
            descripcion: '',
            precio: 500
        },
        {
            id: 4,
            titulo: 'Producto 4',
            descripcion: '',
            precio: 500
        },
        {
            id: 5,
            titulo: 'Producto 5',
            descripcion: '',
            precio: 1000
        }
    ];

    const getProducts = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(products);
        },2000)
    } )

    useEffect(() => {
        getProducts.then(rta => setItems(rta));
    }, []);    
    
    useEffect (()=>{

        console.log(items);
        items.map(item => console.log(item));

    }, [items])

    return (

        <>
                         <div className="row col-12">
                     {
                         items.length ?
                         
                            items.map((item, index)=> (
   
                            <Producto 
                            key={item.id} 
                            nombre={item.nombre} 
                            precio={item.precio} 
                            stock='10'/>
                            
                            ))
                         :
                         <h5 className="col-12 text-center mt-5" >Cargando Items...</h5>
                     }

                    {/* <Producto nombre='Bujia' precio='500' stock='10'/>
                    <Producto nombre='Alternador' precio='200' stock='15' />
                    <Producto nombre='Amortiguador' precio='350' stock='10'/>
                    <Producto nombre='Correa' precio='4500' stock='10'/>
                    <Producto nombre='Axial' precio='7000' stock='10'/> */}
                </div>
        </>

    )
}


export default ItemList;