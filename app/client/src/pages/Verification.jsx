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
      <header className='bg-preto-fundo backdrop-blur-sm shadow-lg header'>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <a href="/" className="block" aria-label="Cruip">
              <img src={Logo} width={50} height={50} alt="IPPER" />
            </a>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <div style={{marginLeft:'1400%'}}>

                <a href='/alerts' className="botao">Alertas</a>
                </div>
               
                {/* {state && <Verification />} */}
              </li>
            </ul>

          </nav>


        </div>
      </div>
    </header>

      <div className="App flex justify-center">
        {/* <header className="App-header"> */}
        {componentToRender}
        {/* <SemCapacete/> */}
        {/* </header> */}
      </div>

    </div>
  );
}
