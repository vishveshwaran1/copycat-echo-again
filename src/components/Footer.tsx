
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#00549F' }} className="text-white py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Single horizontal section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
          {/* Logo and Description */}
          <div className="lg:w-1/4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24.4619 41.3662L25.6298 39.0822C26.3827 39.6531 27.4987 40.1592 28.7964 40.1592C29.2507 40.1592 29.5232 40.0555 29.5232 39.8219C29.5232 39.4714 29.0041 39.4455 28.3293 39.3287C26.9277 39.0951 24.8901 38.7317 24.8901 36.5774C24.8901 34.6177 26.5382 33.6963 28.8354 33.6963C30.795 33.6963 31.9631 34.3192 32.4692 34.6567L31.2883 36.876C30.7042 36.5124 29.6271 36.1102 28.6018 36.1102C28.1346 36.1102 27.9139 36.214 27.9139 36.4217C27.9139 36.7072 28.2645 36.7331 28.7964 36.837C30.1461 37.0965 32.586 37.369 32.586 39.6401C32.586 41.496 31.1584 42.6641 28.5239 42.6641C26.9146 42.6641 25.4093 42.1059 24.4619 41.3662Z" fill="white"/>
                  <path d="M35.4016 36.364H33.0137V33.8332H40.7875V36.364H38.3995V42.5156H35.4016V36.364Z" fill="white"/>
                  <path d="M44.5121 40.0238H48.3666V42.5156H41.6309V33.8332H48.2238V36.3251H44.5121V37.0388H48.12V39.297H44.5121V40.0238Z" fill="white"/>
                  <path d="M57.0746 33.8332H59.9426V42.5156H57.0746V38.8169L55.7119 40.9841H53.778L52.4024 38.8038V42.5156H49.5342V33.8332H52.4153L54.7255 37.7656L57.0746 33.8332Z" fill="white"/>
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold">STEM FOR SOCIETY</div>
                <div className="text-sm text-blue-100">Let's Innovate, Incubate and Impact the world together!</div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:w-2/4 grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
            {/* Programs */}
            <div>
              <h4 className="font-semibold mb-2 text-blue-100">PROGRAMS</h4>
              <ul className="space-y-1 text-white">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Explore Courses</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Psychology counselling</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Career counselling</a></li>
              </ul>
            </div>

            {/* For Institutions */}
            <div>
              <h4 className="font-semibold mb-2 text-blue-100">FOR INSTITUTIONS</h4>
              <ul className="space-y-1 text-white">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Plans and pricings</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Campus Ambassador Program</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="font-semibold mb-2 text-blue-100">COMMUNITY</h4>
              <ul className="space-y-1 text-white">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Join Community</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Scientific Communication Blog</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Our Youtube Channel</a></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-2 text-blue-100">QUICK LINKS</h4>
              <ul className="space-y-1 text-white">
                <li><a href="#" className="hover:text-blue-200 transition-colors">Register</a></li>
                <li><a href="#" className="hover:text-blue-200 transition-colors">Login</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="lg:w-1/4">
            <h4 className="font-semibold mb-3 text-blue-100 text-sm">SUBSCRIBE FOR THE LATEST UPDATES</h4>
            <div className="space-y-2">
              <input
                type="text"
                placeholder="First name"
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium text-sm w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-400 pt-4 mt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-3 mb-4 md:mb-0">
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
              <Twitter className="h-4 w-4 text-blue-600" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
              <Instagram className="h-4 w-4 text-blue-600" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
              <Linkedin className="h-4 w-4 text-blue-600" />
            </a>
            <a href="#" className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-blue-50 transition-colors">
              <Youtube className="h-4 w-4 text-blue-600" />
            </a>
          </div>
          <p className="text-blue-200 text-xs">
            © 2025 STEM for society. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
