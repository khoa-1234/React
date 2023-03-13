import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import patner1 from "../../assets/images/brand1.png";
import patner2 from "../../assets/images/brand2.png";
import patner3 from "../../assets/images/brand3.png";
import patner4 from "../../assets/images/brand4.png";

class patner extends Component {
  render() {
    return (
      <React.Fragment>
        <div class="brands-area">
          <div class="zigzag-bottom"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="brand-wrapper">
                  <div class="brand-list">
                    <img src={patner1} alt="" />
                    <img src={patner2} alt="" />
                    <img src={patner3} alt="" />
                    <img src={patner4} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default patner;
