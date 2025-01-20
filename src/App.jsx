import { useEffect } from 'react'
import './App.css'
import Card from './components/Card'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import Testimonials from './components/Testimonials'

import AOS from "aos";
import "aos/dist/aos.css";
import PricingCard from './components/PricingCard'
import CounterSection from './components/Counter'
function App() {
  const cards = [
    {
      title: "Sell Smarter, Reach Further",
      text: "We help businesses showcase their products with advanced search features, digital marketing, and personalized shopping experiences.",
      image: "01"
    },
    {
      title: "Reliable Logistics",
      text: "From warehousing and packaging to delivery, we ensure that every product sold through our platform reaches customers quickly and secu=rely.",
      image: "02"
    },
    {
      title: "Build Trust with Every Transaction",
      text: "With tools like product reviews, comparison features, and dispute resolution mechanisms, we enhance user confidence and satisfaction.",
      image: "03"
    },
    {
      title: "Custom Software for Every Industry",
      text: "Our team of experts designs and develops custom software applications, tools, and frameworks tailored to solve specific challenges across various industries.",
      image: "01"
    },
    {
      title: "IT Solutions That Work",
      text: "From data processing to brand building, call centers, and educational services, we provide a suite of IT solutions to help businesses succeed in today’s competitive world.",
      image: "02"
    },
    {
      title: "Comprehensive Services",
      text: "From online trading to logistics and IT services, we cover it all.",
      image: "03"
    }
  ]

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
    <>
      <Hero />
      <section className='lg:flex justify-between lg:p-20 p-4 sm:py-20'>
        <img data-aos="zoom-in" src="/images/hero-2.png" alt="" />
        <div data-aos="fade-up-right" className='lg:w-[45%] my-auto sm:mt-6'>
          <h1 className='lg:text-6xl text-4xl mb-2 font-medium'>Marketplace for Everyone</h1>
          <p>We provide an all-in-one platform that connects consumers, businesses, and service providers, creating a hub for efficient and secure online transactions. </p>
          <div className='lg:flex mt-10'>
            <div>
              <img src="/images/icons/01.svg" alt="" />
              <h1 className='my-4 text-lg font-medium'>Growing Your Business</h1>
              <p>Whether you&apos;re shopping for fashion, electronics, or home goods, we&apos;ve got you covered</p>
            </div>
            <div className='sm:mt-4'>
              <img src="/images/icons/02.svg" alt="" />
              <h1 className='my-4 text-lg font-medium'>Retail Reinvented</h1>
              <p>Our interactive web and mobile platforms make online retailing effortless. </p>
            </div>
          </div>
        </div>
      </section>
      <CounterSection />
      <section className='lg:p-20 p-4 sm:mb-6 '>
        <div data-aos="fade-left" className='lg:w-[40%] mx-auto text-center mb-10'>
          <p className='text-gradient'>Best Of Our Working Process</p>
          <h1 className='lg:text-5xl text-3xl font-medium'>How our solutions help your business</h1>
        </div>
        <div data-aos="fade-right" className='grid lg:grid-cols-3 gap-3'>
          {cards.map((card, index) => <Card key={index} card={card} />)}
        </div>
      </section>
      <ServiceSection />
      <PricingCard count={3} />
      <section id='bg' className='lg:p-32 sm:px-2 sm:py-20 text-center relative'>
        <div className='absolute top-0 w-full left-0 bg-black h-full opacity-70'></div>
        <div className='lg:w-[60%] mx-auto relative'>
          <p data-aos="fade-left" className='lg:text-5xl text-3xl mb-3 font-bold text-white'>Transform Your Business with Innovative Solutions</p>
          <p data-aos="fade-right" className='text-white my-4'>
            Transform your business with innovative e-commerce solutions. Whether you need a dynamic online marketplace, seamless logistics support, or customized software development, Apexium Solutions is here to help you thrive in the digital age
          </p>
          <button data-aos="fade-down" className='p-4 rounded-full px-10 bg-[#FFC107] mt-4 '>Book now</button>
        </div>
      </section>
      <Testimonials />
    </>
  )
}

export default App
