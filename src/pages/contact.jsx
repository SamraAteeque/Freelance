import React from 'react'
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGlobe, FaHeart } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      
      {/* MAIN CONTACT SECTION */}
      <div className="flex flex-col justify-center items-center flex-grow px-4 sm:px-6 lg:px-20 py-12">
        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-center leading-tight">
          Get In <span className="text-lime-400">Touch</span>
        </h1>
        <p className="text-gray-400 text-sm sm:text-lg max-w-2xl text-center mb-10 sm:mb-16 px-2">
          Have a project in mind or want to collaborate?  
          Reach out using any of the options below.
        </p>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 w-full max-w-5xl">
          {/* Email */}
          <a
            href="mailto:reactwithcode12@gmail.com"
            className="flex items-center space-x-4 border border-gray-700 hover:border-lime-400 px-5 sm:px-8 py-4 sm:py-6 rounded-2xl transition bg-black"
          >
            <FaEnvelope className="text-2xl sm:text-3xl text-lime-400" />
            <div>
              <h2 className="text-base sm:text-xl font-semibold">Email</h2>
              <p className="text-gray-400 text-xs sm:text-base">reactwithcode12@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+917755845557"
            className="flex items-center space-x-4 border border-gray-700 hover:border-lime-400 px-5 sm:px-8 py-4 sm:py-6 rounded-2xl transition bg-black"
          >
            <FaPhone className="text-2xl sm:text-3xl text-lime-400" />
            <div>
              <h2 className="text-base sm:text-xl font-semibold">Phone</h2>
              <p className="text-gray-400 text-xs sm:text-base">+91 77558 45557</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/samra-ateeque-b91461283/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-4 border border-gray-700 hover:border-lime-400 px-5 sm:px-8 py-4 sm:py-6 rounded-2xl transition bg-black"
          >
            <FaLinkedin className="text-2xl sm:text-3xl text-lime-400" />
            <div>
              <h2 className="text-base sm:text-xl font-semibold">LinkedIn</h2>
              <p className="text-gray-400 text-xs sm:text-base">/samra-ateeque</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SamraAteeque"
            target="_blank"
            rel="noreferrer"
            className="flex items-center space-x-4 border border-gray-700 hover:border-lime-400 px-5 sm:px-8 py-4 sm:py-6 rounded-2xl transition bg-black"
          >
            <FaGithub className="text-2xl sm:text-3xl text-lime-400" />
            <div>
              <h2 className="text-base sm:text-xl font-semibold">GitHub</h2>
              <p className="text-gray-400 text-xs sm:text-base">/SamraAteeque</p>
            </div>
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 px-6 lg:px-20 border-t border-gray-800">
        {/* Top Social + Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/buildwithsamra/" target="_blank" rel="noreferrer noopener"
              className="border-2 border-white px-5 py-2 rounded-full font-bold hover:bg-white hover:text-black transition">
              IG
            </a>
            <a href="https://www.linkedin.com/in/samra-ateeque-b91461283/" target="_blank" rel="noreferrer noopener"
              className="border-2 border-lime-400 text-lime-400 px-5 py-2 rounded-full font-bold hover:bg-lime-400 hover:text-black transition">
              IN
            </a>
          </div>

          {/* Contact Button */}
          <a href="#top"
            className="flex items-center justify-center space-x-2 border-2 border-white px-6 py-3 rounded-full font-bold text-base sm:text-lg hover:bg-white hover:text-black transition">
            <span>CONTACT</span>
            <FaHeart className="text-red-500" />
          </a>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-xs sm:text-sm border-t border-gray-700 pt-6">
          {/* Left Info */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-gray-300">
            <FaGlobe className="text-lg" />
            <span>MONTREAL</span>
            <span>10:50:32</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-4 text-gray-300">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
            <a href="#" className="hover:text-white">Ethics Report</a>
            <a href="#" className="hover:text-white">Consent Options</a>
          </div>

          {/* Right Scroll to top */}
          <a href="#top" className="text-center hover:text-white font-bold">
            BACK TO TOP
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Contact
