import { useState, useEffect } from "react";
import logo from "../assets/mvt-logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "How We Work", id: "how-we-work" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  /* DETECT SCROLL FOR ELEVATED NAVBAR */
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* SCROLL-SPY: DETECT ACTIVE SECTION */
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-100px 0px -70% 0px",
      threshold: [0, 0.25, 0.5, 0.75, 1],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    /* OBSERVE ALL SECTIONS */
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  /* SMOOTH SCROLL TO SECTION */
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 transition-all duration-300">
      <nav
        className={`mx-auto flex w-full items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#00E5FF]/20 bg-[#07162f]/90 shadow-[0_10px_30px_rgba(3,10,28,0.7)] backdrop-blur-md"
            : "border-b border-white/10 bg-[#07162f]/80 backdrop-blur-sm"
        }`}
      >
        {/* LOGO */}
        <button
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-3 bg-none border-none cursor-pointer text-left"
          aria-label="Monotonic Vector Technologies Home"
        >
          <div className="flex h-10 w-10 items-center justify-center transition-transform hover:scale-105">
            <img
              src={logo}
              alt="MVT Logo"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-sm font-bold tracking-tight text-white sm:text-base">
              Monotonic Vector
            </p>
            <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-[#00E5FF]">
              Technologies
            </p>
          </div>
        </button>

        {/* DESKTOP LINKS */}
        <div className="hidden items-center gap-1.5 lg:flex">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`group relative rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                activeSection === link.id
                  ? "text-[#00E5FF]"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.name}
              <span
                className={`absolute bottom-1 left-4 right-4 h-[2px] origin-left rounded-full bg-[#00E5FF] shadow-[0_0_8px_#00E5FF] transition-transform duration-300 ${
                  activeSection === link.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden rounded-full bg-gradient-to-r from-[#00E5FF] to-[#42A5F5] px-5 py-2.5 text-xs font-extrabold uppercase tracking-[0.1em] text-[#07162f] shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,229,255,0.7)] lg:block active:scale-95"
        >
          Let's Talk →
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label="Toggle mobile menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#00E5FF] transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-transform duration-300 ${
                open ? "-rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="mx-auto w-full border-b border-[#00E5FF]/20 bg-[#07162f]/95 p-4 shadow-2xl backdrop-blur-xl lg:hidden animate-[fadeIn_0.2s_ease-out]">
          <div className="space-y-1">
            {links.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  activeSection === link.id
                    ? "bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20"
                    : "text-slate-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("contact")}
            className="mt-3 block w-full rounded-xl bg-gradient-to-r from-[#00E5FF] to-[#42A5F5] px-4 py-3 text-center text-sm font-bold text-[#07162f] shadow-md"
          >
            Let's Talk →
          </button>
        </div>
      )}
    </header>
  );
}

export default Navbar;