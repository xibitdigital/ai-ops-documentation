import React from "react";
import { Gutter } from "../Gutter";

import "./footer.css";

export const Footer = () => (
  <footer className="footer">
    <Gutter>
      <div className="cf footer__content">
        <div className="fl w-two-thirds-ns">
          <br />
        </div>
        <div className="fl w-third-ns">
          <span>Get in touch: </span>
          <a className="footer__link" href="mailto:hi@xibitdigital.com">
            hi@xibitdigital.com
          </a>
          <br />
          <span>©2019 All rights reserved</span>
        </div>
      </div>
    </Gutter>
  </footer>
);

export default Footer;