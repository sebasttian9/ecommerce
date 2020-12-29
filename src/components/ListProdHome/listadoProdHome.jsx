import ItemList from '../itemList/ItemList';

const Listado = ({titulo}) =>{
    return(

        <>
                 <h3 className="prodDestacados">{titulo}</h3>
                 <ItemList></ItemList>                
        </>
    );
}

export default Listado;