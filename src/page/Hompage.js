import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "../components/product/ProductListing";
import Header from "../components/topHeader/headerHome";
import ProductDetails from "../containers/ProductDetails";
import Footer from "../components/footer/footer";
import Paner from "../components/parne/patner";
import Navbar from "../components/navbar/navbar";
function HomePage() {
  return (
    <Router>
      <Header />
      <Navbar />
      <ProductListing path="/" exact component={ProductListing} />
      <ProductDetails path="/product/:productId" component={ProductDetails} />
      <Paner />
      <Footer />
    </Router>
  );
}

export default HomePage;
