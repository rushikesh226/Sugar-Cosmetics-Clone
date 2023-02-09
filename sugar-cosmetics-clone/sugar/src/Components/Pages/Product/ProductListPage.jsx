import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

function ProductListPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch(`http://localhost:3001/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data[0].products);
      });
  };
  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      gap={"2%"}
      backgroundColor="#F2F2F2"
    >
      <Box width={"20%"} backgroundColor="white" height={"400px"}>
        <Filters />
      </Box>
      <Box
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          width: "80%",
        }}
      >
        {data.map((product, i) => {
          return (
            <ProductCard
              key={i}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
              reviews={product.reviews}
              shades={product.shades}
            />
          );
        })}
      </Box>
    </Box>
  );
}

export default ProductListPage;
