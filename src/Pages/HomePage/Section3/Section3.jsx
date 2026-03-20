

const Section3 = () => {
  return (
    <div className='w-full pb-20 p-3 lg:p-25 bg-[#6b6564] '>

      <div style={{fontFamily:"Fahkwang"}} className='w-full '>
          <div className='text-[#f5f5f5] py-10  lg:text-start text-4xl lg:text-[60px]  '>
            <h1>Our Salon Story</h1>
          </div>
          <div>
            <p className='text-[#f5f5f5] text-[20px] lg:text-[30px] lg:leading-9.5 ' >Discover the artistry of A. Chen Hair Extensions Salon. We <br />are dedicated to providing top-notch, ethically sourced <br />extensions that seamlessly blend with your natural hair,<br /> creating a flawless and luxurious look that enhances your <br />beauty.</p>
          </div>
      </div>

      <div style={{fontFamily:'HelveticaW01-Light'}} className='flex  flex-col gap-10 pt-12.5 lg:pl-81.75 ' >
          <div>
            <p className='font-thin leading-6 text-[#f5f5f5] '>At A. Chen Hair Extensions Salon, our mission is to offer a tranquil and upscale <br />environment where clients can indulge in the ultimate hair transformation experience. Our <br />skilled stylists are committed to delivering impeccable results that exceed expectations.</p>
          </div>
          <div>
            <button className='py-2.5 px-7.5 bg-[#393230] text-[#ebddd8] border border-[#393230] transition-all ease-in-out duration-300 hover:bg-[#ebddd8] hover:text-[#393230] '>Learn More</button>
          </div>
          <div id="bottomContentImageContainer">
            <img className='lg:h-130 lg:w-235 h-60' src="https://static.wixstatic.com/media/88aac0_da978c53157f479e9dcc0bbce9d3763f~mv2.jpg/v1/fill/w_1024,h_566,al_c,q_85,enc_avif,quality_auto/5aee5bed-d126-4394-9504-cd5abc622849.jpg" alt="" />
          </div>
      </div>
      
    </div>
  )
}

export default Section3


