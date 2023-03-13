import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class menuHome extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="mainmenu-area">
          <div class="container">
            <div class="row">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="/home">Trang Chủ</a>
                  </li>
                  <li>
                    <a href="/shop">Sản Phẩm</a>
                  </li>
                  <li>
                    <a href="/Product_Detail">Chi tiết sản phẩm</a>
                  </li>
                  <li>
                    <a href="/Cart">Giỏ hàng</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="#">Danh mục</a>
                  </li>
                  <li>
                    <a href="#">Khác</a>
                  </li>
                  <li>
                    <a href="#">Liên Hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default menuHome;
