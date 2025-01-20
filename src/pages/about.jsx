import ServiceSection from "../components/ServiceSection";
import Header from "../components/Header";
import Card from '../components/Card'

const about = () => {
  const cards = [
    {
      title: "Innovation",
      text: "At Apexium Solutions, we prioritize cutting-edge technology to redefine the e-commerce experience. From advanced digital platforms to personalized shopping features, we innovate to meet the evolving needs of businesses and consumers.",
      image: "01"
    },
    {
      title: "Trust",
      text: "We are committed to building lasting relationships through transparency, reliability, and secure transactions. With tools like consumer protection mechanisms and dispute resolution, we ensure every interaction on our platform fosters confidence.",
      image: "02"
    },
    {
      title: "Customer-Centricity",
      text: "Our success is driven by putting you first. We design seamless, user-friendly solutions tailored to enhance your online trading journey, ensuring satisfaction at every touchpoint.",
      image: "03"
    }
  ]
  return (
    <>
      <Header title={'About Us'} text={'Home > About Us'} />
      <section className="lg:flex justify-between">
        <img src="/images/about-img.jpg" className="lg:w-1/2" alt="" />
        <div className="lg:w-1/2 my-auto lg:p-10 p-4">
          <h1 className="lg:text-6xl text-3xl sm:mt-6 font-medium mb-4">Building Innovative Solutions.</h1>
          <p>Welcome to Apexium Solutions, your trusted partner in innovative e-commerce and digital solutions. We are dedicated to transforming the online shopping experience by providing a secure, user-friendly platform that connects consumers, businesses, and service providers across local and global markets. From retail and wholesale transactions in categories like fashion, electronics, and home goods to offering comprehensive logistics services, including packaging and delivery, we ensure seamless and efficient operations.
            <br /> <br />
            At Apexium Solutions, we go beyond commerce by developing custom software applications and providing cutting-edge IT services tailored to solve unique challenges across various industries. With advanced tools, digital marketing expertise, and value-added features such as product reviews and dispute resolution, we empower businesses and individuals to succeed in today’s digital economy. Apexium Solutions—where innovation meets opportunity.</p>

          <button className="gradient p-4 rounded-full px-6 text-white mt-6">Book Now</button>
        </div>
      </section>
      <section className='lg:p-20 p-4 sm:mb-6 '>
        <div data-aos="fade-left" className='lg:w-[40%] mx-auto text-center mb-10'>
          <p className='text-gradient'>The Values That Power Our Vision</p>
          <h1 className='lg:text-5xl text-3xl font-medium'>Our Core Values</h1>
        </div>
        <div data-aos="fade-down" className='grid lg:grid-cols-3 gap-3'>
          {cards.map((card, index) => <Card key={index} card={card} />)}
        </div>
      </section>
      <ServiceSection />

    </>
  );
};

export default about;