import { motion, useTransform } from 'motion/react'
import { useScroll } from 'motion/react';
import { useRef } from'react';

export default function Missions() {
  let imgIndexs = [1,2,3,4,5,6,];
  const missionRef = useRef(null)

  // listen scroll progress
  const {scrollYProgress} = useScroll({
    target: missionRef,
    offset: ['start start', 'end center']
  });

  const imageConPositionY = useTransform(scrollYProgress, [0.2, 1], ['0%', '-98%'])

  return (
    <>
    <div className='relative bg-white w-full h-[3200px]' ref={missionRef}>
        <div className='sticky top-0 grid grid-cols-2 gap-4 h-screen'>
            <div className="relative w-3/4 h-screen overflow-hidden">
                <motion.div style={{y: imageConPositionY}} className="absolute top-0">
                {
                    imgIndexs && imgIndexs.map(imgIndex =>
                        <img className='w-full'  key={imgIndex} src={"/mission_img"+imgIndex+".jpg"} alt={'mission_image'+imgIndex}/>
                    )
                }
                </motion.div>
            </div>

            <div className='flex flex-col justify-center'>
                <h1 className='text-6xl mb-10'>Missions</h1>
                <div className="w-[600px]">
                <p className='mb-2'>
                Mars has always intrigued humanity, leading to numerous missions to explore its mysteries. Countries like the United States, Europe, India, China, and others have launched spacecraft to study Mars' surface, atmosphere, and potential for life.
                </p>
                <strong>Most Successful Mission</strong>
                <p>
                One of the most successful missions is NASA's Perseverance Rover. Launched in 2020, it landed in Jezero Crater in 2021. Perseverance has been groundbreaking in:
                </p>
                {/* number list  */}
                <ul className='list-decimal pl-6 mb-2'>
                  <li>Collecting rock samples for future return to Earth.</li>
                  <li>Searching for signs of ancient microbial life.</li>
                  <li>Operating the first helicopter, Ingenuity, on another planet.</li>
                </ul>
                <p>These achievements bring us closer to understanding Mars' history and its potential for human colonization.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
