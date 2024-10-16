import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start fixed-bottom">
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <p className="text-white mb-0">Made by Tajalla Shan</p>
          </div>
          <div className="col text-end">
            <a
              href="https://www.linkedin.com/in/tajalla-shan-648a18299/"
              className="text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
