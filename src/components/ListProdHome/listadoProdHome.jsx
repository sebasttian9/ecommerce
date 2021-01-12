import ItemList from '../itemList/ItemList';
import { useParams } from 'react-router-dom';
import {useState} from 'react';

const Listado = ({titulo}) =>{

    // const [title, setTitle] = useState(titulo);

    // const {id} = useParams();
    // if(id){
    //     //console.log(id,'id listado');
    //     const id2 = id.split('-');
    //     setTitle(id2[1]);
    // }
    return(

        <>
                 <h3 className="prodDestacados">{titulo}</h3>
                 <ItemList></ItemList>                
        </>
    );
}

export default Listado;