import React from 'react'

export default function Header() {


  return (
    <header className="Header">
      <div className="Header__Row1">
        <p>Descubre los beneficios de ser parte Coppel Max</p>
        <img src="#" alt="imageads"/>
      </div>
      <div className="Header__Row2">
        <div className="Header__Row2-Sideleft">
          <img src="#" alt="logo" />
          <div className="Header__Row2-Search">Search</div>
        </div>
        <div className="Header__Row2-Sideright">
          <nav>
            <ul>
              <li>Comprar ahora</li>
              <li>Enviar a:</li>
              <li>Inicia sesión</li>
              <li>Carrito</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="Header__Row3">
        <div className="Header__Row3-Sideleft">
          <span>Departamentos</span>
          <span>Ofertas</span>
          <span>Exclusivos en línea</span>
          <span>Servicios</span>
        </div>
        <div className="Header__Row3-Sideright">
          <span>Ubica tu tienda</span>
          <span>Sigue tus pedidos</span>
          <span>Ayuda</span>
          <span>Theme Color</span>
        </div>
        <div className="Hedaer__Row3-Sideright">

        </div>
      </div>
    </header>
  )
}

