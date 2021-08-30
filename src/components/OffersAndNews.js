import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import './styles/OffersAndNews.scss'


export default function OffersAndNews() {

  const sliders = [
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34/desktop/s34_slider1_desktop_invierno.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34/desktop/s34_slider2_desktop_bebe.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34/desktop/s34_slider4_desktop_blanca.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34/desktop/s34_slider7_desktop_clases.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34_fds/desktop/Slider-Home_desktop.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34_fds/desktop/s34_slider1_desktop_fds_gamer.jpg",
    "https://cdn2.coppel.com/images/emarketing/sliders/2021/s34_fds/desktop/s34_slider2_desktop_fds_colchones.jpg"
  ]
  const offers = [
    "https://cdn2.coppel.com/images/emarketing/homepage/2021/julio/s35/Home5_AGO21_S35_tablet_B2_calzadohombre.jpg",
    "https://cdn2.coppel.com/images/emarketing/homepage/2021/julio/s35/Home5_AGO21_S35_tablet_B1_computo.jpg"
  ]

  return (
    <div className="Container__OffersAndNews">
      <div className="Carousel">
        <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}>
          {
            sliders.map(sourceLink => (
              <div>
                <img src={sourceLink} alt={sourceLink}/>
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className="Offers">
        <div className="Offers-Thumbnail">
          <img src={offers[0]} alt="asd"/>
        </div>
        
        <div className="Offers-Thumbnail">
          <img src={offers[1]} alt="asd"/>
        </div>
      </div>
    </div>
  )
}
