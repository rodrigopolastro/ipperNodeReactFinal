import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = React.useState(null);
  const [verification, setVerification] = React.useState(null);


  React.useEffect(() => {
    setInterval(fetchDatabase, 2000);
  },[]);

function fetchDatabase() {
  console.log("CHAMEI O BANCO!")
  fetch("/api")
    .then((res) => res.json())
    .then((data) => {
      setMessage(data.message)
      if (data.verification) {
        setVerification("VERDADEIRO")
      } else {
        setVerification("FALSO")
      }
    }
    )
}

return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>{message ? "Retorno da requisição: " + message : "Loading..."}</p>
      <p>{verification ? "Valor da Verificação: " + verification : "Não consigo saber a verificação"}</p>
    </header>
  </div>
);
}

export default App;