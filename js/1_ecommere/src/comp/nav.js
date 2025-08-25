import { MdLocalShipping } from "react-icons/md";
import "./nav.css";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
const Nav = () => {
  return (
    <>
      <div className="header">
        <div className="top_header">
          <div className="icon">
            <MdLocalShipping />
          </div>
          <div className="info">
            <p>Free Shipping when shopping upto $1000</p>
          </div>
        </div>
        <div className="mid_header">
          <div className="logo">
            <img src="logo192.png" alt="logo"></img>
          </div>
          <div className="search-box">
            <input type="text" value="" placeholder="search"></input>
            <button>
              <AiOutlineSearch />
            </button>
          </div>
          <div className="user">
            <div className="icon">
              <FiLogIn />
            </div>
            <div className="btn">
              <button>Login</button>
            </div>
          </div>
        </div>
        <div className="last-header">
          <div className="avatar"><RxAvatar className="icon"/>
          <div className="profile-user">
            <h3>Creative Tutorial</h3>
            <h5>abcasdasd@gmail.com</h5>
          </div>
          </div>
          <div className="nav">
            <ul>
              <li>
                <Link to="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/collection" className="link">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/about" className="link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="offer">
            <p>flat 10% over all iphone </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
