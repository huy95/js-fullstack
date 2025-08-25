import "./product.css";
import Card from "../components/Card.js";

const Product = ({ products }) => {
  return (
    <section className="card-container">
      {products.map((value, index) => (
        <Card key={index} item={value} />
      ))}
    </section>
  );
};

export default Product;
