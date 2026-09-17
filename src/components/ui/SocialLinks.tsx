import { socialLinks } from "../../data/personal";
import { socialIconMap } from "./SocialIcons";

interface SocialLinksProps {
  size?: "sm" | "md";
  variant?: "default" | "plain";
  className?: string;
}

export default function SocialLinks({
  size = "md",
  variant = "default",
  className = "",
}: SocialLinksProps) {
  const iconSize = size === "sm" ? 18 : 22;

  if (variant === "plain") {
    return (
      <div className={`flex items-center gap-5 ${className}`}>
        {socialLinks.map((social) => {
          const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-light/70 transition-colors hover:text-primary"
              aria-label={`Visit ${social.name} profile`}
            >
              <Icon size={iconSize} />
            </a>
          );
        })}
      </div>
    );
  }

  const btnSize = size === "sm" ? "h-9 w-9" : "h-11 w-11";

  return (
    <div className={`flex gap-3 ${className}`}>
      {socialLinks.map((social) => {
        const Icon = socialIconMap[social.icon as keyof typeof socialIconMap];
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex ${btnSize} items-center justify-center rounded-full border border-primary/25 text-text-muted transition-all hover:border-primary/55 hover:text-primary`}
            aria-label={`Visit ${social.name} profile`}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
