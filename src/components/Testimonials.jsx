import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="bg-white lg:px-20 p-4 py-20 relative">
      <p className="text-gradient sm:text-sm text-center">Digital Analytics & Strategy Consulting Agency</p>
      <h1 className="lg:text-6xl text-3xl font-medium text-center">What our clients say</h1>
      <img src="/images/01.svg.png" className="absolute top-10 sm:hidden" alt="" />
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[1, 2, 3].map((_, index) => <SwiperSlide key={index}>
          <div className="rounded-3xl lg:p-16 p-6 gradient mt-10">
            <div className="flex justify-center">
              <img src="/images/user.png" alt="" />
              <div className="my-auto ml-4">
                <p className="font-medium text-white">Tawam Rahman, </p>
                <p className="text-white text-sm">Founder of TrendyWear</p>
              </div>
            </div>
            <div className="lg:text-3xl sm:mt-4 lg:p-8 text-center text-white">
              Apexium Solutions completely transformed our online store. From setting up the platform to integrating logistics, everything was handled flawlessly. Their team’s attention to detail and commitment to excellence is unmatched.
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>

    </section>
  );
};

export default Testimonials;