
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b px-4 py-3" style={{ backgroundColor: '#00549F' }}>
      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-3">
          <div className="h-10 w-10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24.4619 41.3662L25.6298 39.0822C26.3827 39.6531 27.4987 40.1592 28.7964 40.1592C29.2507 40.1592 29.5232 40.0555 29.5232 39.8219C29.5232 39.4714 29.0041 39.4455 28.3293 39.3287C26.9277 39.0951 24.8901 38.7317 24.8901 36.5774C24.8901 34.6177 26.5382 33.6963 28.8354 33.6963C30.795 33.6963 31.9631 34.3192 32.4692 34.6567L31.2883 36.876C30.7042 36.5124 29.6271 36.1102 28.6018 36.1102C28.1346 36.1102 27.9139 36.214 27.9139 36.4217C27.9139 36.7072 28.2645 36.7331 28.7964 36.837C30.1461 37.0965 32.586 37.369 32.586 39.6401C32.586 41.496 31.1584 42.6641 28.5239 42.6641C26.9146 42.6641 25.4093 42.1059 24.4619 41.3662Z" fill="white"/>
              <path d="M35.4016 36.364H33.0137V33.8332H40.7875V36.364H38.3995V42.5156H35.4016V36.364Z" fill="white"/>
              <path d="M44.5121 40.0238H48.3666V42.5156H41.6309V33.8332H48.2238V36.3251H44.5121V37.0388H48.12V39.297H44.5121V40.0238Z" fill="white"/>
              <path d="M57.0746 33.8332H59.9426V42.5156H57.0746V38.8169L55.7119 40.9841H53.778L52.4024 38.8038V42.5156H49.5342V33.8332H52.4153L54.7255 37.7656L57.0746 33.8332Z" fill="white"/>
            </svg>
          </div>
          <div className="hidden md:block">
            <div className="text-lg font-bold text-white">STEM FOR SOCIETY</div>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-6">
          <div className="relative group">
            <button className="text-white hover:text-blue-200 flex items-center text-sm font-medium">
              Courses/Trainings <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="text-white hover:text-blue-200 flex items-center text-sm font-medium">
              Services <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
          <div className="relative group">
            <button className="text-white hover:text-blue-200 flex items-center text-sm font-medium">
              Resources <ChevronDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </nav>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-4 text-sm">
            Partner with us
          </Button>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-6 text-sm">
            LOGIN
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
