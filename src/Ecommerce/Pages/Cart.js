import axios from "axios";
import React, { useEffect, useState } from "react";

// const ProductImage = ({ imageUrl }) => (
//   <div className="w-full md:w-1/2">
//     <img src={imageUrl} alt="Product" className="mx-auto rounded-lg shadow-lg" />
//   </div>
// );

const ProductDescription = ({ description }) => (
  <div className="w-full mt-6">
    <h3 className="text-lg font-semibold mb-2">Description</h3>
    <p className="text-gray-600">{description}</p>
    <div className="price_cart mt-4">
      <span>Price $</span>
      <span>Add To Cart</span>
    </div>
  </div>
);

const Cart = ({ ItemIDData }) => {
  const product = {
    name: "Product Name",
    price: 49.99,
    rating: 4,
    imageUrl: "product-image-url.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
  };

  const [FetchData, setFetchData] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setFetchData(res.data))
      .catch((err) => console.log("error Caught"));
  }, []);

  return (
    <div className="flex flex-col md:flex-row max-w-3xl mx-auto p-6 space-y-6 md:space-y-0 mt-4 text-center">
     {
        FetchData? <div className="grid grid-cols-4 gap-4 space-y-2">
        {FetchData.map((item) => {
          if (ItemIDData.includes(item.id)) {
            return (
              <div  className="space-y-4  flex flex-col justify-between items-center bg-gray-50 ">
                <p>{item.title}</p>
                <img src={item.image} alt="" width={"280px"} />

                <ProductDescription description={product.description} />
              </div>
            );
          }
        })}
      </div> :  <h2>No Product added To cart</h2> 
     }
     
    </div>
  );
};

export default Cart;
