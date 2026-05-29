import { Helmet } from "react-helmet-async"

const SITE_URL = "https://bytzai.com"
const OG_IMAGE = `${SITE_URL}/og-image.png`
const DEFAULT_TITLE = "BytzAI | AI Software Engineering & IT Transformation Services"
const DEFAULT_DESCRIPTION =
  "BytzAI delivers AI software engineering, cloud migration, enterprise product development, DevOps, and IT transformation services to help businesses innovate, modernize, and scale faster."
const DEFAULT_KEYWORDS =
  "AI Software Engineering, AI Development Company, IT Transformation Services, Digital Transformation, Cloud Migration Services, Enterprise Product Engineering, DevOps Consulting, SaaS Development, AI Automation Solutions, Managed Cloud Services"

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = OG_IMAGE,
  ogType = "website",
  noindex = false,
}) {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | BytzAI`
  const canonicalUrl = canonical ? `${SITE_URL}${canonical}` : SITE_URL

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BytzAI",
    url: SITE_URL,
    logo: `${SITE_URL}/og-image.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "connect@bytzai.com",
      contactType: "customer support",
    },
    serviceType: [
      "AI Software Engineering",
      "IT Transformation Services",
      "Cloud Migration Services",
      "Enterprise Product Engineering",
      "DevOps Consulting",
      "SaaS Development",
      "AI-Augmented Teams",
      "Managed Cloud Services",
    ],
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "BytzAI",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }

  return (
    <Helmet>
      {/* Primary */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="BytzAI" />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content="BytzAI" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="BytzAI — AI Software Engineering & IT Transformation" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@BytzAI" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content="BytzAI — AI Software Engineering & IT Transformation" />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  )
}
