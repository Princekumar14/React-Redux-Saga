import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductSearch } from '../redux/productAction';
import { useState } from 'react';
import { debounce } from 'lodash';

const Header = () => {
  const result = useSelector((state) => state.CartData);
  const dispatch = useDispatch();
  // console.warn("data in header", result);
  const [search, setSearch] = useState("")



  const updatedserchValue = e => {
    setSearch(e.target.value)
  }
  useEffect(() => {
    dispatch(ProductSearch(search))
  }, [search])


  const handleSearch = debounce(updatedserchValue, 2000)



  return (
    <div className="header">
      <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
      <div className='search-box'>
        <input type="text" onChange={ handleSearch } placeholder='Search Product' />
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