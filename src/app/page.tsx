export default function Home() {
  return (
    <>
      {/* HERO */}
      <section
        data-design-id="hero"
        className="pt-28 pb-8 sm:pt-36 sm:pb-10 px-6 bg-white"
      >
        <div data-design-id="hero-container" className="max-w-5xl mx-auto">
          <div data-design-id="hero-content" className="animate-fade-up">
            <div
              data-design-id="hero-accent-line"
              className="w-12 h-px mb-8"
              style={{ background: "#c9b99a" }}
            />
            <h1
              data-design-id="hero-title"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-900 tracking-tight leading-tight whitespace-nowrap"
            >
              Architectural services for property sales in Ireland
            </h1>
            <p
              data-design-id="hero-subtitle"
              className="mt-4 text-sm sm:text-base text-stone-500 font-light leading-relaxed whitespace-nowrap"
            >
              Fast, reliable architectural compliance documents for solicitors and estate agents.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-design-id="services"
        id="services"
        className="py-12 sm:py-16 px-6 bg-white"
      >
        <div data-design-id="services-container" className="max-w-5xl mx-auto">
          <div
            data-design-id="services-list"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {/* CARD 1 */}
            <details
              data-design-id="service-card-land-registry"
              className="service-card border border-stone-200 animate-fade-up-delay-1"
              style={{ background: "#F4EFE4" }}
            >
              <summary
                data-design-id="service-card-land-registry-toggle"
                className="px-6 py-6 flex items-center justify-between gap-4 cursor-pointer list-none"
              >
                <h3
                  data-design-id="service-card-land-registry-title"
                  className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight whitespace-nowrap"
                >
                  Land Registry Compliant Maps
                </h3>
                <span
                  data-design-id="service-card-land-registry-icon"
                  className="service-card-icon flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div data-design-id="service-card-land-registry-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-land-registry-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  A Land Registry Compliant Map is a detailed large-scale map meeting the requirements of the Property Registration Authority of Ireland (PRAI). Required by solicitors as part of conveyancing when registering, transferring or subdividing a property. An RIAI architect surveys the site, verifies boundaries and certifies the map to PRAI standards.
                </p>
                <div data-design-id="service-card-land-registry-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-land-registry-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">Pricing</span>
                  <ul data-design-id="service-card-land-registry-pricing-list" className="mt-3 space-y-1">
                    <li data-design-id="service-card-land-registry-price-1" className="text-sm text-stone-700">House — €300 + VAT</li>
                    <li data-design-id="service-card-land-registry-price-2" className="text-sm text-stone-700">Apartment — €500 + VAT</li>
                    <li data-design-id="service-card-land-registry-price-3" className="text-sm text-stone-700">Outside Dublin — contact for quote</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* CARD 2 */}
            <details
              data-design-id="service-card-opinion-compliance"
              className="service-card border border-stone-200 animate-fade-up-delay-2"
              style={{ background: "#F7F3EB" }}
            >
              <summary
                data-design-id="service-card-opinion-compliance-toggle"
                className="px-6 py-6 flex items-center justify-between gap-4 cursor-pointer list-none"
              >
                <h3
                  data-design-id="service-card-opinion-compliance-title"
                  className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight whitespace-nowrap"
                >
                  Opinion on Compliance
                </h3>
                <span
                  data-design-id="service-card-opinion-compliance-icon"
                  className="service-card-icon flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div data-design-id="service-card-opinion-compliance-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-opinion-compliance-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  An RIAI Architect&apos;s Opinion on Compliance confirms that a property complies with planning permission and building regulations. Required retrospectively where no Certificate of Compliance exists — typically where works were carried out without professional oversight at the time. Issued in the format approved by the Law Society of Ireland. Covers both planning compliance and building regulations.
                </p>
                <div data-design-id="service-card-opinion-compliance-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-opinion-compliance-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">Pricing</span>
                  <ul data-design-id="service-card-opinion-compliance-pricing-list" className="mt-3 space-y-1">
                    <li data-design-id="service-card-opinion-compliance-price-1" className="text-sm text-stone-700">€400 + VAT</li>
                    <li data-design-id="service-card-opinion-compliance-price-2" className="text-sm text-stone-700">Includes site visit and planning file review</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* CARD 3 */}
            <details
              data-design-id="service-card-declaration-identity"
              className="service-card border border-stone-200 animate-fade-up-delay-3"
              style={{ background: "#FAF8F3" }}
            >
              <summary
                data-design-id="service-card-declaration-identity-toggle"
                className="px-6 py-6 flex items-center justify-between gap-4 cursor-pointer list-none"
              >
                <h3
                  data-design-id="service-card-declaration-identity-title"
                  className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight whitespace-nowrap"
                >
                  Declaration of Identity
                </h3>
                <span
                  data-design-id="service-card-declaration-identity-icon"
                  className="service-card-icon flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </summary>
              <div data-design-id="service-card-declaration-identity-expanded" className="px-6 pb-6 border-t border-stone-200/60">
                <p data-design-id="service-card-declaration-identity-description" className="mt-6 text-sm text-stone-600 leading-relaxed">
                  A Declaration of Identity is required where the sale of a property involves discrepancies between deed maps, folio maps and historical mapping records. An RIAI architect visits the property, analyses all mapping evidence and prepares a Declaration resolving boundary and identity issues for vendor and purchaser.
                </p>
                <div data-design-id="service-card-declaration-identity-pricing" className="mt-6 pt-5 border-t border-stone-200/60">
                  <span data-design-id="service-card-declaration-identity-pricing-label" className="text-xs font-semibold uppercase tracking-widest text-stone-400">Pricing</span>
                  <ul data-design-id="service-card-declaration-identity-pricing-list" className="mt-3 space-y-1">
                    <li data-design-id="service-card-declaration-identity-price-1" className="text-sm text-stone-700">Contact for quote</li>
                  </ul>
                </div>
              </div>
            </details>

          </div>
        </div>
      </section>
    </>
  );
}