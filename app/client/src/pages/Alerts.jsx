import React, { useState, useEffect } from "react";
import "../tailwindTop.css";
import "./Alerts.css";

export default function Verification() {
  const [alerts, setAlerts] = useState([]);
  const [alertsCounter, setAlertsCounter] = useState(0);
  const [bigAlertImage, setBigAlertImage] = useState("placeholder.png");
  const [bigAlertFullDate, setBigAlertFullDate] = useState(null);
  const [bigAlertLocation, setBigAlertLocation] = useState(null);
  const [bigAlertIndex, setBigAlertIndex] = useState(null);
  const [clickedAlertImage, setClickedAlertImage] = useState(null)

  useEffect(() => {
    // let counter=0;
    fetch("/getAllAlerts")
      .then((response) => response.json())
      .then((data) => {
        setAlerts(data)
        setAlertsCounter(data.length)
      })
      .catch((error) => console.error("Erro:", error));
  }, []);

  function highlightAlert(alert, index) {
    setBigAlertImage(alert.imageName);
    setBigAlertFullDate(alert.date + " às " + alert.time);
    setBigAlertLocation(alert.location);
    setBigAlertIndex(alertsCounter - index);

    //Variable to track current highlighted alert using its unique image name
    setClickedAlertImage(alert.imageName)
  }

  //If no alert was clicked
  let bigAlertTitle, bigAlertInfo;
  if (bigAlertImage === "placeholder.png") {
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="textop">
          <span className="dante">Alerta {bigAlertIndex}</span>
        </h1>
      </div>
    );
    bigAlertInfo = (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
        <h1 className="texto2">
          <span className="nicoli">Captura em</span> {bigAlertFullDate}
        </h1>
        <h1 className="texto2">
          <span className="nicoli">Local:</span> {bigAlertLocation}
        </h1>
        </div>
      </div>
    );
  }

  return (
    <div>
      <header style={{ paddingTop: "20px" }}>
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
                  className={alert.imageName == clickedAlertImage ? "selected alert-div" : "alert-div"}
                  key={index}
                  onClick={() => {
                    highlightAlert(alert, index);
                  }}
                >
                  <h1 className="texto2">
                    {/* 20 - index because we only query the last 20 alerts*/}
                    <span className="dados">Alerta {alertsCounter - index}</span>
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
