import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductSearch } from '../redux/productAction';
import { useState } from 'react';
import { debounce } from 'lodash';

const Header = () => {
  const result = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  console.warn("data in header", result);
  const [search, setSearch] = useState("")



  // const debouncedSearch = debounce((query) => { 
  //   if (search.length > 2) {
  //     dispatch(ProductSearch(search))
  //   }
  // }, 2000);

  // const handleSearch = (e) => {

  //   const newQuery = e.target.value
  //   setSearch(newQuery)

  //   debouncedSearch(newQuery)
  // }



  // const handleSearch = (e) => {
  //   const newQuery = e.target.value
  //   debounce(() => { setSearch(newQuery) }, 2000)()
  //   console.log(search)


  // }


  // useEffect(() => {
  //   if (search.length > 2) {
  //     dispatch(ProductSearch(search))
  //   }
  // }, [search])





  // const updatedserchValue = e => {
  //   setSearch(e.target.value)
  // }
  // useEffect(() => {
  //   dispatch(ProductSearch(search))
  // }, [search])


  // const handleSearch = debounce(updatedserchValue, 2000)





    function handleSearch (e) {
    const newQuery = e.target.value
      setSearch(newQuery) 
    debounce(() => { 
    
      
       dispatch(ProductSearch(search))
    }, 2000)()
    console.log(search)

  }
  // }
  // useEffect(() => {
   
  // }, [search])


  return (
    <div className="header">
      <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
      <div className='search-box'>
        <input type="text" onChange={(e) => handleSearch(e)} placeholder='Search Product' />
      </div>
      <Link to="/cart" >
        <div className="cart-div">
          <span>{result.length}</span>
          <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
        </div>

      </Link>
    </div>
  )
}

export default Header