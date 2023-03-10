import React, { useState } from "react";
import { Box, useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addToCart, addToWishlist } from "../../Redux/action";
import { useNavigate } from "react-router-dom";
function ProductCard({ image, title, price, rating, reviews, shades }) {
  const navigate = useNavigate();
  const cartObj = {
    image,
    title,
    price,
    rating,
    reviews,
    shades,
  };
  const wishlistObj = {
    image,
    title,
    price,
    rating,
    reviews,
    shades,
  };
  const [cartText, setCartText] = useState("ADD TO CART");
  const [cartColor, setCartColor] = useState("black");
  const toast = useToast();
  const dispatch = useDispatch();
  const productAddToCart = () => {
    dispatch(addToCart(cartObj));
    toast({
      title: "Item Added To Cart",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    setCartText("ADDED TO CART");
    setCartColor("teal");
  };
  const productAddToWishlist = () => {
    dispatch(addToWishlist(wishlistObj));
    toast({
      title: "Item Added To Wishlist",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box
      style={{
        width: "290.44px",
        height: "222",
        marginTop: "25px",
        padding: "20px",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <Box paddingLeft="50px" cursor={"pointer"}>
        <img
          src={image}
          alt="ProductImage"
          width={"160px"}
          display="inline-block"
          height={"222px"}
          border-radius="12px"
          onClick={() => navigate("/individualPage")}
        />
      </Box>
      <Box>
        <Box fontSize={".8rem"}>
          <p height="82px">{title}</p>
        </Box>
        <Box height={"18px"} fontSize={"14px"}>
          <span>{shades} shades</span>
        </Box>
        <Box fontSize={"18px"} fontWeight="700">
          <p>₹ {price}</p>
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          margin: "auto",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          <img
            src="https://media.sugarcosmetics.com/upload/rating_star.png"
            alt="star"
          />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box style={{ alignItems: "center" }}>
            <span
              style={{
                fontSize: "14px",
              }}
            >
              {rating}
            </span>
          </Box>
          <Box style={{ fontSize: "14px" }}>{`(${reviews})`}</Box>
        </Box>
      </Box>
      <Box style={{ display: "flex", marginTop: "10px" }}>
        <Box
          style={{
            cursor: "pointer",
            boxSizing: "border-box",
            display: "block",
            margin: "auto",
          }}
        >
          <button onClick={productAddToWishlist}>
            <svg
              viewBox="0 0 32 33"
              width="1em"
              height="1em"
              style={{ fontSize: "45px", verticalAlign: "middle" }}
            >
              <path
                d="M9 .5h14c4.7 0 8.5 3.8 8.5 8.5v14c0 4.7-3.8 8.5-8.5 8.5H9C4.3 31.5.5 27.7.5 23V9C.5 4.3 4.3.5 9 .5z"
                style={{ fill: "rgb(255, 255, 255)", stroke: "rgb(0, 0, 0)" }}
              ></path>
              <path
                d="M22.3 11.8c.4.4.7.9.9 1.4.2.5.3 1.1.3 1.6 0 .6-.1 1.1-.3 1.6-.2.5-.5 1-.9 1.4l-5.6 5.6s-.1 0-.1.1h-.2s-.1 0-.1-.1l-5.6-5.6C10 17 9.5 16 9.5 14.9c0-1.1.3-2.1 1-2.9.7-.8 1.7-1.3 2.7-1.5 1.1-.1 2.1.2 3 .8l.3.2.3-.2c.8-.6 1.8-.9 2.8-.8 1.1.1 2 .5 2.7 1.3z"
                style={{ fill: "none", stroke: "rgb(0, 0, 0)" }}
              ></path>
            </svg>
          </button>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "222px",
            width: "100%",
            height: "44px",
          }}
        >
          <Box style={{ height: "100%", width: "100%" }}>
            <button
              style={{
                color: "white",
                backgroundColor: `${cartColor}`,
                height: "100%",
                width: "100%",
                borderRadius: "10px",
              }}
              onClick={productAddToCart}
            >
              {cartText}
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductCard;
