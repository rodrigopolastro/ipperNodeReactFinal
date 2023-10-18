import React, { useState } from "react";
import SemCapacete from "../components/semCapacete";
import CapaceteOk from "../components/capaceteOk";
import "../tailwindTop.css";
import "./Verification.css";
import Logo from "../images/logo2.png";

export default function Verification() {
  const [intervalId, setIntervalId] = useState(null);
  const [isAlertOn, setIsAlertOn] = useState(false);
  const [alertImage, setAlertImage] = useState(null);
  const [alertDate, setAlertDate] = useState(null);
  const [alertTime, setAlertTime] = useState(null);
  const [alertLocation, setAlertLocation] = useState(null);

  function getAlertValue() {
    console.log("Buscou valor no banco.");
    fetch("/getAlertValue")
      .then((response) => response.json())
      .then((alert) => {
        if (alert.isAlertOn === true) {
          setAlertImage(alert.imageName);
          setAlertDate(alert.date);
          setAlertTime(alert.time);
          setAlertLocation(alert.location);
        }
        setIsAlertOn(alert.isAlertOn);
      });
  }

  let componentToRender;
  if (isAlertOn === true) {
    componentToRender = (
      <SemCapacete
        stopQueries={() => {
          clearInterval(intervalId);
        }}
        setAlertStateOff={() => setIsAlertOn(false)}
        alertDate={alertDate}
        alertTime={alertTime}
        alertImage={alertImage}
        alertLocation={alertLocation}
      />
    );
  } else {
    componentToRender = (
      <CapaceteOk
        startQueries={() => {
          let newIntervalId = setInterval(getAlertValue, 500);
          setIntervalId(newIntervalId);
        }}
      />
    );
  }

  return (
    <div className="bg-preto-fundo">
      <header
        style={{
          margin: "0 auto",
          width: "70%",
          paddingTop: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <a href="/" className="block" aria-label="Cruip">
          <img src={Logo} width={50} height={50} alt="IPPER" />
        </a>
        <a
          href="/alerts"
          className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao"
        >
          Alertas
        </a>
        
      </header>
    
      <div className="App flex justify-center">
        {componentToRender}
      </div>
    </div>
  );
}
