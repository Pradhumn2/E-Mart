import './App.css';
import Header from './Components/Header';
import ProductList from './Components/ProductList';
import React, { useEffect ,useState} from "react";
import axios from "axios";
import { Route , Routes } from 'react-router-dom';
import Cart from "./Components/Cart";
import Alert from './Components/Alert';

function App() {

  const [item,setItem] = useState([])
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res)=>{
      setItem(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  },[])

  return (
    <>
    <Header />
    <Routes>
    <Route path='/' element={
      <>
    <Alert alert={alert} />
    <ProductList item = {item} showAlert = {showAlert} />
    </>
    }/>
    <Route path='/cart' element={<Cart item={item}/>}/>
    </Routes>
  
    </>
  );
}

export default App;
