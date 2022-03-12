import Fleet1 from "../assets/File7.jpeg";
import Fleet2 from "../assets/File26.jpeg";
import Fleet3 from "../assets/File27.jpeg";
import Fleet4 from "../assets/File30.png";


import NavBar from "../components/navbar";
export const OurFleet = () => {
    return (
        
   <div>
     <NavBar/>
     <div className="container-fluid ">
     <div className="row mx-1 justify-content-center"><h3>Unsere Flotte</h3></div>
        <div className="row justify-content-center"><div className="line"></div></div>
    <div className="row flex-wrap justify-content-center">
      <div className="col-12 col-md-3 my-3">
      <div className="card ">
          <img className="card-img-top" src={Fleet1}alt="Card image cap"/>
          <div className="card-body fleet-card">
            <h5 className="card-title text-center">Unsere Transporter</h5>
            <p className=" text-center fleet-card-text">-Gestütsaustattung (DeckenhoheTrennwände)</p>
            <p className="card-text text-center fleet-card-text">- jederzeit Zugang zu jedem Pferd
            </p>
            <p className="card-text text-center fleet-card-text">- Freilaufbox</p>
            <p className="card-text text-center fleet-card-text">-TYP 2 Abnahme</p>
            <p className="card-text text-center fleet-card-text">-Kameraüberwacht </p>
            <p className="card-text text-center fleet-card-text">- Anhängerkupplung</p>
         </div>
        </div>
      
      </div>
      <div className="col-12 col-md-3 my-3">
      <div className="card ">
          <img className="card-img-top" src={Fleet2}alt="Card image cap"/>
          <div className="card-body fleet-card">
            <h5 className="card-title text-center ">Unser Pferdeanhänger</h5>
            <p className="card-text text-center fleet-card-text">- Für bis zu 4 Pferde</p>
            <p className="card-text text-center fleet-card-text">- Stud equipment (ceiling-high partition walls)
            </p>
            <p className="card-text text-center fleet-card-text">- jederzeit Zugang zu jedem Pferd</p>
            <p className="card-text text-center fleet-card-text">- 2x Freilaufbox</p>
            <p className="card-text text-center fleet-card-text">- TYP 2 Abnahme </p>
            <p className="card-text text-center fleet-card-text">- Kameraüberwacht</p>
         </div>
        </div>
      </div>
      <div className="col-12 col-md-3 my-3">
      <div className="card ">
          <img className="card-img-top" src={Fleet3}alt="Card image cap"/>
          <div className="card-body fleet-card">
            <h5 className="card-title text-center">Unser Zubehöranhänger</h5>
            <p className="card-text text-center fleet-card-text">- Für Zubehör</p>
            <p className="card-text text-center fleet-card-text">- - 320cm x 170cm x 180cm
            </p>
            <p className="card-text text-center fleet-card-text">- Auffahrrampen</p>
           
         </div>
        </div>
      </div>
      <div className="col-12 col-md-3 my-3">
      <div className="card ">
          <img className="card-img-top" src={Fleet4} alt="Card image cap" height="217em"/>
          <div className="card-body fleet-card">
            <h5 className="card-title text-center">Unser Zugfahrzeug</h5>
            <p className="card-text text-center fleet-card-text">- - Allradantrieb</p>
            <p className="card-text text-center fleet-card-text">- Hohe Anhängelast
            </p>
          
         </div>
        </div>
      </div>
      
    
    </div>


     <div className="row" className="">
        
      
           </div>
</div>
    
</div>

    )
}
