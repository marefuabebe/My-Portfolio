import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download, Headphones } from "lucide-react";
import { navLinks, personalInfo } from "../../data/personal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-primary/12 bg-bg-dark/98 backdrop-blur-sm">
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-[60px] items-center justify-between gap-3">
          {/* Logo */}
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2 text-[15px] font-bold text-text-light"
            aria-label="Marefu Abebe - Home"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-extrabold text-bg-dark">
              M
            </span>
            {personalInfo.firstName}
          </Link>

          {/* Center nav — desktop */}
          <ul className="hidden flex-1 items-center justify-center gap-0.5 lg:flex" role="list">
            {navLinks.map((link) => (
              <li key={link.path} className="relative">
                <Link
                  to={link.path}
                  className={`block px-2.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive(link.path) ? "text-primary" : "text-text-muted hover:text-text-light"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute right-2.5 -bottom-0.5 left-2.5 h-0.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={`tel:${personalInfo.clientSupport}`}
              className="hidden items-center gap-1.5 text-[11px] text-text-muted xl:flex"
            >
              <Headphones size={14} className="shrink-0 text-primary" aria-hidden="true" />
              <span>
                For Client Support:{" "}
                <span className="text-text-light">{personalInfo.clientSupport}</span>
              </span>
            </a>

            <a
              href={personalInfo.cvUrl}
              className="hidden items-center gap-1 rounded-md border border-primary/40 px-2.5 py-1.5 text-[12px] font-medium text-primary transition-colors hover:bg-primary/10 sm:inline-flex"
            >
              <Download size={13} aria-hidden="true" />
              Download CV
            </a>

            <button
              type="button"
              className="rounded p-1.5 text-text-muted lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-primary/10 lg:hidden"
            >
              <ul className="flex flex-col gap-0.5 py-3" role="list">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded px-2 py-2 text-sm font-medium ${
                        isActive(link.path) ? "text-primary" : "text-text-muted"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href={personalInfo.cvUrl}
                    className="flex items-center justify-center gap-2 rounded-md border border-primary/40 px-3 py-2 text-sm text-primary"
                  >
                    <Download size={15} />
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
