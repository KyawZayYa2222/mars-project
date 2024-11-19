import marsVedio from '../assets/mars.mp4';
import { useEffect, useRef } from'react';

export default function HeroSection({frameNumber}) {
  const video = useRef(null);
  const videoSpeed = 100;

  useEffect(() => {
    console.log(`Frame number: ${frameNumber}`)
    if(video.current) {
        let playVideo = () => {
          video.current.currentTime = (frameNumber / videoSpeed);
        }
        window.requestAnimationFrame(playVideo);
    }
  }, [frameNumber, videoSpeed, video]);

  return (
    <div className='relative overflow-hidden h-[2000px] bg-fixed'>
        <video ref={video} className='fixed w-100 min-w-[1600px] bg-fixed' src={marsVedio}></video>
    </div>
  )
}
