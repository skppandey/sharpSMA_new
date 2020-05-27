import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../images/layout_set_logo-4.png';
const Nav = (sticky,navbar) => {
   
  
    return (
      <div class="bg-img">
      <div id="navbar" className="nav">
      <img src={logo}  alt="sharpsma" />
        <Link id="l1" className="navColor" to="#">Product</Link>
        <Link id="l2" className="navColor" to="#">WhereToBuy</Link>
        <Link id="l3" className="navColor" to="#">SharpTechnology</Link>
        <Link id="l4" className="navColor" to="#">Resources</Link>
        <Link id="l5" className="navColor" to="#">ContactUs</Link>
       <span style={{marginTop:'5px'}}>
        <a  href="#" className="iconSpan"><i id="l6" className="icon icon ion-social-twitter" ></i></a>
        <a  href="#" className="iconSpan"><i id="l7" className="icon icon ion-social-facebook" ></i></a>
        <a href="#" className="iconSpan"><i id="l8" className="icon icon ion-social-googleplus" ></i></a>
        <a href="#" className="iconSpan"><i id="l9" className="icon icon ionicons ion-search"></i></a>
       </span>
      </div>
  </div>
    );
  }


export default Nav;