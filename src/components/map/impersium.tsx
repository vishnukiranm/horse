import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/final.png"

export const Imperrsium = () => {
    return (
        <div>
              <nav className="nav ">
            <Link to="/"><img src={logo} className="img-responsive m-3" width="170px" /></Link>
        </nav><div style={{height:"7em"}}></div>
    <div className="container border-0 mt-5"> 
    <h4 className="text text-primary">Impressum</h4>
    
     <h6 className="text text" style={{lineHeight:"1.6em",fontWeight:300}}>           Anbieterkennzeichnung nach § 5 TMG<br/>
Meik´s Pferdetaxi<br/>

Inh. Meik Meier<br/>

Auf dem Rott 22a<br/>
50259 Pulheim <br/>

 Finanzamt Bergheim <br/>
UST ID: DE 315 165 117 <br/>

Veterinäramt Bergheim (Rhein - Erft - Kreis) <br/>
Zulassungsnummer: 276053620080323
</h6></div>

<div style={{height:"7em"}}></div>
   </div>
    )
}
