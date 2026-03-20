
import Navbar from '../../components/Layout/navbar/Navbar'
import Footer from '../../components/Layout/Footer/Footer'
import TeamCard from '../../components/Common/TeamCard'

const About = () => {
  const teamCard = [
    {
      memberName: 'Jessica Smith',
      specilist: 'Senior Stylist',
      memberDiscription: 'With years of experience in hair extensions, Jessica brings creativity and expertise to every client, ensuring a seamless blend and stunning results.',
      email:'info@mysite.com',
      mobile: '123-456-7890',
      image:'https://static.wixstatic.com/media/88aac0_d86b75755a234dcabb696af241793200~mv2.png'
    },
    {
      memberName: 'Michael Nguyen',
      specilist: 'Extension Specialist',
      memberDiscription: 'Michael is a master of extension techniques, providing clients with personalized looks that enhance their natural beauty.',
      email:'info@mysite.com',
      mobile: '123-456-7890',
      image:'https://static.wixstatic.com/media/88aac0_aca6a663668d4a5cbdbba48a3fc0a2ff~mv2.png'
    },
    {
      memberName: 'Layla Patel',
      specilist: 'Color Matching Expert',
      memberDiscription: 'Laylas skill in color matching ensures that extensions seamlessly integrate with your hair, creating a flawless and natural appearance.',
      email:'info@mysite.com',
      mobile: '123-456-7890',
      image:'https://static.wixstatic.com/media/88aac0_ee2f77cf0ae64ee38309a308c5f30e18~mv2.png'
    }

  ]
  return (
    <div>
        <Navbar />
        {/* Section1 */}
        <div style={{fontFamily:'HelveticaW01-Light'}} className='mt-[7vh] h-full w-full py-10 px-3 lg:py-20 lg:px-25'>
          <h1 style={{fontFamily:'Fahkwang'}} className='text-5xl lg:text-7xl pb-5 lg:pb-10'>About</h1>
          <div>
            <p className='lg:pb-10 text-[15px] lg:text-[18px]'>Our Story</p>
            <div className='py-3 lg:py-5'>
              <p style={{fontFamily:'Fahkwang'}} className='text-[22px] pr-5 lg:text-[22px] '>Discover the essence of A. Chen, where luxurious locks come to life. Our salon <br />specializes in high-quality, ethically sourced extensions, meticulously blended with <br />your natural hair for a flawless finish. Experience tranquility in our plush, elegant space <br />that exudes luxury and precision.</p>
            </div>


            <div className='lg:py-10 py-5 lg:flex '>
              <div className='w-full  lg:w-1/3'>
                <img className='lg:h-80 w-full h-[50vh]  object-cover ' src="https://static.wixstatic.com/media/88aac0_0d2fe4053f5a405e92745be83b6769fa~mv2.jpg/v1/fill/w_520,h_640,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a802ab29-7eaf-4b7f-9c67-98bca4eb1719.jpg" alt="" />
              </div>
              <div className='lg:pt-10 pt-5 lg:pl-50 '>
                <p className='lg:text-[16px] text-[17px] pb-10 '>At A. Chen Hair Extensions Salon, we aim to transform your look with expertly applied <br />extensions. Our skilled stylists are dedicated to ensuring each client achieves their <br />desired style, offering tailored consultations to meet individual preferences.</p>
                <button className='py-3 px-10 bg-[#393230] text-[#f5f5f5] '>Book Now</button>
              </div>
            </div>
          </div>
        </div>

        {/* Section2 */}
        <div className='lg:py-40 py-10 px-3 lg:px-25 text-[#f5f5f5] bg-[#6b6564] '>
          <h1 style={{fontFamily:'Fahkwang'}} className='lg:text-7xl text-5xl pb-5 lg:pb-10'>Mission</h1>
          <p style={{fontFamily:'Fahkwang'}} className= 'lg:text-[32px] text-[22px] lg:w-3/4'>Our mission at A. Chen Hair Extensions Salon is to provide clients with top-notch extension services that enhance their natural beauty. We are committed to using ethically sourced products and methods that deliver voluminous, seamless results.</p>
          <div className='lg:pl-150 py-10 lg:mt-10'>
            <p className='text-[16px]  '>Dedicated to excellence, we strive to blend artistry and precision in every extension application. Our goal is to empower clients by helping them achieve the lush, glamorous locks they desire.</p>
          </div>
        </div>


        {/* Section3 */}
        <div className='text-[#f5f5f5] ly-10 px-3 lg:px-25 lg:py-20 w-full bg-[#1d1d1d]'>
          <div className='py-10 w-full'>
            <h1 style={{fontFamily:'Fahkwang'}} className='lg:text-7xl text-5xl pb-5 lg:pb-10'>About</h1>
            <p style={{fontFamily:'HelveticaW01-Light'}} className= 'lg:text-[14px] text-[15px] font-extralight' >Our talented team of stylists at A. Chen Hair Extensions Salon is here to elevate your hair transformation  <br />experience. Get to know the experts behind the magic.</p>
          
          </div>

         {/* Team Cards  */}
          <div className='lg:py-10 py-5 w-full '>
            {
              teamCard.map((elem, idx)=>{
                return <TeamCard id={idx} image={elem.image} memberName={elem.memberName} specilist={elem.specilist} memberDiscription={elem.memberDiscription} email={elem.email} mobile={elem.mobile} />
              })
            }
          </div>

        </div>
        <Footer />
    </div>
  )
}

export default About