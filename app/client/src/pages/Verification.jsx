import React from "react";
import Alerta from "../components/alerta";
import CapaceteOk from "../components/capaceteOk";
import './Verification.css'
import '../components/components.css'

export default function Verification() {
  const [intervalId, setIntervalId] = React.useState(null);
  const [isAlertOn, setAlert] = React.useState(false);

  function fetchDatabase() {
    console.log('buscou o banco')
    fetch("/getAlertValue")
      .then((response) => response.json())
      .then((data) => { setAlert(data.alert) })
  }

  React.useEffect(() => {
    console.log('rodou o effect')
    const interval = setInterval(fetchDatabase, 2000);
    setIntervalId(interval)

    return () => clearInterval(intervalId)
  }, []);

  // if(isAlertOn){
  //   clearInterval(intervalId)
  // }

  return (
    <div className="bg-preto-fundo" >
      <a href="/" className="btn-sm text-gray-200 bg-gray-800 hover:bg-gray-700 ml-3 botao" style={{ marginTop: '5px' }}>Voltar para Home</a>
      <div className="App flex items-center justify-center">
          <button className="botao" onClick={()=>clearInterval(intervalId)}>Para de buscar mano</button>
        <header className="App-header">
          {isAlertOn ? <Alerta /> : <CapaceteOk />}
        </header>
      </div>
    </div>
  );
}