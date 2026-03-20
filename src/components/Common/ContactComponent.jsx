
const Contact = () => {
  return (
    <div>
        <div className='h-full w-full  flex-col lg:flex-row flex  items-center justify-center ' >
        <div className='lg:h-[79vh] w-full lg:py-0 py-10 lg:w-1/2 bg-[#faefec] '>
            <form className='h-full w-full flex flex-col px-5  gap-3 lg:gap-7.5 lg:px-25  lg:pt-15 ' >
                <div  className='flex flex-col'>
                    <label style={{fontFamily: 'HelveticaW01-Light'}} className='text-[15px] text-[#393230] pb-2.5  ' htmlFor="firstname">First Name *</label>
                    <input style={{fontFamily: 'HelveticaW01-Light'}} className='p-2.5 bg-transparent border border-[#393230]' type="text" name="First-Name" id="firstname" />
                </div>
                <div  className='flex flex-col'>
                    <label style={{fontFamily: 'HelveticaW01-Light'}} className='text-[15px] text-[#393230] pb-2.5  ' htmlFor="lastname">Last Name *</label>
                    <input style={{fontFamily: 'HelveticaW01-Light'}} className='p-2.5 bg-transparent border border-[#393230]' type="text" name="Last_Name" id="lastname" />
                </div>
                <div  className='flex flex-col'>
                    <label style={{fontFamily: 'HelveticaW01-Light'}} className='text-[15px] text-[#393230] pb-2.5  ' htmlFor="email">Email *</label>
                    <input style={{fontFamily: 'HelveticaW01-Light'}} className='p-2.5 bg-transparent border border-[#393230]' type="email" name="Email" id="email" />
                </div>

                <div className='flex flex-col'>
                    <label style={{fontFamily: 'HelveticaW01-Light'}} className='text-[15px] text-[#393230] pb-2.5  ' htmlFor="message">Message *</label>
                    <textarea style={{fontFamily: 'HelveticaW01-Light'}} className='h-25 p-3 border border-[#393230] bg-transparent resize-none leading-5  ' name="Message" id="message"></textarea>
                </div>
                <div>
                    <button style={{fontFamily: 'HelveticaW01-Light'}} className='transition-all w-full lg:w-fit ease-in-out duration-300 hover:bg-[#393230] mt-5 hover:text-[#f4e3dc] px-10 py-2 text-4 text-[#393230] border border-[#393230] '>Send</button>
                </div>
            </form>
        </div>
        <div className='lg:h-[79vh] lg:w-1/2' >
            <img className='h-full w-full object-center object-cover ' src="https://static.wixstatic.com/media/88aac0_6b726d843ac74d76a30bb2865f14819d~mv2.png/v1/fill/w_1230,h_1260,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/88aac0_6b726d843ac74d76a30bb2865f14819d~mv2.png" alt="" />
        </div>
      </div>

    </div>
  )
}

export default Contact