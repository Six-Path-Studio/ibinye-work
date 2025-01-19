
import Header from '../components/Header';
import PricingCard from '../components/PricingCard';

const services = () => {
 
  return (
    <>
      <Header title={'Our Services'} text={'Home > Services'} />
      <PricingCard count={6} />
    </>
  );
};

export default services;