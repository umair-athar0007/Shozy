import React from "react";
import "./style.css"
import { HeartIcon } from '@heroicons/react/24/outline'
import { Navigation , Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
import { useState } from 'react'
import { useLayoutEffect } from 'react'
import { useParams } from "react-router";
import { Link } from "react-router-dom"
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
// import 'swiper/css/effect-fade';
// import 'swiper/css/EffectCards';

import { useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export function SwiperSlider() {

  // const Slides = {
  //   "Mens": [
  //     { "brand": "Nike", "price": 500, "src": "/mens/f5.jpg", "name": "Men  Boot1" },
  //     { "brand": "Soft", "price": 700, "src": "/mens/f2.jpg", "name": "Men  Boot2" },
  //     { "brand": "Soft", "price": 1200, "src": "/mens/f3.jpg", "name": "Men  Boot3" },
  //     { "brand": "Soft", "price": 1000, "src": "/mens/f6.jpg", "name": "Men  Boot4" },
  //     { "brand": "Soft", "price": 500, "src": "/mens/sm11.jpg", "name": "Men  Sliper5" },
  //     { "brand": "Soft", "price": 650, "src": "/mens/ms6.jpg", "name": "Men  Sliper6" },
  //     { "brand": "Soft", "price": 1350, "src": "/mens/hms4.jpg", "name": "Men  Sliper7" },
  //     { "brand": "Soft", "price": 250, "src": "/mens/sm7.jpg", "name": "Men  Sliper8" },
  //   ],
  //   "Women": [
  //     { "brand": "Netix", "price": 500, "src": "/women/h1.jpg", "name": "Women Heel1" },
  //     { "brand": "Neura", "price": 900, "src": "/women/hh4.jpg", "name": "Women Heel2" },
  //     { "brand": "Netix", "price": 500, "src": "/women/pp2.jpg", "name": "Women Pumpy3" },
  //     { "brand": "Netix", "price": 500, "src": "/women/pp1.jpg", "name": "Women Pumpy4" },
  //     { "brand": "Netix", "price": 500, "src": "/women/pp5.jpg", "name": "Women Pumpy5" },
  //     { "brand": "Netix", "price": 500, "src": "/women/w5.jpg", "name": "Women Sandel6" },
  //     { "brand": "Netix", "price": 500, "src": "/women/p7.jpg", "name": "Women Pumpy7" },
  //     { "brand": "Netix", "price": 500, "src": "/women/hw3.jpg", "name": "Women Sandel8" },

  //   ],
  //   "Childs": [
  //     { "brand": "Fabii", "price": 500, "src": "/childs/c1.jpg", "name": "Child Joger1" },
  //     { "brand": "Fabii", "price": 980, "src": "/childs/c2.jpg", "name": "Child Joger2" },
  //     { "brand": "Fabii", "price": 230, "src": "/childs/c3.jpg", "name": "Child Joger3" },
  //     { "brand": "Fabii", "price": 540, "src": "/childs/c4.jpg", "name": "Child Joger4" },
  //     { "brand": "Fabii", "price": 1200, "src": "/childs/c5.jpg", "name": "Child Joger5" },
  //     { "brand": "Fabii", "price": 1700, "src": "/childs/c6.jpg", "name": "Child Joger6" },
  //     { "brand": "Fabii", "price": 2000, "src": "/childs/c7.jpg", "name": "Child Joger7" },
  //     { "brand": "Fabii", "price": 6700, "src": "/childs/c8.jpg", "name": "Child Joger8" },

  //   ],

  // }
  let [type, SetType] = useState("Mens")
  let [Category, SetCategory] = useState([
    { name: 'Mens', current: true },
    { name: 'Women', current: false },
    { name: 'Childs', current: false },
  ])
  let [sliderCols, SetsliderCols] = useState(4)
  let [screenWidthN, SetScreenWidthN] = useState("large")
  // console.log(Slides.Mens);
  let [gvalue, Setgvalue] = useState(0)
  useLayoutEffect(() => {
    async function doit() {

      makeitcrrent(gvalue)
    }

    doit()
  }, [Category])


  function makeitcrrent(e) {

    Setgvalue(e)
    Category.forEach((items) => {
      if (items.name == e.target.innerText) {
        items.current = true
      } else {
        items.current = false
      }
    })
    SetCategory(Category);

    if (e.target.innerText == "Mens") {
      SetType("Mens")
    } else if (e.target.innerText == "Women") {
      SetType("Women")
    }
    else if (e.target.innerText == "Childs") {
      SetType("Childs")
    }

  }
  window.addEventListener('resize', updateMe);
  window.addEventListener('onload', updateMe);
  window.addEventListener('onchange', updateMe);

  function updateMe() {

    if ((window.innerWidth < 1024) && (window.innerWidth > 770)) {
      SetScreenWidthN("medium")
      SetCols()
    } else if (window.innerWidth < 670) {
      SetScreenWidthN("small")
      SetCols()
    } else {
      SetScreenWidthN("large")
      SetCols()
    }
  }
  ///////////////
  function SetCols() {
    if (screenWidthN === "medium") {
      SetsliderCols(3)
    } else if (screenWidthN === "small") {
      SetsliderCols(2)
    } else {
      SetsliderCols(4)
    }
  }
  //////////////////////

  const { transactions } = useContext(GlobalContext);
  const { addTransaction } = useContext(GlobalContext)
  const { updateBadge } = useContext(GlobalContext);

  let SliderItems = transactions.filter((slideContent, index) => {
    if (slideContent.Category == type) {
      return slideContent
    }
  })
  const { cart } = useContext(GlobalContext)

  useEffect(() => {
    updateBadge(cart.length)
  }, [cart])

  ////////////
  return (<>

    <div className="flex-button ">
      {Category.map((item) => (
        < button
          onClick={makeitcrrent}
          key={item.name}

          className={classNames(
            item.current ? 'bg-gray-900   effect-btn text-white' : 'text-black-900   hover:bg-orange-500 hover:text-white',
            'px-3 py-2 rounded-md text-sm  font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          {item.name}
        </button>
      ))}

    </div>
    <Swiper
      modules={[Navigation  ,EffectFade, Autoplay, Pagination, Scrollbar, A11y]}

      spaceBetween={20}
      slidesPerView={sliderCols}
      navigation
      autoplay={true}
      pagination={{ clickable: true }}

    >
      {SliderItems.map((slideContent, index) => (


        <SwiperSlide virtualIndex={index}>
          {
            <div className="swiper-slide">
              <div className="relative block border border-gray-100">
                {/* <button
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
                </button> */}
                <Link to={"/view/" + slideContent.Category + "/" + slideContent.id}>


                  <img
                    alt="Toy"
                    // src="https://images.unsplash.com/photo-1603356033288-acfcb54801e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                    src={slideContent.src}
                    className="h-56 w-full object-contain lg:h-72"
                  />
                </Link>
                <div className="p-6">
                  {/* <span className="inline-block bg-yellow-400 px-3 py-1 text-xs font-medium">
                    New
                  </span> */}
                  <h3 className="mt-4 text-lg font-bold">{slideContent.brand}</h3>
                  <div className="mt-2 space-y-3">
                    <div className="flex gap-1">
                      <button type="button">
                        <span className="sr-only"> Space Grey </span>
                        <span className="block h-4 w-4 rounded-full bg-[#595759]"> </span>
                      </button>
                      <button type="button">
                        <span className="sr-only"> Silver </span>
                        <span className="block h-4 w-4 rounded-full bg-[#d2d3d4]"> </span>
                      </button>
                      <button type="button">
                        <span className="sr-only"> Pink </span>
                        <span className="block h-4 w-4 rounded-full bg-[#d89f97]" />
                      </button>
                      <button type="button">
                        <span className="sr-only"> Green </span>
                        <span className="block h-4 w-4 rounded-full bg-[#afbfab]"> </span>
                      </button>
                      <button type="button">
                        <span className="sr-only"> Sky Blue </span>
                        <span className="block h-4 w-4 rounded-full bg-[#91a5bb]"> </span>
                      </button>
                    </div>
                  </div>

                  <p className="mt-2 text-sm font-medium text-gray-600">${slideContent.price}</p>
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

                          toast.success('Added to Cart', {
                            position: "bottom-center"
                          })
                        } else {

                          toast.error('Already In Cart', {
                            position: "bottom-center"
                          })
                        }

                      } else {
                        toast.success('Added to Cart', {
                          position: "bottom-center"
                        })
                        slideContent["CartTotalprice"] = slideContent.price

                        addTransaction(slideContent)

                      }
                      // addTransaction( {"Category": "Cart", "brand": slideContent.brand  , "id": slideContent.id  , "price": slideContent.price,  "Ptype": slideContent.Ptype, "src": slideContent.src, "name": slideContent.name })

                    }}
                    className="mt-4 flex w-full items-center justify-center rounded-sm bg-yellow-500 px-8 py-4"
                  >
                    <ShoppingCartOutlinedIcon />  <span className="text-sm font-medium"> Add to Cart </span>

                  </button>
                 


                </div>
              </div>
            </div>
          }
        </SwiperSlide>
      ))}

    </Swiper>

  </>);
}