import { Link } from "react-router-dom";
import MiekImage from "../assets/2.1.png";
import Seika from "../assets/2.2.png";
import Image3 from "../assets/2.3.png";
import logo from "../assets/final.png";
import NavBar from "../components/navbar";
import "./styles.scss";
export const OurTeam = () => {
  return (
    <div>
      <NavBar />
      <div className="container-fluid my-4">
        <div className="row mx-3 justify-content-center">
          <h3>Unser Team</h3>
        </div>
        <div className="row justify-content-center">
          <div className="line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9 col-lg-3 col-sm-4 card m-5 p-0">
            <img
              className="card-img-top"
              src={MiekImage}
              alt="Card image cap"
            />
            <div className="card-body">
              <h5 className="card-title text-left">Meik</h5>
              <p className="card-text text-left">
                Im März 2017 gründete Meik das Unternehmen und hat damit seine
                Bestimmung gefunden.
              </p>
              <p className="card-text text-left">"Geht nicht, gibt es nicht!</p>
              <p className="card-text text-left text-muted">
                Dank seiner Erfahrung und seines großen Einfühlungsvermögens in
                die Pferdepsyche, hat er bisher mit Ruhe und Umsicht für jedes
                Problem die richtige Lösung gefunden.
              </p>
              <p className="card-text text-left">
                Meik fährt neben Stallwechseln und Klinikfahrten auch
                "Problempferde mit Saskia und Langstrecken mit Thorsten
                zusammen.
              </p>
              <p className="card-text text-left">
                {" "}
                Im Notfall ist Meik 24 Stunden, an 365 Tagen im Jahr, für Sie
                und Ihre Liebsten erreichbar.
              </p>
            </div>
          </div>
          <div className="col-9 col-lg-3 card m-5 p-0">
            <img className="card-img-top" src={Seika} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-left">Saskia</h5>
              <p className="card-text text-left">
                Seit Anfang 2019 verstärkt die gelernte Pferdewirtin unser Team
              </p>

             
              <p className="card-text text-left">
                Sie überzeugt uns auch Heute noch durch. ihre Souveränität,
                Einsatzbereitschaft, Zuverlässigkeit und Umsicht.
              </p>
              <p className="card-text text-left">
                Durch ihre jahrelange Erfahrung im Umgang mit Pferden und ihren
                Besitzern meistert sie auch schwierige Situationen.
              </p>
              <p className="card-text text-left">
                Saskia fährt hauptsächlich im Nahverkehr, ist aber auch gerne
                mal auf der Langstrecke unterwegs.
              </p>
              <p className="card-text text-left">
                Außerdem fährt sie mit Meik zusammen die
              </p>
              <p className="card-text text-left">"Problempferde".</p>
              
            </div>
          </div>
          <div className="col-9 col-lg-3 card m-5 p-0">
            <img className="card-img-top" src={Image3} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title text-left">Thorsten</h5>
              <p className="card-text text-left">
                Seit Ende 2020 bereichert Thorsten unser Team und begleitet Meik
                bei Langstrecken Transporten im In-/und Ausland.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
