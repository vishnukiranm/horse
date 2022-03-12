interface Props {
    step: number
}
const ProgressIndicator: React.FC<Props> = ({ step }) => <>
    <div style={background}>
        <h3 className="text-center mb-5">Book Trip</h3>
        <div className="row" style={{ width: "83%", margin: "auto", fontSize: "13px" }}>
            <div className="col">
                <label>1. Basic Information</label><br />
                <div className="mt-2" style={{ height: "0.3em", width: "100%", background: "#fff" }}></div>
            </div>
            <div className="col">
                <label>2. Shipping Information</label><br />
                <div className="mt-2" style={{ height: "0.3em", width: "100%", background: step > 1 ? "#fff" : "#888" }}></div>
            </div>
            <div className="col">
                <label>3. Checkout</label><br />
                <div className="mt-2" style={{ height: "0.3em", width: "100%", background: step > 2 ? "#fff" : "#888" }}></div>
            </div>
        </div>
    </div>
</>

const background: React.CSSProperties = {
    background: "#313950",
    height: "20em",
    color: "#fff",
    // textAlign: "center",
    padding: "1em",
}

export default ProgressIndicator;