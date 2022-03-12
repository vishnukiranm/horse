import { useState } from "react";
import { Link } from "react-router-dom";
import ProgressIndicator from "../components/progressIndicator"
import "../custom.scss"

const CheckoutPage = ({ details }: any) => {
    const [state, setState] = useState({});
    const handleChange = ({ target }: any) => {
        let currentState: any = state;
        currentState[target.name] = target.value;
        setState(currentState);
    }
    const checkout = (e: any) => {
        e.preventDefault();
        console.log(state);
    }

    return <div>
        <div className="position-relative">


        </div>
        <ProgressIndicator step={3}></ProgressIndicator>
        <div style={container}>
            <div className="row">
                <div className="col-75">
                    <div className="container m-1">
                        <div>
                            <h5 className="m-3">Shipping Route</h5>
                        </div>
                        <div className="row justify-content-between m-1 align-middle fcontainer">
                            <div className="col-3 route-card">
                                <h5 className="text text-info">
                                    First trip
                                    <small className="text-muted " style={{ fontSize: "10px" }}> ({details.distance1}) km</small>
                                </h5>
                                <div className="row">
                                    <div className="col"><i className="bi bi-circle m-2" style={{ color: "green" }}></i>
                                        <p className="text text-danger">Baramulla</p>
                                    </div>
                                    <div className="col"><i className="bi bi-record-circle m-2 "
                                        style={{ color: "green" }}></i>
                                        <p className="text text-success">our office</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 dashed-spacer"></div>
                            <div className="col-3 route-card align-middle justify-content-center">
                                <h5 className="text text-info">
                                    Second trip
                                    <small className="text-muted" style={{ fontSize: "10px" }}>  ({details.distance2}) km</small>
                                </h5>
                                <div className="row">
                                    <div className="col"><i className="bi bi-circle m-2" style={{ color: "green" }}></i>
                                        <p className="">our office</p>
                                    </div>
                                    <div className="col"><i className="bi bi-record-circle m-2 "
                                        style={{ color: "green" }}></i>
                                        <p className="">{details.origin}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-1 dashed-spacer"></div>
                            <div className="col-3 route-card">
                                <h5 className="text text-info">
                                    Third trip
                                    <small className="text-muted" style={{ fontSize: "10px" }}> ({details.distance1}) km</small>
                                </h5>
                                <div className="row">
                                    <div className="col"><i className="bi bi-circle m-2" style={{ color: "green" }}></i>
                                        <p className="">Jammu</p>
                                    </div>
                                    <div className="col"><i className="bi bi-record-circle m-2 "
                                        style={{ color: "green" }}></i>
                                        <p className="">our office</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="mt-5  p-5 payment-summary" style={{ borderRadius: "8px" }}>
                <h4 className="m-2">Payment Summary</h4>
                <table className="table">
                    <tbody>

                        <tr>
                            <td >Total Distance </td>
                            <td >{details.total_distance} km</td>
                        </tr>
                        <tr>
                            <td >Rate/Km </td>
                            <td >${details.rate_km}</td>
                        </tr>
                        <tr>
                            <th scope="row">Total Charges </th>
                            <th scope="row">${details.total.toFixed(1)}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="btn bt--primary">Complete Payment</div>
            <Link to="book-trip">  <div className="btn bt--primary">  Go back</div></Link>
        </div>



    </div>
}
const container: React.CSSProperties = {
    // height: "30em",
    width: "80%",
    background: "#fff",
    position: "relative", marginTop: "-7em",
    marginBottom: "9em",
    top: "33%",
    bottom: "20%",
    left: "10%",
    // marginBottom:"12 0px",
    boxShadow: "0px 1px 10px 1px #605B5B",
    borderRadius: "4px",
    padding: "1em",
    // border: "2px solid #333"
}
export default CheckoutPage;