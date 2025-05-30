import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import Logo from '../../assets/img/logo.svg';

import { CgMenuRight, CgClose } from 'react-icons/cg';
import { navigation } from '../../data';

import NavMobile from '../NavMobile';

const Header = () => {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    })
  })

  return (
    <header className={`${bg ? 'bg-primary' : 'bg-none'} fixed left-0 w-full py-2 z-10  transition-all duration-200`}>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <img className='h-6 lg:h-8' src={Logo} alt="" />
          </a>
          <div onClick={() => setMobileNav(!mobileNav)} className={`text-2xl ${mobileNav ? 'text-black xs:text-white' : 'text-white'}  md:hidden cursor-pointer z-20`}>
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>
          <nav className='hidden md:flex'>
            <ul className='md:flex md:gap-x-12'>
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.name} smooth={true} duration={500} offset={-70} className='capitalize text-white hover:border-b transition-all cursor-pointer'>
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div className={`${mobileNav ? 'left-0' : '-left-full'} md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all`}>
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;