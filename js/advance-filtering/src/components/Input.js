import "../Sidebar/Category/Category.css"
const Input = ({handle, value, title, name, color}) => {
  return (
    <>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handle} value={value} name={name}/>
        <span className="checkmark" style={{color: color}}></span> {title}
      </label>
    </>
  );
};

export default Input;
