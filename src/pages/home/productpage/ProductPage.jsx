import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../../../apiCalls/request";
import Announcement from "../../../components/announcement/Announcement";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Newsletter from "../../../components/newsletter/Newsletter";
import Products from "../../../components/products/Products";
import { addProduct } from "../../../redux/cartRedux";
import "./productpage.css";

const ProductPage = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  //INCREMENT THE VALUE OF PRODUCTS
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (type) => {
    if (type === "decrease") {
      quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // Choose  Size
  const [size, setSize] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products//find/" + id);
        setProduct(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  //Add to acrt Functionality
  const dispatch = useDispatch();

  const handleCart = () => {
    //update CART
    dispatch(addProduct({ ...product, quantity, size }));
  };

  //   Capitalize Title

  return (
    <div className="productpageContainer">
      <Navbar />
      <Announcement />
      <div className="pgWrapper">
        <div className="pgImageContainer">
          <img src={product.img} alt="" className="pgImage" />
        </div>
        <div className="pgInfoContainer">
          <h1 className="pgTitle">{product.title}</h1>
          <p className="pgDescription">{product.desc}</p>
          <span className="pgPrice" style={{ fontWeight: "300" }}>
            ₦ {product.price}
          </span>
          <div className="pgFilterContainer">
            <div className="pgFilter">
              <span className="pgFilterTitle">Color</span>
              <div className="pgFilterColor pgblack"></div>
              <div className="pgFilterColor pgdarkblue"></div>
              <div className="pgFilterColor pggray"></div>
            </div>
            <div className="pgFilter">
              <span className="pgFilterTitle">Size</span>
              <select
                className="pgFilterSize"
                onChange={(e) => setSize(e.target.value)}
              >
                {product.size?.map((s) => (
                  <option className="pgFilterSizeOption" key={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="pgAddContainer">
            <div className="pgAmountContainer">
              <Remove
                onClick={() => handleQuantity("decrease")}
                style={{ cursor: "pointer" }}
              />
              <span className="pgAmount">{quantity}</span>
              <Add
                onClick={() => handleQuantity("increase")}
                style={{ cursor: "pointer" }}
              />
            </div>
            <button className="pgButton" onClick={handleCart}>
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductPage;
