import React from "react";
import verificacao from "../images/verificacao.png"
import "../components/alerta.css"


export default function CapaceteOk(){
  return (
    // <div>
    //   <h1> Capacete sendo usado corretamente!</h1>
    //   <img src={verificacao} alt="" />
    // </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <div style={{ flex: 1 }}>
        <div className="Card">
          <div>
            <h1 className="texto">Capacete sendo usado corretamente!</h1>
          </div>
          <div>
            <div>
            {/* <Link href="/carde" className="btn-sm text-gray-200 bg-indigo-700 hover:bg-indigo-900 ml-3">
                  <span>Verificar</span>
                  
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                 
                </Link> */}
  
            </div>
          </div>
        </div>
      </div>
  
      <div style={{ flex: 1, marginLeft: '200px' }}>
        <img style= {{height: '650px', width: '650px'}} src={verificacao} alt="" />
      </div>
    </div>
  );

}