import React from "react";

export default function SemCapacete({ alertDate, alertTime, alertImage, alertLocation }){
  function turnOffAlert() {
    fetch("/turnOffAlert")
    .then((response) => response.json())
    .then((data) => { console.log(data.result) })
    // TO DO: clear the interval here (since it will just update when the button is clicked)
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
        <h1 className="texto">Hoje às {alertTime}</h1>
        <h1 className="texto">Localização: {alertLocation}</h1>
        <img style= {{height: '650px', width: '650px'}} src={require(`../images/alertsImages/${alertImage}`)} alt="" />
      </div>
    </div>
  );

}