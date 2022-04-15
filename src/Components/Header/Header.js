import React, { useEffect, useState } from "react";
import "./Header.css";


export default function Header(props) {
  
  const [hoursDay, setHoursDay] = useState()
  const [ceu, setCeu] = useState()

  useEffect(() => {
    if(props.periodo.hours >= 0 && props.periodo.hours < 4 ){
      setCeu("noite")
    }else if(props.periodo.hours >= 4 && props.periodo.hours < 7 ){
      setCeu("amanhecendo")
    }else if(props.periodo.hours >= 7 && props.periodo.hours < 18 ){
      setCeu("dia")
    }else if(props.periodo.hours >= 18 && props.periodo.hours < 19 ){
      setCeu("anoitecendo")
    }else{
      setCeu("noite")
    }

    if(props.periodo.hours < 12){
      setHoursDay("Bom dia!")
    }else if(props.periodo.hours < 18){
      setHoursDay("Boa tarde!")
    }else{
      setHoursDay("Boa noite!")
    }
  }, [props.periodo.hours]);  
  
  return (
    <header className={ceu}>
      <div className="row w-100">
        <div className="col-sm-12 col-md-8 col-lg-8 title">
            <h1>Previsão do Tempo</h1>            
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 salutation">
          {hoursDay}
        </div>
      </div>
                
    </header>
  );
}