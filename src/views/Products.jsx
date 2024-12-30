import React, { useEffect, useState } from "react";
import "./css/listing.css";
import Siderbar from "../components/others/Siderbar";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import Header from "../components/others/Header";
import Footer from "../components/others/Footer";

export default function Products() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "Products");
        const q = query(
          productsRef,
          where("Categories", "==", `cUgkvt9oZ7MkDmquB5XO`)
        );
        const querySnapshot = await getDocs(q);

        const fetchedProducts = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <>
      <Header />
      <main>
        <div className="main-div">
          <Siderbar />

          <div className="mainDiv">
            <div className="main1">
              <h2>Products</h2>
            </div>
            <div className="main2">
              <div className="m2a">
                {products.length > 0 ? (
                  products.map((product) => (
                    <div className="card1" key={product.id}>
                      <img
                        src={product.imageUrl}
                        alt={product.name || "Product Image"}
                      />
                      <h4>{product.name}</h4>
                      <p>{product.description}</p>
                      <span>${product.price}</span>
                      <div className="button-container">
                        <button className="btn1">View Detail</button>
                        <button className="btn2">Add to Cart</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products found for the selected category.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
