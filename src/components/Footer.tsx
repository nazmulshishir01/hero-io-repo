import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral text-neutral-content">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-sm md:text-base">
        <div className="lg:pr-8">
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.png" alt="Hero IO" className="h-8 w-8" />
            <span className="font-bold text-lg">Hero IO</span>
          </div>
          <p className="opacity-80 leading-relaxed text-[14px] md:text-[15px]">
            We craft innovative apps designed to make everyday life simpler,
            smarter, and more exciting. Our goal is to turn your ideas into
            digital experiences.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-base md:text-lg">
            Website Menu
          </h4>
          <ul className="space-y-2 opacity-90">
            <li>
              <NavLink to="/apps" className="hover:underline">
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="hover:underline">
                My Installation
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="hover:underline">
                Home
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-base md:text-lg">About Us</h4>
          <ul className="space-y-2 opacity-90">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms &amp; Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 text-base md:text-lg">Social</h4>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              title="Facebook"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              title="Twitter / X"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
              title="YouTube"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4 text-center text-xs sm:text-sm md:text-base opacity-60">
        © {new Date().getFullYear()} Hero IO. All rights reserved.
      </div>
    </footer>
  );
}
