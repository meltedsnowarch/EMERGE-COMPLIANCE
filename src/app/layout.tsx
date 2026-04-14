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
  title: "EMERGE Legal — Architectural Compliance Services for Solicitors & Estate Agents",
  description:
    "Fast, reliable architectural compliance documents for solicitors and estate agents across Ireland. Land Registry Compliant Maps, RIAI Opinions on Compliance with Building Regulations, and Declarations of Identity. James Lawler MRIAI, Dublin.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <body className="min-h-full flex flex-col font-sans">

        {/* ── NAVIGATION ────────────────────────────────────────── */}
        <nav
          data-design-id="nav"
          className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b border-stone-200"
          style={{ background: "rgba(244,239,228,0.95)" }}
        >
          <div
            data-design-id="nav-container"
            className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
          >
            <Link
              data-design-id="nav-logo"
              href="/"
              className="text-lg tracking-tight text-stone-900"
            >
              <span className="font-bold">EMERGE</span>{" "}
              <span className="font-light">Legal</span>
            </Link>

            <div data-design-id="nav-links" className="flex items-center gap-8">
              <Link
                data-design-id="nav-link-services"
                href="/#services"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Services
              </Link>
              <Link
                data-design-id="nav-link-about"
                href="/#about"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                About
              </Link>
              <Link
                data-design-id="nav-link-contact"
                href="/contact"
                className="text-sm text-stone-500 hover:text-stone-900 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main data-design-id="main" className="flex-1">
          {children}
        </main>

        {/* ── FOOTER ────────────────────────────────────────────── */}
        <footer
          data-design-id="footer"
          className="border-t border-stone-200 py-12 px-6"
          style={{ background: "#F4EFE4" }}
        >
          <div
            data-design-id="footer-container"
            className="max-w-5xl mx-auto"
          >
            {/* Top row */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-8">

              {/* Brand + tagline */}
              <div data-design-id="footer-brand-block">
                <p className="text-base tracking-tight text-stone-800">
                  <span className="font-bold">EMERGE</span>{" "}
                  <span className="font-light">Legal</span>
                </p>
                <p className="mt-1 text-xs text-stone-500 leading-relaxed max-w-xs">
                  Architectural compliance services for property transactions in Ireland.
                </p>
              </div>

              {/* Navigation columns */}
              <div className="flex gap-16 sm:gap-20">
                <div data-design-id="footer-col-services">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Services</p>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/#services" className="text-xs text-stone-600 hover:text-stone-900 transition-colors">
                        Land Registry Maps
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="text-xs text-stone-600 hover:text-stone-900 transition-colors">
                        RIAI Opinions on Compliance
                      </Link>
                    </li>
                    <li>
                      <Link href="/#services" className="text-xs text-stone-600 hover:text-stone-900 transition-colors">
                        Declaration of Identity
                      </Link>
                    </li>
                  </ul>
                </div>

                <div data-design-id="footer-col-contact">
                  <p className="text-xs font-semibold uppercase tracking-widest text-stone-400 mb-3">Contact</p>
                  <ul className="space-y-2">
                    <li>
                      <a href="tel:0834516091" className="text-xs text-stone-600 hover:text-stone-900 transition-colors">
                        083 451 6091
                      </a>
                    </li>
                    <li>
                      <a href="mailto:meltedsnowarch@protonmail.com" className="text-xs text-stone-600 hover:text-stone-900 transition-colors">
                        meltedsnowarch@protonmail.com
                      </a>
                    </li>
                    <li className="text-xs text-stone-500">Dublin, Ireland</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="section-rule mt-10 mb-6" />

            {/* Bottom row */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
              <p className="text-xs text-stone-400">
                James Lawler MRIAI — RIAI Registered Member 2026
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
