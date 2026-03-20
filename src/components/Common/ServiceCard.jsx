

const ServiceCard = (props) => {
  return (

    <div className='lg:h-[90vh] h-[80vh] lg:border-none border border-[#1d1d1d97] mb-10 lg:w-[25vw] bg-[#ebddd8] relative ' >

        <div className='h-1/2 w-full ' id="ServiceCardCardImage">
            <img className='h-full w-full object-cover object-center  ' src={props.image} alt="image" />
        </div>
        <div className='h-1/2 w-full absolute top-0 bg-transparent transition-all duration-300 ease-in-out hover:bg-[rgba(0,0,0,0.31)]'></div>
        
        <div className='h-1/2 w-full p-2 lg:p-7.5 '>
            <div style={{fontFamily: "Fahkwang"}} 
              className= 'hover:text-[#1d1d1d97] text-[22px] lg:text-[25px] py-3 lg:py-7.5 w-full transition-all  ease-in-out duration-300 '>
              <p>{props.cardTitle}</p>
            </div>
            
            <div style={{fontFamily: "HelveticaW01-Light"}} className=' py-5 lg:py-7 text-[17px] leading-6.75 w-full border-t border-[#393230] '>
                <p>{props.time}</p>
                <p>${props.price}</p>
            </div>
            <button style={{fontFamily: "HelveticaW01-Light"}}  className='trasition-all ease-in-out duration-300 hover:bg-[#ebddd8] hover:text-[#393230] py-2.5 px-5 bg-[#393230] text-[#ebddd8] border border[#393230] font-[18px]  '>Book Now</button>
        </div>
    </div>
    
  )
}

export default ServiceCard