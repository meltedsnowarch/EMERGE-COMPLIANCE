import Link from "next/link";
import {
  SERVICES,
  CATEGORY_ORDER,
  CATEGORY_LABELS,
  getServicesByCategory,
} from "@/lib/services";

const DELAY = [
  "animate-fade-up-delay-1",
  "animate-fade-up-delay-2",
  "animate-fade-up-delay-3",
  "animate-fade-up-delay-4",
] as const;

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Submit your enquiry",
    body: "Contact us by phone or email with the property address and the service required. We will respond the same day.",
  },
  {
    step: "02",
    title: "We confirm the details",
    body: "We review the property details and confirm the exact service needed, the fixed fee, and availability for a survey.",
  },
  {
    step: "03",
    title: "Survey within 48 hours",
    body: "Our RIAI architect attends the property to carry out a visual inspection of the works or to survey the boundaries.",
  },
  {
    step: "04",
    title: "Certificate issued same day",
    body: "The signed, certified document is issued to your solicitor or estate agent on the same day as the site survey.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        data-design-id="hero"
        className="border-b border-stone-100 px-6 pt-20 pb-20 sm:pt-28 sm:pb-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-7">
              RIAI Registered Architect &middot; Dublin &middot; Ireland
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold text-stone-900 tracking-tight leading-tight">
              Architectural compliance documents for property transactions in Ireland.
            </h1>
            <p className="mt-5 text-base text-stone-500 font-light leading-relaxed max-w-xl">
              We provide Land Registry maps, Opinions on Compliance, Planning Certificates, and Declarations of Identity for solicitors and estate agents — with a 48-hour turnaround on most services.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="#services" className="btn-ghost">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────── */}
      <section
        data-design-id="services"
        id="services"
        className="border-b border-stone-100 px-6 py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-10 animate-fade-up">
            Services
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x divide-stone-100">
            {CATEGORY_ORDER.map((category, i) => {
              const services = getServicesByCategory(category);
              return (
                <div
                  key={category}
                  className={[
                    DELAY[i],
                    i === 0 ? "pb-10 md:pb-0 md:pr-10" : "",
                    i === 1 ? "py-10 md:py-0 md:px-10 border-t md:border-t-0 border-stone-100" : "",
                    i === 2 ? "pt-10 md:pt-0 md:pl-10 border-t md:border-t-0 border-stone-100" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {/* Column label */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-5">
                    {CATEGORY_LABELS[category]}
                  </p>

                  {/* Service rows */}
                  <ul>
                    {services.map((service) => (
                      <li key={service.slug}>
                        <Link
                          href={`/services/${service.slug}`}
                          className="service-row group"
                        >
                          <span className="service-row-title">
                            {service.title}
                          </span>
                          <span className="service-row-price">
                            {service.price}&ensp;&rarr;
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────── */}
      <section
        data-design-id="how-it-works"
        id="how-it-works"
        className="border-b border-stone-100 bg-stone-50 px-6 py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-10 animate-fade-up">
            How it works
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={item.step} className={DELAY[i]}>
                <p className="text-4xl font-bold text-stone-200 mb-5 tracking-tight leading-none">
                  {item.step}
                </p>
                <h3 className="text-sm font-semibold text-stone-900 mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────── */}
      <section
        data-design-id="cta"
        className="px-6 py-16 sm:py-20"
      >
        <div className="max-w-5xl mx-auto animate-fade-up">
          <div
            className="w-8 h-px mb-7"
            style={{ background: "#c9b99a" }}
          />
          <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-4">
            Ready to proceed?
          </h2>
          <p className="text-sm text-stone-500 font-light leading-relaxed max-w-md mb-8">
            Most compliance documents are issued on the same day as the site survey. Call or email to instruct, or submit an online enquiry.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Get a Quote
            </Link>
            <a href="tel:0834516091" className="btn-ghost">
              083 451 6091
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
