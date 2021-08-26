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
      <section className="Sidebar__Block3">
        <div>
          <input type="radio" name="accordion" id="sectionBlock3" className="Accordion__Input"/>
          <label for="sectionBlock3" className="Accordion__Label">Departamentos</label>
          <div className="Accordion__Content">
            <ul>
              <li>Celulares</li>
              <li>Electrónica</li>
              <li>Consolas y Videojuegos</li>
              <li>Instrumentos Musicales</li>
              <li>Hogar y Muebles</li>
              <li>Línea Blanca y Electrodomésticos</li>
              <li>Zapatos</li>
              <li>Mujeres</li>
              <li>Hombres</li>
              <li>Relojes Lentes y Joyería</li>
              <li>Perfumes y Cuidado Personal</li>
              <li>Bebés y Niños</li>
              <li>Juguetes</li>
              <li>Motos y Automotriz</li>
              <li>Deportes</li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="sectionBlock3" className="Accordion__Input"/>
          <label for="sectionBlock3" className="Accordion__Label">Ofertas</label>
          <div className="Accordion__Content">
            <ul>
              <li>Mejores ofertas</li>
              <li>Ofertas por categoría</li>
              <li>Dinero Electrónico</li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="sectionBlock3" className="Accordion__Input"/>
          <label for="sectionBlock3" className="Accordion__Label">Exclusivos en línea</label>
          <div className="Accordion__Content">
            <ul>
              <li>Exclusivos en línea</li>
              <li>Exclusivos BanCoppel</li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="sectionBlock3" className="Accordion__Input"/>
          <label for="sectionBlock3" className="Accordion__Label">Servicios</label>
          <div className="Accordion__Content">
            <ul>
              <li>Tiempo aire</li>
              <li>Coppel Pay</li>
              <li>Préstamo personal</li>
              <li>Club de Protección</li>
              <li>Coppel viajes</li>
              <li>Cliente digital</li>
              <li>Coppel Max</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
