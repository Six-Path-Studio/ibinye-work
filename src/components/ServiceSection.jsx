import { Link } from "react-router";

const ServiceSection = () => {
 
  return (
    <>
      <section className="bg-[#EDE2FF] lg:flex lg:p-20 p-4 sm:py-10 justify-between">
        <div data-aos="fade-up-left" className="lg:w-[45%] my-auto">
          <p className="text-gradient sm:text-xs">Your Gateway to Seamless Online Commerce</p>
          <h1 className="lg:text-7xl text-4xl font-medium">Experience <br /> the Future of <br /> E-commerce.</h1>
          <p className="py-4">Start your journey with Apexium today. Whether you&apos;re a buyer, seller, or service provider, we make online commerce smarter, faster, and easier for you.</p>
          <button className="bg-[#FFC107] p-4 px-10 rounded-full mr-4">Book Now</button>
          <Link to={'/services'}>
            <button className="p-4 rounded-full px-10 bg-white">Know More</button>
          </Link>
        </div>
        <img data-aos="fade-up-right" src="/images/about-hero-02.png.png" alt="" />
      </section>
    </>
  );
};

export default ServiceSection;