import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import AboutScreen from "./screens/AboutScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import ContactScreen from "./screens/ContactScreen";
import HomeScreen from "./screens/HomeScreen";
import LandingPage from "./screens/LandingPage";
import ScrollToTop from "./components/Scroll";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import PlaceOrderScreen from "./screens/PlaceOrder";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/about" exact component={AboutScreen} />
        <Route path="/book-appointment" exact component={AppointmentScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        <Route path="/store" exact component={HomeScreen} />
        <Route path="/store/product/:id?" exact component={ProductScreen} />
        <Route path="/store/cart/:id" exact component={CartScreen} />
        <Route path="/store/search/:keyword" exact component={HomeScreen} />
        <Route path="/store/placeorder" component={PlaceOrderScreen} />
        <Route path="/store/shipping" component={ShippingScreen} />
        <Route path="/store/payment" component={PaymentScreen} />
        <Route path="/store/order/:id" component={OrderScreen} />
        <Route path="/store/register" exact component={RegisterScreen} />
        <Route path="/store/login" exact component={LoginScreen} />
      </Switch>
    </Router>
  );
}

export default App;
