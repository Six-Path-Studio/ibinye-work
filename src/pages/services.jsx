import Card from '../components/Card';
import Header from '../components/Header';

const services = () => {
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
      <Header title={'Our Services'} text={'Home > Services'} />
      <section data-aos="zoom-in" className='lg:p-20 sm:py-10 p-4'>
        <div className='lg:w-[60%] mx-auto text-center mb-10'>
          <h1 className='lg:text-5xl text-3xl font-medium'>Our Services: Empowering Your Success in the Digital Age</h1>
        </div>
        <div className='lg:grid  grid-cols-3 gap-3'>
          {cards.map((card, index) => <Card key={index} card={card} />)}
        </div>
      </section>
    </>
  );
};

export default services;