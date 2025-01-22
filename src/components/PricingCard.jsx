
const PricingCard = ({ count }) => {
  const pricing = [
    {
      title: "Ecommerce Development",
      price: '8,000',
      list: ["Cross-border payment", 'International Remittances', 'Simplified gateway', 'Transaction security', 'Best transaction fee', "Multi-language and currency support", "Customizable store design and layout"]
    },
    {
      title: "Software Development",
      price: '4,000',
      list: ['Customizable store design and layout', 'Interactive and intuitive UI', 'Better User Experience', 'Advance security', '3-month support and maintenance']
    },
    {
      title: "Mobile Development",
      price: '4,000',
      list: ['Cross platform Development', 'Interactive and intuitive UI', 'Core functionality for basic needs', 'Advance security', '3-month support and maintenance']
    },
    {
      title: "Enterprise Application",
      price: '8,000',
      list: ['Fully customizable with integration capabilities', 'Scalability for large businesses', 'Interactive and intuitive UI', 'Full development cycle', '6-month support and maintenance']
    },
    {
      title: "Digital Marketing & Branding",
      price: '3,500',
      list: ['Social media management', 'Basic graphic design for ads', 'Advanced SEO & paid campaigns', 'Full-service branding.', 'Full-service branding ']
    },
    {
      title: "Other Custom Services",
      price: 'Custom',
      list: ['Logistics', 'Mobile applications', 'Branding', 'Ecommerce', 'Software Development']
    },
  ]
  return (
    <section data-aos="flip-down" className="lg:px-20 px-4 py-10">
      <div className='lg:w-[40%] mx-auto text-center mb-10'>
        <p className="sm:text-xs">Best Of Our Price Table</p>
        <h1 className='lg:text-5xl text-3xl font-bold'>Apexium Solutions Pricing Plans</h1>
      </div>
      <div className="grid lg:grid-cols-3 gap-3">
        {pricing.slice(0, count).map((price, index) => <div key={index} className="text-center bg-[#444444] p-10 rounded-3xl">
          <h1 className="text-3xl mb-4 font-bold">{price.title}</h1>
          <ul className="text-sm">
            {price.list.map((single, index) => <li key={index}>{single}</li>
            )}
            {/* <li>Advanced analytics and reporting tools</li>
          <li>Standard search and filtering features</li>
          <li>3-month support and maintenance</li> */}
          </ul>
          <div className="flex justify-center my-4">
            <h2 className="my-auto mr-2 text-white font-bold">$</h2>
            <h2 className="text-xl text-white font-bold">{price.price}</h2>
          </div>
          <button className="gradient p-4 rounded-full px-6 text-white">Book Now</button>
        </div>)}
      </div>
    </section>
  );
};

export default PricingCard;