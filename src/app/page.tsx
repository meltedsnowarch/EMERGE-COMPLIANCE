"use client";

import { useState } from "react";

const services = [
  {
    id: "land-registry",
    title: "Land Registry Compliant Maps",
    summary:
      "Detailed large-scale maps meeting the requirements of the Property Registration Authority of Ireland.",
    description:
      "A Land Registry Compliant Map is a detailed large-scale map meeting the requirements of the Property Registration Authority of Ireland (PRAI). Required by solicitors as part of conveyancing when registering, transferring or subdividing a property. An RIAI architect surveys the site, verifies boundaries and certifies the map to PRAI standards.",
    pricing: [
      "House — €300 + VAT",
      "Apartment — €500 + VAT",
      "Outside Dublin — contact for quote",
    ],
  },
  {
    id: "opinion-compliance",
    title: "Opinion on Compliance",
    summary:
      "Confirmation that a property complies with planning permission and building regulations.",
    description:
      "An RIAI Architect's Opinion on Compliance confirms that a property complies with planning permission and building regulations. Required retrospectively where no Certificate of Compliance exists — typically where works were carried out without professional oversight at the time. Issued in the format approved by the Law Society of Ireland. Covers both planning compliance and building regulations.",
    pricing: ["€400 + VAT", "Includes site visit and planning file review"],
  },
  {
    id: "declaration-identity",
    title: "Declaration of Identity",
    summary:
      "Resolving discrepancies between deed maps, folio maps and historical mapping records.",
    description:
      "A Declaration of Identity is required where the sale of a property involves discrepancies between deed maps, folio maps and historical mapping records. An RIAI architect visits the property, analyses all mapping evidence and prepares a Declaration resolving boundary and identity issues for vendor and purchaser.",
    pricing: ["Contact for quote"],
  },
];

function ServiceCard({
  service,
  isOpen,
  onToggle,
  delayClass,
}: {
  service: (typeof services)[0];
  isOpen: boolean;
  onToggle: () => void;
  delayClass: string;
}) {
  return (
    <div
      data-design-id={`service-card-${service.id}`}
      className={`border border-stone-200 bg-white flex flex-col ${delayClass}`}
    >
      <button
        data-design-id={`service-card-${service.id}-toggle`}
        onClick={onToggle}
        className="w-full text-left px-6 py-6 flex items-start justify-between gap-4 group cursor-pointer"
      >
        <div data-design-id={`service-card-${service.id}-header`}>
          <h3
            data-design-id={`service-card-${service.id}-title`}
            className="text-base sm:text-lg font-semibold text-stone-900 tracking-tight"
          >
            {service.title}
          </h3>
          <p
            data-design-id={`service-card-${service.id}-summary`}
            className="mt-2 text-sm text-stone-500 leading-relaxed"
          >
            {service.summary}
          </p>
        </div>
        <span
          data-design-id={`service-card-${service.id}-icon`}
          className="card-icon mt-1 flex-shrink-0 w-8 h-8 flex items-center justify-center border border-stone-200 text-stone-400 group-hover:border-stone-400 group-hover:text-stone-600 transition-colors"
          data-open={isOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>

      <div
        data-design-id={`service-card-${service.id}-body`}
        className="card-body"
        data-open={isOpen}
      >
        <div className="card-body-inner">
          <div className="px-6 pb-6 border-t border-stone-100">
            <p
              data-design-id={`service-card-${service.id}-description`}
              className="mt-6 text-sm text-stone-600 leading-relaxed"
            >
              {service.description}
            </p>
            <div
              data-design-id={`service-card-${service.id}-pricing`}
              className="mt-6 pt-5 border-t border-stone-100"
            >
              <span
                data-design-id={`service-card-${service.id}-pricing-label`}
                className="text-xs font-semibold uppercase tracking-widest text-stone-400"
              >
                Pricing
              </span>
              <ul
                data-design-id={`service-card-${service.id}-pricing-list`}
                className="mt-3 space-y-1"
              >
                {service.pricing.map((line, i) => (
                  <li key={i} className="text-sm text-stone-700">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  const delayClasses = [
    "animate-fade-up-delay-1",
    "animate-fade-up-delay-2",
    "animate-fade-up-delay-3",
  ];

  return (
    <>
      {/* HERO */}
      <section
        data-design-id="hero"
        className="pt-32 pb-20 sm:pt-40 sm:pb-28 px-6"
      >
        <div
          data-design-id="hero-container"
          className="max-w-5xl mx-auto"
        >
          <div data-design-id="hero-content" className="animate-fade-up">
            <div
              data-design-id="hero-accent-line"
              className="w-12 h-px mb-8"
              style={{ background: "#c9b99a" }}
            />
            <h1
              data-design-id="hero-title"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight max-w-3xl"
            >
              Architectural services for property sales in Ireland
            </h1>
            <p
              data-design-id="hero-subtitle"
              className="mt-6 text-base sm:text-lg text-stone-500 font-light leading-relaxed max-w-xl"
            >
              Fast, reliable architectural compliance documents for solicitors
              and estate agents.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        data-design-id="services"
        id="services"
        className="py-20 sm:py-28 px-6"
        style={{ background: "#fafaf9" }}
      >
        <div
          data-design-id="services-container"
          className="max-w-5xl mx-auto"
        >
          <div
            data-design-id="services-list"
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                isOpen={openCard === service.id}
                onToggle={() => toggleCard(service.id)}
                delayClass={delayClasses[index]}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}