import HeroSection from './components/HeroSection'
import ReactLenis from 'lenis/react'
import IntroductionSection from './components/IntroductionSection'
import AtmosphereSection from './components/AtmosphereSection'
import Missions from './components/Missions'
import FooterSection from './components/FooterSection'


export default function App() {

  return (
    <ReactLenis root>
        <HeroSection />

        {/* introduction  */}
        <IntroductionSection/>

        {/* Atmosphere  */}
        <AtmosphereSection/>

        {/* missions  */}
        <Missions/>

        {/* footer section  */}
        <FooterSection/>
    </ReactLenis>
  )
}
