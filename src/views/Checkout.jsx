import React from "react";
import Header from "../components/others/Header";
import Footer from "../components/others/Footer";
import Form from "../components/shared/Form";
import "./css/checkout.css";
import { buttons, fields } from "../props/checkout.props";
import RecieptList from "../components/shared/RecieptList";

export default function Checkout() {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    
  })
  return (
    <>
      <Header />
      <main>
        <div class="mainDiv">
          <div class="container">
            <div class="m12">
              <div class="main1">
                <div>
                  <button class="add-to-cart">
                    <i class="fa fa-chevron-left icon"></i> Back to Cart
                  </button>
                </div>
                <div class="product-list">
                  <h2 class="heading-r">Reciept</h2>
                  {products.map((product) => {
                    return <RecieptList item={product} />;
                  })}
                  <div class="total">
                    <span>Total Price</span>
                    <span>$70.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="main2">
              <Form
                fields={fields}
                buttons={buttons}
                formName={"Checkout Details"}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
