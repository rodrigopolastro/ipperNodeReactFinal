import React, { useState } from "react";
import SemCapacete from "../components/semCapacete";
import CapaceteOk from "../components/capaceteOk";
import "./Verification.css";
import "../components/components.css";

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
        stopQueries={() => { clearInterval(intervalId) }}
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
          let newIntervalId = setInterval(getAlertValue, 2000)
          setIntervalId(newIntervalId)
        }}
      />
    )
  }

  return (
    <div className="bg-preto-fundo">
      <header className="ludmilo">
        <a href="/" className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao">
          Voltar
        </a>
      </header>

      <div className="App flex justify-center">
        {componentToRender}
      </div>
    </div>
  );
}
