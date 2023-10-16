import React, { useEffect } from "react";

export default function SemCapacete({ stopQueries, setAlertStateOff, alertDate, alertTime, alertImage, alertLocation }) {
  useEffect(stopQueries, [])

  function turnOffAlert() {
    setAlertStateOff()
    fetch("/turnOffAlert")
      .then((response) => response.json())
      .then((data) => { console.log("Resultado da requisição: " + data.result) })
  }

  return (
    <div style={{ alignItems: 'center' }}>
      <h1 className="detect">FUNCIONÁRIO SEM CAPACETE DETECTADO!!</h1>

      <div className="Card">




        <div className="rodrigo">

          <h1 className="texto1">Hoje às 12h00</h1>
          <h1 className="texto">Localização: Atrás da escola</h1>
          <button onClick={turnOffAlert} className="botao1">Verificado</button>
        </div>
        <img style={{ marginTop: '20px', height: '480', width: '640px', borderRadius: '30px' }} src={require(`../images/alertsImages/${alertImage}`)} alt="" />


      </div>

    </div>


  );

}