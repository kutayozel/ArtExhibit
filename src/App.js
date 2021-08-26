/*rating component
cart page
signin page
item card component
product page
product component*/
import React from "react";
import data from "./data";
import Cini from "./components/Cini";

function App() {
  return (
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
        <div>
          <div className="row center">
            {data.products.map((item) => (
              <Cini key={item.id} item={item}></Cini>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All rights reserved</footer>
    </div>
  );
}

export default App;
