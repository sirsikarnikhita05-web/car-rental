import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-16 fade-in">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-3">CarRental</h2>
          <p className="text-sm text-gray-200">
           <p>Experience seamless car rentals with comfort and affordability.</p>
 
            {/* تجربه seamless car rentals with comfort and affordability. */}
            Book your ride anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/" },
              { name: "Fleet", path: "/fleet" },
              { name: "Offers", path: "/offers" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact", path: "/contact" },
            ].map((link, i) => (
              <li key={i}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `block transition duration-300 hover:text-secondary hover:translate-x-1 ${
                      isActive ? "text-secondary font-semibold" : ""
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-200">📍 Bangalore, India</p>
          <p className="text-sm text-gray-200">📞 +91 98765 43210</p>
          <p className="text-sm text-gray-200">✉ support@carrental.com</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            
            <a
              href="#"
              className="bg-white text-primary p-3 rounded-full hover:scale-110 hover:brightness-110 transition duration-300"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-white text-primary p-3 rounded-full hover:scale-110 hover:brightness-110 transition duration-300"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-white text-primary p-3 rounded-full hover:scale-110 hover:brightness-110 transition duration-300"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-white text-primary p-3 rounded-full hover:scale-110 hover:brightness-110 transition duration-300"
            >
              <FaLinkedin />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © {new Date().getFullYear()} CarRental. All rights reserved.
      </div>
    </footer>
  );
}