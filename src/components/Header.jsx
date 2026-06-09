import { useState, useEffect } from "react";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  const getInitialTheme = () => {
    if (typeof window === "undefined") return false;
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Reusable Dark Mode Button Component
  const ThemeToggle = () => (
    <button
      type="button"
      onClick={() => setIsDarkMode((current) => !current)}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-150 hover:-translate-y-px hover:bg-black/10 dark:hover:bg-white/18"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <FiSun className="text-[1.05rem]" aria-hidden="true" />
      ) : (
        <FiMoon className="text-[1.05rem]" aria-hidden="true" />
      )}
    </button>
  );

  return (
    <header className="fixed top-[30px] left-1/2 -translate-x-1/2 w-[60%] max-[1024px]:w-[85%] max-[640px]:w-[92%] z-50 rounded-full border border-black/10 dark:border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(240,240,245,0.96))] dark:bg-[linear-gradient(180deg,rgba(32,32,36,0.88),rgba(18,18,22,0.96))] px-5 py-3 shadow-[0_16px_34px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_16px_34px_rgba(0,0,0,0.45)] backdrop-blur-[18px] max-[640px]:top-[18px] max-[640px]:rounded-[26px]">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4 max-[900px]:flex max-[900px]:justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 justify-self-start text-[1.1rem] font-bold tracking-[0.02em] text-[#0f1f4f] dark:text-[#f5f5f5]"
          aria-label="RECH home"
        >
          <span>{"<"} RECH</span>
          <span className="-translate-y-px text-[#f5c542]">/&gt;</span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="flex items-center justify-center gap-11 justify-self-center text-[1.05rem] font-semibold text-gray-700 dark:text-white/95 max-[900px]:hidden"
          aria-label="Primary navigation"
        >
          <Link
            to="/"
            className="transition duration-150 hover:-translate-y-px hover:text-[#0f1f4f] dark:hover:opacity-90"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="transition duration-150 hover:-translate-y-px hover:text-[#0f1f4f] dark:hover:opacity-90"
          >
            Projects
          </Link>
          <Link
            to="/achievements"
            className="transition duration-150 hover:-translate-y-px hover:text-[#0f1f4f] dark:hover:opacity-90"
          >
            Achievements
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="flex items-center justify-end gap-3 justify-self-end max-[900px]:hidden">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0f1f4f] px-4 py-[11px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] transition duration-150 hover:-translate-y-px hover:bg-[#0b1738] dark:bg-white/15 dark:text-black dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] dark:hover:bg-white/20"
          >
            <span className="font-medium text-white">Contact</span>
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="hidden items-center justify-end gap-3 max-[900px]:flex">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/10 text-gray-700 dark:text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-150 hover:-translate-y-px hover:bg-black/10 dark:hover:bg-white/18"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            {isMenuOpen ? (
              <FiX className="text-[1.2rem]" aria-hidden="true" />
            ) : (
              <FiMenu className="text-[1.2rem]" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="mt-4 hidden rounded-[22px] border border-black/10 dark:border-white/12 bg-white/90 dark:bg-black/40 p-4 shadow-[0_16px_34px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_34px_rgba(0,0,0,0.35)] backdrop-blur-[18px] max-[900px]:block"
        >
          <nav
            className="flex flex-col gap-4 text-[1rem] font-semibold text-gray-800 dark:text-white/95"
            aria-label="Mobile navigation"
          >
            <Link
              to="/"
              className="transition duration-150 hover:text-black dark:hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="transition duration-150 hover:text-black dark:hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/achievements"
              className="transition duration-150 hover:text-black dark:hover:opacity-90"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </Link>
            <a
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#0f1f4f] px-4 py-3 text-white transition duration-150 hover:bg-[#0b1738] dark:bg-white/15 dark:text-black dark:hover:bg-white/20"
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Contact</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
