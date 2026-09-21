const services = [
  {
    number: "01",
    title: "Custom Software",
    short: "Reliable software built around your requirements.",
    details:
      "We design and develop custom software solutions tailored to the unique requirements of startups, businesses and organizations.",
  },
  {
    number: "02",
    title: "Web Applications",
    short: "Modern, scalable digital experiences.",
    details:
      "We build user-focused web applications designed for reliability, scalability and real-world business needs.",
  },
  {
    number: "03",
    title: "Mobile Applications",
    short: "Digital products designed for mobile users.",
    details:
      "We develop mobile applications that turn ideas into practical and user-centric digital products.",
  },
  {
    number: "04",
    title: "AI-Powered Solutions",
    short: "Intelligent technology for modern workflows.",
    details:
      "We integrate AI into products and business workflows to help organizations explore automation and smarter digital solutions.",
  },
  {
    number: "05",
    title: "SaaS Products",
    short: "Products designed to scale with your business.",
    details:
      "We work on SaaS products and digital platforms with a focus on scalable engineering and long-term product development.",
  },
  {
    number: "06",
    title: "Business Automation",
    short: "Technology that simplifies business processes.",
    details:
      "We build business automation systems that help transform workflows and support more efficient digital operations.",
  },
];

function Services() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] px-6 pb-24 pt-32">

      {/* HERO */}

      <section className="mx-auto max-w-7xl">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
          What We Do
        </p>

        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          <h1 className="text-5xl font-bold leading-tight text-[#0A183F] md:text-7xl">
            Technology built
            <span className="block text-[#0D47A1]">
              around your vision.
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-8 text-[#616161]">
            From MVPs and web applications to AI-powered solutions,
            SaaS products and business automation, we help transform
            ideas into high-quality digital products.
          </p>

        </div>

      </section>


      {/* SERVICES */}

      <section className="mx-auto mt-20 max-w-7xl">

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (

            <div
              key={service.number}
              className="group h-[360px] [perspective:1200px]"
            >

              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* FRONT */}

                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0A183F] p-8 text-white [backface-visibility:hidden]">

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#42A5F5]">
                      {service.number}
                    </span>

                    <span className="text-2xl text-white/30">
                      ↗
                    </span>
                  </div>

                  <div>
                    <div className="mb-5 h-1 w-12 rounded-full bg-[#42A5F5]" />

                    <h2 className="text-3xl font-bold">
                      {service.title}
                    </h2>

                    <p className="mt-4 leading-7 text-white/60">
                      {service.short}
                    </p>
                  </div>

                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                    Hover to explore
                  </p>

                  {/* Decorative circles */}

                  <div className="absolute -bottom-24 -right-24 h-52 w-52 rounded-full border border-[#42A5F5]/20" />

                  <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full border border-[#42A5F5]/10" />

                </div>


                {/* BACK */}

                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-[2rem] border border-[#DCE4EF] bg-white p-8 text-[#0A183F] [backface-visibility:hidden] [transform:rotateY(180deg)]">

                  <div>
                    <span className="text-sm font-bold text-[#0D47A1]">
                      {service.number}
                    </span>

                    <h2 className="mt-5 text-3xl font-bold">
                      {service.title}
                    </h2>

                    <div className="mt-5 h-px w-full bg-[#E5EAF0]" />

                    <p className="mt-6 leading-8 text-[#616161]">
                      {service.details}
                    </p>
                  </div>

                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0D47A1]">
                    <span className="h-2 w-2 rounded-full bg-[#42A5F5]" />
                    MVT Technology Services
                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* BOTTOM STATEMENT */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="relative overflow-hidden rounded-[2rem] bg-[#0A183F] px-8 py-14 text-center md:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#42A5F5]/10" />

          <p className="relative text-sm font-semibold uppercase tracking-[0.25em] text-[#42A5F5]">
            Beyond Software
          </p>

          <h2 className="relative mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight text-white md:text-5xl">
            Building technology that creates
            <span className="text-[#42A5F5]"> lasting value.</span>
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl leading-7 text-white/60">
            MVT's vision extends beyond software services toward innovative
            SaaS products, research and development, a strong technology
            talent ecosystem and long-term partnerships.
          </p>

        </div>

      </section>

    </main>
  );
}

export default Services;