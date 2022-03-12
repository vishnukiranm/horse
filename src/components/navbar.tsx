import { Link } from "react-router-dom";
import "./../custom.scss";
import logo from "../assets/final.png"

const NavBar = () =>   <nav className="navbar oth-navbar navbar-expand-lg navbar-dark  ">
 <Link to="/">
    <img src={logo} className="img-responsive m-3" width="70px"  />
  </Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>

<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
      <Link to="/" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
    </li>
    <li className="nav-item active">
      <Link to="/team" className="nav-link" href="#">Unser Team</Link>
    </li>
    <li className="nav-item active">
      <Link to="/fleet" className="nav-link" href="#">Unsere Flotte</Link>
    </li><li className="nav-item active">
      <Link to="/agbs-/-datenschutzerklärung" className="nav-link" href="#"> AGBs / Datenschutzerklärung</Link>
    </li>
   
  </ul>
  <form className="form-inline my-2 my-lg-0">
  <Link to="/book-trip">  <button className="btn btn-outline-success my-2 my-sm-0 snd-of" type="submit">  Jetzt Angebot einholen
</button></Link>
  </form>
</div>
</nav>

export default NavBar;
