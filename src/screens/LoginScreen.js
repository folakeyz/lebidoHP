import React, { useState, useEffect } from "react";
import WebsiteHero from "../components/Hero/WebsiteHero";
import Navbar from "../components/Navbar/";
import { Route, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { login } from "../actions/userActions";
import Footer from "../components/UI/Footer";
import styles from "./styles.module.css";

const LoginScreen = ({ history, location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/store";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <Route render={({ history }) => <Navbar history={history} />} />
      <WebsiteHero title="Login" />
      <div className={styles.pagePadding}>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader />}
        <form onSubmit={submitHandler}>
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
            <label style={{ visibility: "hidden" }}>submit</label>
            <input
              type="submit"
              className={`btn form-control ${styles.greenBtn}`}
              value="Login"
            />
          </div>
        </form>
        <div>
          <small>
            New Customer?{" "}
            <Link
              to={
                redirect
                  ? `/store/register?redirect=${redirect}`
                  : "/store/register"
              }
            >
              Register
            </Link>
          </small>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginScreen;
