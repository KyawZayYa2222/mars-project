import { motion, useTransform } from 'motion/react'
import pngMarsPlanet from '/png_mars_planet.png'
import { useScroll } from 'motion/react';
import { useRef } from'react';

export default function IntroductionSection() {
  const introRef = useRef(null)

  // listen scroll progress
  const {scrollYProgress} = useScroll({
    target: introRef,
    offset: ['start start', 'end center']
  });

  const textPositionY = useTransform(scrollYProgress, [0.2, 0.8], ['0%', '-80%'])


  return (
    <>
    <div className='relative bg-white w-full h-[3000px]' ref={introRef}>
        <div className='sticky top-0 grid grid-cols-1 xl:grid-cols-2 gap-2 lg:gap-4 h-screen px-6'>
            <div className='flex justify-center items-center h-full'>
                <motion.img src={pngMarsPlanet} 
                className='w-60 sm:w-80 xl:w-96 rounded' alt="mars planet img" 
                animate={{rotate: 360}}
                transition={{duration: 26, repeat: Infinity, ease: 'linear' }}
                />
            </div>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='mx-auto'>
                  <h1 className='text-5xl sm:text-6xl mb-10'>Introduction</h1>
                  <div className='relative text-lg max-w-[560px] h-[240px] overflow-y-hidden'>
                      <div className="sticky z-20 top-0 w-full h-10 bg-gradient-to-b from-white to-transparent"/>
                    <motion.div style={{y: textPositionY}}>
                      <p className='mb-3'>
                          Mars, is the fourth planet from the Sun. The surface of Mars is orange-red because it is covered in iron(III) oxide dust, 
                          giving it the nickname "the Red Planet".Mars is among the brightest objects in Earth's sky, 
                          and its high-contrast albedo features have made it a common subject for telescope viewing.
                      </p>
                      
                      <p className='mb-3'>
                      Mars was named by the Romans for their god of war because its reddish color was reminiscent of blood. 
                      The Egyptians called it "Her Desher," meaning "the red one."
                      </p>

                      <p className='mb-3'>
                      Scientists don't expect to find living things currently thriving on Mars. Instead, 
                      they're looking for signs of life that existed long ago, when Mars was warmer and covered with water.
                      </p>

                      <p className='mb-3'>
                      With a radius of 2,106 miles (3,390 kilometers), Mars is about half the size of Earth. 
                      If Earth were the size of a nickel, Mars would be about as big as a raspberry. 
                      </p>

                      <p className='mb-3'>
                      From an average distance of 
                      142 million miles (228 million kilometers), Mars is 1.5 astronomical units away from the Sun. 
                      One astronomical unit (abbreviated as AU), is the distance from the Sun to Earth.
                      </p>
                    </motion.div>
                    <div className="sticky z-20 bottom-0 w-full h-10 bg-gradient-to-t from-white to-transparent"/>
                  </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
