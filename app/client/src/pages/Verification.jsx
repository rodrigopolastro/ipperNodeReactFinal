import React from "react";
import SemCapacete from "../components/semCapacete";
import CapaceteOk from "../components/capaceteOk";
import "./Verification.css";
import Logo from '../images/logo2.png'

export default function Verification() {
  const [intervalId, setIntervalId] = React.useState(null);
  const [isAlertOn, setIsAlertOn] = React.useState(null);
  const [alertImage, setAlertImage] = React.useState(null);
  const [alertDate, setAlertDate] = React.useState(null);
  const [alertTime, setAlertTime] = React.useState(null);
  const [alertLocation, setAlertLocation] = React.useState(null);

  function fetchDatabase() {
    console.log("buscou o banco");
    fetch("/getAlertValue")
      .then((response) => response.json())
      .then((alert) => {
        if (alert.isAlertOn) {
          setAlertImage(alert.imageName);
          setAlertDate(alert.date);
          setAlertTime(alert.time);
          setAlertLocation(alert.location);
        }
        setIsAlertOn(alert.isAlertOn);
      });
  }

  function buscaRepetida() {
    let interval = setInterval(fetchDatabase, 2000);
    setIntervalId(interval);
  }

  React.useEffect(() => {
    console.log("rodou o effect");
    buscaRepetida();

    return () => clearInterval(intervalId);
  }, []);

  // if(isAlertOn){
  //   clearInterval(intervalId)
  // }

  let componentToRender;
  if (isAlertOn) {
    // clearInterval(intervalId)
    componentToRender = (
      <SemCapacete
        alertDate={alertDate}
        alertTime={alertTime}
        alertImage={alertImage}
        alertLocation={alertLocation}
      />
    );
  } else {
    // setIntervalId(setInterval(fetchDatabase, 2000))
    // buscaRepetida()
    componentToRender = <CapaceteOk />;
  }

  return (
    <div className="bg-preto-fundo">
      <header className="ludmilo">
        <a href="/" className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3">
          <img src={Logo} alt="" />
        </a>
        <a href="/alerts" className="text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao">
          Registro de Alertas
        </a>
      </header>

      <div className="App flex justify-center">
        {/* <header className="App-header"> */}
        {componentToRender}
        {/* </header> */}
      </div>

    </div>
  );
}
