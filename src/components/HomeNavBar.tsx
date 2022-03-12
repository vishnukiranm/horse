import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/final.png"

export const HomeNavBar = () => {
    return (
      <nav className="navbar home-navbar navbar-expand-lg navbar-dark justify-content-end ">
 
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse float-end" id="navbarSupportedContent">  
  <form className="form-inline justify-content-end my-2 my-lg-0 float-end">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item active">
      <Link to="/team" className="nav-link" href="#">Unser Team</Link>
    </li>
    <li className="nav-item active">
      <Link to="/fleet" className="nav-link" href="#">Unsere Flotte</Link>
    </li>
   
  </ul>
   <button className="btn btn-outline-success snd-of my-2 my-sm-0" type="submit">Send Offer</button>
  </form>
</div>
</nav>
       
     
    )
}
