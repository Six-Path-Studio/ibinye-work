import { Link } from "react-router";

const FooterNav = () => {
  return (
    <footer className="bg-[#1B1B1B] py-20 lg:px-20 px-4 text-white gap-6 grid lg:grid-cols-4">
      <div>
        {/* <h1 className="font-bold text-white mb-4 text-xl">Logo</h1> */}
        <img src="/images/logo.png" className="mb-4 w-32" alt="" />
        <p className="text-white">Apexium Solutions: Powering Digital Success.</p>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Resources</h2>
        <Link to={'/'}>
          <p className="text-[#D0CACA] my-1">Home</p>
        </Link>
        <Link to={'/about-us'}>
          <p className="text-[#D0CACA] my-1">About Us</p>
        </Link>
        <Link to={'/services'}>
          <p className="text-[#D0CACA] my-1">Services</p>
        </Link>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Important Links</h2>
        <Link to={'/'}>
          <p className="text-[#D0CACA] my-1">Privacy Policy</p>
        </Link>
        <Link to={'/'}>
          <p className="text-[#D0CACA] my-1">Terms and Conditions</p>
        </Link>
        <Link to={'/'}>
          <p className="text-[#D0CACA] my-1">Cookies</p>
        </Link>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-4">Our Location</h2>
        <p className="text-[#D0CACA] my-1">
          37 Igode Road Maya, Lagos </p>
        <p className="text-[#D0CACA] my-1">Call: (+234) 806-464-3107 <br />
          Email: info@apexiumsolutions.com.ng</p>
      </div>
    </footer>
  );
};

export default FooterNav;