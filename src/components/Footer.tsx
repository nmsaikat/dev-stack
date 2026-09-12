import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Container from "./Container";

const linkGroups = [
  {
    title: "Product",
    links: ["Technologies", "Projects", "Pricing", "Changelog"],
  },
  { title: "Company", links: ["About", "Careers", "Blog", "Contact"] },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-base-border bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="brand-gradient-bg flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold text-white">
                DS
              </span>
              <span className="text-lg font-bold text-base-text">
                Dev <span className="text-brand-pink">Stack</span>
              </span>
            </div>
            <p className="max-w-xs text-sm text-base-muted">
              Explore, compare, and build the perfect development stack for your
              next project.
            </p>
            <div className="flex items-center gap-4 text-xl text-base-muted">
              <a href="#" aria-label="GitHub" className="hover:text-base-text">
                <FaGithub />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-base-text">
                <FaTwitter />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-base-text"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-sm font-semibold text-base-text">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-base-muted hover:text-base-text"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-base-border py-6 text-sm text-base-muted md:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-base-text">
              Privacy
            </a>
            <a href="#" className="hover:text-base-text">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
