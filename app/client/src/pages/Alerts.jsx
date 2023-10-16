import React, { useState, useEffect } from "react";
import "../tailwindTop.css";
import "./Alerts.css";

export default function Verification() {
  const [alerts, setAlerts] = useState([]);
  const [bigAlertImage, setBigAlertImage] = useState("placeholder.jpg");
  const [bigAlertFullDate, setBigAlertFullDate] = useState(null);
  const [bigAlertLocation, setBigAlertLocation] = useState(null);
  const [bigAlertIndex, setBigAlertIndex] = useState(null);

  useEffect(() => {
    // let counter=0;
    fetch("/getAllAlerts")
      .then((response) => response.json())
      .then((data) => setAlerts(data))
      .catch((error) => console.error("Erro:", error));
  }, []);

  function highlightAlert(alert, index) {
    setBigAlertImage(alert.imageName);
    setBigAlertFullDate(alert.date + " às " + alert.time);
    setBigAlertLocation(alert.location);
    setBigAlertIndex(index + 1);
  }

  //If no alert was clicked
  let bigAlertTitle, bigAlertInfo;
  if (bigAlertImage === "placeholder.jpg") {
    bigAlertTitle = (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="textow">
          <span className="dante">Nenhum alerta selecionado</span>
        </h1>
      </div>
    );

    bigAlertInfo = (
      <div>
        <h3 className="texto65">Selecione um alerta para ver seus detalhes</h3>
      </div>
    );
  } else {
    bigAlertTitle = (
      <h1 className="textop">
        <span className="dante">Alerta {bigAlertIndex} </span>
      </h1>
    );
    bigAlertInfo = (
      <div>
        <h1 className="texto2">
          <span className="nicoli">Captura em</span> {bigAlertFullDate}
        </h1>
        <h1 className="texto2">
          <span className="nicoli">Local:</span> {bigAlertLocation}
        </h1>
      </div>
    );
  }

  return (
    <div>
      <header style={{ padding: "40px" }}>
        <a
          href="/verify"
          className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao"
        >
          Voltar
        </a>
      </header>
      <div className="App">
        <div className="Card5">
          <h1 className="titulo1">Lista de Alertas</h1>
          <div style={{display: "flex"}}>
            <div className="alertas">
              {alerts.map((alert, index) => (
                <div
                  className="morango"
                  key={index}
                  onClick={() => {
                    highlightAlert(alert, index);
                  }}
                >
                  <h1 className="texto2">
                    <span className="dados">Alerta {index + 1}</span>
                  </h1>
                  <img
                    style={{
                      width: "160px",
                      height: "120px",
                      borderRadius: "15px",
                    }}
                    alt=""
                    src={require(`../images/alertsImages/${alert.imageName}`)}
                  />
                </div>
              ))}
            </div>
            <div className="alertaGrande">
              {bigAlertTitle}
              <img
                style={{
                  width: "640px",
                  height: "480px",
                  borderRadius: "20px",
                  marginBottom: "20px",
                }}
                alt=""
                src={require(`../images/alertsImages/${bigAlertImage}`)}
              />
              {bigAlertInfo}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
