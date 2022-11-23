import React from "react"
import { Link } from "react-router-dom"

export function Header() {
    return <div>

      <nav className="  navbar-expand-lg navbar navbar-dark bg-primary">
        <div className="container-fluid">
        <Link className="nav-link  text-white fs-5" to={"/"} >

          <img src="logo3.png" alt="" width="80" height="50"  class="d-inline-block align-text-top" />
        </Link>
           
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" justify-content-center  nav  me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link className="nav-link  text-white fs-5" to={"/"} >Home</Link>
                {/* <Link  to={"/"} >Home</Link> */}

              </li>
              <li className="nav-item">
                  <Link className="nav-link  text-white fs-5" to={"/student"} >Student</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  text-white fs-5" to={"/book"} >Book</Link>

              </li>
             
              <li className="nav-item">
                <Link className="nav-link  text-white fs-5" to={"/view"} >View</Link>

              </li>
              
             
            </ul>
            
          </div>
        </div>
      </nav>
 




        
    </div>
}
