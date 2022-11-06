import React from "react";
const SingleProduct = ({ product }) => {
  return (
    <div>
      {console.log("setProducts:" + product)}
      <h1>Id:{product.id}</h1>
      <h2>Title:{product.title}</h2>
      <h2>Price:{product.price}</h2>
      <p>Description:{product.description}</p>
      <img src={product.image} alt="product pic" />
      <hr />
    </div>
  );
};

export default SingleProduct;
