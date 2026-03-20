
import Navbar from '../../components/Layout/navbar/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import ServiceCard2 from '../../components/Common/ServiceCard2'

const Services = () => {
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
    <div>
        <Navbar />
        <div className='mt-[7vh] px-3 lg:px-25 pt-10 lg:py-20 h-full w-full bg-[#ffff]'>
            <h1 style={{fontFamily:"Fahkwang"}} className='text-3xl pb-5 lg:text-6xl'>Luxurious Hair Extensions</h1>
            <p style={{fontFamily:"HelveticaW01-Light"}} className='lg:py-10 text-[#292929] text-[20px] lg:text-[23px] py-5 '>Transform Your Look</p>
            <p className='lg:text-[18px] mb-20 text-[#3c3c3c] lg:pr-80 '>Indulge in our premium hair extension services to achieve the voluminous, luxurious locks you've always dreamed of. Our skilled stylists offer high-quality tape-in, micro-link, and keratin-bonded extensions, meticulously blended to perfection for a flawless finish.</p>
        

            <div className='lg:py-12 pb-15  w-full flex   flex-col gap-12.5 '>
              {services.map((elem, idx)=> {
                return <ServiceCard2 key={idx}  serviceName = {elem.serviceName} serviceDiscription={elem.serviceDiscription}  />
              })}
            </div>
        </div>
        
        <Footer />
    </div>
  )
}

export default Services