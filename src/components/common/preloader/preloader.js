import preloader from "../../../assets/img/preloader.svg";
import React from "react";

let Preloader = () => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} alt="loader"/>
    </div>
}

export default Preloader