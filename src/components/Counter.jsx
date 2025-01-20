import CountUp from "react-countup";

const CounterSection = () => {
  const counters = [
    { title: "Projects Done", value: 1200 },
    { title: "Happy Clients", value: 900 },
    { title: "Client Rating", value: 4.8 },
    { title: "Expert Team", value: 50 },
  ];

  return (
    <section className="bg-[#1B1B1B] py-12 sm:px-4 text-center">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {counters.map((counter, index) => (
          <div key={index} className="flex flex-col items-center">
            <CountUp
              start={0}
              end={counter.value}
              duration={2.5}
              className="lg:text-7xl text-4xl font-bold text-[#FFC107]"
            />
            <p className="mt-2 sm:font-bold sm:text-sm text-lg text-white uppercase">{counter.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
