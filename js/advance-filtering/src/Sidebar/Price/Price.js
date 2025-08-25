import Input from "../../components/Input";

const Price = ({handleChange}) => {
  return (
    <div>
      <h2>Price</h2>
      <Input 
          handle={handleChange}
          name="test1"
          title="$0 - 50"
          value={50}
        />
      <Input 
          handle={handleChange}
          name="test1"
          title="$50 - 100"
          value={100}
        />
        <Input 
          handle={handleChange}
          name="test1"
          title="$100 - 150"
          value={150}
        />
        <Input 
          handle={handleChange}
          name="test1"
          title="Over 200"
          value={200}
        />
    </div>
  );
};

export default Price;
