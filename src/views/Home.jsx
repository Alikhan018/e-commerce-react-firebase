import React from "react";
import Header from "../components/others/Header";
import HomeCarousal from "../components/others/HomeCarousal";
import HomeCategory from "../components/others/HomeCategory";
import HomeBanner from "../components/others/HomeBanner";
import Footer from "../components/others/Footer";
import "./css/home.css";
import "./css/header.css";
import "./css/footer.css";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HomeCarousal />
        <HomeCategory />
        <HomeBanner />
      </main>
      <Footer />
    </>
  );
}
