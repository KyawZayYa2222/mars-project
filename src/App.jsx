import HeroSection from './components/HeroSection'
import ReactLenis from 'lenis/react'
import IntroductionSection from './components/IntroductionSection'
import AtmosphereSection from './components/AtmosphereSection'
import Missions from './components/Missions'
import FooterSection from './components/FooterSection'
import { useEffect, useState } from 'react'
import Loading from './components/Loading'


export default function App() {
  let [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })

  return (
    <>
    {isLoading && <Loading />}
    {!isLoading && <ReactLenis root>
        <HeroSection />

        {/* introduction  */}
        <IntroductionSection/>

        {/* Atmosphere  */}
        <AtmosphereSection/>

        {/* missions  */}
        <Missions/>

        {/* footer section  */}
        <FooterSection/>
    </ReactLenis>}
    </>
  )
}
