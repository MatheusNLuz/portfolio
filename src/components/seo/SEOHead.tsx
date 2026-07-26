import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY } from '@/constants/company';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title = `${COMPANY.name} | Sistemas Inteligentes para Empresas que Querem Crescer`,
  description = COMPANY.subtagline,
  canonicalUrl = COMPANY.siteUrl,
  ogImage = `${COMPANY.siteUrl}/og-image.jpg`,
}) => {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: COMPANY.name,
    url: COMPANY.siteUrl,
    logo: `${COMPANY.siteUrl}/logo.png`,
    description: COMPANY.subtagline,
    telephone: COMPANY.whatsappPhone,
    email: COMPANY.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    openingHours: 'Mo-Fr 08:00-19:00',
    sameAs: [COMPANY.social.linkedin, COMPANY.social.github, COMPANY.social.instagram],
    priceRange: 'R$ 15.000 - R$ 100.000+',
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={COMPANY.name} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">{JSON.stringify(jsonLdSchema)}</script>
    </Helmet>
  );
};
