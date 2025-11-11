import { memo } from "react";

const Footer = memo(function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center text-gray-600 text-sm">
          <p className="font-medium">© 2025 손영재. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
