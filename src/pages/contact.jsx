import Header from "../components/Header";

const contact = () => {
  return (
    <>
      <Header title={'Contact Us'} text={'Home > Contact Us'} />
      <section data-aos="zoom-in-down" className="lg:px-20 py-20 p-4 lg:flex justify-between">
        <div className="lg:w-[35%]">
          <h1 className="text-4xl text-[#1F0757] font-medium">Have Questions? <br /> Let’s Chat!</h1>
          <p className="my-4 text-[#8480AE]">Write to us or give us a call. We will reply to you as soon
            as possible. But yes, it can take up to 24 hours.</p>
          <div className="flex my-4">
            <img src="/images/01.png" className="mr-4" alt="" />
            <p className="my-auto text-[#8480AE]">info@apexiumsolutions.com.ng</p>
          </div>
          <div className="flex my-4">
            <img src="/images/02.png" className="mr-4" alt="" />
            <p className="my-auto text-[#8480AE]">(+234) 806-464-3107</p>
          </div>
          <div className="flex my-4">
            <img src="/images/03.png" className="mr-4" alt="" />
            <p className="my-auto text-[#8480AE]">We are open from 9am — 5pm business days.</p>
          </div>
        </div>
        <div className="lg:w-[60%] sm:mt-10">
          <div className="flex justify-between">
            <div className="w-[48%]">
              <label className="text-[#8480AE] text-sm" htmlFor="">Full Name:</label>
              <input type="text" className="p-2 bg-[#F1F4FD] border border-[#E3E3E3] w-full" />
            </div>
            <div className="w-[48%]">
              <label className="text-[#8480AE] text-sm" htmlFor="">Email Address:</label>
              <input type="text" className="p-2 bg-[#F1F4FD] border border-[#E3E3E3] w-full" />
            </div>
          </div>
          <div className="my-6">
            <label className="text-[#8480AE] text-sm" htmlFor="">Topics:</label>
            <input type="text" className="p-2 bg-[#F1F4FD] border border-[#E3E3E3] w-full" />
          </div>
          <div className="my-6">
            <label className="text-[#8480AE] text-sm" htmlFor="">Message:</label>
            <textarea className="p-2 bg-[#F1F4FD] border border-[#E3E3E3] w-full h-44"></textarea>
          </div>
          <div>
            <button className="bg-[#0D6EFD] rounded-md p-2 text-white w-full">Send Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default contact;