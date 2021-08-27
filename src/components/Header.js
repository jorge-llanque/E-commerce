import React, {useState} from 'react'
import Logo from '../assets/images/logo.svg'
import {HiMenuAlt1} from 'react-icons/hi'
import {AiOutlineShoppingCart, AiOutlineArrowLeft, AiOutlineSearch} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import {IoIosArrowDown} from 'react-icons/io'
import Navbar from './Navbar'
import './styles/Header.scss'

export default function Header() {
  const [sideBar, setSideBar] = useState(false)

  const handleShowSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <header className="Header">
      <div className="Header__Row1">
        <p>Descubre los beneficios de ser parte Coppel Max</p>
        <div className="Thumbnail-Image">
          <img src={Logo} alt="imageads"/>
        </div>
        <button>Ingresa Ahora</button>
      </div>
      <div className="Header__Row2">
        <div className="Header__Row2-Sideleft">
          <i onClick={handleShowSideBar} className="Header__Row2-Menuicon"><HiMenuAlt1/></i>
          {sideBar && <Navbar handleShowSideBar={handleShowSideBar} />}
          <div className="Thumbnail-Image">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="Header__Row2-Search">
          <div className="Search__Container-Input">
            <button>Todo el sitio</button>
            <i><AiOutlineSearch/></i>
            <input placeholder="Buscar" />
            <button>Buscar</button>
          </div>
          <div className="Search__Container-Input2">
            <i><AiOutlineArrowLeft/></i>
            <input placeholder="Buscar" />
            <i><AiOutlineSearch/></i>
          </div>
        </div>
        <div className="Header__Row2-Sideright">
          <nav className="Header__Row2-ShorthandAccess">
            <ul>
              <li>Comprar ahora</li>
              <li>Enviar a:</li>
              <li>Inicia sesión</li>
            </ul>
          </nav>
          <i className="Header__Row2-Cart"><AiOutlineShoppingCart/></i>
        </div>
      </div>
      <div className="Header__Row3">
        <div className="Header__Row3-Deliveryform">
          <i><IoLocationSharp/></i>
          <span>Ciudad de entrega: IZTAPALAPA, DISTRITO FEDERAL</span>
        </div>
        <div className="Header__Row3-Sideleft">
          <ul>
          <li><a href="/">Departamentos<i><IoIosArrowDown/></i></a>
            <ul>
              <li><a href="/">Celulares</a>
                <ul>
                  <li><a href="/">Telcel</a></li>
                  <li><a href="/">Movistar</a></li>
                  <li><a href="/">Telefonía libre</a></li>
                </ul>
              </li>
              <li><a href="/">Electrónica</a>
                <ul>
                  <li><a href="/">Telcel</a></li>
                  <li><a href="/">Movistar</a></li>
                  <li><a href="/">Telefonía libre</a></li>
                </ul>
              </li>
              <li><a href="/">Consolas y Videojuegos</a></li>
              <li><a href="/">Instrumentos Musicales</a></li>
              <li><a href="/">Hogar y Muebles</a></li>
              <li><a href="/">Línea Blanca y Electrodomésticos</a></li>
              <li><a href="/">Zapatos</a></li>
              <li><a href="/">Mujeres</a></li>
              <li><a href="/">Hombres</a></li>
            </ul>
          </li>
          <li><a href="/">Ofertas<i><IoIosArrowDown/></i></a>
            <ul>
              <li><a href="/">Mejores ofertas</a></li>
              <li><a href="/">Ofertas por categoría</a></li>
              <li><a href="/">Dinero Electrónico</a></li>
            </ul>
          </li>
          <li><a href="/">Exclusivos en línea<i><IoIosArrowDown/></i></a>
            <ul>
              <li><a href="/">Exclusivos en línea</a></li>
              <li><a href="/">Lo más nuevo</a></li>
            </ul>
          </li>
          <li><a href="/">Servicios<i><IoIosArrowDown/></i></a>
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
          </li>
          </ul>
        </div>
        <div className="Header__Row3-Sideright">
          <span>Ubica tu tienda</span>
          <span>Sigue tus pedidos</span>
          <span>Ayuda</span>
          <span>Theme Color</span>
        </div>
      </div>
    </header>
  )
}

