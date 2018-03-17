import React from "react";
import "./Nav.css";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Navigation from "../Navigation";


const Nav = () =>

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="/"></a> 
        
        
      </div>
      <Navigation />
    </div>
  <div>
     <h4>A Collection Of Work Solutions</h4>
     <img src="https://cdn3.iconfinder.com/data/icons/seo-and-marketing-3-11/512/135-256.png" height="35%" width="35%"/>
  </div>
</nav>
      
export default Nav;

