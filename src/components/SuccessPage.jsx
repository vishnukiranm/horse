import React, { useEffect, useState } from "react";
import "./PaymentSucessStyle.css";
import bookingImg from "../assets/booking.png";
import { Link, useParams } from "react-router-dom";
import NavBar from "./navbar";
export const PagePaymentSucessfull = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("Not Found");
  const [amount, setAmount] = useState("4.66");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    console.log(params);

    setId(params.get("id") ?? ""); // 123 log
    setName(params.get("name") ?? "");
    setAmount(params.get("amount") ?? "3");
    return () => {};
  }, []);
  return (
    <div>
      <NavBar />{" "}
      <center>
        {" "}
        <div>
          <div className="success-container">
            <img className="bookingImg" src={bookingImg} />
            <h3 className="text text-danger">Anfrage erfolgreich! </h3>
            <small>
              Vielen Dank für Ihre Anfrage. Sie erhalten in Kürze eine
              Rückmeldung
            </small>
            {/* <h5 className="my-3">Booking Details</h5>
        <table>
          <tr>
            <td>Booking Id</td>
            <td>{id}</td>
          </tr>
          <tr>
            <td>Customer Name</td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>Amount Paid</td>
            <td>€ {parseFloat(amount).toFixed(2)}</td>
          </tr>
        </table> */}
          </div>{" "}
          <Link
            to="/"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            {" "}
            <button
              type="submit"
              className="btn btn-primary contact-submit-button"
            >
              Back to Home
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
};
