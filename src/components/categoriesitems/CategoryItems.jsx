import { Link } from "react-router-dom";
import "./categoryItem.css";

const CategoryItems = ({ item }) => {
  return (
    <div className="categoryItemContainer">
      <Link to={`/products/${item.category}`}>
        <img src={item.img} className="ciImage" alt="categories" />
        <div className="ciInfo">
          <h1 className="ciTitle">{item.title}</h1>
          <button className="ciButton">Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItems;
