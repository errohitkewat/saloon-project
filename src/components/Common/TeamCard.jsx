

const TeamCard = (props) => {
  return (
            <div className=' flex flex-col lg:flex-row justify-between border-t border-b border-[#f5f5f5]  py-5 lg:py-10'>
              
              <div style={{fontFamily:"HelveticaW01-Light"}} className='lg:w-1/2  text-[#d9d9d9] mb-5 flex flex-col gap-5'>
                <h1 style={{fontFamily:"Fahkwang"}} className='text-[32px] text-[#f5f5f5] '>{props.memberName}</h1>
                <p className='text-[20px] font-extralight '>{props.specilist}</p>
                <p className='font-extralight'>{props.memberDiscription}</p>
                <p className='font-extralight'>{props.email}<br />{props.mobile}</p>
              </div>

              <div className='lg:w-1/2 lg:h-full h-[60vh]  w-full top-0 flex justify-end '>
                <img className=' h-full w-full lg:object-contain object-top object-cover lg:pl-10 lg:h-80  lg:w-70  ' src={props.image} alt="" />
              </div>

            </div>
  )
}

export default TeamCard