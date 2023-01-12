import React from 'react'
import "./header.css"
import logo from "../../data/img/LOGO.svg"



export default function Header() {
  return (
    <header>
      <Link to="/">
      <img src={logo} alt="Logo Kasa"></img>
      </Link>
      <nav>
          <Link to='/'>Acueil</Link>
          <Link to='/a-propos'>A propos</Link>
      </nav>
    </header>

  )
}
