import React from "react";
import "./signup.css";
import images from "./assets/images.jpg";

function Signup() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="main-box">
            <div className="row">
              <div className="col-md-6">
                <div className="left-box">
                 <img src={images} alt="Image" />
                  <div className="logo">AMU</div>

                  <button className="btn btn-light rounded-pill back-btn">
                    Back to Website →
                  </button>

                  <div className="bottom-text">
                    <h2>
                      Capturing Moments,
                      <br />
                      Creating Memories
                    </h2>
                  </div>

                  <div className="slider">
                    <span></span>
                    <span></span>
                    <span className="active"></span>
                  </div>
                </div>
              </div>

             
              <div className="col-md-6 d-flex align-items-center">
                <div className="right-box w-100">
                  <h1>Create an account</h1>

                  <p>
                    Already have an account?{" "}
                    <a href="#">Log in</a>
                  </p>

                  <div className="row mt-4">
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <input
                    type="email"
                    className="form-control mt-3"
                    placeholder="Email"
                  />

                  <div className="input-group mt-3">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                    />

                    <span className="input-group-text">👁</span>
                  </div>

                  <div className="form-check mt-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="terms"
                    />

                    <label
                      className="form-check-label"
                      htmlFor="terms"
                    >
                      I agree to the{" "}
                      <a href="#">Terms & Conditions</a>
                    </label>
                  </div>

                  <button className="btn btn-primary w-100 mt-4">
                    Create Account
                  </button>

                  <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />

                    <span className="mx-3 text-secondary">
                      Or register with
                    </span>

                    <hr className="flex-grow-1" />
                  </div>

                  <div className="row">
                    <div className="col">
                      <button className="btn btn-outline-dark w-100">
                        Google
                      </button>
                    </div>

                    <div className="col">
                      <button className="btn btn-outline-dark w-100">
                        Apple
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;