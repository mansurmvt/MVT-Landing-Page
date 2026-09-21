import { useState } from "react";

function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const options = [
    {
      question: "What services does MVT provide?",
      answer:
        "MVT provides custom software development, modern web and mobile applications, AI-powered solutions, SaaS products and intelligent business automation systems.",
    },
    {
      question: "How does MVT work with clients?",
      answer:
        "We collaborate through the entire product lifecycle — from idea validation and architecture planning to design, development, deployment, and ongoing engineering support.",
    },
    {
      question: "I want to start a project",
      answer:
        "Excellent! Tell us about your project or idea through the Contact section, and our engineering team will get in touch with you.",
    },
  ];

  const handleOption = (answer) => {
    setMessage(answer);
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-50 w-[340px] max-w-[calc(100vw-2rem)] overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/10 animate-[fadeInUp_0.25s_ease-out]">
          {/* Header */}
          <div className="bg-[#07162f] px-5 py-4 text-white border-b border-[#00E5FF]/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00E5FF] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00E5FF]" />
                </span>
                <div>
                  <p className="font-bold text-sm text-white">MVT Assistant</p>
                  <p className="text-[11px] text-[#8ed8ff]">
                    Your digital guide to MVT
                  </p>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-lg text-white hover:bg-white/20 transition-colors"
                aria-label="Close Assistant"
              >
                ×
              </button>
            </div>
          </div>

          {/* Chat content */}
          <div className="max-h-[380px] sm:max-h-[420px] space-y-3.5 overflow-y-auto bg-[#F8FAFC] p-4 sm:p-5">
            {/* Assistant intro message */}
            <div className="max-w-[90%] rounded-2xl rounded-tl-none bg-white p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-[#303030] shadow-sm border border-[#E5EAF0]">
              Hi there! 👋 I'm the MVT Assistant.
              <br />
              What would you like to explore?
            </div>

            {/* Selected answer */}
            {message && (
              <div className="ml-auto max-w-[92%] rounded-2xl rounded-br-none bg-gradient-to-r from-[#0A183F] to-[#0D47A1] p-3.5 sm:p-4 text-xs sm:text-sm leading-relaxed text-white shadow-md">
                {message}
              </div>
            )}

            {/* Quick Questions */}
            <div className="space-y-2 pt-2">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                Frequently Asked
              </p>
              {options.map((option) => (
                <button
                  key={option.question}
                  onClick={() => handleOption(option.answer)}
                  className="w-full rounded-xl border border-[#DDE3EC] bg-white px-3.5 py-2.5 text-left text-xs sm:text-sm font-medium text-[#0A183F] shadow-sm transition hover:border-[#00E5FF] hover:bg-[#EAF4FF] hover:text-[#0D47A1]"
                >
                  {option.question}
                </button>
              ))}
            </div>

            {/* WhatsApp Direct Connect Button */}
            <div className="pt-2 border-t border-[#E5EAF0]">
              <a
                href="https://wa.me/919346788683?text=Hi%20MVT%20Team%2C%20I%27m%20interested%20in%20starting%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-[#20ba5a] hover:shadow-lg active:scale-95"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.705 1.754zm6.097-4.108l.398.236c1.472.873 3.167 1.334 4.893 1.335 5.247 0 9.516-4.269 9.518-9.517.001-2.541-.99-4.93-2.787-6.728-1.797-1.798-4.187-2.789-6.727-2.79-5.249 0-9.518 4.269-9.52 9.518-.001 1.785.498 3.522 1.444 5.044l.259.416-1.001 3.655 3.743-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-[#E5E7EB] bg-white px-4 py-2.5 text-center">
            <p className="text-[11px] font-medium text-slate-400">
              Monotonic Vector Technologies
            </p>
          </div>
        </div>
      )}
      {/* Floating Assistant Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#00E5FF] to-[#1E88E5] text-2xl sm:text-3xl text-[#07162f] shadow-[0_8px_30px_rgba(0,229,255,0.4)] transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_35px_rgba(0,229,255,0.7)] active:scale-95"
        aria-label="Toggle MVT Assistant"
      >
        {open ? (
          <span className="text-xl sm:text-2xl font-bold text-[#07162f]">×</span>
        ) : (
          <span
            className="text-xl sm:text-2xl animate-[wave_1.8s_ease-in-out_infinite]"
            style={{ transformOrigin: "center bottom" }}
          >
            🤖
          </span>
        )}
      </button>
    </>
  );
}

export default AIAssistant;