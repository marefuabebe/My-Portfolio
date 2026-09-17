
interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export function TechIcon({ name, className = "w-10 h-10 sm:w-11 sm:h-11", size }: TechIconProps) {
  const style = size ? { width: size, height: size } : undefined;
  const key = name.toLowerCase().replace(/[\s.-]/g, "");

  switch (key) {
    case "html5":
    case "html":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M5.5 3L8 28.5L16 30.5L24 28.5L26.5 3H5.5Z" fill="#E44D26" />
          <path d="M16 5V28.3L22.4 26.6L24.5 5H16Z" fill="#F16529" />
          <path d="M16 11H9.8L10.3 15H16V11ZM16 19.5H12.8L12.5 16.5H10.5L11 22.5L16 23.9V19.5Z" fill="#EBEBEB" />
          <path d="M16 11V15H21.7L22.2 11H16ZM16 19.5V23.9L21 22.5L21.6 16.5H19.5L19.2 19.5H16Z" fill="#FFFFFF" />
        </svg>
      );

    case "css3":
    case "css":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M5.5 3L8 28.5L16 30.5L24 28.5L26.5 3H5.5Z" fill="#1572B6" />
          <path d="M16 5V28.3L22.4 26.6L24.5 5H16Z" fill="#33A9DC" />
          <path d="M16 11H9.8L10.3 15H16V11ZM16 19.5H12.8L12.5 16.5H10.5L11 22.5L16 23.9V19.5Z" fill="#EBEBEB" />
          <path d="M16 11V15H21.7L22.2 11H16ZM16 19.5V23.9L21 22.5L21.6 16.5H19.5L19.2 19.5H16Z" fill="#FFFFFF" />
        </svg>
      );

    case "javascript":
    case "js":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style}>
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path
            d="M17.5 24.2C18.2 25.3 19.3 26 21 26C22.6 26 23.7 25.1 23.7 23.8C23.7 22.3 22.7 21.7 20.8 20.9C18.1 19.7 16.3 18.4 16.3 15.3C16.3 12.3 18.6 10 22.1 10C24.5 10 26.2 11 27.2 12.8L24.5 14.5C23.9 13.5 23.1 13 22 13C20.9 13 20 13.6 20 14.7C20 15.9 20.8 16.4 22.8 17.3C25.7 18.5 27.5 19.8 27.5 23.1C27.5 26.5 24.8 29 20.8 29C17.4 29 15.1 27.3 14.2 25.3L17.5 24.2ZM8 24.5L11.3 23.9C11.6 24.9 12.3 25.6 13.5 25.6C14.8 25.6 15.6 24.8 15.6 22.8V10.3H19.3V22.8C19.3 26.8 17.2 28.7 13.5 28.7C10.4 28.7 8.5 27 8 24.5Z"
            fill="#000000"
          />
        </svg>
      );

    case "react":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(30 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(90 16 16)" />
          <ellipse cx="16" cy="16" rx="14" ry="5.2" stroke="#61DAFB" strokeWidth="1.6" transform="rotate(150 16 16)" />
          <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
        </svg>
      );

    case "nextjs":
    case "next":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#000000" stroke="#333333" strokeWidth="1.5" />
          <path
            d="M21.5 23.2L12.8 11.5H10.5V20.5H12.5V14.1L20.2 24.4C20.65 24.05 21.08 23.65 21.5 23.2ZM19.5 11.5H21.5V18.5H19.5V11.5Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "tailwindcss":
    case "tailwind":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path
            d="M8.5 12C9.5 8 12.5 6 17.5 6C23.5 6 24.5 11 27.5 12C29.5 12.6 31 11.5 32 10C31 14 28 16 23 16C17 16 16 11 13 10C11 9.4 9.5 10.5 8.5 12ZM0.5 22C1.5 18 4.5 16 9.5 16C15.5 16 16.5 21 19.5 22C21.5 22.6 23 21.5 24 20C23 24 20 26 15 26C9 26 8 21 5 20C3 19.4 1.5 20.5 0.5 22Z"
            fill="#38BDF8"
          />
        </svg>
      );

    case "bootstrap":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style}>
          <rect width="32" height="32" rx="7" fill="#7952B3" />
          <path
            d="M11 7.5H18.2C20.8 7.5 22.8 8.8 22.8 11.2C22.8 12.8 21.8 14.1 20.2 14.6C22.3 15.1 23.5 16.6 23.5 18.6C23.5 21.4 21.1 23 18 23H11V7.5ZM14.8 13.8H17.8C19 13.8 19.7 13 19.7 12C19.7 11 19 10.2 17.8 10.2H14.8V13.8ZM14.8 20.3H18.1C19.5 20.3 20.3 19.4 20.3 18.3C20.3 17.2 19.5 16.3 18.1 16.3H14.8V20.3Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "vite":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path
            d="M29.5 4.5L16.8 28.5C16.4 29.2 15.6 29.2 15.2 28.5L2.5 4.5C2 3.6 2.8 2.5 3.8 2.7L16 5.5L28.2 2.7C29.2 2.5 30 3.6 29.5 4.5Z"
            fill="url(#vite-grad-1)"
          />
          <path
            d="M21.2 2.8L11.5 5L8.5 18L13 17L10.5 25L21.5 12.5L16.5 12L21.2 2.8Z"
            fill="url(#vite-grad-2)"
          />
          <defs>
            <linearGradient id="vite-grad-1" x1="2.5" y1="2.5" x2="29.5" y2="28.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="#41D1FF" />
              <stop offset="1" stopColor="#BD34FE" />
            </linearGradient>
            <linearGradient id="vite-grad-2" x1="8.5" y1="2.8" x2="21.5" y2="25" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFEA83" />
              <stop offset="0.08" stopColor="#FFDD35" />
              <stop offset="1" stopColor="#FFA800" />
            </linearGradient>
          </defs>
        </svg>
      );

    case "nodejs":
    case "node":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path
            d="M16 2.5L28 9.4V23.2L16 30.1L4 23.2V9.4L16 2.5Z"
            fill="#339933"
          />
          <path
            d="M16 5.2L25.8 10.8V22L16 27.6L6.2 22V10.8L16 5.2Z"
            fill="#05080A"
          />
          <path
            d="M16 9.5C14.2 9.5 12.5 10.5 11.5 12L13.8 13.3C14.4 12.3 15.2 11.8 16 11.8C17.2 11.8 18 12.5 18 13.5V14.2L14.2 14.5C11.5 14.8 9.8 16.2 9.8 18.5C9.8 20.8 11.6 22.3 14 22.3C15.6 22.3 17 21.5 17.8 20.3L18 22H20.5V13.5C20.5 11 18.8 9.5 16 9.5ZM16 19.8C15.3 20.3 14.5 20.6 13.8 20.6C12.8 20.6 12.1 20 12.1 18.8C12.1 17.5 13 16.8 14.5 16.6L18 16.3V17.8C18 18.6 17 19.3 16 19.8Z"
            fill="#539E43"
          />
        </svg>
      );

    case "expressjs":
    case "express":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#111827" stroke="#374151" strokeWidth="1.5" />
          <text
            x="16"
            y="20"
            textAnchor="middle"
            fill="#FFFFFF"
            fontSize="11"
            fontFamily="sans-serif"
            fontWeight="bold"
            letterSpacing="-0.5"
          >
            ex
          </text>
        </svg>
      );

    case "mongodb":
    case "mongo":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path
            d="M16 2C15.5 3.5 10.5 11 10.5 18C10.5 24 14.5 28.5 16 30C17.5 28.5 21.5 24 21.5 18C21.5 11 16.5 3.5 16 2Z"
            fill="#47A248"
          />
          <path
            d="M16 2V30C17.5 28.5 21.5 24 21.5 18C21.5 11 16.5 3.5 16 2Z"
            fill="#4DB33D"
          />
          <path
            d="M16 7V27C15.8 26.5 14.5 23.5 14.5 18C14.5 12.5 15.8 8.5 16 7Z"
            fill="#3FA037"
          />
        </svg>
      );

    case "php":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <ellipse cx="16" cy="16" rx="15" ry="9" fill="#777BB4" />
          <path
            d="M9 13H12C13.2 13 14 13.5 14 14.7C14 15.9 13.2 16.5 12 16.5H10.5L9.7 20H8L9 13ZM10.8 15.2H11.8C12.3 15.2 12.6 15 12.6 14.6C12.6 14.2 12.3 14 11.8 14H11.1L10.8 15.2ZM14.2 13H15.6L15 15.8H17C18.2 15.8 18.6 16.6 18.3 17.8L17.8 20H16.4L16.8 18.2C16.9 17.6 16.7 17.1 16 17.1H14.7L14.1 20H12.7L14.2 13ZM19.2 13H22.2C23.4 13 24.2 13.5 24.2 14.7C24.2 15.9 23.4 16.5 22.2 16.5H20.7L19.9 20H18.2L19.2 13ZM21 15.2H22C22.5 15.2 22.8 15 22.8 14.6C22.8 14.2 22.5 14 22 14H21.3L21 15.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "mysql":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#00758F" />
          <path
            d="M8.5 21C11.5 21 13.5 19 14.5 16.5C15 15 16 13 18 13C19.5 13 20.5 14 20.5 15.5C20.5 17 19.5 18 18 18.5L19.5 21C22 20 23.5 18 23.5 15C23.5 12 21 10.5 18 10.5C15 10.5 13.2 12.2 12.5 14C11.8 16 10.5 18 8.5 18.5V21Z"
            fill="#F29111"
          />
          <circle cx="11.5" cy="13.5" r="1" fill="#FFFFFF" />
          <path d="M7 23.5C10 22 15 22.5 18 24C21 25.5 24 24.5 25 23.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );

    case "git":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <rect x="16" y="2" width="19.5" height="19.5" rx="3.5" transform="rotate(45 16 2)" fill="#F05032" />
          <path
            d="M21.5 15.2C20.8 14.8 20 15 19.5 15.5L17.5 13.5V11.2C18.2 10.8 18.6 10 18.6 9.1C18.6 7.9 17.6 7 16.5 7C15.4 7 14.4 8 14.4 9.1C14.4 10 14.8 10.8 15.5 11.2V16.8C14.8 17.2 14.4 18 14.4 18.9C14.4 20.1 15.4 21 16.5 21C17.6 21 18.6 20 18.6 18.9C18.6 18.2 18.2 17.5 17.5 17.1V15.1L19.2 16.8C19 17.2 19 17.7 19.2 18.1C19.7 19 20.8 19.3 21.7 18.8C22.6 18.3 22.9 17.2 22.4 16.3C22.2 15.8 21.9 15.4 21.5 15.2Z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case "github":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#FFFFFF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 4C9.37 4 4 9.37 4 16C4 21.3 7.44 25.8 12.21 27.39C12.81 27.5 13.03 27.13 13.03 26.81C13.03 26.52 13.02 25.56 13.01 24.53C9.67 25.26 8.97 23.09 8.97 23.09C8.42 21.7 7.64 21.33 7.64 21.33C6.55 20.59 7.72 20.6 7.72 20.6C8.93 20.69 9.56 21.84 9.56 21.84C10.63 23.68 12.37 23.15 13.06 22.84C13.17 22.06 13.48 21.53 13.82 21.23C11.16 20.93 8.36 19.9 8.36 15.31C8.36 14 8.83 12.93 9.6 12.09C9.48 11.79 9.07 10.57 9.71 8.92C9.71 8.92 10.73 8.59 13.05 10.16C14.02 9.89 15.05 9.76 16.08 9.75C17.11 9.76 18.14 9.89 19.11 10.16C21.43 8.59 22.45 8.92 22.45 8.92C23.09 10.57 22.68 11.79 22.56 12.09C23.33 12.93 23.8 14 23.8 15.31C23.8 19.91 20.99 20.92 18.32 21.22C18.75 21.59 19.13 22.32 19.13 23.44C19.13 25.04 19.12 26.33 19.12 26.72C19.12 27.04 19.33 27.42 19.95 27.3C24.71 25.7 28.14 21.21 28.14 15.91C28.14 9.37 22.77 4 16 4Z"
            fill="#181717"
          />
        </svg>
      );

    case "vscode":
    case "vs code":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M22.5 3.5L16.2 9.4L10.5 4.8L8.2 6.2L13.8 12.2L8.2 18.2L10.5 19.6L16.2 15L22.5 20.9L25.8 19.2V5.2L22.5 3.5Z" fill="#0065A9" />
          <path d="M22.5 3.5L13.8 12.2L16.2 15L25.8 5.2V3.8L22.5 3.5Z" fill="#007ACC" />
          <path d="M25.8 20.6L16.2 9.4L13.8 12.2L22.5 20.9L25.8 20.6Z" fill="#1F9CF0" />
          <path d="M8.2 6.2L2.5 10.2V14.2L7.2 12.2L8.2 6.2ZM8.2 18.2L7.2 12.2L2.5 10.2V14.2L8.2 18.2Z" fill="#0065A9" />
        </svg>
      );

    case "figma":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <path d="M11 6C8.8 6 7 7.8 7 10C7 12.2 8.8 14 11 14H16V6H11Z" fill="#F24E1E" />
          <path d="M16 6H21C23.2 6 25 7.8 25 10C25 12.2 23.2 14 21 14C18.8 14 17 12.2 16 10V6Z" fill="#FF7262" />
          <path d="M16 14H21C23.2 14 25 15.8 25 18C25 20.2 23.2 22 21 22C18.8 22 17 20.2 16 18V14Z" fill="#1ABCFE" />
          <path d="M11 22C8.8 22 7 20.2 7 18C7 15.8 8.8 14 11 14H16V22H11Z" fill="#A259FF" />
          <path d="M11 22C8.8 22 7 23.8 7 26C7 28.2 8.8 30 11 30C13.2 30 15 28.2 15 26V22H11Z" fill="#0ACF83" />
        </svg>
      );

    case "postman":
      return (
        <svg viewBox="0 0 32 32" className={className} style={style} fill="none">
          <circle cx="16" cy="16" r="15" fill="#FF6C37" />
          <path
            d="M20.5 8.5C19.8 8.8 19.3 9.4 19 10.2L17.2 9.5C17.5 8.5 18.2 7.8 19.2 7.5L20.5 8.5ZM23 11.2L20.2 12.5C20.5 13.5 21.2 14.2 22.2 14.5L23.2 13.2C22.8 12.5 22.8 11.8 23 11.2ZM15.5 11.8C14.8 12.2 14.2 13 14 14L12.2 13.2C12.6 12 13.5 11 14.8 10.5L15.5 11.8ZM21 16.5L12 21.5L8.5 20L17.5 15L21 16.5Z"
            fill="#FFFFFF"
          />
          <circle cx="18.5" cy="11.5" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <div
          className={`flex items-center justify-center rounded-xl bg-white/5 text-xs font-bold text-primary ${className}`}
          style={style}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
