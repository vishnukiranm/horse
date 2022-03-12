import { FormEvent, useState } from "react";
import "./styles.scss"
const ContactPage = () => {
    const [state, setState] = useState({ name: "", email: "", company_email: "", message: "", query: "" });
    const handleChange = ({ target }: any) => {
        let currentState: any = state;
        currentState[target.name] = target.value;
        currentState['query'] = $('#query').val();
        setState(currentState);
    }
    const sendMail = (e: FormEvent) => {
        e.preventDefault();
        //to send mail
        console.log(state);
    }

    return <div className="position-relative p-md-0" style={{ backgroundColor: "#F8F8F8" }}>
        <div className="jumbotron jumbotron-fluid p-md-3 align-middle" style={{ backgroundImage: "url(https://www.xpressbees.com/images/contact-img.jpg)" }}>

            <h1> <span>HAVE SOMETHING TO SHARE?</span></h1><br />
            <h4>  CONTACT US</h4>

        </div>
        <div className="container">
        <p className=" d-block text-center  p-0 p-md-1" ><small>For  enquiries and feedback, call our Customer Care on:
             <p className="text text-warning text-center m-1 p-0">+91 (020) 12345678
             </p> 
             or
             <p className="text text-warning text-center m-0 p-0">
                 customercare@transport.com
                 </p> 
        </small>
        </p>
  
          
            <div className="row p-md-3">

                <form onChange={handleChange} onSubmit={sendMail} id="myForm" className="btn-group-vertical ms-5 d-block col-8 col-md-4 form-group" >
                    <div className="form-group ">
                        <input type="text" className="d-block form-control col-xs-2" aria-describedby="emailHelp" name="name" placeholder="Enter Name" defaultValue={state.name} required />
                    </div>
                    <input className="d-block form-control col-xs-2" placeholder="Enter Email" type="email" name="email" defaultValue={state.email} required />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    <div className="form-group mt-3">
                        <label >Select Query </label>
                        <select className="form-control" id="query" name="query" defaultValue={state.query} placeholder="Select Query " required>
                            <option>Shipment Related</option>
                            <option>Refund related</option>
                            <option>Booking Related</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input className="d-block form-control " placeholder="Enter Company Mail" type="email" name="company_email" defaultValue={state.company_email} required />
                    </div>
                    <textarea className="form-control" rows={3} name="message" defaultValue={state.message} required></textarea>
                </form>
            </div>
            <div className="btn-group-horizontal row mt-2">
                <button form="myForm" type="submit" className="btn btn-primary col-4 col-md-2 mx-1">Submit</button>
            </div>
        </div>

    </div>
}

export default ContactPage;