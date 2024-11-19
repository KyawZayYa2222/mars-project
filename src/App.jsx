import {useCallback, useMemo, useRef} from 'react'
import { useMotionValueEvent, useScroll, useTransform, motion } from 'motion/react'


export default function App() {
  let canvasRef = useRef(null)
  let scrollRef = useRef(null)

  // use scroll
  const {scrollYProgress} = useScroll({
    target: scrollRef,
    offset: ['start start', 'center start']
  });


  // Load frame images from server 
  const frames = useMemo(() => {
    const loadedFrames = []
    for(let i = 1; i <= 141; i++) {
      const loadedFrameImg = new Image()
      loadedFrameImg.src = `/frames/ezgif-frame-${i}.png`
      loadedFrames.push(loadedFrameImg)
    }

    return loadedFrames;
  }, [])

  // render function 
  const render = useCallback((index) => {
    if(frames[index-1]) {
      // canvasRef.current.getContext('2d').drawImage(frames[index-1], 0, 0)
      // console.log('Drawing frame:', frames[index-1].src)

      canvasRef.current.width = 2048
      canvasRef.current.height = 1080
      const ctx = canvasRef.current.getContext('2d')
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)
      ctx.drawImage(frames[index - 1], 0, 0, canvasRef.current.width, canvasRef.current.height)
      // console.log('Drawing frame:', frames[index - 1].src)
    }
  }, [frames])


  // useMotionValueEvent to listen to scroll events and trigger render function
  const currentFrameIndex = useTransform(scrollYProgress, [0, 1], [1, 141])
  const heroTitleOpacity = useTransform(scrollYProgress, [0.5, 0.6, 1], [0, 0.4, 1])

  useMotionValueEvent(currentFrameIndex, 'change', (latest) => {
    console.log('scrollYProgress:', latest)  
    render(latest.toFixed())
  })

  return (
    <>
    <div className='relative w-full h-[3600px]'>
      {/* <div className='w-full'/> */}
      <canvas ref={canvasRef} className='fixed w-full'></canvas>
      <motion.div className='fixed bottom-1/2 w-full text-center' style={{opacity: heroTitleOpacity}}>
        <h1 className='text-[200px] text-white'>Mars</h1>
      </motion.div>
      {/* <div className="-z-40 h-96 bg-red-600">other content</div> */}
    </div>
    <div className='relative bg-white w-full h-[400px]'>
      other content ..
    </div>
    </>
  )
}
