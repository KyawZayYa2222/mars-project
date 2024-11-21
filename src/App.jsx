// import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// import { motion } from 'motion/react'
// import pngMarsPlanet from '/png_mars_planet.png'
import HeroSection from './components/HeroSection'
import ReactLenis from 'lenis/react'
import IntroductionSection from './components/IntroductionSection'
import AtmosphereSection from './components/AtmosphereSection'


export default function App() {
  

  return (
    <ReactLenis root>
      {/* <div className='scroll-smooth'> */}
        <HeroSection />

        {/* introduction  */}
        <IntroductionSection/>

        {/* Atmosphere  */}
        <AtmosphereSection/>
      {/* </div> */}

    </ReactLenis>
    
  )
}
