import { useState } from 'react'
import './App.css'
import {Swiper, SwiperClass, SwiperSlide, useSwiper} from 'swiper/react';
import { Keyboard, EffectCube, Autoplay } from 'swiper/modules';
// import { CubeEffectOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cube';

function App() {

  const swiper = useSwiper();

  const images = [
    "neon_01.jpg",
    "neon_02.jpg",
    "neon_03.jpg",
    "neon_04.jpg",
    "neon_05.jpg",
    "neon_06.jpg",
    "neon_07.jpg"
  ];

  return (
    <>
    <Swiper
      slidesPerView={1}
      className="mySwiper"
      centeredSlides={true}
      keyboard={{
        enabled: true,
      }}
      loop={true}
      effect='cube'
      cubeEffect={{
        shadow: false,
        slideShadows: false
      }}
      // speed={2000}
      autoplay={true}
      modules={[Keyboard, EffectCube, Autoplay]}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div
            className='imageContainer'
          >
            <img
              src={'images/' + image}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    Neon - a step sequencer with expansive generative possibilities<br/>
    {/* Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/>
    Neon - a step sequencer with expansive generative possibilities<br/> */}
    </>
  )
}

export default App
