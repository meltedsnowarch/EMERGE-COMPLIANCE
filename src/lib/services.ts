export type ServiceCategory =
  | "compliance-opinions"
  | "planning"
  | "maps-declarations";

export interface Service {
  slug: string;
  title: string;
  price: string;
  turnaround: string;
  description: string;
  category: ServiceCategory;
}

export const CATEGORY_LABELS: Record<ServiceCategory, string> = {
  "compliance-opinions": "Compliance Opinions",
  planning: "Planning",
  "maps-declarations": "Maps & Declarations",
};

export const CATEGORY_ORDER: ServiceCategory[] = [
  "compliance-opinions",
  "planning",
  "maps-declarations",
];

export const SERVICES: Service[] = [
  // ── Column 1 — Compliance Opinions ──────────────────────────────────
  {
    slug: "opinion-compliance-planning",
    title: "Opinion of Compliance with Planning",
    price: "€350 + VAT",
    turnaround: "48-hour turnaround",
    category: "compliance-opinions",
    description:
      "When selling or mortgaging a property, your solicitor will often require confirmation that any works carried out comply with planning permission. Our Opinion of Compliance with Planning is prepared by a registered RIAI architect following a visual inspection of the property. It is issued in the Law Society of Ireland standard format and is accepted by all major banks and mortgage providers.",
  },
  {
    slug: "opinion-compliance-building-regulations",
    title: "Opinion of Compliance with Building Regulations",
    price: "€350 + VAT",
    turnaround: "48-hour turnaround",
    category: "compliance-opinions",
    description:
      "If works have been carried out on a property without full professional oversight at the time of construction, an Opinion of Compliance with Building Regulations may be required to complete a sale. Our RIAI architect will carry out a visual inspection and issue a formal opinion confirming the works appear to comply with the relevant building regulations in place at the time of construction.",
  },
  {
    slug: "certificate-of-compliance",
    title: "Certificate of Compliance",
    price: "€450 + VAT",
    turnaround: "48-hour turnaround",
    category: "compliance-opinions",
    description:
      "A Certificate of Compliance provides a higher level of assurance than an Opinion and is issued where an architect has supervised the construction works. If you employed a professional at the design and build stage, this certificate confirms that the completed works comply with both planning permission and building regulations.",
  },

  // ── Column 2 — Planning ──────────────────────────────────────────────
  {
    slug: "exemption-certificate",
    title: "Exemption Certificate",
    price: "€300 + VAT",
    turnaround: "48-hour turnaround",
    category: "planning",
    description:
      "Not all works require planning permission. Where a property has been extended or altered within the limits set out in planning law, an Exemption Certificate confirms that the works qualify as exempted development. This document is commonly requested by solicitors during property sales to confirm no planning permission was required.",
  },
  {
    slug: "planning-certificate",
    title: "Planning Certificate",
    price: "€400 + VAT",
    turnaround: "48-hour turnaround",
    category: "planning",
    description:
      "Required before any new build or significant extension work begins, a Planning Certificate confirms that your development is in line with the planning permission granted and complies with building regulations. Since the introduction of the Building Control Amendment Regulations 2013, this is now a statutory requirement for all new building works over 40 sq.m.",
  },
  {
    slug: "retention-planning-permission",
    title: "Retention Planning Permission",
    price: "from €950 + VAT",
    turnaround: "",
    category: "planning",
    description:
      "If works have been carried out on a property that required planning permission but none was obtained at the time, Retention Planning Permission offers a legal pathway to regularise the development. We manage the full process from initial survey through to submission to the local authority, and can provide an Opinion of Compliance with Planning once permission is granted.",
  },

  // ── Column 3 — Maps & Declarations ──────────────────────────────────
  {
    slug: "land-registry-map-house",
    title: "Land Registry Map (House / Site)",
    price: "€349 + VAT",
    turnaround: "48-hour turnaround",
    category: "maps-declarations",
    description:
      "A Land Registry Compliant Map is required by solicitors for all property sales and first registrations with the Property Registration Authority of Ireland. It is a large-scale certified map showing the precise boundaries and area of the property. Our maps are prepared by a registered RIAI architect and are accepted by Tailte Éireann, all major banks, and the Law Society of Ireland.",
  },
  {
    slug: "land-registry-map-apartment",
    title: "Land Registry Map (Apartment)",
    price: "€499 + VAT",
    turnaround: "2–3 working days",
    category: "maps-declarations",
    description:
      "Apartment properties require both a Land Registry Compliant Map and a certified floor plan showing the boundaries and area of the individual unit. Our RIAI architect will carry out a site survey where required and produce all necessary documentation to satisfy the Property Registration Authority of Ireland requirements.",
  },
  {
    slug: "declaration-of-identity",
    title: "Declaration of Identity",
    price: "€350 + VAT",
    turnaround: "48-hour turnaround",
    category: "maps-declarations",
    description:
      "A Declaration of Identity is a formal letter prepared by a registered architect confirming that all services to a property — including boundaries, utilities, and ancillary works — are located within the site as described in the title documents. It is most commonly required by solicitors where there are discrepancies between deed maps, folio maps, or historical mapping records that need to be resolved before a sale can proceed.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return SERVICES.filter((s) => s.category === category);
}