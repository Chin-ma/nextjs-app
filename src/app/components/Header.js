import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Forest Types", href: "#forest-types" },
    { name: "Conservation", href: "#conservation" },
    { name: "Gallery", href: "#gallery" },
    { name: "Discover More", href: "#discover" },
  ];

  return (
    <nav className="bg-emerald-950/80 backdrop-blur-sm sticky top-0 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#home" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <span className="text-emerald-100 text-xl font-bold">
            ForestWonders
          </span>
        </a>
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-emerald-200 hover:text-emerald-400 transition-colors text-sm font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-emerald-200 hover:text-emerald-400"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? (
            // Cross Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M6 18L18 6"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mr-11 py-2 text-right">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-emerald-200 hover:bg-emerald-800/50 hover:text-emerald-400 transition-colors text-sm font-medium"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
