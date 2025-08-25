import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav.js";
import Product from "./Products/product.js";
import Recommended from "./Recommended/Recommended.js";
import Sidebar from "./Sidebar/Sidebar.js";
import dataProducts from "./db/db.js";

function App() {
  const[selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  const [productsFilter, setProductsFilter] = useState(dataProducts)

  const handleInputChange = (value) => {
    setQuery(value)
    console.log(value)
  }

  const filterProduct = dataProducts.filter((product) => product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1));
  console.log(JSON.stringify(filterProduct));
  return (
    <>
      <Sidebar />
      <Nav handleInputChange={handleInputChange}/>
      <Recommended />
      <Product products={filterProduct} />
    </>
  );
}

export default App;
