import React from 'react';
import Logo from '../../assets/img/logo.svg';
import { footer } from '../../data';

const Footer = () => {
  return (
    <footer className='section bg-primary text-white pb-1'>
      <div className="container mx-auto">
        <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-75 border-gray-700 pb-7 lg:pb-14 mb-14'>
          <a className='mb-6 lg:mb-0' href="#">
            <img src={Logo} />
          </a>
          <div className='flex gap-x-4'>
            {footer.social.map((item, index) => {
              return (
                <div className='w-12 h-12 text-2xl bg-gray-700 hover:bg-accent rounded-full flex justify-center items-center transition' key={index}>
                  <a href="#">{React.createElement(item.icon)}</a>
                </div>
              )
            })}
          </div>
        </div>
        <p className='text-center '>
          &copy; FurniShop 2025 - All Rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;