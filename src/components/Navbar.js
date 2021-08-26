import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'
import './styles/Navbar.scss'


export default function Navbar() {
  return (
    <div className="Navbar__Sidebar">
      <section className="Sidebar__Block1">
        <i><BsFillPersonFill/></i>
        <div className="Sidebar__Block1-Opts">
          <span>Hola</span>
          <div className="Sidebar__Block1-GetIn">
            <a href="/">Iniciar sesión</a>
            <a href="/">Crear cuenta</a>
          </div>
        </div>
      </section>
      <section className="Sidebar__Block2">
        <a href="/">Solicitar Crédito Coppel</a>
        <a href="/">Estado de cuenta</a>
        <a href="/">Conoce cómo abonar</a>
        <a href="/">Préstamo personal</a>
      </section>
    </div>
  )
}
