import React from "react";
import Alerta from "../components/alerta";
import CapaceteOk from "../components/capaceteOk";
import './Verification.css'
import '../components/components.css'

export default function Verification() {
  const [isAlertOn, setAlert] = React.useState(false);

  React.useEffect(() => {
    setInterval(fetchDatabase, 500);
  }, []);

  function fetchDatabase() {
    // console.log("CHAMEI O BANCO!")
    fetch("/getAlertValue")
      .then((response) => response.json())
      .then((data) => {
        setAlert(data.alert)
      }
      )
  }

  return (
    <div className="bg-preto-fundo" >

      <a href="/" className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao" style={{ marginTop: '5px' }}>Voltar para Home</a>
      <div className="App flex items-center justify-center">
        <header className="App-header">
          {isAlertOn ? <Alerta /> : <CapaceteOk />}
        </header>
      </div>
    </div>
  );
}