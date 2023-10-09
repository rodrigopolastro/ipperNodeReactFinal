import React from "react";
import Alerta from "./components/alerta";
import CapaceteOk from "./components/capaceteOk";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState(null);
  const [verification, setVerification] = React.useState(false);


  React.useEffect(() => {
    setInterval(fetchDatabase, 2000);
  },[]);

function fetchDatabase() {
  console.log("CHAMEI O BANCO!")
  fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.message)
      setVerification(data.verification)
    }
    )
}

return (
  <div className="App">
    <header className="App-header">
      <p>{message ? message : "Loading..."}</p>
      {verification ? <CapaceteOk/> : <Alerta/>}
    </header>
  </div>
);
}

export default App;