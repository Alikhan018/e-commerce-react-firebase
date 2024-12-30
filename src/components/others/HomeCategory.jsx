import React from "react";
import { db } from "../../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import CategoryCircle from "../shared/CategoryCircle";

export default function HomeCategory() {
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
    <section className="cat-div">
      <h2>Categories</h2>
      <div className="cat-list-div">
        {categories &&
          categories.map((category) => {
            return <CategoryCircle item={category} />;
          })}
      </div>
    </section>
  );
}
