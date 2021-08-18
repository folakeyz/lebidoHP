import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { register } from "../actions/userActions";
import WebsiteHero from "../components/Hero/WebsiteHero";
import Navbar from "../components/Navbar/";
import Footer from "../components/UI/Footer";
import styles from "./styles.module.css";

const RegisterScreen = ({ history, location }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/store";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <div>
      <Route render={({ history }) => <Navbar history={history} />} />
      <WebsiteHero title="Register" />
      <div className={styles.pagePadding}>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
          <div className="form-group col-md-12">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group col-md-12">
            <label>Email Address</label>
            <input
              type="email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-group col-md-12">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group col-md-12">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>

          <div className="form-group col-md-12">
            <label style={{ visibility: "hidden" }}>submit</label>
            <input
              type="submit"
              className={`btn form-control ${styles.greenBtn}`}
              value="Register"
            />
          </div>
        </form>
        <div>
          <small>
            Have an account?{" "}
            <Link
              to={
                redirect ? `/store/login?redirect=${redirect}` : "/store/login"
              }
            >
              Login
            </Link>
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterScreen;
