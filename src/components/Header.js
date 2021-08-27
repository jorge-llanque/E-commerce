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
          <span>Departamentos<i><IoIosArrowDown/></i></span>
          <span>Ofertas<i><IoIosArrowDown/></i></span>
          <span>Exclusivos en línea<i><IoIosArrowDown/></i></span>
          <span>Servicios<i><IoIosArrowDown/></i></span>
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

