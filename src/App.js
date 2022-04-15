import './App.css';
import Header from './Components/Header/Header';
import SubHeader from './Components/SubHeader/SubHeader';
import Main from './Components/Main/Main';
import Table from './Components/Table/Table';
import React, {useEffect, useState} from "react";
import api from './Services/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileScreen, faTabletScreenButton, faDesktop } from "@fortawesome/free-solid-svg-icons";

function App() { 

  const date = new Date();
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
 const[cidade, setCidade] = useState('');
  const handleSubmit = ({cidade}) => {
    setCidade(cidade)
  }
  const[isLoading, setIsLoading] = useState(false);
  const[dark, setDark] = useState(false)
  const handleDark = () => {
    dark === true ? setDark(false):setDark(true)
    console.log(dark)
  }

  useEffect(() => {     
    setIsLoading(true);
    api
      .get(cidade)
      .then((response) => {        
        setClima(response.data.results)        
      })
      .finally(() => setIsLoading(false));
      
    
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);

    return () => clearInterval(timer);

  }, [cidade]);

  const [clima, setClima] = useState([]);
  const [device, setDevice] = useState()
  window.onresize = () => {
    if(window.screen.width <= 520){
      setDevice(<FontAwesomeIcon icon={faMobileScreen} />)
    }else if(window.screen.width > 520 && window.screen.width < 770){
      setDevice(<FontAwesomeIcon icon={faTabletScreenButton} />)
    }else if(window.screen.width >= 770){
      setDevice(<FontAwesomeIcon icon={faDesktop} />)
    }    
  }
  window.onload = () => {
    if(window.screen.width <= 520){
      setDevice(<FontAwesomeIcon icon={faMobileScreen} />)
    }else if(window.screen.width > 520 && window.screen.width < 770){
      setDevice(<FontAwesomeIcon icon={faTabletScreenButton} />)
    }else if(window.screen.width >= 770){
      setDevice(<FontAwesomeIcon icon={faDesktop} />)
    }    
  }
  

  return (    
    <div className={`${dark === true ? "dark" : ""}`}>   
      <Header periodo = {dateTime} />
      <SubHeader onSubmit={handleSubmit} />
      <div className='container mt-3'>
        <div className='row w-100 d-flex align-items-center justify-content-between'>
          <label className="col-6 switch">
            <input type="checkbox" checked={dark} onChange={handleDark} />
            <span className="slider"></span>
          </label>
          <div id='device' className='col-6 d-flex align-items-center'>            
            {device}             
          </div>
        </div>
      </div>
      
      <div className="container mt-3">        
        <div className='row d-flex justify-content-around'>
          <Main dark={dark} tempo = {clima} />
          <Table dark={dark} clima = {clima} />
        </div>
      </div>
      
      {isLoading && <div>Carregando...</div>}
    </div>
  );
}

export default App;

