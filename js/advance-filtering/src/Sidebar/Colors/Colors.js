import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2>Colors</h2>
      <Input
        handle={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handle={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handle={handleChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handle={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
    </div>
  );
};

export default Colors;
