import Card from '../components/Card';
import ServiceSection from "../components/ServiceSection";
import Header from "../components/Header";

const about = () => {
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
  return (
    <>
      <Header title={'About Us'} text={'Home > About Us'} />
      <section className="lg:flex lg:p-20 p-4 sm:py-10 justify-between">
        <img src="/images/about-hero-11.png.png" alt="" />
        <div className="lg:w-1/2 my-auto">
          <h1 className="lg:text-6xl text-3xl sm:mt-6 font-medium mb-4">Building Innovative Solutions.</h1>
          <p>Welcome to Apexium Solutions, your trusted partner in innovative e-commerce and digital solutions. We are dedicated to transforming the online shopping experience by providing a secure, user-friendly platform that connects consumers, businesses, and service providers across local and global markets. From retail and wholesale transactions in categories like fashion, electronics, and home goods to offering comprehensive logistics services, including packaging and delivery, we ensure seamless and efficient operations.
            <br /> <br />
            At Apexium Solutions, we go beyond commerce by developing custom software applications and providing cutting-edge IT services tailored to solve unique challenges across various industries. With advanced tools, digital marketing expertise, and value-added features such as product reviews and dispute resolution, we empower businesses and individuals to succeed in today’s digital economy. Apexium Solutions—where innovation meets opportunity.</p>

          <button className="gradient p-4 rounded-full px-6 text-white mt-6">Book Now</button>
        </div>
      </section>
      <ServiceSection />
      <section data-aos="zoom-in" className='lg:p-20 sm:py-10 p-4'>
        <div className='lg:w-[60%] mx-auto text-center mb-10'>
          <h1 className='lg:text-5xl text-3xl font-medium'>What we do</h1>
        </div>
        <div className='lg:grid  grid-cols-3 gap-3'>
          {cards.map((card, index) => <Card key={index} card={card} />)}
        </div>
      </section>
    </>
  );
};

export default about;