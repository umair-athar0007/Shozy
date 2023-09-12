import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { GlobalContext } from "./components/context/globelContext";
import toast, { Toaster } from 'react-hot-toast';
import { useRef } from "react";

export function Cart() {


  const { updateBadge } = useContext(GlobalContext);
  const { qunatityset } = useContext(GlobalContext);
  const { minusqunatity } = useContext(GlobalContext);
  const { cart } = useContext(GlobalContext);
  const { tprice } = useContext(GlobalContext);
  const { price } = useContext(GlobalContext);

  // const { transactions } = useContext(GlobalContext);
  const { delTransaction } = useContext(GlobalContext);
  // let MyCart = transactions.filter((slideContent, index) => {
  //   if (slideContent.Category == "Cart") {

  //     return slideContent
  //   }

  // })
  // let [totalvalue, SetTotalvalue] = useState(0)
  useEffect(() => {
    updateBadge(cart.length)
    function totalvalues() {
      let totalpriceAll = 0;
      cart.forEach((cartitem) => {
        totalpriceAll += +cartitem.CartTotalprice

      })
      price(totalpriceAll)
    }
    totalvalues()
  }, [cart.CartTotalprice,delTransaction,tprice])

  let input = useRef()
  // let add = useRef()
  // let minus = useRef()



  // function decrease(event) {
  //   

  // }
  // let [inputValue, SetInputvalue] = useState(1)

  return (
    <>
      {cart[0] ? <div className="bg-white py-6 sm:py-8 lg:py-12" >
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto">
          <div className="mb-6 sm:mb-10 lg:mb-16">
            <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Your Cart
            </h2>
          </div>

          <div className="flex flex-col gap-4 md:gap-6 mb-6 sm:mb-8">

            {
              cart.map((mycartobj, index) => {
                return <div key={index} className="flex flex-wrap border rounded-lg overflow-hidden gap-x-4 sm:gap-y-4 lg:gap-6">
                  <a
                    href="#"
                    className="group w-32 sm:w-40 h-48 sm:h-56 block bg-gray-100 overflow-hidden relative"
                  >
                    <img
                      src={mycartobj.src}
                      // src="https://images.unsplash.com/photo-1612681621979-fffe5920dbe8?auto=format&q=75&fit=crop&w=200"
                      loading="lazy"
                      alt="Photo by Thái An"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                    />
                  </a>
                  <div className="flex flex-col justify-between flex-1 py-4">
                    <div>
                      <a
                        href="#"
                        className="inline-block text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100 mb-1"
                      >
                        {mycartobj.name}

                      </a>
                      <span className="block text-gray-500">Size: S</span>
                      <span className="block text-gray-500">Color: White</span>
                    </div>
                    <div>
                      <span className="block text-gray-800 md:text-lg font-bold mb-1">

                        ${mycartobj.price}
                      </span>
                      <span className="flex items-center text-gray-500 text-sm gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        In stock
                      </span>
                    </div>
                  </div>
                  <div className="w-full sm:w-auto flex justify-between border-t sm:border-none p-4 sm:pl-0 lg:p-6 lg:pl-0">
                    <div className="flex flex-col items-start gap-2">
                      <input ref={input}
                        type="number"
                        // defaultValue={1}
                        value={mycartobj.qunatity}
                        className=" focus:ring ring-inset text-indigo-500 ring-indigo-300 outline-none transition duration-100 px-1 py-2"
                      />
                      <div className="w-40 h-12  flex border rounded overflow-hidden">

                        <div className="flex flex-col border-l divide-y">
                          <button onClick={() => {
                            qunatityset(mycartobj.id)
                            

                          }}  className="w-40 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">
                            +
                          </button>
                          <button onClick={() => {
                            minusqunatity(mycartobj.id)
                        

                          }}  className="w-40 flex justify-center items-center flex-1 bg-white hover:bg-gray-100 active:bg-gray-200 leading-none select-none transition duration-100">
                            -
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => {

                          toast.success('Deleted Successfully', {
                            style: {
                              border: '1px solid #713200',
                              padding: '16px',
                              color: '#f97316',
                            },
                            iconTheme: {
                              primary: '#713200',
                              secondary: '#FFFAEE',
                            },
                          });
                          delTransaction(mycartobj.id)


                        }}
                        className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 text-sm font-semibold select-none transition duration-100">
                        Delete
                      </button>
                      <Toaster />

                    </div>
                    <div className="pt-3 md:pt-2 ml-4 md:ml-8 lg:ml-16">
                      <span className="block text-gray-800 md:text-lg font-bold">
                        ${mycartobj.CartTotalprice}
                      </span>
                    </div>
                  </div>

                </div>
              })
            }
          </div>

          {/* product - end */}

          {/* totals - start */}
          <div className="flex flex-col items-end gap-4">
            <div className="w-full sm:max-w-xs bg-gray-100 rounded-lg p-4">
              <div className="space-y-1">
                <div className="flex justify-between text-gray-500 gap-4">
                  <span>Subtotal</span>
                  <span>${tprice}</span>
                </div>
                <div className="flex justify-between text-gray-500 gap-4">
                  <span>Shipping</span>
                  <span>$4.99</span>
                </div>
              </div>
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-start text-gray-800 gap-4">
                  <span className="text-lg font-bold">Total</span>
                  <span className="flex flex-col items-end">
                    <span className="text-lg font-bold">${+tprice + 4.99} USD</span>
                    <span className="text-gray-500 text-sm">including VAT</span>
                  </span>
                </div>
              </div>
            </div>
            <button className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
              Check out
            </button>
          </div>
          {/* totals - end */}
        </div>
      </div > : <div className="emptyCart"> Your Cart is Empty..... <span> &#x1F615; </span></div>}
    </>

  );
}