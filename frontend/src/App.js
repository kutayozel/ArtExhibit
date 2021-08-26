/*rating component
cart page
signin page
item card component
product page
product component*/
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./pages/ProductScreen";
import HomeScreen from "./pages/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="/" className="brand">ÇiniArts</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign in</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
          
        </main>
        <footer className="row center">All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
