import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from '../images/layout_set_logo-4.png';
const Footer = (sticky,navbar) => {
   
  
    return (
      <div style={{backgroundColor:'black', marginTop:'-30px'}}>
      <div className="nav">
      <img src={logo}  alt="sharpsma" />
        <Link className="navColor" to="#">Product</Link>
        <Link  className="navColor" to="#">WhereToBuy</Link>
        <Link  className="navColor" to="#">SharpTechnology</Link>
        <Link  className="navColor" to="#">Resources</Link>
        <Link  className="navColor" to="#">ContactUs</Link>
       <span style={{marginTop:'5px'}}>
        <a  href="#" className="iconSpan"><i  className="icon icon ion-social-twitter" ></i></a>
        <a  href="#" className="iconSpan"><i  className="icon icon ion-social-facebook" ></i></a>
        <a href="#" className="iconSpan"><i  className="icon icon ion-social-googleplus" ></i></a>
        <a href="#" className="iconSpan"><i  className="icon icon ionicons ion-search"></i></a>
       </span>
      </div>
  </div>
    );
  }


export default Footer;