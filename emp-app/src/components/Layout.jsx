import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "./logo.png"


const Layout = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg  bg-secondary navbar-dark">
    <div class="container-fluid">

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
      <img src={logo} className="logokerala" alt="logo-image" height={70}/>
            
        <ul class="navbar-nav  ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <Link class="nav-link" to="/">
                  Home
                </Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link" to="/employeeform">
                  Employeeform
                </Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
      <Outlet />
      
      <footer>
   
  </footer>
    </div>
  );
};

export default Layout;