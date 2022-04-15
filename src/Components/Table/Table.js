import React, {useState, useEffect} from "react";
import "./Table.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faTemperatureArrowDown, faTemperatureArrowUp, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
        const [clima, setClima] = useState([]);
    useEffect(() => {
        setClima(props.clima.forecast);      
    }, [props.clima]);

    return(
        <div className="table-responsive col-sm-12 col-md-6 col-lg-6">
        <table className={`${props.dark == true ? "table table-striped table-dark" : "table"}`}>
            <thead>
                <tr>
                    <th colSpan="4"><h3>Próximos Dias</h3></th>
                </tr>
                <tr>                   
                    <th scope="col">Dia <FontAwesomeIcon icon={faCalendarDay} /></th>
                    <th scope="col">Mín <FontAwesomeIcon icon={faTemperatureArrowDown} /></th>
                    <th scope="col">Máx <FontAwesomeIcon icon={faTemperatureArrowUp} /></th>
                    <th scope="col">Condição <FontAwesomeIcon icon={faCircleInfo} /></th>
                </tr>
            </thead>
            <tbody>         
                
                {clima && clima.map((dados) => {
                    return(
                        <tr key={dados.date}>
                            <th scope="row">{dados.date} - {dados.weekday}</th>
                            <td>{dados.min}°C</td>
                            <td>{dados.max}°C</td>
                            <td>{dados.description}</td>  
                        </tr>
                    )
                })}          
                    
                              
            </tbody>
        </table>
        </div>
    )    
}

export default Table;