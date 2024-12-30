import React from "react";
import { useNavigate } from "react-router-dom";
export default function CategoryCard({ item }) {
  const nav = useNavigate();
  const goto = () => {
    nav(`/categories/${item.name}`, {
      state: { category: item.name },
    });
  };
  return (
    <div class="card2" onClick={goto}>
      <img src={item.imageUrl} alt="Not Found" />
      <h4>{item.name}</h4>
    </div>
  );
}
