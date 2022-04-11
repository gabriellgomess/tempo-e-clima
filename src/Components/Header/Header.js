import React, { useEffect, useState } from "react";
import "./Header.css";
import sun from "./Img/sun.png";
import moon from "./Img/moon.png";


export default function Header(props) {
  const [isDay, setIsDay] = useState(true);
  const [hoursDay, setHoursDay] = useState()

  useEffect(() => {
    
    if (props.periodo.hours >= 6 && props.periodo.hours < 18) {
      setIsDay(true)        
    } else {        
      setIsDay(false)        
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
    <header className={`row d-flex justify-content-around main-header-${isDay === true?"day":"night"}`}>
        <div className="col-sm-12 col-md-4 col-lg-4 title">
            <h1>Previsão do Tempo</h1>            
        </div>        
        <div className="col-sm-12 col-md-4 col-lg-4 clouds">            
          <img src={isDay?sun:moon} alt="Clouds and Sun" />          
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4 salutation">
          {hoursDay}
        </div>        
    </header>
  );
}