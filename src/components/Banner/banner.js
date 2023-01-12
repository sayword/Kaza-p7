import React from "react";
import "./Banner.css";




function Banner({image, texte}) {
    return(
        <div className="Banner">
            <img className="Banner-img" src={image} alt="Bannière"/>
            <div className="Banner-sombre"></div>
            <span className="Banner-txt">{texte}</span>
        </div>
    );
}

export default Banner;
