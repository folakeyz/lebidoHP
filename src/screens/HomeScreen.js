import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Grid from "../components/UI/Grid";
import Product from "../components/Products/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProducts } from "../actions/productActions";
import Slider from "../components/Hero/Slider";
import Footer from "../components/UI/Footer";
import styles from "./styles.module.css";
import { Route } from "react-router-dom";
import { getCat } from "../actions/categoryActions";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
    dispatch(getCat());
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Route render={({ history }) => <Navbar history={history} />} />
      <Slider />
      <div className={styles.pagePadding}>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <Grid>
              {products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </Grid>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
