import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import Container from "./Container";
import logoImg from "../assets/logo-text.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 border-b border-base-border bg-white">
      <Container>
        <nav className="flex items-center justify-between py-3 md:py-4">
          {/* Left: Menu Icon (Mobile) & Logo */}
          <div className="flex items-center gap-2 md:gap-0">
            <button
              className="p-1 text-2xl text-base-text md:hidden"
              aria-label="Open menu"
            >
              <HiMenu />
            </button>
            <img
              src={logoImg}
              alt="Dev Stack Logo"
              className="h-6 w-auto object-contain sm:h-7 md:h-9"
            />
          </div>

          {/* Middle: Navigation Links (Desktop Only) */}
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActive(link)}
                  className={`font-medium transition-colors ${
                    active === link
                      ? "text-[#D91B7E]"
                      : "text-base-muted hover:text-base-text"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 md:gap-6">
            <button className="whitespace-nowrap text-xs font-semibold text-base-text hover:opacity-80 sm:text-sm md:text-base">
              Sign In
            </button>
            <button className="whitespace-nowrap rounded-full bg-[#D91B7E] px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 sm:px-4 sm:py-2 sm:text-sm md:px-5 md:text-base">
              Sign Up
            </button>
          </div>
        </nav>
      </Container>
    </header>
  );
}
