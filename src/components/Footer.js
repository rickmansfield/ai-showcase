import React from "react";
// import Logo from "./logo"; // Your custom logo component
import "./Footer.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer illustration */}
        <div
          className="footer-illustration"
          aria-hidden="true"
        >
          <LazyLoadImage
            effect="blur"
            src={`${process.env.PUBLIC_URL}/images/footer-illustration.svg`}
            alt="Footer illustration"
            width={1076}
            height={300}
          />
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
            <p>© Rick Mansfield · <a href="#0">Terms</a></p>
            <div className="social-icons">
              {/* Twitter Icon */}
              <a href="#0" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"/>
                </svg>
              </a>
              {/* Medium Icon */}
              <a href="#0" aria-label="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"/>
                </svg>
              </a>
              {/* Github Icon */}
              <a href="#0" aria-label="Github">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
        
      </div>
    </footer>
  );
}
