import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';
const Products = ({ modelFunction,InCremnt }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      console.log(data)
      setProducts(data);
    }
    fetchProducts();
  }, [])


  const HandleAdd = (item) => {
    modelFunction(item)
  }

  const handleClick = (item) => {
    navigate("/details",{state:{data:item}})
  }

  // const [ItemId,setItemId] =useState([])
  const HandleAddToCart = (item) => {
    
    // setItemId(item.id)
    InCremnt(item.id);

    const Toast = Swal.mixin({
      toast: true,
      position: 'top',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: `${item.title} <br/><br/>  price $${item.price} <br/><br/> Successfully Added To Cart `
    })
  }




  return (
    <div className='productsWrapper card grid grid-cols-1 lg:grid-cols-4  md:grid-cols-3' >
      {
        products.map((item, index) => (
          <div key={index} className=" m-2 text-center  shadow-2xl border-none  hover:border border-transparent hover:border-gray-500  hover:translate-y-2 duration-300" >
            <h6 className='text-2sm font-semibold h-[80px] flex justify-center items-center' >{item.title}</h6>
              <div className="text-center ">
              <img className='mx-auto'  src={item.image} alt="" style={{ height: "250px" }} />

              </div>
            <button className="bg-blue-400 px-4 rounded m-2 text-xl" onClick={() => HandleAdd(item)}>View</button>
            <div className=" flex justify-between m-2 bg-yellow-300">
              <button className=''>Price: ${item.price}</button>
              <button className='hover:bg-green-200 pl-3 pr-3' ><ShoppingCartIcon onClick={()=>HandleAddToCart(item)} /></button>
            </div>
          </div>
        ))
      }
    </div>
  )

}

export default Products
