import React from "react";
import "./css/category.css";

import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import Header from "../components/others/Header";
import Footer from "../components/others/Footer";
import CategoryCard from "../components/shared/CategoryCard";

export default function Categories() {
  const [categories, setCategories] = React.useState([]);
  const categoryRef = collection(db, "Categories");

  React.useEffect(() => {
    const getCategories = async () => {
      const querySnapshot = await getDocs(categoryRef);
      const data = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setCategories(data);
    };
    getCategories();
  }, [categoryRef]);
  return (
    <>
      <Header />
      <main>
        <section class="parent-div">
          <div class="mainDiv">
            <div class="main1">
              <h2>Product Categories</h2>
            </div>
            <div class="main2">
              <div class="m2a">
                {categories &&
                  categories.map((category) => {
                    return <CategoryCard item={category} />;
                  })}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
