import { Button } from '@/components/ui/button';
import React from 'react'
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer =() => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold">SUPPORT</h3>
          <div className="mt-4 space-y-3">
            <Button variant="outline" className="w-full flex items-center gap-3">
              <FaPhone /> <span>9AM - 8PM</span> <span className="text-red-500">16793</span>
            </Button>
            <Button variant="outline" className="w-full flex items-center gap-3">
              <FaMapMarkerAlt /> <span>Store Locator</span> <span className="text-red-500">Find Our Stores</span>
            </Button>
          </div>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold">ABOUT US</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              "Affiliate Program",
              "Online Delivery",
              "Refund and Return Policy",
              "Blog",
              "EMI Terms",
              "Privacy Policy",
              "Star Point Policy",
              "Contact Us",
              "About Us",
              "Terms and Conditions",
              "Career",
              "Brands",
            ].map((item, index) => (
              <li key={index} className="hover:text-white cursor-pointer">{item}</li>
            ))}
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="text-lg font-semibold">STAY CONNECTED</h3>
          <p className="mt-2 text-sm">Tecgen Soft</p>
          <p className="text-sm">28 Kazi Nazrul Islam Ave, Navana Zohura Square, Dhaka 1000</p>
          <p className="mt-2 text-sm font-semibold">Email:</p>
          <p className="text-red-500 text-sm">webteam@startechbd.com</p>
          <div className="flex mt-4 space-x-4">
            <FaWhatsapp className="text-xl cursor-pointer hover:text-green-500" />
            <FaFacebook className="text-xl cursor-pointer hover:text-blue-500" />
            <FaYoutube className="text-xl cursor-pointer hover:text-red-500" />
            <FaInstagram className="text-xl cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>

      {/* Mobile Apps Section */}
      <div className="container mx-auto px-6 mt-10 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
        <p className="text-sm">Experience Star Tech App on your mobile:</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Button variant="outline">Download on Google Play</Button>
          <Button variant="outline">Download on App Store</Button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        <p>&copy; 2025 Tecgen Soft | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer