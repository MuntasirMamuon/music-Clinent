import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import slider1 from '../../../../assets/imge/4177435.jpg';
import slider2 from '../../../../assets/imge/6997677.jpg';
import slider3 from '../../../../assets/imge/8342040.jpg';
import slider4 from '../../../../assets/imge/close-up-sound-engineer-studio-with-equipment.jpg';
import slider5 from '../../../../assets/imge/woman-records-guitar-guy-playing-studio.jpg';
import slider6 from '../../../../assets/imge/women-use-laptops-office-with-pleasure.jpg';



const Banner = () => {

  return (
    <div className=" sliderBG  sm:mt-10">
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: '.swiper-pagination', clickable: true }}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
    >
     <div className='mt-40'>
     <SwiperSlide>
        <img src={slider1} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="slide_image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider6} alt="slide_image" />
      </SwiperSlide>
     </div>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <BsFillArrowLeftCircleFill className='text-orange-500 text-4xl' name="arrow-back-outline"></BsFillArrowLeftCircleFill>
        </div>
        <div className="swiper-button-next slider-arrow">
          <BsFillArrowRightCircleFill className='text-orange-500 text-4xl' name="arrow-forward-outline"></BsFillArrowRightCircleFill>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </Swiper>
  </div>
  );
};

export default Banner;