import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ProductSearch, ProductList } from './redux/productAction';

function App() {
  const dispatch = useDispatch()
  function myfxn() {
    dispatch(ProductSearch())
    dispatch(ProductList())
    
  }
  if (localStorage.length === 0) {
    myfxn()
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>

    </div>
  );
}

export default App;
