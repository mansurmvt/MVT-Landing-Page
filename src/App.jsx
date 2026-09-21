import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIAssistant from "./components/AIAssistant";
import Landing from "./pages/Landing";

import logo from "./assets/mvt-logo.png";

function App() {
  const [intro, setIntro] = useState(true);

  return (
    <>
      {/* ONE-TIME INTRO */}
      {intro && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#0A183F] animate-[introFade_1.8s_ease-in-out_forwards]"
          onAnimationEnd={() => setIntro(false)}
        >
          <div className="flex flex-col items-center">

            <div className="animate-[logoRise_1.2s_cubic-bezier(.22,1,.36,1)_forwards] translate-y-[120vh]">
              <img
                src={logo}
                alt="MVT"
                className="h-32 w-32 object-contain md:h-40 md:w-40"
              />
            </div>

            <div className="mt-6 flex items-center gap-3 overflow-hidden">
              <span className="h-px w-0 bg-[#42A5F5] animate-[lineGrow_0.8s_1s_ease-out_forwards]" />

              <span className="translate-y-5 text-sm font-semibold uppercase tracking-[0.35em] text-white/70 animate-[textRise_0.7s_1s_ease-out_forwards]">
                Every Step, Step Ahead
              </span>

              <span className="h-px w-0 bg-[#42A5F5] animate-[lineGrow_0.8s_1s_ease-out_forwards]" />
            </div>

          </div>
        </div>
      )}

      <Navbar />
      <Landing />
      <Footer />
      <AIAssistant />
    </>
  );
}

export default App;