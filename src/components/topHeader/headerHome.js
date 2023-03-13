import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../assets/images/logo.png";
import { Container } from "react-bootstrap";
import "./style.css";

class headerHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="header-area">
          <Container class="container">
            <div class="row">
              <div class="col-md-8"></div>

              <div class="col-md-4">
                <div class="header-right">
                  <div class="user-menu">
                    <ul>
                      <li>
                        <a href="#">
                          <i class="fa fa-user"></i> Tài Khoản
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="fa fa-user"></i> Đăng Nhập
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div class="site-branding-area">
          <div class="container">
            <div class="row">
              <div class="col-sm-6">
                <div class="logo">
                  <h1>
                    <a href="./">
                      <img src={logo.src} />
                    </a>
                  </h1>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="shopping-item">
                  <a href="cart.html">
                    Cart - <span class="cart-amunt">$100</span>{" "}
                    <i class="fa fa-shopping-cart"></i>{" "}
                    <span class="product-count">5</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default headerHome;
