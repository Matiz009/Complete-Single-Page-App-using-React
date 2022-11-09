import React from "react";
import axios from "axios";
import SingleProduct from "./SingleProduct";
import { Grid } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
const Products = (props) => {
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
  const navigate = useNavigate();
  return (
    <div>
      <h1>Products</h1>
      <Fab color="primary" aria-label="add">
        <AddIcon onClick={() => navigate("/Products/new")} />
      </Fab>
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
