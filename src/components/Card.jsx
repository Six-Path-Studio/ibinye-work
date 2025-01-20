
const Card = ({card}) => {
  return (
    <div className="bg-[#444444] rounded-3xl p-6">
      <img src={`/images/icons/${card.image}.svg`} alt="" />
      <h1 className="font-medium my-3 text-lg">{card.title}</h1>
      <p>{card.text}</p>
    </div>
  );
};

export default Card;