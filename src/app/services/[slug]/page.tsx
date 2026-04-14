import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  SERVICES,
  CATEGORY_LABELS,
  getServiceBySlug,
} from "@/lib/services";

/* ── Static params ──────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ───────────────────────────────────────────────────────────── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: `${service.description.slice(0, 155)}…`,
  };
}

/* ── Page ───────────────────────────────────────────────────────────────── */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const categoryLabel = CATEGORY_LABELS[service.category];

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto">

        {/* ── Breadcrumb ─────────────────────────────────────────────── */}
        <div className="mb-12 animate-fade-up">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; {categoryLabel}
          </Link>
        </div>

        {/* ── Content grid ───────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">

          {/* Left — description (2/3 width) */}
          <div className="md:col-span-2 animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-4">
              {categoryLabel}
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-tight mb-8">
              {service.title}
            </h1>
            <p className="text-sm text-stone-600 leading-[1.8]">
              {service.description}
            </p>

            {service.turnaround && (
              <p className="mt-6 text-sm font-medium text-stone-800">
                {service.turnaround}.
              </p>
            )}

            <div className="mt-10 pt-8 border-t border-stone-100">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>
          </div>

          {/* Right — fee card (1/3 width) */}
          <div className="animate-fade-up-delay-1">
            <div className="border border-stone-100 p-6 space-y-7">

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                  Fee
                </p>
                <p className="text-3xl font-bold text-stone-900 tracking-tight">
                  {service.price}
                </p>
              </div>

              {service.turnaround && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                    Turnaround
                  </p>
                  <p className="text-sm text-stone-700 font-medium">
                    {service.turnaround}
                  </p>
                </div>
              )}

              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-2">
                  Prepared by
                </p>
                <p className="text-sm text-stone-700 leading-relaxed">
                  James Lawler MRIAI
                  <br />
                  RIAI Registered Architect
                  <br />
                  Dublin, Ireland
                </p>
              </div>

              <div className="pt-1">
                <Link href="/contact" className="btn-primary block text-center">
                  Get a Quote
                </Link>
              </div>

              <div className="pt-2 border-t border-stone-100">
                <p className="text-xs text-stone-400 leading-relaxed">
                  Documents issued in the Law Society of Ireland standard format. Accepted by all major banks and the Property Registration Authority of Ireland.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* ── Related / back ─────────────────────────────────────────── */}
        <div className="mt-16 pt-10 border-t border-stone-100 animate-fade-up-delay-2">
          <Link
            href="/#services"
            className="text-xs font-semibold uppercase tracking-widest text-stone-400 hover:text-stone-900 transition-colors"
          >
            &larr; Back to all services
          </Link>
        </div>

      </div>
    </div>
  );
}