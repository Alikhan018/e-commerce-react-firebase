import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Home from "./views/Home";
import Categories from "./views/Categories";
import Products from "./views/Products";
import UserProfile from "./views/UserProfile";
import ShoppingCart from "./views/ShoppingCart";
import Checkout from "./views/Checkout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Products />} />
          <Route path="user" element={<UserProfile />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>Not found</h1>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
