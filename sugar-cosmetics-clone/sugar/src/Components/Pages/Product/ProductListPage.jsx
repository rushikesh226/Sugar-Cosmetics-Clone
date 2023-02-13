import { Box } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { SortContext } from "../../Context/SortContext";
import Filters from "./Filters";
import ProductCard from "./ProductCard";

function ProductListPage() {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading]=useState(false);
  const { sort } = useContext(SortContext);
  useEffect(() => {
    getData();
  }, [sort]);
  const getData = () => {
    setIsLoading(true);
    fetch(`http://localhost:3001/${sort}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
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
          marginBottom:"50px"
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
