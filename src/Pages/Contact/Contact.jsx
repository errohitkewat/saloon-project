
import Navbar from '../../components/Layout/navbar/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import ContatactComponent from '../../components/Common/ContactComponent'
import SectionHeading from '../../components/Common/SectionHeading'

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className='pt-[7vh] p-3 lg:px-25 lg:pb-50'>
          <div className='lg:flex lg:justify-between w-full lg:pt-20 pb-5 lg:pb-20'>
            <div className='lg:h-full lg:w-1/2 '><SectionHeading title={'Contact Us'} /></div>
            
            <div className='h-full pb-10 pt-10 lg:pt-15 lg:w-1/2 '>
              <p className='lg:text-[23px] text-[18px] text-[#4d4d4d] mb-5 lg:mb-10 '>Get in Touch Today</p>
              <p style={{fontFamily: "Fahkwang"}} className='text-[18px] lg:text-[30px] text-[#2d2d2d] '>Reach out to us for a consultation or <br />any inquiries. We are here to help you <br />achieve your dream hair.</p>
            </div>
          </div>
          
          <ContatactComponent/>
        </div>
        <Footer />
    </div>
  )
}

export default Contact