import React from "react";
import { useNavigate } from "react-router-dom";

export default function CategoryCircle({ item }) {
  const nav = useNavigate();
  const goto = () => {
    nav(`/categories/${item.id}`);
  };
  return (
    <div key={item.id} onClick={goto}>
      <img src={item.imageUrl} alt={item.name} />
      <h4>{item.name}</h4>
    </div>
  );
}
