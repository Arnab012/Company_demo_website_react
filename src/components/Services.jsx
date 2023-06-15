import React from 'react'

import {Carousel} from "react-responsive-carousel"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import Ser1 from "../assets/assets3.jpg"
import Ser2 from "../assets/assets4.jpg"
import ser3 from "../assets/asset1.png"



const Services = () => {
  return (
    <>
   <div>

<Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs=
{false} showIndicators={false}
>
<div>
    <img src={Ser1} alt="iteam1" />
    <p className='legend'>Full Stack Development</p>
</div>
<div>
    <img src={Ser2} alt="iteam2" />
    <p className='legend'>Peer to peer Support</p>
</div>
<div>
    <img src={ser3} alt="iteam3" />
    <p className='legend'>SOftware Development</p>
</div>

</Carousel>
   </div>

      
    </>
  )
}

export default Services
