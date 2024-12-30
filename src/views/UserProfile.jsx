import React from "react";
import { Link } from "react-router-dom";
import "./css/editProfile.css";
import Header from "../components/others/Header";
import Footer from "../components/others/Footer";
import Form from "../components/shared/Form";
import { fields, buttons } from "../props/edituser.props";
import userImage from "../assets/images/user/profile.png";

export default function UserProfile() {
  return (
    <>
      <Header></Header>
      <div className="wholeBody">
        <section className="userProfile">
          <div className="options">
            <div className="up1">
              <h1>User Profile</h1>
            </div>
            <div className="profilePicture">
              <img src={userImage} alt="Not Found" />
            </div>
            <div className="leftMain">
              <div className="navLinks">
                <div>
                  <Link to="/">User Details</Link>
                </div>
                <div>
                  <Link to="/">Order History</Link>
                </div>
                <div>
                  <Link to="/">Cart</Link>
                </div>
                <div>
                  <Link to="/">Settings</Link>
                </div>
              </div>
              <div className="logoutBt">
                <button type="button">Logout</button>
              </div>
            </div>
          </div>
          <div className="whatev">
            <Form
              fields={fields}
              buttons={buttons}
              formName="Edit User Details"
            />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </>
  );
}
