import { Link } from "react-router";

const FooterNav = () => {
  return (
    <footer className="bg-[#1B1B1B] py-20 lg:px-20 px-4 text-white gap-6 grid lg:grid-cols-4">
      <div>
        <h1 className="font-bold text-white mb-4 text-xl">Logo</h1>
        <p className="text-white">Your Gateway to Seamless Online Commerce.</p>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Resources</h2>
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
        <h2 className="text-lg font-medium mb-4">Important Links</h2>
        <p className="text-[#D0CACA] my-1">Privacy Policy</p>
        <p className="text-[#D0CACA] my-1">Terms and Conditions</p>
        <p className="text-[#D0CACA] my-1">Cookies</p>
      </div>
      <div>
        <h2 className="text-lg font-medium mb-4">Our Location</h2>
        <p className="text-[#D0CACA] my-1">Designing World Inc. <br />
          1604 NSD, Dhaka, BD</p>
        <p className="text-[#D0CACA] my-1">Call: +123 456 789 <br />
          Email: help@example.com</p>
      </div>
    </footer>
  );
};

export default FooterNav;