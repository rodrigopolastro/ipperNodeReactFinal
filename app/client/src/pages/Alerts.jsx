// import React from "react";
// import Alert from "../components/alert"

// const Verification=()=> {
//   const [alerts, setAlerts] = React.useState([]);

//   React.useEffect(() => {
//     // console.log("passou use effect")
//     fetch("/getAllAlerts")
//       .then((response) => response.json())
//       .then((data) => {
//         setAlerts(data)
//         console.log(data)
//       })
//       .catch(error => console.error('Erro:', error))
//   }, []);

//   console.log("alerts:" + alerts[0])
//   return(
//     <div>
//       {alerts.map((alert) => {
//         <h1>{alert.time}</h1>
//       })}
//     </div>
//   )

// }
// export default Verification

import React, { useState, useEffect } from 'react';

const Verification = () => {
  const [alerts, setAlerts] = React.useState([]);
  const [bigImage, setBigImage] = React.useState(null);

  useEffect(() => {
    fetch('/getAllAlerts')
      .then(response => response.json())
      .then(data => setAlerts(data))
      .catch(error => console.error('Erro:', error));
  }, []);

  return (
    // <table>
    //   <thead>
    //     <tr>
    //       <th>Hora</th>
    //       <th>Data</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {alerts.map((alert) => (
    //       <tr>
    //         <td>{alert.time}</td>
    //         <td>{alert.date}</td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
    <div>
      <h1>Lista de alertas</h1>
      <img src={bigImage} />
        {alerts.map((alert, index) => (
        <div key={index}>
          <h1>{alert.time}</h1>
          <h1>{alert.date}</h1>
          <h1>{alert.location}</h1>
          <img onClick={()=>{setBigImage(require(`../images/alertsImages/${alert.imageName}`))}} src={require(`../images/alertsImages/${alert.imageName}`)} />
        </div>
      ))}
    </div>
  );
};

export default Verification;

