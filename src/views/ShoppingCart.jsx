import React from "react";
import "./css/cart.css";
import Header from "../components/others/Header";
import Footer from "../components/others/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartCard from "../components/shared/CartCard";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

export default function ShoppingCart() {
  const cartRef = collection(db, "Cart");
  const [cartItems, setCartItems] = React.useState([]);

  React.useEffect(() => {
    const fetchItems = async () => {
      const data = await getDocs(cartRef);
      const filteredData = data.docs.map((item) => {
        return {
          id: item.id,
          ...item.data(),
        };
      });
      setCartItems(filteredData[0].products);
    };
    fetchItems();
  }, []);
  return (
    <>
      <Header />
      <main>
        <div class="mainDiv">
          <div class="headMain">
            <FontAwesomeIcon
              icon={faShoppingCart}
              style={{ fontSize: "28px" }}
            ></FontAwesomeIcon>
            <h1>Shopping Cart</h1>
          </div>
          {cartItems.map((item, key) => {
            return <CartCard item={item} key={key} />;
          })}
          <div class="lastDiv">
            <div class="leastDiv">
              <div class="totalAmount">
                <h4>Total: </h4>
                <h4>$100</h4>
              </div>
              <div class="checkButton">
                <button>
                  Checkout <i class="fa-solid fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
