import React, { useEffect } from "react";
import { Testimony } from "../../api/homeApi";

const url = "https://www.picsum.photos/1920/1081";

const Card = ({ msg, author }: Testimony) =>
    <div className="card" style={cardStyle}>
        <div className="card-body">
            <p className="card-title mb-0">{msg}</p>
            <h2 className="card-title mt-0">{author}</h2>
        </div>
    </div>

interface Props {
    testimonies: Testimony[]
}
function activateFirstItem(p: any) {
    console.log("carousel he", p);
    $('#myCarousel .carousel-item').eq(0).addClass('active');
}

const Carousel = ({ testimonies }: Props) => {
    useEffect(() => {
        activateFirstItem(testimonies);
    })
    return testimonies.length ?
        <div id="carouselExampleControls" className="carousel slide mt-1" data-bs-ride="carousel">
            <div className="carousel-inner" id="myCarousel">
                {testimonies.map((testimony, idx) =>
                    <div key={idx} className="carousel-item" style={{ height: "25em" }}>
                        <div style={{ background: `url('${url}')`, width: "100%", height: "25em", color: "white" }} className="p-5" >
                            <h3 className="ms-5">What Our Clients Say</h3>
                            <Card author={testimony.author} msg={testimony.msg} />
                        </div>
                    </div>
                )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div> : null
}
const cardStyle: React.CSSProperties = {
    color: "#fff",
    borderRadius: "0.5em",
    height: "17rem",
    width: '30rem',
    position: 'absolute',
    right: "1em",
    top: "1em",
    backgroundColor: "#111",
    opacity: 0.8
}
export default Carousel;