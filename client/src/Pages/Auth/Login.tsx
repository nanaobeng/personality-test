import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../Components/Layout";
import { login, authenticate, isAuthenticated } from "./APIs/APIs";

const Login = () => {
  const { token, user } = isAuthenticated();

  const [values, setValues] = useState<any>({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  const { email, password, loading, error } = values;

  const handleChange = (name: any) => (event: any) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event: any) => {
    event.preventDefault();

    login(email, password).then((data: any) => {
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        console.log(data);
        authenticate(data, () => {
          window.location.href = "/admin/dashboard";
        });
      }
    });
  };

  const signUpForm = () => (
    <form className="pb-4">
      <div className="form-group">
        <label style={{ color: "black" }}>Email</label>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          value={email}
          style={{
            border: "1px black solid",
            backgroundColor: "transparent",
            color: "black",
          }}
          required
        />
      </div>

      <div className="form-group">
        <label style={{ color: "black" }}>Password</label>
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          value={password}
          style={{
            border: "1px black solid",
            backgroundColor: "transparent",
            color: "black",
          }}
          required
        />
      </div>

      <div className="row">
        <div className="col-6 justify-content-center text-left">
          <p style={{ color: "gray" }}> </p>
        </div>

        {/* <div className="col-6  justify-content-center text-right">
                    <p style={{color:'gray'}}> <span style={{color:'black'}} ><Link to="/forgot-password" style={{color:'#f5b221'}}><u>Forgot Password?</u></Link></span></p>
                    </div>
                 */}
      </div>
      <br />
      <div className="row">
        <div className="col-12">
          <span
            onClick={clickSubmit}
            style={{ width: "100%", backgroundColor: "#00AA45" }}
            className="btn"
          >
            <span style={{ color: "white", fontWeight: "bold" }}>Sign In</span>
          </span>
        </div>
      </div>
    </form>
  );

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className="row">
        <br />
        <div className="col-12 justify-content-center text-center">
          <br />
          <div
            className="spinner-border justify-content-center"
            style={{ color: "white" }}
          ></div>
        </div>
      </div>
    );

  //   const redirectUser = () => {
  //     if (isAuthenticated()) {
  //       window.location.href = "/admin/dashboard";
  //     }
  //   };

  return (
    <Layout>
      <div>
        <div
          className="row  justify-content-center p-4"
          style={{ backgroundColor: "#eeee", minHeight: "87vh" }}
        >
          <div className="col-12 p-4">
            <div
              className="row "
              style={{
                paddingLeft: "20%",
                paddingRight: "20%",
                paddingTop: "10%",
              }}
            >
              <div
                className="col-12 shadow p-4"
                style={{ backgroundColor: "white", minHeight: "30vh" }}
              >
                {showLoading()}

                {signUpForm()}
                {showError()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
