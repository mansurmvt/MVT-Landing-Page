function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F7FA] px-6 pb-24 pt-32">

      {/* HERO */}

      <section className="mx-auto max-w-7xl">

        <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
          About MVT
        </p>

        <div className="mt-5 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">

          <h1 className="text-5xl font-bold leading-tight text-[#0A183F] md:text-7xl">
            Building exceptional
            <span className="block text-[#0D47A1]">
              software. Creating opportunities.
            </span>
          </h1>

          <p className="text-lg leading-8 text-[#616161]">
            Monotonic Vector Technologies is a software development and
            technology services startup helping startups, individuals,
            businesses and organizations transform ideas into high-quality
            digital products.
          </p>

        </div>

      </section>


      {/* ABOUT */}

      <section className="mx-auto mt-20 grid max-w-7xl gap-8 lg:grid-cols-2">

        <div className="rounded-[2rem] bg-[#0A183F] p-8 text-white md:p-12">

          <span className="text-sm font-bold text-[#42A5F5]">
            MVT
          </span>

          <h2 className="mt-6 text-4xl font-bold">
            From idea validation to deployment and beyond.
          </h2>

          <p className="mt-6 leading-8 text-white/60">
            We specialize in designing, developing and delivering custom
            software solutions, web applications, mobile applications,
            AI-powered solutions, SaaS products and business automation
            systems tailored to our clients' unique requirements.
          </p>

        </div>

        <div className="rounded-[2rem] bg-white p-8 shadow-sm md:p-12">

          <h2 className="text-3xl font-bold text-[#0A183F]">
            A long-term technology partner.
          </h2>

          <p className="mt-6 leading-8 text-[#616161]">
            We believe successful software is built through strong
            engineering, thoughtful design and close collaboration.
            We support clients through every stage of the product lifecycle —
            from idea validation and planning to design, development,
            deployment and ongoing support.
          </p>

          <p className="mt-5 leading-8 text-[#616161]">
            Whether it's building an MVP, developing enterprise software,
            modernizing existing systems or integrating AI into business
            workflows, our focus is on reliable, scalable and user-centric
            solutions.
          </p>

        </div>

      </section>


      {/* MISSION / VISION */}

      <section className="mx-auto mt-8 grid max-w-7xl gap-8 md:grid-cols-2">

        <div className="rounded-[2rem] border border-[#DCE4EF] bg-white p-8 md:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
            Mission
          </p>

          <h2 className="mt-5 text-3xl font-bold text-[#0A183F]">
            Transforming ideas into successful digital products.
          </h2>

          <p className="mt-5 leading-8 text-[#616161]">
            Our mission is to deliver reliable, scalable and high-quality
            software solutions that help startups and businesses transform
            ideas into successful digital products.
          </p>

        </div>

        <div className="rounded-[2rem] border border-[#DCE4EF] bg-white p-8 md:p-10">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
            Vision
          </p>

          <h2 className="mt-5 text-3xl font-bold text-[#0A183F]">
            Becoming a trusted global technology partner.
          </h2>

          <p className="mt-5 leading-8 text-[#616161]">
            We aim to empower startups and businesses through innovative
            software solutions, impactful digital products and practical
            learning opportunities for future technology professionals.
          </p>

        </div>

      </section>


      {/* CORE VALUES */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="mb-10">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            Core Values
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#0A183F] md:text-5xl">
            What guides us.
          </h2>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["Innovation", "Modern technology and creative thinking."],
            ["Quality", "Secure, scalable, reliable and maintainable software."],
            ["Integrity", "Honesty, transparency and accountability."],
            ["Customer Success", "Our success is measured by our clients' success."],
            ["Collaboration", "Teamwork, communication and shared goals."],
            ["Continuous Learning", "Curiosity, improvement and lifelong learning."],
            ["Ownership", "Responsibility for our work and the value we deliver."],
            ["Scalability", "Architecting products built to handle exponential growth and user demand."],
          ].map(([title, text]) => (

            <div
              key={title}
              className="group rounded-3xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF4FF] text-[#0D47A1] transition-all duration-300 group-hover:bg-[#00E5FF] group-hover:text-[#07162f] group-hover:scale-110">
                {title === "Innovation" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <path d="m12 2 1.75 5.25L19 9l-5.25 1.75L12 16l-1.75-5.25L5 9l5.25-1.75L12 2Z" />
                  </svg>
                )}
                {title === "Quality" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
                {title === "Integrity" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                )}
                {title === "Customer Success" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                {title === "Collaboration" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                )}
                {title === "Continuous Learning" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>
                )}
                {title === "Ownership" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                )}
                {title === "Scalability" && (
                  <svg className="h-5 w-5 fill-none stroke-current stroke-[2] stroke-linejoin-round stroke-linecap-round" viewBox="0 0 24 24">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                )}
              </div>

              <h3 className="text-xl font-bold text-[#0A183F]">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#616161]">
                {text}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* INTERNSHIP */}

      <section className="mx-auto mt-24 max-w-7xl">

        <div className="overflow-hidden rounded-[2rem] bg-[#0A183F] p-8 md:p-14">

          <div className="max-w-4xl">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#42A5F5]">
              Developing Future Talent
            </p>

            <h2 className="mt-5 text-4xl font-bold text-white md:text-5xl">
              Learn technology by working on real problems.
            </h2>

            <p className="mt-6 leading-8 text-white/60">
              Through structured internship and mentorship programs,
              students and early-career engineers gain hands-on experience
              through live client projects, internal product development and
              business-focused software solutions under experienced mentors.
            </p>

          </div>

        </div>

      </section>


      {/* TAGLINE */}

      <section className="mx-auto mt-24 max-w-5xl text-center">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#0D47A1]">
          Monotonic Vector Technologies
        </p>

        <h2 className="mt-6 text-5xl font-bold text-[#0A183F] md:text-7xl">
          Every Step,
          <span className="text-[#0D47A1]"> Step Ahead.</span>
        </h2>

      </section>

    </main>
  );
}

export default About;