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
  title = `Automação, software e produtos SaaS | ${COMPANY.name}`,
  description = COMPANY.subtagline,
  canonicalUrl = COMPANY.siteUrl,
  ogImage = `${COMPANY.siteUrl}/og-image.jpg`,
}) => {
  const jsonLdSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: COMPANY.name,
    url: COMPANY.siteUrl,
    description: COMPANY.subtagline,
    jobTitle: 'Engenheiro de Software',
    telephone: `+${COMPANY.whatsappPhone}`,
    sameAs: [COMPANY.social.linkedin, COMPANY.social.github],
    knowsAbout: ['Automação de processos', 'Software sob medida', 'Produtos SaaS'],
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
