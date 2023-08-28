
import {  Routes,Route } from 'react-router-dom';
import ProductDetails from './Ecommerce/Components/ProductDetails';
import Navbar from './Ecommerce/Components/Navbar';
import Home from './Ecommerce/Pages/Home';
import Cart from './Ecommerce/Pages/Cart';
import { useState } from 'react';



function App() {
  const [count, setCount]=useState(0);
  const [ItemIDData,setItemIDData]=useState([])
  const InCremnt=(val)=>{
    setItemIDData([...ItemIDData,val])
    setCount(
      count+1
    )
    console.log(`i am inside Incremnt and ItemData value is `,ItemIDData)
  }
  return (
    <div className="App " >
    
   
   
     <Navbar count={count} />
         <Routes>
            <Route path='/' element={<Home InCremnt={InCremnt}/>}></Route>
            <Route path='/cart' element={<Cart ItemIDData={ItemIDData}/>}></Route>
            <Route path='/details' element={<ProductDetails />}></Route>
         </Routes>
        
  
    </div>
  );
}

export default App;
