import { memo } from "react";
import { Code2 } from "lucide-react";

const Header = memo(function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="text-blue-600" size={28} />
            <span className="text-xl font-bold text-gray-900">Portfolio</span>
          </div>
          {/* <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition font-medium">
              About
            </a>
            <a href="#projects" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Projects
            </a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Skills
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition font-medium">
              Contact
            </a>
          </nav> */}
        </div>
      </div>
    </header>
  );
});

export default Header;
