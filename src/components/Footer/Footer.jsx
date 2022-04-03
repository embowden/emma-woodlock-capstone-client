import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="footer__text"
        target="_blank"
        href="https://github.com/embowden"
      >
        github.com/embowden
      </a>
      <p className="footer__text">created by Emma Woodlock</p>
      <a
        className="footer__text"
        target="_blank"
        href="https://www.linkedin.com/in/etbowden/"
      >
        linkedin.com/etbowden
      </a>
    </footer>
  );
};

export default Footer;
