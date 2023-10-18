import React, { useEffect, useState } from "react";
import "./alerta.css";

export default function SemCapacete({
  stopQueries,
  setAlertStateOff,
  alertDate,
  alertTime,
  alertImage,
  alertLocation,
}) {
  const [imgExists, setImgExists] = useState(false);
  useEffect(() => {
    try {
      require(`../images/alertsImages/${alertImage}`)
      setImgExists(true)
      stopQueries()
    } catch (error) {
      console.log('erro carregando imagem')
    }
  }, []);

  function turnOffAlert() {
    setAlertStateOff();
    fetch("/turnOffAlert")
      .then((response) => response.json())
      .then((data) => {
        console.log("Resultado da requisição: " + data.result);
      });
  }

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        justifyItems: "center",
      }}
    >
      <h1 className="detect">FUNCIONÁRIO SEM CAPACETE DETECTADO!!</h1>

      <div className="Card">
        <div className="rodrigo">
          <h1 className="texto1">Hoje às {alertTime}</h1>
          <h1 className="texto">Localização: {alertLocation}</h1>
          <button onClick={turnOffAlert} className="botao1">
            Verificado
          </button>
        </div>
        <img
          style={{
            marginTop: "20px",
            height: "480",
            width: "640px",
            borderRadius: "30px",
          }}
          src={imgExists ? require(`../images/alertsImages/${alertImage}`) : require(`../images/alertsImages/placeholder.png`)}
          alt=""
        />
      </div>
    </div>
  );
}
