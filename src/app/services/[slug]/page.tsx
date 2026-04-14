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

            <div className="mt-10 pt-8 border-t border-stone-100">
              <Link
                href="/contact"
                className="text-sm font-semibold text-stone-900 hover:text-stone-600 transition-colors"
              >
                Contact me to enquire
              </Link>
            </div>
          </div>

          {/* Right — sidebar (1/3 width) */}
          <div className="animate-fade-up-delay-1">
            <div className="border border-stone-100 p-6 space-y-6">
              <p className="text-sm text-stone-700 leading-relaxed">
                Prepared by James Lawler, RIAI Registered Architect, Dublin, Ireland.
              </p>
              <Link href="/contact" className="btn-primary block text-center">
                Book Now
              </Link>
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