import React, { useState } from "react";
import "./SubHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass, faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';
import location from "../../Services/location";





export default function SubHeader({onSubmit}) {
    const[cidade, setCidade] = useState("");

    const localization = () => {        
        location.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        location.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        location.get().then(resp => {      
            setCidade(resp.data.results.city)
            
        })
        var clicar = document.getElementById("buscar");
        setTimeout(() => {
        clicar.click();
        }, 500);
        
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({cidade});
        setCidade("");
    }       
    return(        
        <div className="sub-header">
            <div className="col-sm-12 col-md-4 col-md-4 sub-header-left">
                               
            </div>
            <div className="col-sm-12 col-md-8 col-md-8 d-flex justify-content-center sub-header-center">
                <form onSubmit={handleSubmit}>
                    <label>{window.screen.width < 770?"Cidade":"Digite a Cidade"} <FontAwesomeIcon icon={faLocationDot} /></label>
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    <button id="buscar" className="btn btn-secondary btn-sm" type="submit">{window.screen.width < 770?<FontAwesomeIcon icon={faMagnifyingGlass}/>:"Buscar"}</button>
                    <button className="btn btn-success btn-sm" type="submit" onClick={localization}>{window.screen.width < 770?<FontAwesomeIcon icon={faLocationCrosshairs}/>:"Meu Local"}</button>                  
                </form>                          
            </div>                    
        </div>        
    )
}