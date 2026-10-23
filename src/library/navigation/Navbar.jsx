import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b border-earth bg-den px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-fur font-bold text-night">
            <img src={`${import.meta.env.BASE_URL}favicon.svg`} alt="Jackal UI Logo" className="h-6 w-6" />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <button className="text-sm font-medium text-back transition-colors hover:text-sand">
            <a href="home.jsx">Home</a>
          </button>
          
          {["Components", "Github", "Contact" ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-back transition-colors hover:text-sand"
            >
              {item}
            </a>
          ))}
          <button className="rounded-lg bg-amber px-4 py-2 text-sm font-bold text-night transition-transform hover:scale-105">
            Get Started
          </button>
        </nav>

        <button
          className="p-2 text-sand md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex flex-col gap-4 border-t border-earth pt-4 md:hidden"
        >
          {["Home", "Components", "Github", "Contact" ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-back transition-colors hover:text-sand"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-2 rounded-lg bg-amber py-2 text-center font-bold text-night">
            Get Started
          </button>
        </motion.nav>
      )}
    </header>
  );
}