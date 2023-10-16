import React from "react";
import Alert from "../components/alert"

export default function Verification() {
  const [alerts, setAlerts] = React.useState([]);

  React.useEffect(() => {
    // console.log("passou use effect")
    fetch("/getAllAlerts")
      .then((response) => response.json())
      .then((data) => {
        setAlerts(data);
        console.log(data)
      });
  }, []);

  console.log("alerts:" + alerts)
  return(
    <div>
      {alerts.map(alert => {
        <h1>alert.location</h1>
      })}
    </div>
  )

}

