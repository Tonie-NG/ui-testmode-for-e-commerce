import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./product.css";

const Product = ({ item }) => {
  return (
    <div className="productContainer">
      <div className="productCircle"></div>
      <img src={item.img} alt="" className="productImage" />
      <div className="productInfo">
        <div className="productIcon">
          <ShoppingCartOutlined />
        </div>
        <div className="productIcon">
          <Link to={`/product/${item._id}`}>
            <SearchOutlined />
          </Link>
        </div>
        <div className="productIcon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
