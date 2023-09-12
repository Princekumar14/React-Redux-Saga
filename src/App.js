import logo from './logo.svg';
import './App.css';
import { AddToCart } from './redux/action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch  = useDispatch();
  const product ={
    name:'i phone',
    type:'mobile',
    price:10000,
    color:'red'
  }
  return (
    <div className="App">
      <button onClick={()=>dispatch(AddToCart(product))} className="btn">Add to Cart</button>
    </div>
  );
}

export default App;
