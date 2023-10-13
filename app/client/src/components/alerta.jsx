import React from "react";
import noHelmetImg from "../images/noHelmet.png"


export default function CapaceteOk(){
  function turnOffAlert() {
    // fetch("/teste", {
    //   method: "POST",
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify({ value: true })
    // })
    fetch("/turnOffAlert");
  }

  return (   
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ flex: 1 }}>
        <div className="Card">
          <div>
            <h1 className="texto">Funcionário sem capacete detectado!</h1>
            <button onClick={turnOffAlert} className="botao">Verificar uso</button>
          </div>
        </div>
      </div>
  
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <img style= {{height: '650px', width: '650px'}} src={noHelmetImg} alt="" />
      </div>
    </div>
  );

}