import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <header>
        <nav className="lg:h-[7vh] h-[6vh] w-screen bg-[#f5f5f5] flex items-center justify-between px-3 lg:px-12.5 fixed top-0 z-9 " id='navbar'>
          <div  id='navLogo'>
            <p className="text-[#1d1d1d] font-extrabold text-[15px] lg:text-xl " style={{fontFamily: 'HelveticaW01-light'}}>A. Chen</p>
          </div>

          <div style={{fontFamily:"HelveticaW01-Light"}} className="lg:gap-7.5 gap-2 flex-row flex items-center justify-center lg:-ml-125 " id='navLinks'>
            <Link className="text-[10px] lg:text-sm font-extrabold hover:border-b " to='/'>Home</Link>
            <Link className="text-[10px] lg:text-sm font-extrabold hover:border-b " to='/about'>About</Link>
            <Link className="text-[10px] lg:text-sm font-extrabold hover:border-b " to='/services'>Services</Link>
            <Link className="text-[10px] lg:text-sm font-extrabold hover:border-b " to='/bookonline'>BookOnline</Link>
            <Link className="text-[10px] lg:text-sm font-extrabold hover:border-b " to='/contact'>Contact</Link>
          </div>

          <div className="flex lg:gap-4 gap-2 text-[17px] lg:text-[25px] text-[#1d1d1d]" id='navRightContent'>
            <i className="ri-user-fill"></i>
            <i className="ri-shopping-bag-2-fill"></i>
          </div>
        </nav>
    </header>
)
}

export default Navbar



