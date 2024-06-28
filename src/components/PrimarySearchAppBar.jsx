import React from 'react'
import './componentstyle.css'
import brand from './image.png'
import {Link} from 'react-router-dom'  // bcz ive imported bootstrap component, a tag helps with routing (not used)

export function PrimarySearchAppBar(){

    return(
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark   navmycss ">
  <div class="container-fluid">
    <a class="navbar-brand nameofbrand" href="#"><img src={brand} className='brandlogo'></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="/shop">Shop</a>
        </li>
        <li class="nav-item">
         
          <a class="nav-link active" href='/joinus'>Join Us</a>
      
         
        </li>
      </ul>
    </div>
  </div>
</nav>
       
</div>

    );

    

}
export default PrimarySearchAppBar;

