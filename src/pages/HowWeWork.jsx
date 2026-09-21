import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Idea",
    text: "We understand your idea, goals, challenges and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We validate requirements and create a clear product and development roadmap.",
  },
  {
    number: "03",
    title: "Design",
    text: "We turn the plan into thoughtful, user-focused experiences and interfaces.",
  },
  {
    number: "04",
    title: "Develop",
    text: "Our engineering process transforms the approved design into a reliable digital product.",
  },
  {
    number: "05",
    title: "Deploy",
    text: "We prepare, test and deploy the product so it can reach real users.",
  },
  {
    number: "06",
    title: "Support",
    text: "We continue supporting the product through improvements, maintenance and future growth.",
  },
];

function HowWeWork() {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScroll = useRef(0);

  const startDrag = (e) => {
    isDragging.current = true;
    startX.current = e.pageX || e.touches?.[0]?.pageX;
    startScroll.current = trackRef.current.scrollLeft;
  };

  const moveDrag = (e) => {
    if (!isDragging.current) return;

    const currentX = e.pageX || e.touches?.[0]?.pageX;
    const distance = currentX - startX.current;

    trackRef.current.scrollLeft = startScroll.current - distance;
  };

  const stopDrag = () => {
    isDragging.current = false;
  };

  return (
    <main className="min-h-screen bg-[#F5F7FA] pt-20">

      {/* HEADER */}

      <section className="px-6 pb-14 pt-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            How We Work
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-bold leading-tight text-[#0A183F] md:text-7xl">
            Your idea.
            <span className="block text-[#0D47A1]">
              Our journey together.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#616161]">
            Drag the journey from left to right and discover how we turn
            an idea into a digital product.
          </p>

        </div>

      </section>


      {/* JOURNEY */}

      <section className="relative overflow-hidden bg-[#081638] py-16 md:py-20">

        {/* BACKGROUND */}

        <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px)",
              backgroundSize: "70px 70px",
            }}
          />
        </div>

        <div className="pointer-events-none absolute left-[-150px] top-20 h-80 w-80 rounded-full bg-[#0D47A1]/30 blur-[100px]" />

        {/* LABEL */}

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#42A5F5]">
                MVT Process
              </p>

              <p className="mt-2 text-sm text-white/40">
                Drag to move through the journey
              </p>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/50 md:flex">
              Drag
              <span className="text-[#42A5F5]">→</span>
            </div>

          </div>

        </div>


        {/* DRAG VIEWPORT */}

        <div
          ref={trackRef}
          onMouseDown={startDrag}
          onMouseMove={moveDrag}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          onTouchStart={startDrag}
          onTouchMove={moveDrag}
          onTouchEnd={stopDrag}
          className="relative z-10 mt-10 cursor-grab overflow-x-auto select-none active:cursor-grabbing"
          style={{
            scrollbarWidth: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >

          {/* TRACK */}

          <div className="relative flex w-max items-center px-6 py-8 md:px-[8vw]">

            {/* ROAD */}

            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-white/10" />

            <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-[#42A5F5]/70 via-[#42A5F5]/20 to-transparent" />


            {/* TOY / MVT MARKER */}

            <div className="relative z-20 mr-14 flex w-[90px] shrink-0 flex-col items-center">

              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-3xl border border-[#42A5F5]/30 bg-[#102554] shadow-[0_0_40px_rgba(66,165,245,0.15)]">

                <div className="text-center">

                  <div className="text-xl font-black text-white">
                    MVT
                  </div>

                  <div className="mt-1 text-[7px] font-bold uppercase tracking-[0.2em] text-[#42A5F5]">
                    Ahead
                  </div>

                </div>

              </div>

              <div className="h-8 w-px bg-gradient-to-b from-[#42A5F5] to-transparent" />

            </div>


            {/* STEPS */}

            {steps.map((step, index) => (

              <div
                key={step.number}
                className="relative z-10 mr-8 w-[300px] shrink-0 md:mr-12 md:w-[350px]"
              >

                {/* CONNECTOR */}

                <div className="absolute left-1/2 top-1/2 h-[80px] w-px -translate-x-1/2 -translate-y-1/2 bg-[#42A5F5]/20" />


                {/* CARD */}

                <div
                  className={`relative rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-[#42A5F5]/40 hover:bg-white/[0.09] ${
                    index % 2 === 0
                      ? "mb-40"
                      : "mt-40"
                  }`}
                >

                  {/* NUMBER */}

                  <div className="absolute right-6 top-5 text-xs font-bold tracking-[0.2em] text-[#42A5F5]/60">
                    {step.number}
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#42A5F5]">
                    Step {step.number}
                  </p>

                  <h2 className="mt-4 text-3xl font-bold text-white">
                    {step.title}
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/50">
                    {step.text}
                  </p>

                </div>

              </div>

            ))}


            {/* END */}

            <div className="relative z-10 flex w-[300px] shrink-0 items-center justify-center md:w-[350px]">

              <div className="rounded-[2rem] border border-[#42A5F5]/30 bg-[#102554] p-8 text-center shadow-[0_0_50px_rgba(66,165,245,0.12)]">

                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#42A5F5]/10 text-2xl text-[#42A5F5]">
                  ✓
                </div>

                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#42A5F5]">
                  Journey Complete
                </p>

                <h2 className="mt-3 text-2xl font-bold text-white">
                  Ready for what's next.
                </h2>

                <p className="mt-3 text-sm leading-6 text-white/50">
                  We stay with you beyond launch and continue helping
                  your product grow.
                </p>

              </div>

            </div>

          </div>

        </div>


        {/* BOTTOM HINT */}

        <div className="relative z-10 mt-4 text-center">

          <p className="text-xs uppercase tracking-[0.2em] text-white/30">
            Swipe or drag to explore
          </p>

        </div>

      </section>


      {/* CTA */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            The Journey Continues
          </p>

          <h2 className="mt-5 text-4xl font-bold text-[#0A183F] md:text-6xl">
            Every step.
            <span className="text-[#0D47A1]">
              {" "}
              Step ahead.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#616161]">
            Have an idea? Let's take the first step together.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-[#0A183F] px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0D47A1]"
          >
            Start a Project →
          </a>

        </div>

      </section>

    </main>
  );
}

export default HowWeWork;