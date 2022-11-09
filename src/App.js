import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenu from "./Components/TopMenu";
import LandingPage from "./Components/LandingPage";
import ContactUs from "./Components/ContactUs";
import Products from "./Components/Products/Products";
import NotFound from "./NotFound";
import NewProduct from "./Components/Products/NewProduct";

function App() {
  return (
    <Router>
      <div className="App">
        <TopMenu />
        <Routes>
          <Route exact path="/Products/new" element={<NewProduct />} />{" "}
          <Route exact path="/Products" element={<Products />} />{" "}
          <Route exact path="/ContactUs" element={<ContactUs />} />{" "}
          <Route exact path="/Home" element={<LandingPage />} />{" "}
          <Route path="/*" element={<NotFound />} />{" "}
        </Routes>{" "}
      </div>{" "}
    </Router>
  );
}

export default App;