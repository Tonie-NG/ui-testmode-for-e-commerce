import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userRequest } from "../../apiCalls/request";
import ThanksImage from "./thanks.avif";

function Success() {
  const location = useLocation();
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);
  console.log(location);
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto ",

        flexDirection: "column",
        width: "300px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          marginBottom: "10px",
        }}
      >
        <img
          src={ThanksImage}
          width="80px"
          height="80px"
          style={{ objectFit: "cover", borderRadius: "50%" }}
          alt=""
        />
      </div>
      <button
        style={{
          border: "none",
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "600",
          fontSize: "1.25rem",
          cursor: "pointer",
        }}
      >
        Successful
      </button>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        {orderId
          ? `Order has been created successfully. Your order number is ${orderId}`
          : `Successfull. Your order is being prepared...You can go back now`}
      </p>
    </div>
  );
}

export default Success;
