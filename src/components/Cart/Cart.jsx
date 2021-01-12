import {useContext} from 'react';
import {Store} from '../../store';

const Cart = () =>{

    const [data,setData] = useContext(Store);

    return (
        <>
        <h1>Soy el carrro!!</h1>
        {
            data.items.map(item => {
                <h3>{item.item.titulo}</h3>
            })
        }
        </>
    );
}

export default Cart;