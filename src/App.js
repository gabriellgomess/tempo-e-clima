import './App.css';
import Header from './Components/Header/Header';
import SubHeader from './Components/SubHeader/SubHeader';
import Main from './Components/Main/Main';
import Table from './Components/Table/Table';
import React, {useEffect, useState} from "react";
import api from './Services/api';
// import location from './Services/location';



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
  // useEffect(() => {
  //   location.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  //   location.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
  //   location.get().then(resp => {      
  //     setCidade(resp.data.results.city)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   });
          
  // }, []);

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
  
  // const relogio = () => {
  //   return (
  //     <div className="relogio">
  //       <p>{dateTime.hours < 10 ? "0" + dateTime.hours : dateTime.hours }:{dateTime.minutes < 10 ? "0" + dateTime.minutes : dateTime.minutes}:{dateTime.seconds < 10 ? "0" + dateTime.seconds : dateTime.seconds}</p>
  //     </div>
  //   );
  // }

  return (
    
    <div className="">      
      <Header periodo = {dateTime} />
      <SubHeader onSubmit={handleSubmit} />
      <div className="container mt-5">
        <div className='row d-flex justify-content-around'>
          <Main tempo = {clima} />
          <Table clima = {clima} />
        </div>
      </div>
      
      {isLoading && <div>Carregando...</div>}
    </div>
  );
}

export default App;

