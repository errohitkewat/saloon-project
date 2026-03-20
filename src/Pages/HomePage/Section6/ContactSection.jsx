import SectionHeading from '../../../components/Common/SectionHeading'
import ContactComponent from '../../../components/Common/ContactComponent'


const ContactSection = () => {
  return (
 
    // Main container of Contact Section
    <div className=' w-screen  lg:py-12.5 lg:px-25 bg-[#ffffff]  '>

    {/* Top Content  */}
      <div className='pt-10 p-3 lg:p-0  w-full pb-15 lg:pb-25 '>
        <SectionHeading title={'Contact'} />
        <div id="ContactPageParagraph">
            <p style={{fontFamily: "Fahkwang"}} className='lg:text-[21px] text-[17px] mt-10 leading-7.5 font-thin text-[#393230] '>Get in touch with us to schedule your consultation and begin your journey to <br />luxurious, voluminous hair. We are here to help you achieve your dream look.</p>
        </div>
      </div>
      

      <ContactComponent />
    </div>
  )
}

export default ContactSection



