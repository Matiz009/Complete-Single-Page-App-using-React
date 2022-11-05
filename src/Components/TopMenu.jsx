import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography } from "@mui/material";

const TopMenu = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            <Link
              to="/Home"
              style={{
                color: "white",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              Home
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/Products"
              style={{
                color: "white",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              Product
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/ContactUs"
              style={{
                color: "white",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
          </Typography>
          <Typography variant="h5">
            <Link
              to="/"
              style={{
                color: "white",
                padding: "10px",
                textDecoration: "none",
              }}
            >
              Sign Up
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopMenu;
