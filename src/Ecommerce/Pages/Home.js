import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.css';
import Swal from 'sweetalert2'


import Products from "../Components/Products";

function Home({ InCremnt }) {
  const [ProductData, setProductData] = useState([]);
  // const [ItemData,setItemData]=useState([]);

  const modelFunction = (item) => {
    // alert(item.title);
    // setModel(true)
    setShowModal(true);
    setProductData(item);
  };
  const [showModal, setShowModal] = React.useState(false);
  const HandleAddToCart = (item) => {
    setShowModal(true)
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
    <div>
      <h2 className="heading text-xl text-center">
        Welcome To <b>YourPrint</b> store
      </h2>

      <div className="container">

        {showModal ? (
          <>
            <div className="justify-center items-center flex bg-grey-50 overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto  max-w-3xl  ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t h-80 m-auto">
                    <div className="flex flex-col justify-center items-center">
                      <div ><img src={ProductData.image} alt="" style={{ height: "300px" }} /></div>
                      <div  >  <p className="font-semibold text-center  overflow-hidden">{ProductData.title}</p></div>
                    </div>
                 </div>


                  <div className="relative p-6 flex-auto m-6">
                    <h6 className="text-center font-semibold mt-6">Description <hr /> </h6>
                    <p className=" overflow-auto">{ProductData.description}</p>
                  </div>

                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => HandleAddToCart(ProductData)}

                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>


      {/* product rendering  */}
      <section>
        <h3 className="text-2xl mx-3 my-2">Products</h3>
        <Products InCremnt={InCremnt} modelFunction={modelFunction} />
      </section>

    </div>
  );
}

export default Home;
