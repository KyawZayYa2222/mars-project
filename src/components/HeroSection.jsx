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
    for(let i = 1; i <= 141; i++) {
      const loadedFrameImg = new Image()
      loadedFrameImg.src = `/frames/ezgif-frame-${i}.png`
      loadedFrames.push(loadedFrameImg)
    }

    setIsLoadedFrames(true)
    return loadedFrames;
  }, [])


  // render function 
  const render = useCallback((index) => {
    if(frames[index-1]) {
      canvasRef.current.width = 2048
      canvasRef.current.height = 1080
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      ctx.drawImage(frames[index - 1], 0, 0, canvasRef.current.width, canvasRef.current.height)
      // console.log('Drawing frame:', frames[index - 1].src)
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
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [1, 141])
  const heroTitleOpacity = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 0.8, 1])

  useMotionValueEvent(currentFrameIndex, 'change', (latest) => {
    // console.log('scrollYProgress:', latest)  
    render(latest.toFixed())
  })
  
  return (
    <div className='relative w-full h-[3600px]' ref={scrollRef}>
      <canvas ref={canvasRef} className='fixed w-full h-screen'></canvas>
      <motion.div className='sticky top-1/3 w-full text-center' style={{opacity: heroTitleOpacity}}>
        <h1 className='text-[200px] text-white'>Mars</h1>
      </motion.div>
      <div className="fixed text-4xl p-4 ps-6 top-0 text-white">
        Mars
      </div>
    </div>
  )
}
