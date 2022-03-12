import React from "react";

//Need something done Card
const Card1 = ({ title, subtitle }: any) =>
    <div className="card col-3 my-2 p-2" style={cardStyle}>
        <img src="https://www.picsum.photos/200" style={bodyStyle} className="m-auto card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title" >{title}</h5>
            <p className="card-text" style={{ fontSize: "12px" }}>{subtitle}</p>
        </div>
    </div>

const cardStyle: React.CSSProperties = {
    background: "#ccc",
    display: "inline-block",
    height: "15em",
    overflow: "hidden",
    textAlign: 'center',
    width: "15em",
}

const bodyStyle = {
    height: "5em",
    // width: "5em"
}

export default Card1;