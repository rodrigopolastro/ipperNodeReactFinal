import React, { useState, useEffect } from 'react';
import "./Alerts.css"

export default function Verification() {
  const [alerts, setAlerts] = useState([]);
  const [bigAlertImage, setBigAlertImage] = useState("placeholder.jpg");
  const [bigAlertFullDate, setBigAlertFullDate] = useState("");
  // const [bigAlertTime, setBigAlertTime] = useState("");
  const [bigAlertLocation, setBigAlertLocation] = useState("");
  const [bigAlertIndex, setBigAlertIndex] = useState("");

  useEffect(() => {
    // let counter=0;
    fetch('/getAllAlerts')
      .then(response => response.json())
      .then(data => setAlerts(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  function highlightAlert(alert, index){
    setBigAlertImage(alert.imageName)
    setBigAlertFullDate(alert.date + " às " + alert.time)
    setBigAlertLocation(alert.location)
    setBigAlertIndex(index + 1)
  }

  return (
    <div>
      <header style={{padding:'20px'}}>
        <a href="/verify" className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao">
          Voltar
        </a>
      </header>

      <h1 className='titulo1'>Lista de alertas</h1>
      <div className='Card'>

        <div className="alertas">

          {alerts.map((alert, index) => (
            <div className="morango" key={index}>
              <h1 className='texto2'><span className='dados'>Alerta {index + 1}</span></h1>
              <img style={{ width: "320px", borderRadius: "15px" }} onClick={() => {highlightAlert(alert, index)}} src={require(`../images/alertsImages/${alert.imageName}`)} />
            </div>
          ))}
        </div>
        <div className='alertaGrande'>
          <img style={{ width: "640px", height: "480px", borderRadius: "20px", marginBottom: '20px' }} src={require(`../images/alertsImages/${bigAlertImage}`)} />
          <h1 className='texto2'><span className='dados'>Alerta {bigAlertIndex} </span></h1>
          <h1 className='texto2'><span className='dados'>Captura em</span> {bigAlertFullDate}</h1>
          <h1 className='texto2'><span className='dados'>Local:</span> {bigAlertLocation}</h1>
        </div>
      </div>
    </div>
  );
};

