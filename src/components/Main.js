
import { AddToCart, RemoveFromCart, EmptyCart } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
import { ProductList, fetchedProductList } from '../redux/productAction';

import { useEffect, useState } from 'react';
// import PaginationOfItems from './components/PaginationOfItems';
import PaginationOfItems from './PaginationOfItems';


function Main() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.ProductListData);
    const [items, setItems] = useState(data)
    console.log("hi", data)
    // console.warn("data in main component from saga", data)
    const product = {
        name: 'i phone',
        type: 'mobile',
        price: 10000,
        color: 'red'
    }

    
   
   let currentPage;
    const handlePageClick = (data) => {
        console.log("user clicked on page number: ", data.selected)
       currentPage = data.selected + 1
        console.log(currentPage)

      
        const productsfromServer = dispatch(fetchedProductList(currentPage))
        console.log(productsfromServer)
        setItems(productsfromServer)
       

    }
    // useEffect(() => {
    //     const productsfromServer = dispatch(fetchedProductList(currentPage))
    //     setItems(productsfromServer)
    // }, [currentPage])


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
                    items.length && items.map((item) => {
                        return (
                            <div key={item.id} className="product-item">
                                <img src={item.photo} alt="" />
                                <div>ID: {item.id}</div>
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
                    })
                }
            </div>
            <div>
                <PaginationOfItems handlePageClick={handlePageClick} />
            </div>
        </>
    );
}

export default Main;
