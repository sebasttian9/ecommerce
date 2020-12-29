import {useState, useEffect} from 'react';
import Producto from '../Product/Producto';
import { useParams } from 'react-router-dom';


const ItemList = () =>{

    // recibo el parametro

    const {id} = useParams();


    const [items, setItems] = useState([]);

    // constante es una API
    const  products = [

        {
            id: 1,
            titulo: 'Bujia',
            category: '1',
            descripcion: '',
            precio: 1100
        },
        {
            id: 2,
            titulo: 'bujia 2',
            category: '1',
            descripcion: '',
            precio: 600
        },
        {
            id: 3,
            titulo: 'Amortiguador',
            category: '2',            
            descripcion: '',
            precio: 900
        },
        {
            id: 4,
            titulo: 'Axial',
            category: '3',            
            descripcion: '',
            precio: 800
        },
        {
            id: 5,
            titulo: 'Axial 2',
            category: '3',            
            descripcion: '',
            precio: 1000
        }
    ];

    const getProducts = new Promise((resolve, reject)=>{
        setTimeout(()=>{ resolve(products); },2000);
    } );


     const llamarProductos = () => {
        getProducts.then((resp) =>{
            const productosCategoria = resp.filter(produc => produc.category === id);
            if(productosCategoria.length>0){
                setItems(productosCategoria);
            }else{
                setItems(resp);
            }
        });
     }

    useEffect(() => { setItems([]); llamarProductos();} , [id]);    
    

    return (

        <>
                         <div className="row col-12">
                     {
                         
                         items.length > 0 ?
                         
                            items.map((item, index)=> (
   
                            <Producto 
                            key={item.id} 
                            id={item.id}
                            nombre={item.titulo} 
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