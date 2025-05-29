import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { testimonial } from '../../data';

import '../../slider.css'

const TestimonialSlider = () => {
  return (
    <Swiper 
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
      className='testimonialSlider'
    >
      {testimonial.persons.map((person, index) => {
        const { avatar, name, occupation, message } = person;
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col min-h-[250px]'>
              <div className='flex items-center gap-x-5 mb-9'>
                <img src={avatar} alt="" />
                <div>
                  <div className='text-xl font-semibold'>{name}</div>
                  <div className='text-gray-500'>{occupation}</div>
                </div>
              </div>
              <div className='text-xl max-w-[570px]'>{message}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}

export default TestimonialSlider;