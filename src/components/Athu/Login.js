import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import "./Login.scss";
import { handleLoginAPI } from "../../services/userService";
import { FormattedMessage } from "react-intl";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isshowpassword: false,
    };
  }
  handleOnChangeUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleOnChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  handleLogin = async () => {
    console.log(
      "username= ",
      this.state.username,
      "password= ",
      this.state.password
    );
    console.log("all state", this.state);
    await handleLoginAPI(this.state.username, this.state.password);
  };
  handeShowHidePassword = () => {
    this.setState({
      isshowpassword: !this.state.isshowpassword,
    });
  };
  render() {
    return (
      <div className="login-background">
        <div className="login-container">
          <div className="login-content">
            <div className="col-12 text-login">Login</div>
            <div className="col-12 form-group login-input">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="enter your username"
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUser(event)}
              />
            </div>
            <div className="col-12 form-group login-input">
              <label>Password:</label>
              <div className="custom-input-password">
                <input
                  className="form-control"
                  type={this.state.isshowpassword ? "text" : "password"}
                  placeholder="enter your username"
                  onChange={(event) => {
                    this.handleOnChangePassword(event);
                  }}
                />
                <span
                  onClick={() => {
                    this.handeShowHidePassword();
                  }}
                >
                  <i
                    class={
                      this.state.isshowpassword
                        ? "far fa-eye-slash"
                        : "far fa-eye"
                    }
                  ></i>
                </span>
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn-login"
                onClick={() => {
                  this.handleLogin();
                }}
              >
                Login
              </button>
            </div>
            <div className="col-12">
              <span className="forgot-ps">Forgot your password?</span>
            </div>
            <div className="col-12 text-center">
              <span className="">Or Login with:</span>
            </div>
            <div className="col-12 social-login">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-google-plus-g"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lang: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
