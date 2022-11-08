import preloader from "../../../assets/img/preloader.svg";
import style from "./preloader.module.css"
import React from "react";

let Preloader = () => {
    return (
        <div className={style.preloader}>
            <img src={preloader} alt="loader"/>
        </div>
    )
}

export default Preloader