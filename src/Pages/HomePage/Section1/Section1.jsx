

const Section1 = () => {

   
  return (
    <div 
      className='
        lg:mt-[7vh]
        h-166.75
        lg:h-screen w-full
        flex flex-col justify-end  items-start
        px-4 pb-10
        lg:py-37.5 lg:px-25 lg:justify-start
      ' 
      id='Section1'
    >
        <div>
          <h1 id="heading"
            style={{fontFamily:"Fahkwang"}} 
            className='
              text-[#f5f5f5] 
              text-[40px] leading-10
              lg:text-[80px] lg:leading-20
            '
          >
            Seamless <br />Blending
          </h1>
        </div>

        <div>
          <p 
            style={{fontFamily:"Fahkwang"}} 
            className='
              text-[16px] 
              text-[#f5f5f5] 
              pt-2
              lg:text-[22px] lg:pt-2.5
            '
          >
            Luxury Hair Saloon Exprerience
          </p>
        </div>

        <div>
          <button 
            style={{fontFamily:'HelveticaW01-Light'}} 
            className='
              text-[14px] 
              text-[#f5f5f5] 
              border border-[#f5f5f5] 
              py-2 px-6 
              font-light 
              mt-8 
              transition-all ease-in-out duration-300 
              hover:bg-[#f5f5f5] 
              hover:text-[#1d1d1d] 
              hover:border-[#1d1d1d]
              lg:text-[18px] lg:py-3.5 lg:px-10 lg:mt-12.5
            '
          >
            Explore More
          </button>
        </div>
    </div>
  )
}

export default Section1
