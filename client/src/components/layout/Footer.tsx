import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">IBA Global Service LTD</h3>
            <p className="text-gray-400 mb-4">
              Professional end-of-tenancy cleaning services across Greater Manchester.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/end-of-tenancy" className="text-gray-400 hover:text-white transition-colors">
                  End of Tenancy Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/deep-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Deep Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/carpet-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Carpet Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/oven-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Oven Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/window-cleaning" className="text-gray-400 hover:text-white transition-colors">
                  Window Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Greater Manchester, United Kingdom</span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="text-primary-400 flex-shrink-0" />
                <a href="tel:+447000000000" className="text-gray-400 hover:text-white">
                  +44 7000 000000
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FiMail className="text-primary-400 flex-shrink-0" />
                <a href="mailto:info@ibacleaning.co.uk" className="text-gray-400 hover:text-white">
                  info@ibacleaning.co.uk
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-primary-400 flex-shrink-0" />
                <a href="https://wa.me/447000000000" className="text-gray-400 hover:text-white">
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} IBA Global Service LTD. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link href="/gdpr" className="text-gray-400 hover:text-white text-sm">
              GDPR
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
