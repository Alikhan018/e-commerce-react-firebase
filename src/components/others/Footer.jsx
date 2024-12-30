import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="upper-footer">
        <div className="footer-items">
          <h5>Buy</h5>
          <div>
            <Link>Registration</Link>
            <Link>eBay Money Back Guarantee</Link>
            <Link>Bidding & buying help</Link>
            <Link>Stores</Link>
          </div>
        </div>
        <div className="footer-items">
          <h5>Sell</h5>
          <div>
            <Link>Start selling</Link>
            <Link>Learn to sell</Link> <Link>Affiliates</Link>
          </div>
        </div>
        <div className="footer-items">
          <h5>Stay connected</h5>
          <div>
            <Link>eBay's Blogs</Link>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
          </div>
        </div>
        <div className="footer-items">
          <h5>About eBay</h5>
          <div>
            <Link>Company info</Link>
            <Link>News</Link>
            <Link>Investors</Link>
            <Link>Careers</Link>
            <Link>Government relations</Link>
            <Link>Advertise with us</Link>
            <Link>Policies</Link>
            <Link>Verified Rights Owner (VeRO) Program</Link>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <span>
          Copyright © 1995-2024 eCommerce Inc. All Rights Reserved.
          Accessibility, User Agreement, Privacy, Consumer Health Data, Payments
          Terms of Use, Cookies, CA Privacy Notice, Your Privacy Choices and
          AdChoice
        </span>
      </div>
    </footer>
  );
}
