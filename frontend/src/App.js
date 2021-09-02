import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import HomeScreen from "./pages/HomeScreen";
import CartScreen from "./pages/CartScreen";
import { useDispatch, useSelector } from "react-redux";
import SigninScreen from "./pages/SigninScreen";
import { signout } from "./actions/userActions";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart
  
  const userSignin = useSelector((state) => state.userSignin)
  const { userInfo } = userSignin
  const dispatch = useDispatch()
  const signoutHandler = () => {
    dispatch(signout())
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">ÇiniArts</Link>
          </div>
          <div>
            <Link to="/cart">Cart
              {cartItems.length > 0 && 
                (<span className="badge">{cartItems.length}</span>)
              }
            </Link>
            {userInfo ? (
              <div className= "dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <Link to="#signout" onClick={signoutHandler}>
                    Sign Out
                  </Link>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign in</Link>
            )}
          </div>
        </header>
        <main>
          <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SigninScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
