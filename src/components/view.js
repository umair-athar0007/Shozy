import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';



export function View() {
  const { transactions } = useContext(GlobalContext);
  const { cart } = useContext(GlobalContext)
  console.log("cart objects");
  console.log(cart);
  console.log(transactions);
  let { Type } = useParams();
  let { Id } = useParams();


  let [index, setIndex] = useState();
  // let [element , SetElement] = useState()

  let element = transactions.filter((allTypeobj) => {
    if ((allTypeobj.Category == Type) && (allTypeobj.id == Id)) {
      return allTypeobj
    }

  })
  const { updateBadge } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext)

  // let MyCart = transactions.filter((slideContent, index) => {
  //   if (slideContent.Category == "Cart") {

  //     return slideContent
  //   }

  // })

  useEffect(() => {
    updateBadge(cart.length)
  }, [cart])

  return (<>
    {
      element.map((typeObj , index) => {
        return <div key={index} className="bg-white py-6 sm:py-8 lg:py-12">
          <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* images - start */}
              <div className="grid lg:grid-cols-5 gap-4">
                <div className="flex lg:flex-col order-last lg:order-none gap-4">
                  <div className="bg-gray-100 shadow-xl transition-shadow hover:shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={typeObj.src}
                      // src="https://images.unsplash.com/flagged/photo-1571366992791-2ad2078656cb?auto=format&q=75&fit=crop&w=250"
                      loading="lazy"
                      alt="Photo by Himanshu Dewangan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="bg-gray-100 shadow-xl transition-shadow hover:shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={typeObj.src}
                      // src="https://images.unsplash.com/flagged/photo-1571366992968-15b65708ee76?auto=format&q=75&fit=crop&w=250"
                      loading="lazy"
                      alt="Photo by Himanshu Dewangan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="bg-gray-100 shadow-xl transition-shadow hover:shadow-lg rounded-lg overflow-hidden">
                    <img
                      src={typeObj.src}
                      // src="https://images.unsplash.com/flagged/photo-1571366992999-47669b775ef6?auto=format&q=75&fit=crop&w=250"
                      loading="lazy"
                      alt="Photo by Himanshu Dewangan"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="lg:col-span-3  shadow-xl transition-shadow hover:shadow-lg rounded-lg overflow-hidden relative">
                  <img
                    src={typeObj.src}
                    // src="https://images.unsplash.com/flagged/photo-1571366992942-be878c7b10c0?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Himanshu Dewangan"
                    className="  object-cover object-center"
                  />
                  <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                    sale
                  </span>
                  <a
                    href="#"
                    className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 border text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 absolute right-4 top-4 px-3.5 py-3"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              {/* images - end */}
              {/* content - start */}
              <div className="md:py-8">
                {/* name - start */}
                <div className="mb-2 md:mb-3">
                  <span className="inline-block text-gray-500 mb-0.5">{typeObj.brand} Brand</span>
                  <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">
                    {typeObj.name}
                  </h2>
                </div>
                {/* name - end */}
                {/* rating - start */}
                <div className="flex items-center gap-3 mb-6 md:mb-10">
                  <div className="h-7 flex items-center bg-indigo-500 text-white rounded-full gap-1 px-2">
                    <span className="text-sm">4.2</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="text-gray-500 text-sm transition duration-100">
                    56 ratings
                  </span>
                </div>
                {/* rating - end */}
                {/* color - start */}
                <div className="mb-4 md:mb-6">
                  <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                    Color
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="w-8 h-8 bg-gray-800 border ring-2 ring-offset-1 ring-gray-800 rounded-full transition duration-100" />
                    <button
                      type="button"
                      className="w-8 h-8 bg-gray-500 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                    />
                    <button
                      type="button"
                      className="w-8 h-8 bg-gray-200 border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                    />
                    <button
                      type="button"
                      className="w-8 h-8 bg-white border ring-2 ring-offset-1 ring-transparent hover:ring-gray-200 rounded-full transition duration-100"
                    />
                  </div>
                </div>
                {/* color - end */}
                {/* size - start */}
                <div className="mb-8 md:mb-10">
                  <span className="inline-block text-gray-500 text-sm md:text-base font-semibold mb-3">
                    Size
                  </span>
                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                    >
                      XS
                    </button>
                    <button
                      type="button"
                      className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                    >
                      S
                    </button>
                    <span className="w-12 h-8 flex justify-center items-center bg-indigo-500 text-white text-sm font-semibold text-center border border-indigo-500 rounded-md cursor-default">
                      M
                    </span>
                    <button
                      type="button"
                      className="w-12 h-8 flex justify-center items-center bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 text-sm font-semibold text-center border rounded-md transition duration-100"
                    >
                      L
                    </button>
                    <span className="w-12 h-8 flex justify-center items-center bg-white text-gray-400 text-sm font-semibold text-center border border-transparent rounded-md cursor-not-allowed">
                      XL
                    </span>
                  </div>
                </div>
                {/* size - end */}
                {/* price - start */}
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-gray-800 text-xl md:text-2xl font-bold">
                      ${typeObj.price}
                    </span>
                    <span className="text-red-500 line-through mb-0.5">$30.00</span>
                  </div>
                  <span className="text-gray-500 text-sm">incl. VAT plus shipping</span>
                </div>
                {/* price - end */}
                {/* shipping notice - start */}
                <div className="flex items-center text-gray-500 gap-2 mb-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                  <span className="text-sm">2-4 day shipping</span>
                </div>
                {/* shipping notice - end */}
                {/* buttons - start */}
                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={() => {
                      let elementexist = [];
                      if (cart[0]) {
                        cart.forEach((ncartobj, index) => {
                          elementexist.push(ncartobj.id)
                        })
                        if (!(elementexist.includes(typeObj.id))) {
                          typeObj["CartTotalprice"] = typeObj.price

                          addTransaction(typeObj)
                          toast.success('Added to Cart');
                        } else {
                          toast.error('Already In Cart');
                        }

                      } else {
                        toast.success('Added to Cart');
                        typeObj["CartTotalprice"] = typeObj.price

                        addTransaction(typeObj)

                      }
                      // addTransaction( {"Category": "Cart", "brand": slideContent.brand  , "id": slideContent.id  , "price": slideContent.price,  "Ptype": slideContent.Ptype, "src": slideContent.src, "name": slideContent.name })

                    }}
                    className="inline-block flex-1 sm:flex-none bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Add to cart
                  </button>
                  <Toaster />

                  <a
                    href="#"
                    className="inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                  >
                    Buy now
                  </a>
                </div>
                {/* buttons - end */}
              </div>
              {/* content - end */}
            </div>
          </div>
        </div>
      })
    }
  </>
  )



}
// asses freefronted