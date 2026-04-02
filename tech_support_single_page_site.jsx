export default function TechSupportLandingPage() {
  const services = [
    {
      title: "Computer Repair",
      description:
        "Fix slow PCs, startup problems, crashes, software issues, and general system cleanup.",
    },
    {
      title: "Home & Small Business Setup",
      description:
        "Wi-Fi setup, printer installation, new device setup, email configuration, and network troubleshooting.",
    },
    {
      title: "Virus & Scam Cleanup",
      description:
        "Remove malware, lock down devices, and help prevent future scams and security headaches.",
    },
    {
      title: "Remote Support",
      description:
        "Fast remote help for many software and account problems without waiting for an on-site visit.",
    },
  ];

  const highlights = [
    "Friendly, patient support",
    "Plain-English explanations",
    "Affordable local service",
    "Remote and on-site help",
  ];

  const steps = [
    {
      step: "1",
      title: "Tell me the problem",
      description:
        "Call, text, or send a message with what is happening and what device you use.",
    },
    {
      step: "2",
      title: "Get a clear plan",
      description:
        "You get straightforward next steps, pricing clarity, and the fastest path to a fix.",
    },
    {
      step: "3",
      title: "Get back to normal",
      description:
        "Your tech gets repaired, secured, or set up so you can stop wasting time on it.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_top_left,rgba(16,185,129,0.14),transparent_25%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                Local Tech Support • Remote & On-Site
              </div>
              <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Tech support that fixes the problem without the jargon.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Fast, honest help for computers, Wi-Fi, printers, email, security issues,
                and everyday tech headaches. Built for homeowners, seniors, and small
                businesses that want dependable support from a real person.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-2xl bg-cyan-400 px-6 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:scale-[1.02]"
                >
                  Book Support
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                >
                  View Services
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:justify-self-end">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="rounded-[24px] border border-cyan-400/20 bg-slate-900 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Now helping with</p>
                      <h2 className="text-2xl font-semibold">Everyday tech emergencies</h2>
                    </div>
                    <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-sm text-emerald-300">
                      Available Today
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Laptop running painfully slow",
                      "Wi-Fi keeps dropping",
                      "Printer won’t connect",
                      "Pop-ups, scams, or virus warnings",
                      "Need help setting up a new computer",
                    ].map((issue) => (
                      <div
                        key={issue}
                        className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-slate-200"
                      >
                        {issue}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/15 to-emerald-400/15 p-4">
                    <p className="text-sm text-slate-300">Simple promise</p>
                    <p className="mt-1 text-lg font-semibold">
                      Clear advice, fair pricing, and fixes that actually stick.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Support for the problems people actually have</h2>
          <p className="mt-4 text-lg text-slate-300">
            This page is built to convert quickly: clear services, trust-building copy,
            and a simple path to contact you.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20"
            >
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Why customers choose you
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                People want reassurance before they hand over their tech.
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-slate-300">
                That means your site should feel calm, trustworthy, and practical — not
                flashy for no reason. This layout is designed to do exactly that.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Patient help for non-technical customers",
                "Support for Windows, printers, routers, and email",
                "Home visits when remote help is not enough",
                "Straightforward communication from start to finish",
              ].map((point) => (
                <div
                  key={point}
                  className="rounded-[22px] border border-white/10 bg-slate-900/80 p-5 text-sm leading-7 text-slate-200"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Make it easy for people to hire you</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((item) => (
            <div
              key={item.step}
              className="rounded-[26px] border border-white/10 bg-gradient-to-b from-white/8 to-white/3 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400 font-bold text-slate-950">
                {item.step}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-[32px] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-slate-900 to-emerald-400/10 p-8 shadow-2xl shadow-cyan-900/10 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  Contact
                </p>
                <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                  Ready to get your tech working again?
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-200">
                  Add your real phone number, email, service area, and hours here. Keep it
                  simple. The goal is to make contacting you feel easy and low-risk.
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-slate-950/70 p-6">
                <div className="space-y-4 text-sm text-slate-200">
                  <div>
                    <p className="text-slate-400">Phone</p>
                    <p className="mt-1 text-lg font-semibold">(555) 123-4567</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Email</p>
                    <p className="mt-1 text-lg font-semibold">help@yourtechsupport.com</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Service Area</p>
                    <p className="mt-1 text-lg font-semibold">Your City and nearby areas</p>
                  </div>
                  <a
                    href="mailto:help@yourtechsupport.com"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-white px-5 py-3 text-base font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Email for Help
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
