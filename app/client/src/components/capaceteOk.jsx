import React from "react";
import verificacao from "../images/verificacao.png"
import "./semCapacete.css"


export default function CapaceteOk(){
  return (
    
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ flex: 1 }}>
        <div className="Card">
          <div>
            <h1 className="texto">Capacete sendo usado corretamente!</h1>
          </div>
          <div>
            <div>
           
            </div>
          </div>
        </div>
      </div>
  
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <img style= {{height: '650px', width: '650px'}} src={verificacao} alt="" />
      </div>
    </div>
  );

}