import Section4BottomContainer from './Section4BottomContainer'

const Section4 = () => {
  const services = [
    {
      serviceId : 1,
      serviceName : "Tape-In Extensions",
      serviceDiscription : "Seamless Application for Natural Look"
    },
    {
      serviceId : 2,
      serviceName : "Keratin-Bonded Extensions",
      serviceDiscription : "Long-Lasting and Natural Integration"
    },
    {
      serviceId : 3,
      serviceName : "Custom Extensions",
      serviceDiscription : "Tailored to Your Desires"
    },
    {
      serviceId : 4,
      serviceName : "Micro-Link Extensions",
      serviceDiscription : "Versatile and Lightweight Solutions"
    }
  ]
  return (
      <div className='w-full lg:p-25 bg-[#f4e3dc] p-3 '  >
        <div className='w-full flex flex-col ' >
          <div style={{fontFamily:"Fahkwang"}} >
            <h1 className='lg:text-[60px] text-[40px] font-thin pt-5 pb-3 lg:py-5 '>Our Services</h1>
          </div>

          <div style={{fontFamily:'Fahkwang'}} >
            <p className='lg:py-5 lg:text-[22px] text-[18px] font-thin '>Discover Our Offerings</p>
          </div>

          <div style={{fontFamily:'HelveticaW01-Light'}}>
            <p className='text-[#393230cd] text-16px lg:pt-10 lg:text-[18px] lg:leading-6.25 ' >Experience the finest hair extension services at A. Chen Hair Extensions Salon. From tape-in to micro-link and keratin- <br />bonded extensions, we provide a range of high-quality options to suit your unique style and preferences.</p>
          </div>
        </div>

        <Section4BottomContainer services = {services} />

        <div>
          <button className='py-3 px-10 -mt-10 mb-10 text-[17px] border border-[#393230] bg-[#393230] text-[#f5f5f5] transition-all ease-in-out duration-300 hover:bg-[#ebddd8] hover:text-[#393230]  '>Book Now</button>
        </div>
    </div>
  )
}
export default Section4




