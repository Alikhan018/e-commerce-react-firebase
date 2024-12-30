import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { collection, doc, getDoc } from "firebase/firestore";
import React from "react";
import { db } from "../../config/firebase";

export default function CartCard({ item }) {
  const qty = item.quantity;
  const [product, setProduct] = React.useState({});
  console.log(item);
  const productRef = doc(db, "Products", item.product.id);

  React.useEffect(() => {
    const fetchProduct = async () => {
      const data = await getDoc(productRef);
      setProduct({ id: data.id, ...data.data() });
      console.log(data, product);
    };
    fetchProduct();
  }, []);
  return (
    <div class="itemDiv">
      <div class="imgDiv">
        <img src={product.imageUrl} alt="Not Found" />
      </div>
      <div class="itemContent">
        <div class="itemName">
          <h3>{product.name}</h3>
        </div>
        <div>
          <div class="itemDesc">
            <p>{product.description?.slice(0, 100)} ...</p>
          </div>
          <div class="itemOther">
            <span class="priceTag">${product.price}.00</span>
            <input type="number" class="quantityInput" value={qty} min="1" />
          </div>
        </div>
      </div>
      <span class="crossButton">
        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
      </span>
    </div>
  );
}
