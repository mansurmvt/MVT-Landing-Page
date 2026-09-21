import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Save submission locally for standalone frontend mode
    try {
      const existing = JSON.parse(localStorage.getItem("mvt_inquiries") || "[]");
      existing.push({
        ...form,
        submittedAt: new Date().toISOString(),
      });
      localStorage.setItem("mvt_inquiries", JSON.stringify(existing));
    } catch {
      // ignore storage errors
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL;
      if (apiUrl) {
        await fetch(`${apiUrl}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      } else {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
    } catch (err) {
      console.warn("Backend offline, running in pure client-side frontend mode:", err);
    }

    setStatus("success");
    setForm({
      firstName: "",
      email: "",
      message: "",
    });
  };

  /* MESSAGE SENT SCREEN */

  if (status === "success") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#F5F7FA] px-6 pt-20">

        <div className="w-full max-w-2xl rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-16">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#EAF4FF] text-3xl text-[#0D47A1]">
            ✓
          </div>

          <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            Query Sent
          </p>

          <h1 className="mt-4 text-4xl font-bold text-[#0A183F] md:text-5xl">
            Message received.
          </h1>

          <p className="mx-auto mt-5 max-w-lg leading-8 text-[#616161]">
            Thank you for reaching out to Monotonic Vector Technologies.
            Our team will get back to you soon.
          </p>

          <a
            href="/"
            className="mt-8 inline-flex rounded-full bg-[#0A183F] px-7 py-3.5 font-bold text-white transition hover:-translate-y-1 hover:bg-[#0D47A1]"
          >
            Back to Home →
          </a>

        </div>

      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F5F7FA] px-6 pb-24 pt-32">

      <section className="mx-auto max-w-7xl">

        {/* HEADER */}

        <div className="max-w-4xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#0D47A1]">
            Contact MVT
          </p>

          <h1 className="mt-5 text-5xl font-bold leading-tight text-[#0A183F] md:text-7xl">
            Let's turn your
            <span className="block text-[#0D47A1]">
              idea into reality.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[#616161]">
            Tell us what you're building, what you're trying to solve,
            or simply share your idea with us.
          </p>

        </div>


        {/* FORM + INFO */}

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] bg-white p-7 shadow-sm md:p-10"
          >

            <div className="grid gap-6 md:grid-cols-2">

              {/* FIRST NAME */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0A183F]">
                  First Name
                </label>

                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                  className="w-full rounded-2xl border border-[#DCE4EF] bg-[#F8FAFC] px-5 py-4 text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
                />
              </div>


              {/* EMAIL */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#0A183F]">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-2xl border border-[#DCE4EF] bg-[#F8FAFC] px-5 py-4 text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
                />
              </div>

            </div>


            {/* MESSAGE */}

            <div className="mt-6">

              <label className="mb-2 block text-sm font-semibold text-[#0A183F]">
                Your Query
              </label>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your idea..."
                required
                rows="7"
                className="w-full resize-none rounded-2xl border border-[#DCE4EF] bg-[#F8FAFC] px-5 py-4 text-[#0A183F] outline-none transition placeholder:text-[#A0A8B3] focus:border-[#0D47A1] focus:bg-white focus:ring-4 focus:ring-[#0D47A1]/10"
              />

            </div>


            {/* ERROR */}

            {status === "error" && (
              <div className="mt-5 rounded-2xl bg-red-50 px-5 py-4 text-sm text-red-600">
                Unable to send right now. Please try again later.
              </div>
            )}


            {/* BUTTON */}

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-[#0A183F] px-6 py-4 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#0D47A1] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  Send Query
                  <span>→</span>
                </>
              )}
            </button>

          </form>


          {/* INFO */}

          <div className="flex flex-col gap-6">

            <div className="rounded-[2rem] bg-[#0A183F] p-8 text-white">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#42A5F5]">
                MVT
              </p>

              <h2 className="mt-5 text-3xl font-bold">
                Every Step,
                <span className="text-[#42A5F5]">
                  {" "}
                  Step Ahead.
                </span>
              </h2>

              <p className="mt-5 leading-7 text-white/60">
                Start a conversation with our team and explore how we
                can help transform your idea into a digital product.
              </p>

            </div>


            <div className="rounded-[2rem] bg-white p-8 shadow-sm">

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0D47A1]">
                Reach Us
              </p>

              <div className="mt-7 space-y-6">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Email
                  </p>

                  <p className="mt-1 font-medium text-[#0A183F]">
                    monotonicvector@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Phone
                  </p>

                  <p className="mt-1 font-medium text-[#0A183F]">
                    +91 9346788683
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#999]">
                    Location
                  </p>

                  <p className="mt-1 font-medium text-[#0A183F]">
                    Bangalore, Karnataka, 560049
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;