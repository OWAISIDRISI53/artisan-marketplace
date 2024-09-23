// import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="mb-4">
            Artisan Marketplace is dedicated to connecting skilled artisans with
            customers seeking unique, handmade products.
          </p>
          <Link to="/about" className="text-blue-400 hover:underline">
            Learn More
          </Link>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul>
            <li>
              <Link to="/products" className="text-blue-400 hover:underline">
                Products
              </Link>
            </li>
            <li>
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="text-blue-400 hover:underline">
                Log In
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-blue-400 hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <ul>
            <li>
              <a
                href="https://facebook.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-10 border-t border-gray-700 pt-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Artisan Marketplace. All Rights
          Reserved.
        </p>
        <p className="text-sm text-gray-400">
          Created by <span className="text-gray-100">Owais Idrisi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
