import React from "react";
import "./search.css"
import { useRef } from "react";
import { useEffect } from "react";

export function Searchbar() {
    let searchinput = useRef();
    let searchbtn = useRef();
    // updated 2019
    
    useEffect(()=>{

    // const input = document.getElementById("search-input");
    const input = searchinput.current;
    // console.log(input);
    // const searchBtn = document.getElementById("search-btn");
    const searchBtn = searchbtn.current;
    
    const expand = () => {
        searchBtn.classList.toggle("close");
        input.classList.toggle("square");
    };
    
    searchBtn.addEventListener("click", expand);
},[])




    //  old version / jquery
    //
    // function expand() {
    //   $(".search").toggleClass("close");
    //   $(".input").toggleClass("square");
    //   if ($('.search').hasClass('close')) {
    //     $('input').focus();
    //   } else {
    //     $('input').blur();
    //   }
    // }
    // $('button').on('click', expand);
    //

    return (
        <form id="content">
            <input type="text" name="input" ref={searchinput} className="input" id="search-input" />
            <button type="reset" className="search" ref={searchbtn} id="search-btn"></button>
        </form>
    );

}