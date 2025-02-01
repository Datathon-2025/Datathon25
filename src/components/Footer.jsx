import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Socials */}
          <div className="space-y-5">
            <h3 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
              Azzle
            </h3>
            <p className="text-gray-400">
              Empowering your digital journey with innovative solutions.
            </p>
            <div className="flex space-x-4">
              {[FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-500 transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Contact"].map((item, index) => (
                <li key={index}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-all duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-80 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Azzle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;