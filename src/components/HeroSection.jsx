import { useEffect, useRef, useState, useMemo, useCallback } from'react';
import { useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react'

export default function HeroSection() {
  let canvasRef = useRef(null)
  let scrollRef = useRef(null)
  let [isLoadedFrames, setIsLoadedFrames] = useState(false)

  // use scroll
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ['start start', 'end center']
  });


  // Load frame images from server 
  const frames = useMemo(() => {
    const loadedFrames = []
    for(let i = 1; i <= 142; i++) {
      if(i % 3 !== 0) {
        const loadedFrameImg = new Image()
        loadedFrameImg.src = `/frames/ezgif-frame-${i}-min.png`
        loadedFrames.push(loadedFrameImg)
      }
    }

    setIsLoadedFrames(true)
    return loadedFrames;
  }, [])


  // render function 
  const render = useCallback((index) => {
    // index = index * 3;
    if(index <= frames.length && index%3 !== 0) {
      canvasRef.current.width = 2048
      canvasRef.current.height = 1080
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      ctx.drawImage(frames[index - 1], 0, 0, canvasRef.current.width, canvasRef.current.height)
      console.log('Drawing frame:', frames[index - 1].src)
    }
  }, [frames])


  // draw first frame 
  useEffect(() => {
    console.log(isLoadedFrames)
    if(isLoadedFrames) {
      render(1)
    }
  }, [render, isLoadedFrames])


  // useMotionValueEvent to listen to scroll events and trigger render function
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [1, 142])
  const heroTitleOpacity = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 0.8, 1])

  useMotionValueEvent(currentFrameIndex, 'change', (latest) => {
    // console.log('scrollYProgress:', latest)  
    render(latest.toFixed())
  })
  
  return (
    <div className='relative w-full h-[3200px]' ref={scrollRef}>
      <canvas ref={canvasRef} className='fixed min-w-[1600px] w-full h-screen'></canvas>
      <motion.div className='sticky top-1/3 w-full text-center' style={{opacity: heroTitleOpacity}}>
        <h1 className=' text-9xl md:text-[200px] text-white' style={{fontFamily: 'Saira'}}>Mars</h1>
      </motion.div>
      <div className="fixed text-4xl p-4 ps-6 top-0 text-white" style={{fontFamily: 'Saira'}}>
        Mars
      </div>
    </div>
  )
}
