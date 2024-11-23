import solarStorm from '/solar_storm.webp'
import { motion, useTransform } from 'motion/react'
import { useScroll } from 'motion/react';
import { useRef } from'react';

export default function AtmosphereSection() {
  const atmoRef = useRef(null)

  // listen scroll progress
  const {scrollYProgress} = useScroll({
    target: atmoRef,
    offset: ['start start', 'end center']
  });

  const textPositionY = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-80%'])

  return (
    <>
    <div className='relative bg-white w-full h-[3000px]' ref={atmoRef}>
        <div className='sticky top-0 grid grid-cols-2 gap-4 h-screen'>
            <div className='flex flex-col justify-center ps-12'>
                
                <div className='text-lg mx-auto'>
                    <h1 className='text-6xl mb-10'>Atmosphere</h1>
                    <div className="relative text-lg max-w-[560px] h-[240px] overflow-y-hidden">
                    <div className="sticky z-20 top-0 w-full h-10 bg-gradient-to-b from-white to-transparent"/>
                        <motion.div style={{y: textPositionY}}>
                            <p className='mb-3'>
                            Mars has a thin atmosphere made up mostly of carbon dioxide, nitrogen, and argon gases. 
                            To our eyes, the sky would be hazy and red because of suspended dust instead of 
                            the familiar blue tint we see on Earth. Mars' sparse atmosphere doesn't offer much protection 
                            from impacts by such objects as meteorites, asteroids, and comets.
                            </p>

                            <p className='mb-3'>
                            The temperature on Mars can be as high as 70 degrees Fahrenheit (20 degrees Celsius) or 
                            as low as about -225 degrees Fahrenheit (-153 degrees Celsius). And because the atmosphere 
                            is so thin, heat from the Sun easily escapes this planet. If you were to stand on 
                            the surface of Mars on the equator at noon, it would feel like spring at your feet 
                            (75 degrees Fahrenheit or 24 degrees Celsius) and winter at your head (32 degrees Fahrenheit 
                            or 0 degrees Celsius).
                            </p>

                            <p className='mb-3'>
                            Occasionally, winds on Mars are strong enough to create dust storms that cover much of the planet. 
                            After such storms, it can be months before all of the dust settles.
                            </p>
                        </motion.div>
                        <div className="sticky z-20 bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"/>
                    </div>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='w-[720px]'>
                <img src={solarStorm} 
                className='' alt="mars planet img" 
                />
                <small className='italic'>
                The specks in the sequence of images in this video were caused by charged particles from a solar storm hitting one of the navigation cameras aboard NASA's Curiosity Mars rover. 
                </small>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
