import React from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import { Grid } from "@mui/material";
const Products = () => {
  const [products, setProducts] = React.useState([]);
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  React.useEffect(getData, []);
  console.log("Inside Product component");
  return (
    <div>
      <h1>Products</h1>
      <hr />
      {products.length === 0 ? (
        <p>Loading!</p>
      ) : (
        <Grid container spacing={3}>
          {products.map((product, index) => (
            <SingleProduct key={index} product={product} />
          ))}
        </Grid>
      )}
    </div>
  );
};

export default Products;
