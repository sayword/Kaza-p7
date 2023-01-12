import React from 'react';
import logoWhite from "../../data/img/LOGO-WHITE.svg"
import "./footer.css"

function Footer() {
    return (
        <footer>
            <img src={logoWhite} alt="Logo Kasa"></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer;
