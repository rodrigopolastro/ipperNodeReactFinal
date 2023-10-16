import React from "react";
import verificacao from "../images/verificacao.png"
import "./semCapacete.css"


export default function CapaceteOk() {
  return (

    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="Card1">


        <div>
          <img style={{ height: '450px', marginBottom: '30px'}} src={verificacao} alt="" />
        </div>
        <div className='tudocerto'>
          <h1 className="textoj">Tudo certo por aqui...</h1>

        </div>

      </div>

    </div>
  );

}