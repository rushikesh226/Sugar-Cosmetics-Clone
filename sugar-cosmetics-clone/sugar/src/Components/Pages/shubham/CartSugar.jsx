import React, { useEffect, useState } from "react";
import styles from "./Suger.module.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";

const CartSugar = ({ cart, setCart, handleChange }) => {
  const navigate = useNavigate();
  console.log(cart);
  const [Cost, setCost] = useState(0);
  const [shipping, setShpping] = useState(0);
  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handleCost();
  };

  const handleCost = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setCost(ans);
  };

  useEffect(() => {
    handleCost();
  });
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  useEffect(() => {
    setShpping(getRandomArbitrary(40, 100));
  }, []);

  useEffect(() => {
    localStorage.setItem("Cost", Cost);
  }, [Cost]);

  console.log(Cost);
  return (
    <>
      <div className={styles.carTotal}>
        <div className={styles.homeLogo}>
          <span style={{ marginLeft: "35px" }}></span>{" "}
          <i className="fa-solid fa-house"></i> / Cart
        </div>

        <div className={styles.itemsDiv}>
          <div className={styles.gap1}>
            <div className={styles.dummy}>
              <div style={{ justifyContent: "start" }}>
                <img
                  src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg"
                  width="20px"
                  height="20px"
                  alt="cartLogo"
                />
                <span style={{ marginLeft: "10px" }}>Order Summary</span>
              </div>
              <div>Cart Total : Rs.{Cost}</div>
            </div>
            <div style={{ display: "flex" }} className={styles.dummy}>
              <div>
                {" "}
                <img
                  style={{ margin: "0px" }}
                  src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg"
                  width="20px"
                  height="20px"
                  alt="offer"
                />
                <span style={{ marginLeft: "10px", paddingTop: "-5px" }}>
                  Offers and Price Details
                </span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex" }}>
            <div className={styles.half}>
              <div>
                {/* // maping the cartData */}

                {cart?.map((item) => (
                  <div className={styles.MainDiv} key={uuid()}>
                    <div>
                      <img className={styles.imas} src={item.image} />
                    </div>
                    <div className={styles.cartname}>
                      {" "}
                      <p>{item.name}</p>
                    </div>
                    <img
                      className={styles.deleteIcan}
                      onClick={() => handleRemove(item.id)}
                      src="https://img.icons8.com/fluency-systems-regular/344/filled-trash.png"
                    />
                    <div className={styles.price}>
                      {" "}
                      <button onClick={() => handleChange(item, -1)}>-</button>
                      {item.amount}
                      <button onClick={() => handleChange(item, 1)}>+</button>
                    </div>

                    <div className={styles.GrandPricediv}>
                      {item.amount} *{item.price}.00={item.amount * item.price}
                      .00
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={styles.half1}
              style={{ backgroundColor: "whitesmoke", justifyContent: "start" }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px 20px",
                  marginTop: "15px",
                }}
              >
                <div
                  style={{
                    height: "35px",
                    paddingTop: "10px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/GiftCard.svg"
                    width="20px"
                    height="20px"
                  ></img>
                  <span style={{ marginLeft: "10px" }}>
                    Gift Card/Discount Code
                  </span>
                  <input className={styles.promocode} type="text" />
                  <input
                    className={styles.promosub}
                    type="submit"
                    value="submit"
                  />
                </div>

                <div
                  style={{
                    height: "35px",
                    paddingTop: "11px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="	https://in.sugarcosmetics.com/desc-images/PriceDetails.svg"
                    width="20px"
                    height="20px"
                  ></img>
                  <span style={{ marginLeft: "10px" }}>Price Details</span>
                </div>

                <div
                  style={{
                    height: "30px",
                    paddingTop: "5px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="	https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg"
                    width="15px"
                    height="15px"
                  />
                  <span style={{ marginLeft: "10px" }}>Cart Sub Total: </span>
                  <span style={{ marginLeft: "80px" }}>₹ {Cost}</span>
                </div>
                <div
                  style={{
                    height: "30px",
                    paddingTop: "5px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg"
                    width="15px"
                    height="15px"
                  />
                  <span style={{ marginLeft: "10px" }}>Shipping Cost:</span>
                  <span style={{ marginLeft: "80px" }}>₹ {shipping}</span>
                </div>
                <div
                  style={{
                    height: "30px",
                    paddingTop: "5px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/Discount.svg"
                    width="15px"
                    height="15px"
                  />
                  <span style={{ marginLeft: "10px" }}>Discount Applied: </span>
                  <span style={{ marginLeft: "60px" }}>₹ 00.0</span>
                </div>
                <div
                  style={{
                    height: "30px",
                    paddingTop: "5px",
                    textAlign: "start",
                  }}
                >
                  <img
                    src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg"
                    width="15px"
                    height="15px"
                  />
                  <span style={{ marginLeft: "10px" }}>Amount Payable: </span>
                  <span style={{ marginLeft: "65px" }}>
                    ₹ {Cost - shipping + 200.69}
                  </span>
                </div>
                <div style={{ textAlign: "start" }}>
                  <span>Including ₹ 200.69 in taxes</span>
                </div>
              </div>
              <div style={{ marginTop: "20px", display: "flex" }}>
                <Link
                  to="/"
                  style={{
                    height: "37px",
                    border: "1px solid gray",
                    width: "35%",
                    backgroundColor: "#fff",
                    padding: "7px 0px",
                    boxSizing: "border-box",
                  }}
                >
                  {" "}
                  Continue Shopping
                </Link>
                <button
                  style={{
                    height: "37px",
                    border: "1px solid gray",
                    width: "70%",
                    backgroundColor: "darkslategray",
                    color: "#fff",
                  }}
                  onClick={() => navigate("/Delivery")}
                >
                  Delivery Information
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSugar;
