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

  return (
    <div className="Container__OffersAndNews">
      <div className="Carousel">
        <Carousel>
          {
            sliders.map(sourceLink => (
              <div>
                <img src={sourceLink} alt="sfwe"/>
              </div>
            ))
          }
        </Carousel>
      </div>
      <div className="Offers">
        <div className="Offers-Thumbnail">

        </div>
        <div className="Offers-Thumbnail">

        </div>
      </div>
    </div>
  )
}
