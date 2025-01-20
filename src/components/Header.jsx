
const Header = ({ title, text }) => {
  return (
    <div className='bg-[#444444] text-center p-20'>
      <h1 className="text-white mb-6 text-3xl font-medium">{title}</h1>
      <p className="text-white">{text}</p>
    </div>
  );
};

export default Header;