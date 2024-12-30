import React from "react";

export default function RecieptList({ item }) {
  return (
    <div class="product-item">
      <span>{item.name}</span>
      <span>{item.price}</span>
    </div>
  );
}
