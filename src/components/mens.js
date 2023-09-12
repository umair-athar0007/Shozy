import React from "react";
import "./style.css"
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

// Import Swiper styles
export function Mens() {
    // transactions.Mens[0].Ptype
    const { transactions } = useContext(GlobalContext);



    return <>
        <div className="cover-men">

            {/* <img width={"100%"} height={"50vh"} src="back.png" alt="" /> */}

        </div>

        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                        Mens Collection
                    </h2>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is
                        random or otherwise generated.
                    </p>
                </div>
            </div>
        </div>
        <MensCat />

    </>

}

export function MensCat() {
    const { transactions } = useContext(GlobalContext);
    const { updateBadge } = useContext(GlobalContext);
    const { addTransaction } = useContext(GlobalContext)

    let MensItems = transactions.filter((slideContent, index) => {
        if (slideContent.Category == "Mens") {
            return slideContent
        }

    })
 
    // let MyCart = transactions.filter((slideContent, index) => {
    //     if (slideContent.Category == "Cart") {
    
    //       return slideContent
    //     }
    
    //   })
    const { cart } = useContext(GlobalContext)

    useEffect(()=>{
        updateBadge(cart.length)
      },[cart])

    return <>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8">
                    {MensItems.map((slideContent, index) => {
                        return <div key={index} className="shadow-xl transition-shadow hover:shadow-lg">
                            <a
                                href="#"
                                className="group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3"
                            >
                                <Link to={"/view/" + slideContent.Category + "/" + slideContent.id}>

                                    <img
                                        src={slideContent.src}
                                        // src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600"
                                        loading="lazy"
                                        alt="Photo by Rachit Tank"
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition duration-200"
                                    />
                                </Link>
                                <span className="bg-red-500 text-white text-sm tracking-wider uppercase rounded-br-lg absolute left-0 top-0 px-3 py-1.5">
                                    sale
                                </span>
                                {/* <span className=" tracking-wider  rounded-br-lg absolute right-0 top-0 px-3 py-1.5">
                                    <button
                                        type="button"
                                        className="absolute right-4 top-4 rounded-full bg-black p-2 text-white"
                                    >
                                        <span className="sr-only">Wishlist</span>
                                        <svg
                                            className="h-4 w-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                            />
                                        </svg>
                                    </button>
                                </span> */}
                            </a>


                            <div className="flex justify-between items-start bg-gray-100  gap-2 p-4">
                                <div className="flex flex-col">
                                    <a
                                        href="#"
                                        className="text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100"
                                    >
                                        {slideContent.name}
                                    </a>
                                    <span className="text-gray-500 text-sm lg:text-base">by {slideContent.brand}</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-gray-600 lg:text-lg font-bold">${slideContent.price}</span>
                                    <span className="text-red-500 text-sm line-through">$39.99</span>
                                </div>
                            </div>
                            <div className="flex bg-gray-100 gap-2.5">


                                <button
                                    type="button"
                                    
                                    onClick={() => {
                                        let elementexist = [];
                                        if (cart[0]) {
                                            cart.forEach((ncartobj, index) => {
                                                elementexist.push(ncartobj.id)
                                            })
                                            if (!(elementexist.includes(slideContent.id))) {
                                                slideContent["CartTotalprice"] = slideContent.price
                                                addTransaction(slideContent)

                                                toast.success('Added to Cart');
                                            }else{
                                                toast.error('Already In Cart');
                                            }

                                        } else {
                                            toast.success('Added to Cart');
                                            slideContent["CartTotalprice"] = slideContent.price
                                            addTransaction(slideContent)

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
                                    className="inline-block bg-gray-200 hover:bg-yellow-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                >
                                    Buy now
                                </a>

                            </div>
                            {/* <div className=" bg-gray-100 flex   gap-2.5">
                                <div className="mt-4 flex w-full items-center justify-center">
                                    <a
                                        href="#"
                                        className="inline-block  margin-auto bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                    >
                                        Add to cart
                                    </a>
                                </div>
                                <div className="mt-4 flex w-full items-center justify-center">

                                    <a
                                        href="#"
                                        className=" inline-block bg-gray-200 hover:bg-yellow-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
                                    >

                                        Buy now
                                    </a>
                                </div>
                            </div> */}

                        </div>

                        {/* product - end  */ }
                    })}
                </div>


            </div>


        </div>

    </>

} 