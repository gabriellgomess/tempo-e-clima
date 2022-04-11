import React from "react";
import "./Main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";

const Main = (props) => {
  return (
    <div className="main col-sm-12 col-md-6 col-lg-6">
        <h1>Tempo Agora</h1>        
        <div className="body-main">
            <div className="main-left">
                <h3>{props.tempo.city}</h3>
                <h5>{props.tempo.description}  <FontAwesomeIcon icon={faDroplet} /> {props.tempo.humidity}%</h5>
            </div>
            <div className="main-right">
                <h1><FontAwesomeIcon icon={faTemperatureHalf} />{props.tempo.temp}ºC</h1>
            </div>
        </div>          
    </div>
  );
}

export default Main;