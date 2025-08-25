import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import React from "react";
import "./Nav.css"

export const Nav = ({handleInputChange}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={(event) => handleInputChange(event.target.value)}
          placeholder="Enter your search"
        />
      </div>
      <div className="profile-container">
        <a href="">
            <FiHeart className="nav-icons"/>
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="">
            <AiOutlineUserAdd className="nav-icons"/>
        </a>
      </div>
    </nav>
  );
};
export default Nav;
