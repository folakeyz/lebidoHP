import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './styles.module.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { logout } from "../../actions/userActions";

const Navbar = ({ history }) => {
    const [expand, setExpand] = useState(false)

    const expandHandler = () => {
        setExpand(true)
    }
    const collapseHandler = () => {
        setExpand(false)
    }

    const dispatch = useDispatch()

    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const cat = useSelector((state) => state.cat);
    const { categories } = cat;

    const logoutHandler = () => {
        dispatch(logout());
    };
    const [keyword, setKeyword] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
            history.push(`/store/search/${keyword}`);
        } else {
            history.push("/store/");
        }
    };


    return (
        <div className={styles.navbar}>
            <div className={styles.webNavGrid}>
                <div className={styles.navItems}>
                    <img src={logo} alt="Navbar" />
                </div>
                <div className={styles.navToggle}>{expand ? <span onClick={collapseHandler}><FaTimes /></span> : <span onClick={expandHandler}><FaBars /></span>}</div>
                <div className={expand ? `${styles.navList}` : `${styles.navItems} ${styles.navPadding}`}>
                    <ul>
                        <li> <Link to="/">Home</Link></li>
                        <li> <Link to="/store">Products</Link></li>
                        <li> <Link to="/store/cart"><FaShoppingBag /> {cartItems.length} Cart(s) Items</Link></li>
                        <li><Link to="/#">Categories</Link>
                            <ul>
                                {categories && categories.map((item, index) => (
                                    <li key={index}><Link to={`/store/category/${item.name}/${item._id}`}>{item.name}</Link></li>
                                ))}
                            </ul>
                        </li>
                        {userInfo ? (
                            <>
                                <li><Link to="/profile">{userInfo.name}</Link></li>
                                <li><Link to="/#" onClick={logoutHandler}>Logout</Link></li>
                            </>
                        ) :
                            <>
                                <li> <Link to="/store/register">Register</Link></li>
                                <li> <Link to="/store/login">Login</Link></li>
                            </>

                        }

                    </ul>

                </div>
                <div className={styles.navItems}>
                    <div className="row">
                        <div className="col-md-8">
                            <input
                                type="text"
                                className="form-control"
                                onChange={(e) => setKeyword(e.target.value)}
                                placeholder="Search for Products"
                                style={{ padding: ".8rem", borderRaduis: "20px" }}
                            />
                        </div>
                        <div className="col-md-4">
                            <input
                                type="submit"
                                className={`btn btn-dark form-control`}
                                value="Search"
                                onClick={submitHandler}
                                style={{ padding: ".5rem" }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
