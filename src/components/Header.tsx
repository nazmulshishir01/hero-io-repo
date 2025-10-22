import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-white text-gray-900 sticky top-0 z-50 shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-3">
        <NavLink
          to="/"
          className="flex items-center gap-2"
          onClick={() => setMenuOpen(false)}
        >
          <img src="/logo.png" alt="Hero IO" className="h-10 w-10" />
          <span className="font-bold text-lg bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </NavLink>

        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex gap-6 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/nazmulshishir01"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-2 btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] btn-sm text-white px-3 sm:px-4"
          >
            <Github className="h-5 w-5 text-white" />
            <span className="text-sm font-medium">Contribute</span>
          </a>

          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col items-center gap-3 py-4 font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apps"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/installation"
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#632EE3] font-semibold"
                    : "hover:text-[#632EE3]"
                }
              >
                Installation
              </NavLink>
            </li>
            <li>
              <a
                href="https://github.com/nazmulshishir01"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-4 py-2 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                <Github className="h-5 w-5 text-white" />
                <span>Contribute</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
