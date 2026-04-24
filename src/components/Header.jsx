import { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-purple-400 font-semibold"
      : "text-white hover:text-purple-300";

  return (
    <header className="bg-slate-900 text-white px-6 md:px-10 py-4 shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          goBlog
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        {/* Right Section */}
        <div className="hidden md:block">
          <button className="bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/blog" className={navLinkClass}>Blog</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          <button className="bg-purple-600 px-4 py-2 rounded-md w-fit">
            Login
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;