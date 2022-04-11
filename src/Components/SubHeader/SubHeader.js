import React, { useState } from "react";
import "./SubHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import swal from 'sweetalert';





export default function SubHeader({onSubmit}) {
    const[cidade, setCidade] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({cidade});
        setCidade("");
    }
       
    return(        
        <div className="sub-header">
            <div className="sub-header-left">
                               
            </div>
            <div className="sub-header-center">
                <form onSubmit={handleSubmit}>
                    <label>{window.screen.width < 770?"Cidade":"Digite a Cidade"} <FontAwesomeIcon icon={faLocationDot} /></label>
                    <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    <button className="btn btn-secondary btn-sm" type="submit">{window.screen.width < 770?<FontAwesomeIcon icon={faMagnifyingGlass}/>:"Buscar"}</button>                    
                </form>                          
            </div>
            <div className="sub-header-right">
                
            </div>         
        </div>        
    )
}