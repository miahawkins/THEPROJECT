import React from "react";
import "./Nav.css";

import * as routes from '../../constants/routes';

const Nav = () =>


<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Project Portal</a>
    </div>
    <ul class="nav navbar-nav">
      {/* <li><a href="/">Landing</a></li> */}
      <li><a href="/home">Home</a></li>
      <li><a href="/account">Account</a></li>
      <li><a href="/todo">To Do App</a></li>
      <li><a href="/calendar">Calendar App</a></li>
      <li><a href="/excel">Table Data App</a></li>
    </ul>
  </div>
<div>
     <h4>A collection of work solutions</h4>
     <img src="https://cdn3.iconfinder.com/data/icons/seo-and-marketing-3-11/512/135-256.png" height="20%" width="20%"/>
</div>
</nav>
      


    



export default Nav;

