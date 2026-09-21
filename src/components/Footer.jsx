import logo from "../assets/mvt-logo.png";

function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050e20] border-t border-white/10 px-4 pt-14 pb-8 sm:px-6 sm:pt-16 md:px-8 lg:px-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.7fr_0.7fr]">
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1 ring-1 ring-white/20">
                <img
                  src={logo}
                  alt="MVT logo"
                  className="h-full w-full object-contain"
                />
              </div>

              <div>
                <p className="font-bold text-white tracking-tight">
                  Monotonic Vector
                </p>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#00E5FF]">
                  Technologies
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400">
              Building exceptional software, empowering businesses through cutting-edge technology, and creating transformative digital solutions.
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#00E5FF]">
              Every Step, Step Ahead.
            </p>
          </div>

          {/* COMPANY LINKS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                About MVT
              </button>
              <button
                onClick={() => scrollToSection("how-we-work")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                How We Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                Contact
              </button>
            </div>
          </div>

          {/* SERVICES LINKS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Solutions
            </h3>

            <div className="mt-4 flex flex-col gap-2.5 text-sm">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                Custom Software
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                Web & Mobile Apps
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                AI & Automation
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-slate-300 transition-colors hover:text-[#00E5FF]"
              >
                SaaS Platforms
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM COPYRIGHT */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Monotonic Vector Technologies. All rights reserved.</p>
          <a
            href="mailto:monotonicvector@gmail.com"
            className="transition-colors hover:text-[#00E5FF]"
          >
            monotonicvector@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;