import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';

import { Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const testimonial = [
    {
      image: "user",
      name: "Tawam Rahman, ",
      title: "Founder of TrendyWear",
      text: "Apexium Solutions completely transformed our online store. From setting up the platform to integrating logistics, everything was handled flawlessly. Their team’s attention to detail and commitment to excellence is unmatched."
    },
    {
      image: "user2",
      name: "Tunde Balogun",
      title: "StyleVault Marketplace",
      text: "Apexium Solutions has transformed the way we do business. Their platform makes it incredibly easy to connect with customers, showcase our products, and manage transactions seamlessly"
    },
    {
      image: "user1",
      name: "Queenesa Oladejo",
      title: " CEO of Prime Home ",
      text: "Partnering with Apexium Solutions has been a game-changer for our business. Their intuitive platform and comprehensive logistics services have streamlined our operations from start to finish."
    },
  ]
  return (
    <section className=" lg:px-20 p-4 py-20 relative">
      <p className="text-gradient sm:text-sm text-center">Digital Analytics & Strategy Consulting Agency</p>
      <h1 className="lg:text-6xl text-3xl font-bold text-center">What our clients say</h1>
      <img src="/images/01.svg.png" className="absolute top-10 sm:hidden" alt="" />
      <Swiper
        modules={[Autoplay]}
        slidesPerView={1}
        autoplay
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {testimonial.map((single, index) => <SwiperSlide key={index}>
          <div className="rounded-3xl lg:p-16 p-6 gradient mt-10">
            <div className="flex justify-center">
              <img src={`/images/${single.image}.png`} alt="" />
              <div className="my-auto ml-4">
                <p className="font-bold text-white">{single.name} </p>
                <p className="text-white text-sm">{single.title}</p>
              </div>
            </div>
            <div className="lg:text-3xl sm:mt-4 lg:p-8 text-center text-white">
              {single.text}
            </div>
          </div>
        </SwiperSlide>)}
      </Swiper>

    </section>
  );
};

export default Testimonials;