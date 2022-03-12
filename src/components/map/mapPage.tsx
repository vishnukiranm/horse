import ProgressIndicator from "../progressIndicator";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { FormEvent, useEffect, useState } from "react";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { addBooking, getRate } from "../../api/booking";
import logo from "../../assets/final.png";
import "bootstrap/dist/css/bootstrap.css";
import "../map/mapstyle.scss";
import DateTime from "react-date-picker";
import NavBar from "../navbar";
import { CircularProgress, Dialog, DialogTitle } from "@mui/material";

var isFirst: boolean = true;
var isInitialized: boolean = false;
function MapPage() {
  let history = useHistory();
  // const [value, onChange] = useState(new Date());
  const [state, setState] = useState({
    first_name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
    mare_horses: "0",
    stallion_horses: "0",
    gelding_horses: "0",
    start_lan: "",
    start_lat: "",
    end_lan: "",
    end_lat: "",
    start_place: "",
    end_place: "",
    last_name: "",
    sel_date: new Date(),
    problem: "off",
    equip: "off",
    night: "off",
    soll: "off",
    bekannt: "off",
    Verladefromm: "off",
    vorhanden: "off",
  });
  const [open, setOpen] = useState(false);

  const [terms, setTerms] = useState(true);
  const [rate, setrate]: any = useState(null);
  const [mapState, setmapState]: any = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDcozBlxx-_AEGPqQ06yaG2XpqPDfR79bI",
  });
  const [error, seterror]: any = useState("");
  useEffect(() => {
    fetchRate();
    initPlacesApi();
    if (!isInitialized) {
    }
  }, []);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
  }, [state]);
  const fetchRate = async () => {
    const rate = await getRate();
    console.log("fetched rate", rate);
    if (rate == -1) {
      alert("Please check your internet connection");
    } else {
      setrate(rate);
    }
  };

  const handleBooking = async (e: any) => {
    e.preventDefault();

    window.scrollTo({ top: 0, behavior: "smooth" });
    // if (!details.total_distance) {
    // seterror("Please Press the Calculate button");
    // return;
    // }
    if (!mapState) {
      seterror("Please fill up where u wanna go...");
      return;
    }
    if (!terms) {
      seterror("Please Accept Terms ");
      return;
    }
    setOpen(true);
    seterror("");
    // seterror("Should be implemented");
    const response = await addBooking(state);

    console.log(response);
    console.log(state);
    // setState({first_name:"",phone:"",email:"",address:"",start_lan:"",end_place:"",end_lan:"",start_place:"",start_lat:"",end_lat:"",mare_horses: "",stallion_horses:"",gelding_horses:"",last_name:"",sel_date:new Date(),problem:"",equip: "",night:""});
    if (response.data.success == 0) {
      alert(response.data.message);
    } else {
      e.target.reset();
      window.location.replace("https://www.meiks-pferdetaxi.de/#/success");
    }
    //             window.location.replace('/')
    //             alert("Vielen Dank für Ihre Anfrage, wir melden uns so schnell wie möglich!",)
    //         }
    //         // history.push("/checkout");
  };

  function displayRoute() {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      { zoom: 4, center: center }
    );
    var directionsService = new google.maps.DirectionsService();
    var directionsDisplay = new google.maps.DirectionsRenderer({
      draggable: false,
    });
    directionsService.route(
      {
        origin: state.start_place,
        destination: state.end_place,
        travelMode: google.maps.TravelMode.DRIVING,
        avoidTolls: true,
      },
      function (response: any, status: string) {
        if (status === "OK") {
          directionsDisplay.setMap(map);
          directionsDisplay.setDirections(response);
          seterror("");
        } else {
          directionsDisplay.setMap(null);
          seterror(`Could not display directions due to: ${status}`);
        }
      }
    );
  }

  function calculateDistance(e: FormEvent) {
    e.preventDefault();
    if (state.start_place === "" || state.end_place === "") {
      seterror("Please fill all the fields");
      console.log(state);
      window.scrollTo({ top: 20, behavior: "smooth" });
      return;
    }
    window.scrollTo(10, 700);
    new google.maps.DirectionsRenderer().setMap(null);
    const destination: any = state.start_place;
    const destination2: any = state.end_place;
    console.log(destination);
    console.log(destination2);

    new google.maps.DistanceMatrixService().getDistanceMatrix(
      {
        origins: [destination],
        destinations: [destination2],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL, // miles and feet.
        // unitSystem: google.maps.UnitSystem.METRIC, // kilometers and meters.
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (status !== google.maps.DistanceMatrixStatus.OK) {
          seterror("An Error happened. Please try again");
        } else {
          if (response.rows[0].elements[0].status === "ZERO_RESULTS") {
            seterror("No routes are detected");
          } else {
            console.log("ddssd");

            console.log(response);

            const distance = response.rows[0].elements[0].distance.value / 1000;
            // const distance2 = response.rows[1].elements[0].distance.value / 1000;
            // const distance3 = response.rows[1].elements[1].distance.value / 1000;
            // const total_distance = distance1 + distance2 + distance3;
            // const total_distance_office = distance1 + distance3;
            // const total_office = total_distance_office * details.rate_km_office;
            // const total_client = distance2 * details.rate_km;
            // const total = total_client + total_office;
            console.log("dis, rate --> ", distance, rate);
            const total = distance * rate;
            seterror("");
            setmapState({ total, distance });
            displayRoute();
            console.log("All Set--> ", total, mapState);
            window.scrollTo({
              top: document.getElementById("rateCalculation")?.offsetTop,
              behavior: "smooth",
            });
          }
        }
      }
    );
  }
  function initPlacesApi() {
    var from_place: any = new google.maps.places.Autocomplete(
      document.getElementById("from_place") as HTMLInputElement
    );
    var to_place: any = new google.maps.places.Autocomplete(
      document.getElementById("to_place") as HTMLInputElement
    );

    google.maps.event.addListener(from_place, "place_changed", function () {
      const place = from_place.getPlace();
      if (
        typeof place !== "undefined" &&
        typeof place.geometry !== "undefined"
      ) {
        const to_address: string = place.formatted_address;
        const location = place.geometry.location;
        console.log("doing 1");

        //Setting local state
        let tempState = state;
        tempState["start_lan"] = location.lat();
        tempState["start_lat"] = location.lng();
        tempState["start_place"] = to_address;
        setState(tempState);
      } else {
        seterror("some error happened");
      }
    });
    google.maps.event.addListener(to_place, "place_changed", function () {
      const place = to_place.getPlace();
      if (
        typeof place !== "undefined" &&
        typeof place.geometry !== "undefined"
      ) {
        var to_address = place.formatted_address;
        const location = place.geometry.location;
        console.log("doing 2");

        //Setting local state
        let tempState = state;
        tempState["end_lan"] = location.lat();
        tempState["end_lat"] = location.lng();
        tempState["end_place"] = to_address;
        setState(tempState);
      } else {
        seterror("some error happened");
      }
    });
    isInitialized = true;
  }
  return (
    <div>
      {" "}
      <NavBar />
      <div className="root">
        <div className="p-md-3 mt-3">
          {error.length ? (
            <div className="alert alert-warning mt-5" role="alert">
              {error}
            </div>
          ) : null}
        </div>
        <div className="col-12 form-group basic">
          <form
            id="myForm"
            className="btn-group-vertical ms-5 d-block col-12 col-md-12"
            onSubmit={handleBooking}
            onChange={(e: any) => {
              console.log(e.target.value);
              //Setting local state
              let tempState: any = state;
              tempState[e.target.name] = e.target.value;
              setState(tempState);
            }}
          >
            <h3 className=" mb-3 ml-3" style={{ color: "#313950" }}>
              Basis Informationen
            </h3>
            <div className="form-row col-md-12 ">
              <div className="col-md-3 mb-2 ">
                <label typeof="validationCustom01">Vorname</label>
                <input
                  className="form-control input"
                  name="first_name"
                  id="validationCustom01"
                  placeholder="Vorname"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-3 mb-2 ">
                <label typeof="validationCustom01"> Nachname</label>
                <input
                  className="form-control input"
                  name="last_name"
                  id="validationCustom01"
                  placeholder=" Nachname"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label typeof="validationCustom05">Telefonnummer</label>
                <input
                  type="number"
                  className=" input form-control input"
                  name="phone"
                  id="validationCustom05"
                  placeholder="Telefonnummer"
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-5 mb-3">
                <label typeof="validationCustom02">Email</label>
                <input
                  type="email"
                  className="input form-control input"
                  name="email"
                  id="validationCustom02"
                  placeholder="Email"
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-6"></div>
              <div className="col-md-4 mb-3">
                <label typeof="validationCustom02"> Anzahl Stuten</label>
                <input
                  min="0"
                  type="number"
                  className=" input form-control input"
                  name="mare_horses"
                  id="validationCustom02"
                  placeholder="Anzahl Stuten"
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-3 mb-3">
                <label typeof="validationCustom02">Anzahl Wallach </label>
                <input
                  min="0"
                  type="number"
                  className="form-control input"
                  name="gelding_horses"
                  id="validationCustom02"
                  placeholder="Anzahl Wallach"
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-3 mb-3">
                <label typeof="validationCustom02">Anzahl Hengste</label>
                <input
                  min="0"
                  type="number"
                  className="form-control input"
                  name="stallion_horses"
                  id="validationCustom02"
                  placeholder="Anzahl Hengste"
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-8 mb-3">
                <label typeof="validationCustom02">Adresse</label>

                <input
                  max={3}
                  type="address"
                  className="form-control input"
                  name="address"
                  id="validationCustom02"
                  placeholder="Adresse"
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-8 mb-3">
                <label typeof="validationCustom02">
                  {" "}
                  Zusätzliche Informationen
                </label>

                <input
                  max={3}
                  type="text"
                  className="form-control input"
                  name="notes"
                  id="validationCustom02"
                  placeholder="Zusätzliche Informationen"
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4 mb-3">
                <label typeof="validationCustom02">
                  {" "}
                  Datum & Zeit auswählen
                </label>

                <input
                  max={3}
                  type="datetime-local"
                  data-date-inline-picker="false"
                  className="form-control input"
                  name="sel_date"
                  id="validationCustom06"
                  placeholder=" Datum & Zeit auswählen"
                  required
                ></input>
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="problem"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Problem Pferd ?</label>
              </div>{" "}
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="equip"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">
                  Equipment Transport ?
                </label>
              </div>{" "}
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="night"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Over Night ?</label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="vorhanden"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">
                  Haftpflichtversicherung vorhanden ?
                </label>
              </div>
              <div className="form-check mx-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="Verladefromm"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">Verladefromm?</label>
              </div>
              <div className="form-check mx-4 mt-md-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="bekannt"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">
                  Transportprobleme bekannt ?
                </label>
              </div>
              <div className="form-check mx-4 mt-md-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="Soll"
                  id="flexCheckDefault"
                />
                <label className="form-check-label">
                  Soll sediert werden ? ( wenn ja, ohne Haftungsübernahme )
                </label>
              </div>
            </div>
          </form>
        </div>

        <div className=" col basic mt-3">
          <h3 className="">Routenplanung</h3>
          <form id="row distance_form p-3" onSubmit={calculateDistance}>
            <div className="row">
              <div className="form-group-row pl-3 m-0 col-md-5 col-6">
                <label className="m-0 ">
                  Von:
                  <br />{" "}
                </label>
                <input
                  className="input  form-control"
                  id="from_place"
                  placeholder="Abholadresse eingeben"
                  required
                />
              </div>
              <div className=" form-group pl-3 m-0 col-md-5 col-7">
                <label className="m-1">Nach: </label>
                <input
                  className=" input form-control"
                  id="to_place"
                  placeholder="Lieferadresse eingeben"
                  required
                />
              </div>
            </div>
            <input
              className="btn btn-primary m-3"
              type="submit"
              value="Route berechnen"
            />
          </form>

          <div className="" style={{ background: "#333", height: "25em" }}>
            {isLoaded ? (
              <GoogleMap
                id="map"
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            ) : null}
          </div>
          {/* <div id="rateCalculation" className="mt-5 p-5"
                style={{ background: "#ddd", opacity: 0.8, borderRadius: "8px" }}>
                <h4>Rate Calculations</h4>
                <table className="table">{console.log("slkdjfa;slfk", details)}
                    <tbody>
                        <tr>
                            <td>Distance (office to starting point)</td>
                            <td>{details.distance1} km</td>
                        </tr>
                        <tr>
                            <td>Distance (starting point to destination)</td>
                            <td>{details.distance2} km</td>
                        </tr>
                        <tr>
                            <td>Distance (back to office)</td>
                            <td>{details.distance3} km</td>
                        </tr>
                        <tr>
                            <td>Total Distance </td>
                            <td>{details.total_distance} km</td>
                        </tr>
                        <tr>
                            <td>Rate/Km </td>
                            <td>${details.rate_km}</td>
                        </tr>
                        <tr>
                            <td>Rate_Office/Km </td>
                            <td>${details.rate_km_office}</td>
                        </tr>
                        <tr>
                            <td>Total distance (office)</td>
                            <td>{details.total_distance_office}</td>
                        </tr>
                        <tr>
                            <td>Total Price(client) </td>
                            <td>${details.total_client}</td>
                        </tr>
                        <tr>
                            <td>Total Price (office)</td>
                            <td>${details.total_office}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Charges </th>
                            <th scope="row">${details.total}</th>
                        </tr>
                    </tbody>
                </table>
            </div> */}
          {/*
            <Link className="btn btn-warning float-end m-2" to={"/book"} onClick={()=> { isInitialized = false; }}>Back
            </Link> */}
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={terms}
                onChange={() => setTerms(!terms)}
                id="invalidCheck"
                required
              />
              <label className="form-check-label">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button className="sb-btn " form="myForm" type="submit">
            Anfrage senden
          </button>
          {/*
            <Link className="btn btn-primary float-end m-2" to={"/checkout"} onClick={()=> { isInitialized = false;
            }}>Next</Link> */}
        </div>
      </div>
      <div style={{ height: "15em" }}></div>
      <Dialog open={open}>
        {/* <DialogTitle>Please Wait</DialogTitle> */}

        <div className="center m-3">
          <CircularProgress />
        </div>
      </Dialog>
    </div>
  );
}
const container: React.CSSProperties = {};
const containerStyle = {
  width: "100%",
  height: "100%",
  backgroundColor: "white",
};

const center = {
  lat: 50.95780022312292,
  lng: 6.918543657562535,
};

export default MapPage;
