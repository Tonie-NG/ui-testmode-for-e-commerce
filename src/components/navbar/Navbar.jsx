import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  console.log(quantity);
  return (
    <div className="navbar">
      <div className="navWrapper">
        <div className="navLeft">
          <h1 className="navLogo">TONIE.</h1>
        </div>
        <div className="navCenter">
          <span className="navLanguage">EN</span>
          <div className="navSearchContainer">
            <input type="text" className="navInput" placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "1rem" }} />
          </div>
        </div>

        <div className="navRight">
          <Link to="/login">
            <div className="navMenuItem"> LOG IN</div>
          </Link>

          <Link to="/cart">
            <div className="navMenuItem">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
