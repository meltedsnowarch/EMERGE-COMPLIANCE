import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "EMERGE Legal — Architectural Compliance Services Ireland",
    template: "%s | EMERGE Legal",
  },
  description:
    "Architectural compliance documents for solicitors and estate agents across Ireland. Land Registry maps, Opinions on Compliance, Planning Certificates, and Declarations of Identity. RIAI registered architect. 48-hour turnaround.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <head>
        <script
          data-design-ignore="true"
          dangerouslySetInnerHTML={{
            __html: `(function(){if(window===window.parent||window.__DESIGN_NAV_REPORTER__)return;window.__DESIGN_NAV_REPORTER__=true;function report(){try{window.parent.postMessage({type:'IFRAME_URL_CHANGE',payload:{url:location.origin+location.pathname+location.hash}},'*')}catch(e){}}report();var ps=history.pushState,rs=history.replaceState;history.pushState=function(){ps.apply(this,arguments);report()};history.replaceState=function(){rs.apply(this,arguments);report()};window.addEventListener('popstate',report);window.addEventListener('hashchange',report);window.addEventListener('load',report)})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white">

        {/* ── HEADER / NAV ─────────────────────────────────────────────── */}
        <header
          data-design-id="nav"
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100"
        >
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <Link
              data-design-id="nav-logo"
              href="/"
              className="text-base tracking-tight text-stone-900 hover:opacity-80 transition-opacity"
            >
              <span className="font-bold">EMERGE</span>
              <span className="font-light"> Legal</span>
            </Link>

            <nav
              data-design-id="nav-links"
              className="flex items-center gap-6 sm:gap-8"
            >
              <Link
                href="/#services"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
              >
                Services
              </Link>
              <Link
                href="/#how-it-works"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors hidden sm:block"
              >
                How it works
              </Link>
              <Link
                href="/contact"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main data-design-id="main" className="flex-1 pt-16">
          {children}
        </main>

        {/* ── FOOTER ───────────────────────────────────────────────────── */}
        <footer
          data-design-id="footer"
          className="border-t border-stone-100 bg-white py-10 px-6"
        >
          <div className="max-w-5xl mx-auto">

            {/* Main footer row */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 mb-10">

              {/* Brand */}
              <div>
                <p className="text-sm tracking-tight text-stone-800 mb-1">
                  <span className="font-bold">EMERGE</span>
                  <span className="font-light"> Legal</span>
                </p>
                <p className="text-xs text-stone-400 leading-relaxed max-w-xs">
                  Architectural compliance documents for property transactions in Ireland. RIAI registered architect.
                </p>
              </div>

              {/* Link columns */}
              <div className="flex gap-12 sm:gap-16">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                    Services
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/services/opinion-compliance-planning" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                        Compliance Opinions
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/exemption-certificate" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                        Planning
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/land-registry-map-house" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                        Maps &amp; Declarations
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">
                    Contact
                  </p>
                  <ul className="space-y-2">
                    <li>
                      <a href="tel:0834516091" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                        083 451 6091
                      </a>
                    </li>
                    <li>
                      <a href="mailto:emergearchservices@protonmail.com" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
                        emergearchservices@protonmail.com
                      </a>
                    </li>
                    <li className="text-xs text-stone-400">Dublin, Ireland</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-stone-100 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
              <p className="text-xs text-stone-400">
                James Lawler MRIAI · RIAI Registered Practice Member 2026
              </p>
              <p className="text-xs text-stone-400">
                © {new Date().getFullYear()} EMERGE Legal
              </p>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
