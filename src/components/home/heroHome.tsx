import { Link } from "react-router-dom";

interface Props {
    url: string,
}
const HeroCard = ({ url }: Props) => (
    <div style={{ background: `url('${url}')`, width: "100%", color: "#fff" }} className="p-5" >
        <div className="row">
            <div className="card col-6" style={{ width: '22em', backgroundColor: "#333", opacity: 0.8 }}>
                <div className="card-body">
                    <h2 className="card-title mb-0">Transport</h2>
                    <h2 className="card-title mt-0">Your Loved Horses</h2>
                    <Link className="btn btn-primary mt-5 mb-5" to="/quotation">Check Quotation</Link>
                </div>
            </div>
            <div className="col-6 text-end mt-5">
                <h3>100K+ Horses </h3>
                <h3>Already Transported </h3>
                <h3>Across US </h3>
            </div>
        </div>
    </div>
);


export default HeroCard;
