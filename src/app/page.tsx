import Link from "next/link";

/* ── Icon helpers ────────────────────────────────────────────────────────── */
function PlusIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="1.5"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

/* ── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section
        data-design-id="hero"
        className="pt-32 pb-12 sm:pt-40 sm:pb-16 px-6"
        style={{ background: "#F4EFE4" }}
      >
        <div data-design-id="hero-container" className="max-w-5xl mx-auto">
          <div data-design-id="hero-content" className="animate-fade-up max-w-2xl">
            <div
              data-design-id="hero-accent-line"
              className="w-12 h-px mb-8"
              style={{ background: "#c9b99a" }}
            />
            <h1
              data-design-id="hero-title"
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight"
            >
              Architectural services for property transactions in Ireland
            </h1>
            <p
              data-design-id="hero-subtitle"
              className="mt-5 text-sm sm:text-base text-stone-600 font-light leading-relaxed max-w-xl"
            >
              Land Registry maps, Opinions on Compliance and Declarations of Identity — prepared by an RIAI registered architect for solicitors and estate agents across Ireland.
            </p>
            <div data-design-id="hero-cta" className="mt-8 flex flex-wrap gap-3">
              <Link href="/#services" className="btn-primary">
                Our Services
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <section
        data-design-id="trust-bar"
        className="border-y border-stone-200 px-6 py-5"
        style={{ background: "#FAF8F3" }}
      >
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-wrap justify-center sm:justify-between gap-x-8 gap-y-3">
            {[
              "RIAI Registered Architect",
              "30+ Years Experience",
              "Dublin Based · Nationwide",
              "Law Society Approved Format",
              "Fast Turnaround",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-xs text-stone-500 font-medium tracking-wide">
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#c9b99a" }} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section
        data-design-id="services"
        id="services"
        className="py-16 sm:py-20 px-6 bg-white"
      >
        <div data-design-id="services-container" className="max-w-5xl mx-auto">

          {/* Section header */}
          <div className="mb-10 animate-fade-up">
            <div className="w-12 h-px mb-6" style={{ background: "#c9b99a" }} />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              Services
            </h2>
            <p className="mt-2 text-sm text-stone-500 font-light leading-relaxed max-w-lg">
              Three core compliance documents required by solicitors and estate agents at the point of property sale or transfer.
            </p>
          </div>

          <div
            data-design-id="services-list"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >

            {/* ── CARD 1 — Land Registry Compliant Maps ─────────────────── */}
            <details
              data-design-id="service-card-land-registry"
              className="service-card border border-stone-200 animate-fade-up-delay-1"
              style={{ background: "#F4EFE4" }}
            >
              <summary
                data-design-id="service-card-land-registry-toggle"
                className="px-6 py-6 flex items-start justify-between gap-4 cursor-pointer list-none"
              >
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    01
                  </span>
                  <h3
                    data-design-id="service-card-land-registry-title"
                    className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight leading-snug"
                  >
                    Land Registry Compliant Maps
                  </h3>
                </div>
                <span
                  data-design-id="service-card-land-registry-icon"
                  className="service-card-icon flex-shrink-0 mt-6 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <PlusIcon />
                </span>
              </summary>
              <div data-design-id="service-card-land-registry-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-land-registry-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  A Land Registry Compliant Map is a detailed large-scale map that meets the requirements of the Property Registration Authority of Ireland (PRAI). Required by solicitors as part of conveyancing when registering, transferring, or subdividing a property. An RIAI architect surveys the site, verifies boundaries, and certifies the map to PRAI standards.
                </p>
                <div data-design-id="service-card-land-registry-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-land-registry-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Pricing
                  </span>
                  <ul data-design-id="service-card-land-registry-pricing-list" className="mt-3 space-y-1.5">
                    <li className="text-sm text-stone-700">House — €300 + VAT</li>
                    <li className="text-sm text-stone-700">Apartment — €500 + VAT</li>
                    <li className="text-sm text-stone-500 italic">Outside Dublin — contact for quote</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary text-xs">
                    Enquire
                  </Link>
                </div>
              </div>
            </details>

            {/* ── CARD 2 — RIAI Opinions on Compliance ─────────────────── */}
            <details
              data-design-id="service-card-opinion-compliance"
              className="service-card border border-stone-200 animate-fade-up-delay-2"
              style={{ background: "#F7F3EB" }}
            >
              <summary
                data-design-id="service-card-opinion-compliance-toggle"
                className="px-6 py-6 flex items-start justify-between gap-4 cursor-pointer list-none"
              >
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    02
                  </span>
                  <h3
                    data-design-id="service-card-opinion-compliance-title"
                    className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight leading-snug"
                  >
                    RIAI Opinions on Compliance with Building Regulations
                  </h3>
                </div>
                <span
                  data-design-id="service-card-opinion-compliance-icon"
                  className="service-card-icon flex-shrink-0 mt-6 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <PlusIcon />
                </span>
              </summary>
              <div data-design-id="service-card-opinion-compliance-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-opinion-compliance-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  An RIAI Architect&apos;s Opinion on Compliance confirms that a property complies with planning permission and building regulations. Required retrospectively where no Certificate of Compliance exists — typically where works were carried out without professional oversight at the time. Issued in the format approved by the Law Society of Ireland. Covers both planning compliance and building regulations.
                </p>
                <div data-design-id="service-card-opinion-compliance-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-opinion-compliance-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Pricing
                  </span>
                  <ul data-design-id="service-card-opinion-compliance-pricing-list" className="mt-3 space-y-1.5">
                    <li className="text-sm text-stone-700">€400 + VAT</li>
                    <li className="text-sm text-stone-500">Includes site visit and planning file review</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary text-xs">
                    Enquire
                  </Link>
                </div>
              </div>
            </details>

            {/* ── CARD 3 — Declaration of Identity ─────────────────────── */}
            <details
              data-design-id="service-card-declaration-identity"
              className="service-card border border-stone-200 animate-fade-up-delay-3"
              style={{ background: "#FAF8F3" }}
            >
              <summary
                data-design-id="service-card-declaration-identity-toggle"
                className="px-6 py-6 flex items-start justify-between gap-4 cursor-pointer list-none"
              >
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    03
                  </span>
                  <h3
                    data-design-id="service-card-declaration-identity-title"
                    className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight leading-snug"
                  >
                    Declaration of Identity
                  </h3>
                </div>
                <span
                  data-design-id="service-card-declaration-identity-icon"
                  className="service-card-icon flex-shrink-0 mt-6 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <PlusIcon />
                </span>
              </summary>
              <div data-design-id="service-card-declaration-identity-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-declaration-identity-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  A Declaration of Identity is required where the sale of a property involves discrepancies between deed maps, folio maps, and historical mapping records. An RIAI architect visits the property, analyses all mapping evidence, and prepares a Declaration resolving boundary and identity issues for vendor and purchaser.
                </p>
                <div data-design-id="service-card-declaration-identity-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-declaration-identity-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                    Pricing
                  </span>
                  <ul data-design-id="service-card-declaration-identity-pricing-list" className="mt-3 space-y-1.5">
                    <li className="text-sm text-stone-500 italic">Contact for quote</li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="btn-primary text-xs">
                    Enquire
                  </Link>
                </div>
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section
        data-design-id="process"
        id="process"
        className="py-16 sm:py-20 px-6 border-t border-stone-100"
        style={{ background: "#F7F3EB" }}
      >
        <div className="max-w-5xl mx-auto">

          <div className="mb-12 animate-fade-up">
            <div className="w-12 h-px mb-6" style={{ background: "#c9b99a" }} />
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              How it works
            </h2>
            <p className="mt-2 text-sm text-stone-500 font-light leading-relaxed max-w-lg">
              A straightforward process designed around the pace of conveyancing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">

            <div data-design-id="process-step-1" className="process-step animate-fade-up-delay-1">
              <div className="w-8 h-8 flex items-center justify-center border border-stone-300 text-xs font-bold text-stone-600 mb-5">
                1
              </div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-tight mb-3">
                Send your instructions
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                Email or call with the property address and the document required. We will confirm availability and provide a fixed fee within the day.
              </p>
            </div>

            <div data-design-id="process-step-2" className="process-step animate-fade-up-delay-2">
              <div className="w-8 h-8 flex items-center justify-center border border-stone-300 text-xs font-bold text-stone-600 mb-5">
                2
              </div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-tight mb-3">
                Site survey &amp; file review
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                James Lawler MRIAI visits the property, surveys boundaries or inspects works, and reviews the planning file and mapping records as required for the service.
              </p>
            </div>

            <div data-design-id="process-step-3" className="process-step animate-fade-up-delay-3">
              <div className="w-8 h-8 flex items-center justify-center border border-stone-300 text-xs font-bold text-stone-600 mb-5">
                3
              </div>
              <h3 className="text-sm font-semibold text-stone-900 tracking-tight mb-3">
                Certified document issued
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed">
                The completed, signed, and certified document is issued to the solicitor or estate agent — ready to be included in the title pack or listing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section
        data-design-id="about"
        id="about"
        className="py-16 sm:py-20 px-6 bg-white border-t border-stone-100"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Left — text */}
            <div className="animate-fade-up">
              <div className="w-12 h-px mb-6" style={{ background: "#c9b99a" }} />
              <h2 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                About EMERGE Legal
              </h2>
              <p className="mt-5 text-sm text-stone-600 leading-relaxed">
                EMERGE Legal is the property compliance service of James Lawler MRIAI, a Dublin-based RIAI registered architect with over 30 years of professional experience.
              </p>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                The practice specialises exclusively in the architectural documents required at the point of property sale — Land Registry Compliant Maps, RIAI Opinions on Compliance with Building Regulations, and Declarations of Identity. Working directly with solicitors and estate agents, EMERGE Legal provides fast, accurate, and professionally certified compliance documents that enable transactions to proceed without delay.
              </p>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                All opinions and maps are issued in formats approved by the Law Society of Ireland and the Property Registration Authority of Ireland. Based in Dublin, the practice serves clients throughout the Republic of Ireland.
              </p>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Contact James
                </Link>
              </div>
            </div>

            {/* Right — credentials */}
            <div className="animate-fade-up-delay-2">
              <dl className="space-y-6">
                {[
                  {
                    term: "Qualification",
                    detail: "MRIAI — Member of the Royal Institute of the Architects of Ireland",
                  },
                  {
                    term: "Experience",
                    detail: "30+ years as a practising architect in Ireland",
                  },
                  {
                    term: "Registration",
                    detail: "RIAI Registered Practice Member 2026",
                  },
                  {
                    term: "Documents issued to",
                    detail: "Solicitors, estate agents, and property developers across Ireland",
                  },
                  {
                    term: "Coverage",
                    detail: "Dublin (fixed fees) · Nationwide (contact for quote)",
                  },
                ].map(({ term, detail }) => (
                  <div key={term} className="border-l-2 pl-5" style={{ borderColor: "#c9b99a" }}>
                    <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-1">
                      {term}
                    </dt>
                    <dd className="text-sm text-stone-700 leading-relaxed">{detail}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────────────────────── */}
      <section
        data-design-id="cta-band"
        className="py-14 px-6 border-t border-stone-200"
        style={{ background: "#F4EFE4" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 animate-fade-up">
          <div>
            <p className="text-base font-bold text-stone-900 tracking-tight">
              Ready to instruct?
            </p>
            <p className="mt-1 text-sm text-stone-500 font-light">
              Get a fixed-fee quote within the day. No obligation.
            </p>
          </div>
          <Link href="/contact" className="btn-primary flex-shrink-0">
            Get in Touch
          </Link>
        </div>
      </section>

    </>
  );
}