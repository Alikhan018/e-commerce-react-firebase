import React from "react";
import Img1 from "../assets/images/login-signup/Automotive-eCommerce.jpg";
import Img2 from "../assets/images/login-signup/beeeaf193214481.Y3JvcCwxMTkzLDkzMywxMDksMA.png";
import Img3 from "../assets/images/login-signup/drone-3202860_1280-1200x675.jpg";
import Img4 from "../assets/images/login-signup/trends-gaming-ecommerce-platforms_1186366-157563.avif";
import "./css/login-signup.css";
import { fields, buttons } from "../props/signup.props";
import Form from "../components/shared/Form";
import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup() {
  const onSubmit = async (data) => {
    const { email, password } = data;
    await createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <main>
      <div className="container1">
        <div className="image-section">
          <img src={Img1} alt="Side" />
          <img src={Img2} alt="Side" />
          <img src={Img3} alt="Side" />
          <img src={Img4} alt="Side" />
        </div>
        <div className="login-section">
          <Form
            fields={fields}
            buttons={buttons}
            formName={"Login to e-commerce platform"}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </main>
  );
}
