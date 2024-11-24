import MarsBg01 from '/mars_bg02.png';

export default function FooterSection() {
  return (
    <div className="relative w-full h-screen bg-no-repeat bg-full"
    style={{backgroundImage: `url(${MarsBg01})`}}>
      <div className='flex justify-center items-center w-full h-full'>
        <div className="text-white text-center w-full">
          <h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl'>The Red Planet</h1>
          <h5 className='text-md xs:text-lg md:text-xl'>Designed and developed with love.</h5>
          <div className='text-md xs:text-lg md:text-xl'>
            All right reserved from &nbsp; 
            <a href="https://www.nasa.gov/" className=' hover:underline' target='_blank'>Nasa</a>
          </div>
        </div>
      </div>
    </div>
  )
}
