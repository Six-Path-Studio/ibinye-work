import { Link } from "react-router";

const Hero = () => {
  return (
    <section data-aos="fade-down" className="lg:flex hero justify-between lg:px-20 lg:py-24 sm:py-20 p-4">
      <div className="my-auto lg:w-1/2">
        <h1 className="lg:text-6xl text-4xl text-white font-medium">Powering Digital Success</h1>
        <p className="my-6 text-white">At Apexium Solutions, we partner with businesses and consumers to navigate the dynamic digital landscape. We provide a suite of innovative tools and platforms that streamline processes, enhance customer experiences, and unlock new opportunities for growth in the ever-evolving online marketplace.</p>
        <button className="bg-[#FFC107] p-4 px-10 rounded-full mr-4">Book Now</button>
        <Link to={'/services'}>
          <button className="p-4 rounded-full px-10 bg-white">Know More</button>
        </Link>
      </div>
      <img src="/images/hero.png" className="sm:mt-6" alt="" />
    </section>
  );
}

export default Hero;
