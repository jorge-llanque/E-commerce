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
          <input type="radio" name="accordion" id="accordionBlock1" className="Accordion__Input"/>
          <label for="accordionBlock1" className="Accordion__Label">Departamentos</label>
          <div className="Accordion__Content">
            <ul>
              <li><a href="/">Celulares</a></li>
              <li><a href="/">Electrónica</a></li>
              <li><a href="/">Consolas y Videojuegos</a></li>
              <li><a href="/">Instrumentos Musicales</a></li>
              <li><a href="/">Hogar y Muebles</a></li>
              <li><a href="/">Línea Blanca y Electrodomésticos</a></li>
              <li><a href="/">Zapatos</a></li>
              <li><a href="/">Mujeres</a></li>
              <li><a href="/">Hombres</a></li>
              <li><a href="/">Relojes Lentes y Joyería</a></li>
              <li><a href="/">Perfumes y Cuidado Personal</a></li>
              <li><a href="/">Bebés y Niños</a></li>
              <li><a href="/">Juguetes</a></li>
              <li><a href="/">Motos y Automotriz</a></li>
              <li><a href="/">Deportes</a></li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="accordionBlock2" className="Accordion__Input"/>
          <label for="accordionBlock2" className="Accordion__Label">Ofertas</label>
          <div className="Accordion__Content">
            <ul>
              <li><a href="/">Mejores ofertas</a></li>
              <li><a href="/">Ofertas por categoría</a></li>
              <li><a href="/">Dinero Electrónico</a></li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="accordionBlock3" className="Accordion__Input"/>
          <label for="accordionBlock3" className="Accordion__Label">Exclusivos en línea</label>
          <div className="Accordion__Content">
            <ul>
              <li><a href="/">Exclusivos en línea</a></li>
              <li><a href="/">Exclusivos BanCoppel</a></li>
            </ul>
          </div>
        </div>
        <div>
          <input type="radio" name="accordion" id="accordionBlock4" className="Accordion__Input"/>
          <label for="accordionBlock4" className="Accordion__Label">Servicios</label>
          <div className="Accordion__Content">
            <ul>
              <li><a href="/">Tiempo aire</a></li>
              <li><a href="/">Coppel Pay</a></li>
              <li><a href="/">Préstamo personal</a></li>
              <li><a href="/">Club de Protección</a></li>
              <li><a href="/">Coppel viajes</a></li>
              <li><a href="/">Cliente digital</a></li>
              <li><a href="/">Coppel Max</a></li>
              <li><a href="/">Sorteos y concursos</a></li>
              <li><a href="/">Periódico Coppel</a></li>
              <li><a href="/">Starhaus Primavera-Verano</a></li>
              <li><a href="/">Revista Coppel</a></li>
              <li><a href="/">Revista Celulares y Computación</a></li>
              <li><a href="/">Starhaus Colecciones</a></li>
              <li><a href="/">Mejora tu vida</a></li>
              <li><a href="/">Periódicos y Revistas Coppel</a></li>
              <li><a href="/">Políticas de servicios de remesas</a></li>
            </ul>
          </div>
        </div>
        <div>
          <label className="Accordion__Label">Sigue tus pedidos</label>
        </div>
      </section>
    </div>
  )
}
