import Announcement from "../../../components/announcement/Announcement";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./cart.css";

import { Add, Remove } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../../apiCalls/request";

const STRIPE_KEY =
  "pk_test_51LXSfRHhVAhEjh6ZPas68JOkQHFXKsnrei74rlenpF43kjSjEROhSlLe4Ljuy3QixaWdkXdhJ47ebJYgK8Fr7Vns004D7UHf1Z";

const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: cart.totalPrice * 100,
        });
        history.push("/success", { data: res.data, products: cart.products });
      } catch (error) {
        console.log(error.message);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.totalPrice, history, cart]);

  console.log(stripeToken);
  return (
    <div className="cartContainer">
      <Navbar />
      <Announcement />
      <div className="cartWrapper">
        <h1 className="cartTitle">YOUR SHOPPING CART</h1>

        <div className="cartBottom">
          <div className="cartInfo">
            {cart.products.map((product) => (
              <div className="cartProduct">
                <div className="cartProductDetails">
                  <img src={product.img} alt="" className="cartImage" />
                  <div className="cartProductDetail">
                    <span className="cartProductName">
                      <b>Product</b>
                      {product.title}
                    </span>
                    <span className="cartProductId">
                      <b>ID</b>
                      {product._id}
                    </span>
                    <div className="cartProductColor" />
                    <span className="cartProductSize">
                      <b>Size</b>
                      {product.size}
                    </span>
                  </div>
                </div>
                <div className="cartPrice">
                  <div className="cartAmountContainer">
                    <Remove style={{ cursor: "pointer" }} />
                    <div className="cartAmount">{product.quantity}</div>
                    <Add style={{ cursor: "pointer" }} />
                  </div>
                  <div className="cartCaculatedPrice">
                    $ {product.price * product.quantity}
                  </div>
                </div>
              </div>
            ))}

            <hr className="cartHr" />
          </div>
          <div className="cartSummary">
            <h1 className="cartSummaryTitle">ORDER SUMMARY</h1>
            <div className="cartSummaryItems">
              <span className="cartSummaryItemText">Subtotal</span>
              <span className="cartSummaryItemPrice">${cart.totalPrice}</span>
            </div>
            <div className="cartSummaryItems">
              <span className="cartSummaryItemText">Estimated Shipping</span>
              <span className="cartSummaryItemPrice">$5.30</span>
            </div>
            <div className="cartSummaryItems">
              <span className="cartSummaryItemText">Discount</span>
              <span className="cartSummaryItemPrice">-$10</span>
            </div>
            <div className="cartSummaryItems cartTotal">
              <span className="cartSummaryItemText cartTotal">Gross Total</span>
              <span className="cartSummaryItemPrice">${cart.totalPrice}</span>
            </div>
            <StripeCheckout
              name="tonie shop"
              image=""
              billingAddress=""
              shippingAddress=""
              description={`Your Total is ${cart.totalPrice}`}
              amount={cart.totalPrice * 100}
              token={onToken}
              stripeKey={STRIPE_KEY}
            >
              <button className="summaryButton">CHECK OUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
