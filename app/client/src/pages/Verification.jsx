import React from "react";
import SemCapacete from "../components/semCapacete";
import CapaceteOk from "../components/capaceteOk";
import "./Verification.css";
import "../components/components.css";

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
      <a
        href="/"
        className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao"
        style={{ marginTop: "5px" }}
      >
        Voltar para Home
      </a>
      <div className="App flex items-center justify-center">
        {/* <header className="App-header"> */}
        {componentToRender}
        {/* </header> */}
      </div>
    </div>
  );
}
