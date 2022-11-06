import React from "react";
import { Grid, Typography } from "@mui/material";
const SingleProduct = ({ product }) => {
  return (
    <Grid item xs={12}>
      {console.log("setProducts:" + product)}
      <Typography variant="h3">Id:{product.id}</Typography>
      <Typography variant="h4">Title:{product.title}</Typography>
      <h2>Price:{product.price}</h2>
      <p>Description:{product.description}</p>
      <img src={product.image} alt="product pic" style={{ width: "150px" }} />
      <hr />
    </Grid>
  );
};

export default SingleProduct;
