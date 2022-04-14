import React, { useEffect, useState } from "react";
import "./Header.css";


export default function Header(props) {
  
  const [hoursDay, setHoursDay] = useState()

  useEffect(() => {
    
    if(props.periodo.hours < 12){
      setHoursDay("Bom dia!")
    }else if(props.periodo.hours < 18){
      setHoursDay("Boa tarde!")
    }else{
      setHoursDay("Boa noite!")
    }
  }, [props.periodo.hours]);
  
  
  return (
    <header className="main-header-day">
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