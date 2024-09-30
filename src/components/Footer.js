import React from "react";
// import Logo from "./logo"; // Your custom logo component
import "./Footer.css"; // Import your custom CSS for the footer

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer illustration */}
        <div className="footer-illustration" aria-hidden="true">
          <img src="/images/footer-illustration.svg" alt="Footer illustration" />
        </div>

        <div className="footer-content">
          {/* 1st block */}
          <div className="footer-block">
            <h3>Product</h3>
            <ul>
              <li><a href="#0">Features</a></li>
              <li><a href="#0">Integrations</a></li>
              <li><a href="#0">Pricing & Plans</a></li>
              <li><a href="#0">Changelog</a></li>
              <li><a href="#0">Our method</a></li>
              <li><a href="#0">User policy</a></li>
            </ul>
          </div>

          {/* 2nd block */}
          <div className="footer-block">
            <h3>Company</h3>
            <ul>
              <li><a href="#0">About us</a></li>
              <li><a href="#0">Diversity & Inclusion</a></li>
              <li><a href="#0">Blog</a></li>
              <li><a href="#0">Careers</a></li>
              <li><a href="#0">Financial statements</a></li>
            </ul>
          </div>

          {/* 3rd block */}
          <div className="footer-block">
            <h3>Resources</h3>
            <ul>
              <li><a href="#0">Community</a></li>
              <li><a href="#0">Terms of service</a></li>
              <li><a href="#0">Report a vulnerability</a></li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="footer-block">
            <h3>Content Library</h3>
            <ul>
              <li><a href="#0">Templates</a></li>
              <li><a href="#0">Tutorials</a></li>
              <li><a href="#0">Knowledge base</a></li>
              <li><a href="#0">Learn</a></li>
              <li><a href="#0">Cookie manager</a></li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="footer-logo-block">
            {/* <Logo /> */}
            <p>© Rick Mansfield · <a href="#0">Terms</a></p>
            <div className="social-icons">
              <a href="#0" aria-label="Twitter">
                <img src="/images/twitter-icon.svg" alt="Twitter" />
              </a>
              <a href="#0" aria-label="Medium">
                <img src="/images/medium-icon.svg" alt="Medium" />
              </a>
              <a href="#0" aria-label="Github">
                <img src="/images/github-icon.svg" alt="Github" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
