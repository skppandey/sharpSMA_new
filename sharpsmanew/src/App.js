import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Nav from './cmp/Nav';
import Info1 from './cmp/Info1';
import Info2 from './cmp/Info2';
import Footer from './cmp/Footer';
import img1 from './images/www.sharpsma.com28728.jpg';

document.addEventListener('DOMContentLoaded', function () {
  // When the event DOMContentLoaded occurs, it is safe to access the DOM

  // When the user scrolls the page, execute myFunction
  window.addEventListener('scroll', myFunctionForSticky);

  // Get the navbar
  var navbar = document.getElementById('navbar');
  function myFunctionForSticky() {
    if (window.pageYOffset >= 190) {
      // console.log(window.pageYOffset); 
      navbar.classList.add('sticky');
      document.getElementById('l1').classList.add('stickyColor');
      document.getElementById('l2').classList.add('stickyColor');
      document.getElementById('l3').classList.add('stickyColor');
      document.getElementById('l4').classList.add('stickyColor');
      document.getElementById('l5').classList.add('stickyColor');
      document.getElementById('l6').classList.add('stickyColor');
      document.getElementById('l7').classList.add('stickyColor');
      document.getElementById('l8').classList.add('stickyColor');
      document.getElementById('l9').classList.add('stickyColor');
    } else {
      navbar.classList.remove('sticky');
      document.getElementById('l1').classList.remove('stickyColor');
      document.getElementById('l2').classList.remove('stickyColor');
      document.getElementById('l3').classList.remove('stickyColor');
      document.getElementById('l4').classList.remove('stickyColor');
      document.getElementById('l5').classList.remove('stickyColor');
      document.getElementById('l6').classList.remove('stickyColor');
      document.getElementById('l7').classList.remove('stickyColor');
      document.getElementById('l8').classList.remove('stickyColor');
      document.getElementById('l9').classList.remove('stickyColor');
    }
  }

  /*Toggle between adding and removing the "responsive" class to topnav
  when the user clicks on the icon*/

  function myFunctionForResponsive() {
    navbar.classList.toggle('responsive');
  }
});
let posY = 0;
document.addEventListener('mousemove', (e) => {
  posY = e.y;
  if(e.y <= 47  && e.pageY >= 180){
    // console.log(posY)
    navbarStyleAdd()
  }
});

function navbarStyleAdd() {

  var navbar = document.getElementById('navbar');
  navbar.classList.add('sticky');
  document.getElementById('l1').classList.add('stickyColor');
  document.getElementById('l2').classList.add('stickyColor');
  document.getElementById('l3').classList.add('stickyColor');
  document.getElementById('l4').classList.add('stickyColor');
  document.getElementById('l5').classList.add('stickyColor');
  document.getElementById('l6').classList.add('stickyColor');
  document.getElementById('l7').classList.add('stickyColor');
  document.getElementById('l8').classList.add('stickyColor');
  document.getElementById('l9').classList.add('stickyColor');

}

function navbarStyleRemove() {

  var navbar = document.getElementById('navbar');
  if(posY > 47){
  navbar.classList.remove('sticky');
  document.getElementById('l1').classList.remove('stickyColor');
  document.getElementById('l2').classList.remove('stickyColor');
  document.getElementById('l3').classList.remove('stickyColor');
  document.getElementById('l4').classList.remove('stickyColor');
  document.getElementById('l5').classList.remove('stickyColor');
  document.getElementById('l6').classList.remove('stickyColor');
  document.getElementById('l7').classList.remove('stickyColor');
  document.getElementById('l8').classList.remove('stickyColor');
  document.getElementById('l9').classList.remove('stickyColor');
  }
}

function App() {

  useEffect(() => {
    document.title = 'sharpSMA';
    document.body.classList.add('body');
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      // setSeconds(seconds => seconds + 1);
      navbarStyleRemove()
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/Product"></Route>

          <Route path="/WhereToBuy"></Route>

          <Route path="/SharpTechnology"></Route>

          <Route path="/Resources"></Route>

          <Route path="/ContactUs"></Route>
        </Switch>
      </Router>
      <div className="section">
        <Info1 />
        <Info2 />
        <Router>
        <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
