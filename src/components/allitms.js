import React from "react";
import "./style.css"
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "./context/globelContext";
import { Link } from "react-router-dom";
import { MoveTop } from "./floatingButtons";
import { useEffect } from "react";
import { MensCat } from "./mens";
import { WomenCat } from "./womens";
import { ChildsCat } from "./childs";


export function Allitems() {
  const { transactions } = useContext(GlobalContext);
  const { cart } = useContext(GlobalContext)

  const { updateBadge } = useContext(GlobalContext);
  let MyCart = transactions.filter((slideContent, index) => {
    if (slideContent.Category == "Cart") {

      return slideContent
    }

  })
  useEffect(()=>{
    updateBadge(cart.length)
  },[cart])

    return <>
        <div className="cover-all">
        </div>
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <div className="mb-10 md:mb-16">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
                        ALL Collections
                    </h2>
                    <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
                        This is a section of some simple filler text, also known as placeholder
                        text. It shares some characteristics of a real written text but is
                        random or otherwise generated.
                    </p>
                </div>
            </div>
        </div>
        <div className="headingHome">

      <h2>
        <span>
         Mens Category
        </span>

      </h2>

    </div>
<MensCat />
<div className="headingHome">

<h2>
  <span>
   Women Category
  </span>

</h2>

</div>
<WomenCat /> 
<div className="headingHome">

<h2>
  <span>
   Childs Category
  </span>

</h2>

</div>
<ChildsCat />
{/* <MoveTop /> */}
    </>
}


