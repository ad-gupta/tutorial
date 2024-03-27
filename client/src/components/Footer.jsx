import React from "react";
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-slate-300">
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row items-center justify-between">
        {/* Download Section */}
        <div className="mb-8 lg:mb-0">
          <h4 className="font-semibold text-lg mb-2">DOWNLOAD OUR APP</h4>
          <p className="text-sm">Download App for Android and iOS mobile phone</p>
          <div className="mt-4 flex items-center">
            <img src="./playstore1.png" alt="playstore" className="w-24 mr-4" />
            <img src="./apple_appstore.png" alt="Appstore" className="w-24" />
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="mb-8 lg:mb-0">
          <Link to="/contact" className="text-2xl font-bold underline mb-2">Contact us</Link>
          <h1 className="font-bold text-lg mb-2">SMART TUTOR</h1>
          <p className="text-sm mb-4">High Quality is our first priority</p>
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/awadheshguptaofficial/" className="mr-4">
              <FaLinkedin />
            </a>
            <a href="https://github.com/ad-gupta">
              <FaGithub />
            </a>
          </div>
          <p className="text-sm">
            <a href="mailto:awadheshgupta.official@gmail.com?subject=Subject%20Here&body=Body%20Here">
              awadheshgupta.official@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-blue-800 py-4 text-center">
        <p className="text-sm">Copyrights 2024 &copy; team Smart Tutor</p>
      </div>
    </footer>
  );
};

export default Footer;
