import React from "react";
import Alerta from "./components/alerta";
import CapaceteOk from "./components/capaceteOk";
import "./App.css";

function App() {
  // const [message, setMessage] = React.useState(null);
  const [isUsingHelmet, setIsUsingHelmet] = React.useState(false);


  React.useEffect(() => {
    setInterval(fetchDatabase, 2000);
  },[]);

function fetchDatabase() {
  console.log("CHAMEI O BANCO!")
  fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      // setMessage(data.message)
      setIsUsingHelmet(data.isUsingHelmet)
    }
    )
}

return (
  <div className="App">
    <header className="App-header">
      {/* <p>{message ? message : "Loading..."}</p> */}
      {isUsingHelmet ? <CapaceteOk/> : <Alerta/>}
    </header>
  </div>
);
}

export default App;