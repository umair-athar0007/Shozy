import React from "react";
import "./style.css"
import { Footer } from "./shozyFooter";
import { Carosal } from "./carsoal";
import QuiltedImageList from "./imageslist";
import { SwiperSlider } from "./slider";
import { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
import toast, { Toaster } from 'react-hot-toast';

export function Home() {
  const { transactions } = useContext(GlobalContext);
  const { updateBadge } = useContext(GlobalContext);
  let MyCart = transactions.filter((slideContent, index) => {
    if (slideContent.Category == "Cart") {

      return slideContent
    }

  })
  const { cart } = useContext(GlobalContext)

  useEffect(()=>{
    updateBadge(cart.length)
  },[cart])

  return <div>

    <div>    <Carosal />      </div>

    <div className="headingHome">

      <h2>
        <span>
          Shop by Collection
        </span>

      </h2>

    </div>

    <div className="imagelist">    <QuiltedImageList /> </div>
    <div className="headingHome">

      <h2>
        <span>
          Shop by Category
        </span>

      </h2>
      
    </div>
    <div className="slider">     <SwiperSlider /> 
    <Toaster />
        </div>

    <div className="footer">     <Footer />     </div>
    <Toaster position="bottom-left"
                    reverseOrder={true} />
  </div>
} 