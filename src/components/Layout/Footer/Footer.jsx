

const Footer = () => {
  return (
    <div className='bg-[#393230] lg:h-screen lg:w-screen py-10 px-3 lg:p-25 '>
        <div className='h-full w-ful lg:p-10 py-3 lg:not-only:px-17.5 border-t border-[#f4e3dc] border-b '>
            {/*Footer Logo */}
            <div className=' lg:pb-15 w-full'>
                <h1 style={{fontFamily:"Fahkwang"}} className='text-[40px] text-[#f4e3dc] font-thin  '>A. Chen</h1>
            </div>
            
            {/* BottomContainer */}
            <div className='lg:flex lg:pt-15'>
              {/* Left Content of bottom container */}
                <div className="flex flex-col gap-5 py-15 lg:pr-45 leftContainer">
                    <div className='lg:mb-4 text-[#f4e3dc]' style={{fontFamily:"Fahkwang"}} id='leftpara'>
                        <p>Subscribe to Newsletter</p>
                    </div>
                    <div className='flex gap-3 flex-col'>
                      <label className='text-[#f4e3dc]' style={{fontFamily: 'HelveticaW01-Light'}} htmlFor="subscribe-email">Email *</label>
                      <input className='text-[#f4e3dc] border border-[#f4e3dc] p-2  ' style={{fontFamily: 'HelveticaW01-Light'}} type="email" id='subscribe-email'  />
                    </div>
                    <div className='flex gap-2.5' id="acception">
                      <input className=' cursor-pointer accent-[#393230] ' type="checkbox" name="" id="checkbox" />
                      <label style={{fontFamily: 'HelveticaW01-Light'}} className='text-[#f4e3dc]' htmlFor="checkbox">Yes Subscribe me to your newseletter. *</label>
                    </div>
                    <button className='lg:mt-5 lg:w-fit bg-[#cecccb] hover:bg-[#393230] hover:border-[#f4e3dc] py-2 px-10 hover:text-[#f4e3dc] text-4 transition-all duration-300 ease-in-out border border-[#393230] ' style={{fontFamily: 'HelveticaW01-Light'}} >Submit</button>
                </div>
                
              {/* Right Content of bottom container */}
                <div style={{fontFamily: 'HelveticaW01-Light'}} className="h-full lg:w-1/2 lg:pl-35  flex flex-col items-center text-[#cecccb]  rightContainer">
                  
                  {/* Top Content of Right Content of bottom container */}
                  <div className='w-full h-4/5 flex-col gap-10 lg:flex-row flex lg:gap-25 pt-17.5 ' id="topContent">
                    {/* left cotent of top content of right content */}
                    <div style={{fontFamily:'HelveticaW01-Light'}} id="left">
                      <p>123-456-7890</p>
                      <p>info@mysite.com</p><br />
                      <p>500 Terry Francine St. San <br />Francisco, CA 94158</p>
                    </div>

                    {/* Right content of top content of footer bottom content */}
                    <div style={{fontFamily:'HelveticaW01-Light'}} className='flex flex-col gap-1' id="right">
                      <a href="">Privacy Policy</a>
                      <a href="">Accessibility Statement</a>
                      <a href="">Terms & Conditions</a>
                      <a href="">Refund Policy</a>
                    </div>
                  </div>

                  <div className='h-1/5 w-full mt-15  lg:mt-25 '>
                    <p>©2035 by A. Chen Powered and secured by <span>Wix</span></p>
                  </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer 