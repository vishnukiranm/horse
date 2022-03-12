
import { Link } from "react-router-dom";
import "./fooStyle.scss";
import logo from "../assets/final.png"

const Footer = ()  => <footer className="footer" >

    <div className="col heading justify-content-center">
    <img src={logo} className="img-responsive m-3" width="170px"/>
       <Link   to="/"><h2 className="text-light">   Meik‘s Pferdetaxi  </h2></Link> 
        <address className="text-light">  24 H Notfalltransporte<br/>
 0152 / 33912640</address>
        <p className="text-light">Jetzt Angebot einholen</p>
       <Link to="/Impressum"> <div className="btn " style={{background:"#007bff"}}> Impressum</div></Link>
    </div>
    </footer>

             export default Footer;