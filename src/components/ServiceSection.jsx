
const ServiceSection = () => {
  return (
    <>
      <section className="bg-[#EDE2FF] lg:flex lg:p-20 p-4 sm:py-10 justify-between">
        <div data-aos="fade-up-left" className="lg:w-[45%] my-auto">
          <p className="text-gradient sm:text-xs">Your Gateway to Seamless Online Commerce</p>
          <h1 className="lg:text-7xl text-4xl font-medium">Experience <br /> the Future of <br /> E-commerce.</h1>
          <p className="py-4">Start your journey with Apexium today. Whether you&apos;re a buyer, seller, or service provider, we make online commerce smarter, faster, and easier for you.</p>
          <button className="bg-[#FFC107] p-4 px-10 rounded-full mr-4">Book Now</button>
          <button className="p-4 rounded-full px-10 bg-white">Know More</button>
        </div>
        <img data-aos="fade-up-right" src="/images/about-hero-02.png.png" alt="" />
      </section>
      <section data-aos="flip-down" className="lg:px-20 px-4 py-10">
        <div className='lg:w-[40%] mx-auto text-center mb-10'>
          <p className="sm:text-xs">Best Of Our Price Table</p>
          <h1 className='lg:text-5xl text-3xl font-medium'>Apexium Solutions Pricing Plans</h1>
        </div>
        <div className="grid lg:grid-cols-3 gap-3">
          {[1, 2, 3].map((_, index) => <div key={index} className="text-center bg-white p-10 rounded-3xl">
            <h1 className="text-3xl mb-4 font-medium">Ecommerce Development</h1>
            <ul className="text-sm">
              <li>Customizable store design and layout</li>
              <li>Advanced analytics and reporting tools</li>
              <li>Standard search and filtering features</li>
              <li>3-month support and maintenance</li>
            </ul>
            <div className="flex justify-center my-4">
              <h2 className="my-auto mr-2 font-medium">$</h2>
              <h2 className="text-xl font-medium">7,000</h2>
            </div>
            <button className="gradient p-4 rounded-full px-6 text-white">Book Now</button>
          </div>)}
        </div>
      </section>
    </>
  );
};

export default ServiceSection;