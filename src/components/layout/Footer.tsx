import { Link } from "react-router-dom";
import { personalInfo, navLinks } from "../../data/personal";
import SocialLinks from "../ui/SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-primary/12 bg-bg-dark">
      <div className="section-container py-7">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <Link to="/" className="flex items-center gap-2 text-[15px] font-bold text-text-light">
            <span className="flex h-7 w-7 items-center justify-center rounded bg-primary text-xs font-extrabold text-bg-dark">
              M
            </span>
            {personalInfo.firstName}
          </Link>

          <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-[12px] text-text-muted transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <SocialLinks variant="plain" size="sm" />
        </div>

        <p className="mt-6 text-center text-[12px] text-text-muted">
          &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
