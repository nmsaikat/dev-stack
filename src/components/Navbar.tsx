import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "./Container";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const Logo = (
    <div className="flex items-center gap-2">
      <span className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
        DS
      </span>
      <span className="text-lg font-bold text-base-text">
        Dev <span className="text-brand-pink">Stack</span>
      </span>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-base-border bg-white">
      <Container>
        <nav className="grid grid-cols-3 items-center py-4 md:flex md:justify-between">
          <div className="flex items-center">
            <button
              className="text-2xl text-base-text md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX /> : <HiMenu />}
            </button>
            <div className="hidden md:flex">{Logo}</div>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="md:hidden">{Logo}</div>
            <ul className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => setActive(link)}
                    className={`font-medium transition-colors ${
                      active === link
                        ? "text-brand-pink"
                        : "text-base-muted hover:text-base-text"
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-end gap-3 md:gap-6">
            <button className="text-sm font-medium text-base-text md:text-base">
              Sign In
            </button>
            <button className="brand-gradient-bg rounded-full px-4 py-1.5 text-sm font-semibold text-white md:px-5 md:py-2 md:text-base">
              Sign Up
            </button>
          </div>
        </nav>
      </Container>

      {isOpen && (
        <Container>
          <ul className="flex flex-col gap-4 border-t border-base-border py-4 md:hidden">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => {
                    setActive(link);
                    setIsOpen(false);
                  }}
                  className={`font-medium ${active === link ? "text-brand-pink" : "text-base-muted"}`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </Container>
      )}
    </header>
  );
}
