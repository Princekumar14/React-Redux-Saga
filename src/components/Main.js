
import { AddToCart,RemoveFromCart, EmptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { ProductList } from '../redux/productAction';
import { useSelector } from 'react-redux';


function Main() {
    const dispatch = useDispatch();
    const data  = useSelector((state)=>state);
    console.warn("data in main component", data)
    const product = {
        name: 'i phone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    }
    return (
        <>
            <div>
                <button onClick={() => dispatch(AddToCart(product))} className="btn">Add to Cart</button>
            </div>
            <div>

                <button onClick={() => dispatch(RemoveFromCart(product.name))} className="btn">Remove to Cart</button>
            </div>
            <div>

                <button onClick={() => dispatch(EmptyCart())} className="btn">Empty Cart</button>
            </div>
            <div>

                <button onClick={() => dispatch(ProductList())} className="btn">Get Product List</button>
            </div>
        </>
    );
}

export default Main;
