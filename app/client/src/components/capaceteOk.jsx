import React from "react";
import verificacao from "../images/verificacao.png"
import "./alerta.css"


export default function CapaceteOk(){
  return (
    
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div className="Card1">
          <div>
            <h1 className="texto">Capacete sendo usado corretamente!</h1>
          </div>

      <div style={{ flex: 1, marginLeft: '200px' }}>
        <img style= {{height: '650px', width: '650px'}} src={verificacao} alt="" />
      </div>
        </div>
  
    </div>
  );

}