/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
import React, { useRef } from 'react'
import $ from 'jquery'
import {BsFillPersonFill} from 'react-icons/bs'
import {IoIosArrowDown} from 'react-icons/io'
import {AiOutlineClose} from 'react-icons/ai'
import './styles/Navbar.scss'


export default function Navbar({handleShowSideBar}) {

  const accordionLink = useRef(null);

  $(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      this.multiple = multiple || false;

      // Variables privadas
      var links = this.el.find('.Accordion__Link');
      // Evento
      links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el;
      var $this = $(this);
      var $next = $this.next();

      $next.slideToggle();
      $this.parent().toggleClass('open');

      if (!e.data.multiple) {
        $el.find('.Accordion__Submenu').not($next).slideUp().parent().removeClass('open');
      };
    }	

    var accordion = new Accordion($('#accordion'), false);
  });


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
        <button className="Sidebar__Block1-Close" onClick={handleShowSideBar}><i><AiOutlineClose/></i></button>
      </section>
      <section className="Sidebar__Block2">
        <a href="/">Solicitar Crédito Coppel</a>
        <a href="/">Estado de cuenta</a>
        <a href="/">Conoce cómo abonar</a>
        <a href="/">Préstamo personal</a>
      </section>
      <section className="Sidebar__Block3">
        <ul id="accordion" className="Accordion">
          <li>
            <div className="Accordion__Link" ref={accordionLink}>Departamentos<i><IoIosArrowDown/></i></div>
            <ul className="Accordion__Submenu">
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
          </li>
          <li>
            <div className="Accordion__Link">Ofertas<i><IoIosArrowDown/></i></div>
            <ul className="Accordion__Submenu">
              <li><a href="/">Mejores ofertas</a></li>
              <li><a href="/">Ofertas por categoría</a></li>
              <li><a href="/">Dinero Electrónico</a></li>
            </ul>
          </li>
          <li>
            <div className="Accordion__Link">Exclusivos en línea<i><IoIosArrowDown/></i></div>
            <ul className="Accordion__Submenu">
              <li><a href="/">Exclusivos en línea</a></li>
              <li><a href="/">Exclusivos BanCoppel</a></li>
            </ul>
          </li>
          <li>
            <div  className="Accordion__Link">Servicios<i><IoIosArrowDown/></i></div>
            <ul className="Accordion__Submenu">
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
          </li>
          <li>
            <div className="Accordion__Link">Sigue tus pedidos</div>
          </li>
        </ul>
      </section>
      <section className="Sidebar__Block4">
        <a href="/">Ubica tu tienda</a>
        <a href="/">Preguntas frecuentes</a>
        <a href="/">Aviso de privacidad</a>
        <a href="/">Términos y condiciones</a>
        <a href="/">Tema oscuro</a>
      </section>
    </div>
  )
}
