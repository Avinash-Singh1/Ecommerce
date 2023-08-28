import React from 'react'
import { useLocation } from 'react-router-dom'

const ProductDetails = () => {
    const location = useLocation();
    const Data =location.state.data;
  return (
    <div>

       
        <div className="d-flex justify">
            <div className="left">
            <img src={Data.image} alt="" style={{ height: "250px" }} />
            </div>
            <div className="right">
            <h3>{Data.title}</h3>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails