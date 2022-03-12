// import { CircularProgress } from "@material-ui/core";
import { FormEvent,useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { getTrackingDetails, TrackingDetails } from "../api/track";
import "../custom.scss"

const Details = ({ details }: any) => {
    const { address, email,name,phone,total}: TrackingDetails = details;
    return <div className="">
       
        <dl className="row-sm-12 m-md-3 p-md-3 p-1 tracking-card ">
        <h4>Shipment Status</h4>
  <dt className="col-sm-7  ">Customer Name:<small>{name}</small></dt>
  <dd className="col-sm-9">{name}</dd>

  <dt className="col-sm-3">Phone</dt>
  <dd className="col-sm-9">
   {phone}
  </dd>

  <dt className="col-sm-3">Registered Email</dt>
  <dd className="col-sm-9">{email}</dd>

  <dt className="col-sm-3 text-truncate">Shipping cost</dt>
  <dd className="col-sm-9">${total}
  
  </dd>

</dl>
    </div>
}



const TrackPage = () => {
    let [loading,setloading]:any=useState(null);
    const [details, setdetails]: any = useState(null);
    const handleSubmit = async (e: FormEvent) => {
        setloading(true)
        e.preventDefault();
        const id: string = $('#orderId').val() as string;
        const data: TrackingDetails = await getTrackingDetails(id);
        setloading(false)

       
        setdetails(data);
    }
    
    return <div>
      
        <div className="p-md-5 p-1 mx-auto" style={{ background: "#F8F8F8", }}>
     

        <div className="container p-md-5" style={{ background: "#fff" ,boxShadow:"rgb(232 232 232) 1px 2px 20px 0px",borderRadius:"4px"}}>
            <h3 className="text-center text-secondary">Track Shipment</h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="orderId" className="form-label">Order Id</label>
                    <input type="number" className="form-control" id="orderId" name="orderId" placeholder="Enter Order Id" />

                    <input  className="btn btn-warning mt-md-3 text-white btn-sm btn-md-lg"  type="submit" />
                </div>
            </form>
            {details !== null ? <Details details={details}></Details> : null}
        {loading===true?null:null} 
        </div>
     
    </div>
  
    <div className="  jumbotron jumbotron-fluid p-md-3 p-1 "style={{ height:"14em", background:"white",}}>
            <div className="row justify-content-center text-center">
                <h3>Why our customer's choose us</h3>
            </div>
            <div  className="row justify-content-center text-center m-">
              <div className="col-md-3 col-6">
               <h3 className="demo"> 3 million+</h3> 
               <p><small>Shipments handling </small></p>
               
               </div>
               <div className="col-md-3 col-6 ">
               <h3 className="demo"> 30+</h3> 
               <p><small>Offices in europe</small></p>
               
               </div>
               <div className="col-md-3 col-6">
               <h3 className="demo"> 10+</h3> 
               <p><small>Cities covered</small></p>
               
               </div>
               <div className="col-md-3 col-6">
               <h3 className="demo"> 34000+</h3> 
               <p><small>Shipments tracking</small></p>
               
               </div>
            </div>
            
        </div>
    </div>
}
export default TrackPage;