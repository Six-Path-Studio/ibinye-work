import ServiceSection from "../components/ServiceSection";
import Header from "../components/Header";

const about = () => {
 
  return (
    <>
      <Header title={'About Us'} text={'Home > About Us'} />
      <section className="lg:flex justify-between">
        <img src="/images/about-1.png" alt="" />
        <div className="lg:w-1/2 my-auto lg:p-10 p-4">
          <h1 className="lg:text-6xl text-3xl sm:mt-6 font-medium mb-4">Building Innovative Solutions.</h1>
          <p>Welcome to Apexium Solutions, your trusted partner in innovative e-commerce and digital solutions. We are dedicated to transforming the online shopping experience by providing a secure, user-friendly platform that connects consumers, businesses, and service providers across local and global markets. From retail and wholesale transactions in categories like fashion, electronics, and home goods to offering comprehensive logistics services, including packaging and delivery, we ensure seamless and efficient operations.
            <br /> <br />
            At Apexium Solutions, we go beyond commerce by developing custom software applications and providing cutting-edge IT services tailored to solve unique challenges across various industries. With advanced tools, digital marketing expertise, and value-added features such as product reviews and dispute resolution, we empower businesses and individuals to succeed in today’s digital economy. Apexium Solutions—where innovation meets opportunity.</p>

          <button className="gradient p-4 rounded-full px-6 text-white mt-6">Book Now</button>
        </div>
      </section>
      <ServiceSection />
      
    </>
  );
};

export default about;