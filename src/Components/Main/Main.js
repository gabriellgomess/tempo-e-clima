import React, { useEffect, useState, useCallback } from "react";
import "./Main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet, faTemperatureHalf } from "@fortawesome/free-solid-svg-icons";
import clear_day from "./Img/clear_day.png";
import clear_night from "./Img/clear_night.png";
import cloudly_day from "./Img/cloudly_day.png";
import fog from "./Img/fog.png";
import hail from "./Img/hail.png";
import rain from "./Img/rain.png";
import snow from "./Img/snow.png";
import storm from "./Img/storm.png";



const Main = (props) => {
  const[tag, setTag] = useState("");
  useEffect(() => {    
    switch(props.tempo.condition_slug){
      case "clear_day":
        setTag(<img src={clear_day} alt="Imagem aquisss" />) 
      break;
      case "clear_night":
        setTag(<img src={clear_night} alt="Imagem aqui" />) 
      break;
      case "cloudly_day":
        setTag(<img src={cloudly_day} alt="Imagem aqui" />)
      break;
      case "fog":
        setTag(<img src={fog} alt="Imagem aqui" />)
      break;
      case "hail":
        setTag(<img src={hail} alt="Imagem aqui" />)
      break;
      case "rain":
        setTag(<img src={rain} alt="Imagem aqui" />)
      break;
      case "snow":
        setTag(<img src={snow} alt="Imagem aqui" />)
      break;
      case "storm":
        setTag(<img src={storm} alt="Imagem aqui" />)
      break;
      default:
    }
      
  }, [props.tempo]);

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
        <div className="row w-100">
          <div className="d-flex justify-content-center align-items-center col-sm-12 col-md-4 col-lg-4 w-100 clouds">
            {tag}  
          </div>     
                                          
        </div>         
    </div>
  );
}

export default Main;