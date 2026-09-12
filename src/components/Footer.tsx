import Container from "./Container";
import logoImg from "../assets/logo-text.png";

const linkGroups = [
  {
    title: "PRODUCT",
    links: [
      { name: "Home", href: "#" },
      { name: "Technologies", href: "#" },
      { name: "Projects", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "LEGAL",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <Container>
        {/* Main Footer Links */}
        <div className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[2.5fr_1fr_1fr_1fr]">
          {/* Brand & Socials Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                src={logoImg}
                alt="Dev Stack Logo"
                className="h-8 w-auto object-contain"
              />
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-400">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="mt-2 flex items-center gap-5 text-sm font-semibold text-slate-600">
              <a href="#" className="transition-colors hover:text-gray-900">
                GitHub
              </a>
              <a href="#" className="transition-colors hover:text-gray-900">
                Twitter
              </a>
              <a href="#" className="transition-colors hover:text-gray-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Nav Groups */}
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 text-xs font-bold tracking-wider text-gray-900">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm font-normal text-slate-400 transition-colors hover:text-gray-900"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-100/60 py-8 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="transition-colors hover:text-gray-900">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-gray-900">
              Terms
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
