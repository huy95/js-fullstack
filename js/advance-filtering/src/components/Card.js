import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ item }) => {
  return (
    <section className="card">
      <img src={item.img} alt={item.title} className="card-img" />
      <div className="card-detail">
        <h3 className="card-title">{item.title}</h3>
        <section className="card-reviews">
          {[...Array(5)].map((_, i) =>
            i < item.stars ? (
              <AiFillStar key={i} className="text-yellow-500" />
            ) : (
              <AiOutlineStar key={i} className="text-gray-400" />
            )
          )}
          <span className="total-reviews">{item.reviews}</span>
        </section>
        <section className="card-price">
          <div className="price">
            <del>{item.prevPrice}</del>
            {item.newPrice}
          </div>
          <div className="bag-icon">
            <BsFillBagHeartFill />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Card;
