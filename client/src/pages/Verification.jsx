import React from "react";
import Alerta from "../components/alerta";
import CapaceteOk from "../components/capaceteOk";

export default function Verification() {
  const [isUsingHelmet, setIsUsingHelmet] = React.useState(false);

  React.useEffect(() => {
    setInterval(fetchDatabase, 2000);
  }, []);

  function fetchDatabase() {
    console.log("CHAMEI O BANCO!")
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setIsUsingHelmet(data.isUsingHelmet)
      }
      )
  }

  return (
    <div className="App">
      <a href="/">Voltar para Home</a>
      <header className="App-header">
        {isUsingHelmet ? <CapaceteOk /> : <Alerta />}
      </header>
    </div>
  );
}