"use client";

import Image from "next/image";
import { SERVICES } from "@/lib/services";

export default function ContactPage() {
  return (
    <section className="px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="mb-12 animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
            Contact
          </p>
          <div className="w-8 h-px mb-7" style={{ background: "#c9b99a" }} />
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mb-3">
            Get a Quote
          </h1>
          <p className="text-sm text-stone-500 font-light leading-relaxed max-w-md">
            Send us the property address and the service required. We will confirm
            availability and provide a fixed fee the same day.
          </p>
        </div>

        {/* ── Grid ───────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 animate-fade-up-delay-1">

          {/* ── Left — Bio & contact ─────────────────────────────────── */}
          <div>
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 flex-shrink-0 overflow-hidden">
                <Image
                  src="/james-lawler.jpeg"
                  alt="James Lawler MRIAI"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="pt-1">
                <h2 className="text-sm font-semibold text-stone-900">
                  James Lawler MRIAI
                </h2>
                <p className="mt-0.5 text-xs text-stone-500">
                  Registered Architect
                </p>
              </div>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed mb-8">
              James Lawler MRIAI is a Dublin-based RIAI registered architect with
              over 30 years of professional experience, providing architectural
              compliance documentation for solicitors and estate agents throughout
              Ireland.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-10 flex-shrink-0">
                  Tel
                </span>
                <a
                  href="tel:0834516091"
                  className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  083 451 6091
                </a>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold uppercase tracking-widest text-stone-400 w-10 flex-shrink-0">
                  Email
                </span>
                <a
                  href="mailto:meltedsnowarch@protonmail.com"
                  className="text-sm text-stone-700 hover:text-stone-900 transition-colors"
                >
                  meltedsnowarch@protonmail.com
                </a>
              </div>
            </div>

            <Image
              src="/riai-badge.jpg"
              alt="RIAI Practice Member 2026"
              width={120}
              height={60}
              className="object-contain"
            />
          </div>

          {/* ── Right — Enquiry form ─────────────────────────────────── */}
          <div>
            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = data.get("name") ?? "";
                const email = data.get("email") ?? "";
                const service = data.get("service") ?? "General enquiry";
                const property = data.get("property") ?? "";
                const message = data.get("message") ?? "";
                const body = [
                  `Service: ${service}`,
                  `Property: ${property}`,
                  "",
                  message,
                  "",
                  `From: ${name} (${email})`,
                ]
                  .join("%0A")
                  .replace(/ /g, "%20");
                window.location.href = `mailto:meltedsnowarch@protonmail.com?subject=Enquiry%3A%20${encodeURIComponent(String(service))}%20%E2%80%94%20${encodeURIComponent(String(name))}&body=${body}`;
              }}
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="form-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Phone <span className="normal-case font-normal text-stone-300">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                />
              </div>

              {/* Service */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  className="form-input appearance-none"
                >
                  <option value="">Select a service&hellip;</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>
                      {s.title} — {s.price}
                    </option>
                  ))}
                  <option value="Not sure">Not sure — please advise</option>
                </select>
              </div>

              {/* Property address */}
              <div>
                <label
                  htmlFor="property"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Property Address
                </label>
                <input
                  type="text"
                  id="property"
                  name="property"
                  placeholder="Eircode or full address"
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2"
                >
                  Additional Notes <span className="normal-case font-normal text-stone-300">(optional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="form-input resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Enquiry
              </button>

              <p className="text-xs text-stone-400 leading-relaxed">
                We will respond by phone or email, usually within a few hours. For urgent matters call{" "}
                <a href="tel:0834516091" className="hover:text-stone-700 transition-colors underline">
                  083 451 6091
                </a>{" "}
                directly.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
