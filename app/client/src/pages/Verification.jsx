import React, { useState } from "react";
import SemCapacete from "../components/semCapacete";
import CapaceteOk from "../components/capaceteOk";
import "../tailwindTop.css"
import "./Verification.css";
import Logo from '../images/logo2.png'

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
      <header className='bg-preto-fundo backdrop-blur-sm shadow-lg header'>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* <div className="flex items-center justify-between h-16 md:h-20"> */}
        <div style={{paddingTop: "10px", display: "flex", justifyContent: "space-between"}}>

          {/* Site branding */}
          {/* <div className="shrink-0 mr-4"> */}
            <a href="/" className="block" aria-label="Cruip">
              <img src={Logo} width={50} height={50} alt="IPPER" />
            </a>
            <a href='/alerts' className="botao">Alertas</a>
          {/* </div> */}

         


        </div>
      </div>
    </header>

      <div className="App flex justify-center">
        {componentToRender}
        {/* </header> */}
      </div>
    </div>
  );
}
