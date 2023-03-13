import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./page/Hompage";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./components/product/ProductListing";
import HeaderHome from "./components/topHeader/headerHome";
import Navbar from "./components/navbar/navbar";
import Patner from "./components/parne/patner";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Fragment>
      <HeaderHome />
      <Navbar />
      <Router>
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
      <Patner />
      <Footer />
    </Fragment>
  );
}

export default App;
