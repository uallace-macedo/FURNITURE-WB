import { hero } from '../../data';

import Stats from '../Stats';

const Hero = () => {
  const { title, subtitle, buttonText } = hero;

  return (
    <section className="
      h-[854px] w-full
      bg-hero bg-right bg-cover bg-no-repeat
      text-white pt-[225px] pb-[254px] relative mb-20
      lg:bg-center lg:mb-28
    ">
      <div className="container mx-auto text-center">
        <h1 className="
          text-2xl font-semibold
          mx-auto mb-[30px]
          lg:text-[64px] lg:leading-tight lg:max-w-[888px]
        ">
          {title}
        </h1>
        <h2 className="
          mb-[30px] max-w-[627px] mx-auto
          lg:mb-[65px] lg:text-xl
        ">
          {subtitle}
        </h2>
        <button className="
          bg-white/40
          px-[35px] py-[9px] mb-[120px] text-xl
          rounded-md backdrop-blur-md
          hover:bg-white/50
          transition lg:px-[80px] lg:py-[16px] lg:mb-[194px]
          cursor-pointer
        ">
          {buttonText}
        </button>
        <div>
          <Stats />
        </div>
      </div>
    </section>
  )
}

export default Hero;