import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

const Listado = ({titulo}) =>{

    const {id} = useParams();

    let titulo2 = id ? id : titulo;

    return(

        <>
                 <h3 className="prodDestacados">{titulo2}</h3>
                 <ItemList></ItemList>                
        </>
    );
}

export default Listado;