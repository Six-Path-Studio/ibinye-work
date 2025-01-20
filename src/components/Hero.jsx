import { useState, useEffect } from "react";
import { Link } from "react-router";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero1.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      data-aos="fade-down"
      className="relative hero h-[100vh] flex justify-between lg:px-20 lg:py-24 sm:py-20 p-4 overflow-hidden"
    >
      {/* Slider Section */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${currentImage === index ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>
      <div className="absolute bg-black bg-opacity-80 top-0 w-full h-full left-0">
      </div>

      {/* Content Section */}
      <div className="relative z-10 my-auto lg:w-[60%] mx-auto text-center p-6 rounded-lg">
        <h1 data-aos="fade-right"
          className="lg:text-6xl text-4xl text-white font-bold">
          Powering Digital Success
        </h1>
        <p data-aos="fade-up" className="my-6 text-white">
          At Apexium Solutions, we partner with businesses and consumers to
          navigate the dynamic digital landscape. We provide a suite of
          innovative tools and platforms that streamline processes, enhance
          customer experiences, and unlock new opportunities for growth in the
          ever-evolving online marketplace.
        </p>
        {/* <button className="bg-[#FFC107] sm:w-full sm:mb-4 p-4 px-10 rounded-full mr-4">
          Book Now
        </button> */}
        <Link to={"/services"}>
          <button data-aos="fade-left"
            className="p-4 rounded-full sm:w-full px-10 bg-[#FFC107]">Know More</button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
