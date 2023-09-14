
import { AddToCart, RemoveFromCart, EmptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList } from '../redux/productAction';
import { useEffect } from 'react';



function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductListData);
    console.warn("data in main component from saga", data)
    const product = {
        name: 'i phone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    }

    useEffect(() => {
        dispatch(ProductList())
    }, [])
    return (
        <>
            <div>

                <button onClick={() => dispatch(EmptyCart())} className="btn">Empty Cart</button>
            </div>
            
            <div className="product-container">
                {
                    data.map((item) => <div key={item.id} className="product-item">
                        <img src={item.photo} alt="" />
                        <div>Name: {item.name}</div>
                        <div>Color: {item.color}</div>
                        <div>Brand: {item.brand}</div>
                        <div>Price: {item.price}</div>
                        <div>Category: {item.category}</div>
                        <div>
                            <button onClick={() => dispatch(AddToCart(item))} className="btn">Add to Cart</button>
                            <button onClick={() => dispatch(RemoveFromCart(item.id))} className="btn">Remove to Cart</button>
                        </div>


                    </div>)
                }
            </div>
        </>
    );
}

export default Main;
