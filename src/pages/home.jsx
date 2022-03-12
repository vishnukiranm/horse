import secure from "../assets/secure.png";
import bg from "../assets/bgg.jpg";
import image1 from "../assets/File1.jpeg";
import image2 from "../assets/File2.jpeg";
import image3 from "../assets/File3.jpeg";
import image4 from "../assets/File4.jpeg";
import image5 from "../assets/File5.jpeg";    
import image6 from "../assets/File6.jpeg";    
import image7 from "../assets/File7.jpeg";    
import image8 from "../assets/File8.jpeg";    
import image9 from "../assets/File9.jpeg";    
import image10 from "../assets/File10.jpeg";    
import Reviews from "./reviews"
import dollar from "../assets/dollar.png";
import shipping from "../assets/shipping.png";
import logo from "../assets/final.png";
import { Link } from "react-router-dom";
import "./homestyle.scss";
import { HomeNavBar } from "../components/HomeNavBar";
import NavBar from "../components/navbar";
import CardImage from "../assets/2.1.png"
const Home = () => (
  <div>
    <div className=" jumbotron-fluid img-fluid mt-0 header">
      <NavBar />
      <div className=" row m-1  justify-content-between">
        <div className="col-md-4">
          <div
            className="card card-info rounded-2"
            style={{ background: "rgba(0, 0, 0, 0.5)" }}
          >
         
            <div className="card-block p-2 text-white">
              <img src={logo} className="img-responsive m-3" width="170px" />
              <Link to="/">
                <h2 className="text-light"> Meik‘s Pferdetaxi </h2>
              </Link>
              <address className="text-light">
                {" "}
                24 H Notfalltransporte
                <br />
                0152 / 33912640
              </address>
              <p className="text-light"></p>
              <Link
                to="/book-trip"
                className="btn btn-info m-2 border border-0"
                style={{
                  width: "13em",
                  minHeight: "3em",
                  paddingTop: "1em",
                  backgroundColor: "red",
                  background: "#000000",
                  opacity: "100%",
                }}
              >
                Jetzt Angebot einholen
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-6  m-3 text-white lead d-inline-block text-truncate"></div>
      </div>
    </div>
    <div className="col justify-content-start mt-3 ">
      <div className="col-12 text-start">
        <h4>Warum mit uns transportieren ?</h4>
      </div>
      <div className="row  no-wrap text-center justify-content-center">
        <div
          className="mt-2 mt-md-0"
          style={{
            width: "100%",
            height: " 0.5em",
            background: "rgb(241 241 241)",
            borderRadius: "2px",
            marginInline: "2em",
          }}
        >
          <div
            style={{
              width: "30%",
              height: " 0.5em",
              background: "#4a4a4a",
              borderRadius: "2px",
              // marginInline:"3em"
            }}
          ></div>
        </div>
      </div>
    </div>
    <div className="container border-0  ">
      <div className="row m-0 justify-content-between">
        <div className="col-md-4 col-xs-12 col-sm-7 text-center">
          <div className="jumbotronb">
            <img alt="" className="" src={secure} width="60px" />
            <div className="m-2">
              <h4>Versicherter Direkttransport</h4>
            </div>
            <p
              className="m-2"
              style={{
                fontSize: "12px",
                color: "#2B2B2B",
                fontWeight: "300",
              }}
            >
              Wir transportieren 1 bis 8 Pferde europaweit ausschließlich im
              Direkttransport. Egal ob Stallwechsel, Notfallfahrt in die
              Tierklinik oder Wander-/Urlaubsritt - (fast) alles ist möglich.
            </p>
          </div>
        </div>

        <div className="col-md-4 col-xs-4 text-center">
          <div className="jumbotronb vertical-middle">
            <img alt="" className="fluid" src={shipping} width="70px" />
            <div className="m-2">
              <h3>Moderner Fuhrpark</h3>
            </div>
            <p
              className="m-2"
              style={{
                fontSize: "12px",
                color: "#2B2B2B",
                fontWeight: "300",
              }}
            >
              Alle unsere Fahrzeuge sind steht’s auf dem neuesten Stand der
              Technik. Alle Fahrzeuge verfügen über Videoüberwachung um ihre
              Vierbeiner während der Fahrt im Auge behalten zu können. Alle
              Fahrzeuge sind vom Veterinäramt abgenommen und haben eine Abnahme
              für Langstrecken Transporte (typ2)
            </p>
          </div>
        </div>
        <div className="col-md-4 col-xs-4 text-center">
          <div className="jumbotronb">
            <img className="fluid" src={dollar} width="40px" />
            <div className="m-2">
              <h3> Faire Preise</h3>
            </div>
            <p
              className="m-2"
              style={{
                fontSize: "12px",
                color: "#2B2B2B",
                fontWeight: "300",
              }}
            >
              Egal ob wir Sie und ihren Vierbeiner Notfallmäßig in die Klinik
              bringen oder ein normaler Stallwechsel ansteht, Qualität zum
              fairen Preis ist unser Maßstab.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="col justify-content-start mt-3 ">
      <div className="col-12 text-start">
        <h4>Galerie</h4>
      </div>
      <div className="row  no-wrap text-center justify-content-center">
        <div
          className="mt-2 mt-md-0"
          style={{
            width: "100%",
            height: " 0.5em",
            background: "rgb(241 241 241)",
            borderRadius: "2px",
            marginInline: "2em",
          }}
        >
          <div
            style={{
              width: "30%",
              height: " 0.5em",
              background: "#4a4a4a",
              borderRadius: "2px",
              // marginInline:"3em"
            }}
          ></div>
        </div>
      </div>
    </div>

    <div className="row justify-content-center m-3">
      <div className="col-md-9">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>

          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 gallery-img"
              
                src={image2}
                alt="First slide"
                width="120"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image1}
                alt="Second slide"
                width="120"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image3}
                alt="Second slide"
                width="120"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image4}
                alt="Second slide"
                width="120"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image5}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img "
              
                src={image6}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img "
              
                src={image7}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image8}
                alt="Second slide"
              />
            </div>

            <div className="carousel-item">
              <img
                className="d-block w-100 gallery-img"
              
                src={image9}
                alt="Second slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
    <div className="col justify-content-start mt-3 ">
      <div className="col-12 text-start">
        <h4>Kundenrezensionen</h4>
      </div>
      <div className="row  no-wrap text-center justify-content-center">
        <div
          className="mt-2 mt-md-0"
          style={{
            width: "100%",
            height: " 0.5em",
            background: "rgb(241 241 241)",
            borderRadius: "2px",
            marginInline: "2em",
          }}
        >
          <div
            style={{
              width: "30%",
              height: " 0.5em",
              background: "#4a4a4a",
              borderRadius: "2px",
              // marginInline:"3em"
            }}
          ></div>
        </div>
      </div>
    </div>

    <div className="container-fluid cls18">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner  my-5">
       <div className="carousel-item active" key={Reviews[3].id}>
            <div
              style={{
                // minHeight:"9cm",
                // maxHeight: "9cm",
                width: "100%",
                marginTop:"auto",
                backgroundColor: "#BED4E8",
                marginRight: "auto",
                marginLeft: "auto",
                // marginTop:"20px",
                padding:"3px",
                
              }}
            >
              <center
                style={{ paddingTop: "7%", width: "70%", marginLeft: "auto" ,marginRight: "auto",fontSize: "10px"}}
              >
                <h6 className="review-text"> {Reviews[3].review}</h6>
              </center>
           <center>   <div className="btn float-end">{Reviews[3].user}</div></center>
            </div>
          </div>
          {Reviews.map((e)=><div className="carousel-item " key={e.id}>
            <div
              style={{
               
                width: "100%",
                marginTop:"auto",
                backgroundColor: "#BED4E8",
                marginRight: "auto",
                marginLeft: "auto",

                padding:"3px"
              }}
            >
              <center
                style={{ paddingTop: "7%", width: "70%", marginLeft: "auto" ,marginRight: "auto",fontSize: "10px"}}
              >
              <h6 className="review-text"> {e.review}</h6>
              </center>
           <center>   <div className="btn float-end">{e.user}</div></center>
            </div>
          </div>)}
        </div>
        <a
          className="carousel-control-prev cls19"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

    <div className="col justify-content-center ">
      <div className="col-7 text-center">
        <h4>Über Uns</h4>
      </div>
      <div className="row  no-wrap text-center justify-content-start">
        
      </div>
    </div>
    <div className="row m-2 justify-content-around">
     
      <div className=" col-12 col-md-6 justify-content-center text-center">
        <p>
          Wir freuen uns, dass Sie den Weg zu unserer Homepage gefunden haben.
          <br />
          Mein Name ist Meik Meier, ich bin gelernter Landwirt mit dem
          Schwerpunkt Pferdehaltung.
          <br />
          Ich habe im März 2017, wegen meiner Leidenschaft zu Pferden, welche
          bereits seit meinem 5. Lebensjahr besteht, das Unternehmen "Meik ́s
          Pferdetaxi" gegründet.
          <br />
          Mit meinem Team habe ich mich von Beginn an auf Einzeltransporte
          spezialisiert.
          <br />
          Dies bedeutet nicht, dass wir nicht mehrere Pferde gleichzeitig
          transportieren können, wir vermeiden es lediglich mehrere Ställe
          anzufahren und weitere fremde Pferde aufzuladen. So können wir den
          Transport für Ihr Pferd so stressfrei wie möglich gestalten und die
          Transportdauer verkürzen.
        </p>
        <h6>Wir fahren für Sie Europaweit.</h6>
        <br />
        <h4>Im Notfall sind wir 24/7 für Sie erreichbar</h4>.
        <p>
          <br />
          Beim Verladen und dem Transport "erkrankter" Pferde, können Sie sich
          jederzeit auf die Erfahrung unseres Teams verlassen.
          <br />
          Während der Fahrt wird (werden) Ihr(e) Pferd(e) videoüberwacht.
          Hierdurch haben wir unsere "Fahrgäste" permanent im Blick und können,
          falls erforderlich, direkt eingreifen.
        </p>
      </div>
  <div className="card col-4 card-img border-0"><img src={CardImage} alt="" className="src" /></div>
    </div>
  </div>
);

export default Home;
