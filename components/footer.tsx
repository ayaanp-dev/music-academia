import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 py-12 mt-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
          {/* Column 1: Logo / Branding */}
          <div className="flex flex-col items-center sm:items-start">
            <h2 className="text-3xl font-extrabold text-center sm:text-left mb-4">Music Academia</h2>
            <p className="text-lg text-gray-600 text-center sm:text-left">
              Making music education accessible for every student, everywhere.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h3 className="font-semibold text-lg text-gray-900">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <p className="text-gray-600">
                  <span className="font-bold">Email:</span> info@musicacademia.org
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  <span className="font-bold">Phone:</span> (123) 456-7890
                </p>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex space-x-6 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-gray-900 hover:text-gray-500 transition duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-900 hover:text-gray-500 transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-900 hover:text-gray-500 transition duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-900 hover:text-gray-500 transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-200"></div>

        {/* Bottom section: Copyright */}
        <div className="mt-6 text-center text-gray-500">
          <p>&copy; 2024 Music Academia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}