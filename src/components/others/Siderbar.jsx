import React from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export default function Siderbar() {
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
    <div div class="main1-div">
      <h2>
        <b>Categories</b>
      </h2>
      <div class="navs">
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <Link to={`/categories/${category.id}`} class="nav-link">
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
