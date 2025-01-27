"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle menu click and close the menu
  const handleMenuClick = () => {
    setIsOpen(false); // Close the menu when a link is clicked
  };

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-purple-600">
            Nazneen Rizvi
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link href="#about" className="hover:text-purple-600 transition">About</Link>
            <Link href="#skills" className="hover:text-purple-600 transition">Skills</Link>
            <Link href="#experience" className="hover:text-purple-600 transition">Projects</Link>
            <Link href="#contact" className="hover:text-purple-600 transition">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="#about" className="block hover:text-purple-600" onClick={handleMenuClick}>About</Link>
            <Link href="#skills" className="block hover:text-purple-600" onClick={handleMenuClick}>Skills</Link>
            <Link href="#experience" className="block hover:text-purple-600" onClick={handleMenuClick}>Project</Link>
            <Link href="#contact" className="block hover:text-purple-600" onClick={handleMenuClick}>Contact</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
