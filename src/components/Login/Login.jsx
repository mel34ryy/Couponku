import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import styles from "./Login.module.css";

function Login() {
  let navigate = useNavigate();

  const [apiError, setError] = useState("");

  async function handleRegister(formsData) {
    await axios
      .post("https://ecommerce.routemisr.com/api/v1/auth/signin", formsData)
      .then((response) => {
        console.log("success", response);
        if (response.data.message == "success") {
          navigate("/");
        }
      })

      .catch((error) => {
        console.log("error", error.response.data.message);
        setError(error.response.data.message);
      });
  }

  let validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("enter valid email"), //check on email
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "password is not valid"
      ),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
              <div className="card border border-light-subtle rounded-3 shadow-sm">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="text-center mb-3"></div>
                  <h2 className="fs-6 fw-normal text-center text-secondary mb-4">
                    Login Now
                  </h2>

                  {apiError ? (
                    <div className="text-danger">{apiError}</div>
                  ) : null}

                  <form onSubmit={formik.handleSubmit} action="#!">
                    <div className="row gy-2 overflow-hidden">
                      {/* Email Input */}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="email"
                            className={`form-control ${
                              formik.touched.email && formik.errors.email
                                ? "is-invalid"
                                : ""
                            }`}
                            name="email"
                            value={formik.values.email}
                            id="email"
                            placeholder="Email"
                          />
                          <label htmlFor="email">Email</label>
                          {formik.touched.email && formik.errors.email ? (
                            <div className="text-danger">
                              {formik.errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Password Input */}
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            type="password"
                            className={`form-control ${
                              formik.touched.password && formik.errors.password
                                ? "is-invalid"
                                : ""
                            }`}
                            name="password"
                            value={formik.values.password}
                            id="password"
                            placeholder="Password"
                          />
                          <label htmlFor="password">Password</label>
                          {formik.touched.password && formik.errors.password ? (
                            <div className="text-danger">
                              {formik.errors.password}
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="col-12">
                        <div className="d-grid my-3">
                          <button
                            className={`btn btn-lg ${styles.login} `}
                            type="submit"
                          >
                            Login
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
