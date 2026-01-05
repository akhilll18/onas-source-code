import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Cloud,
  Server,
  Link,
  Settings,
  Zap,
  GitBranch,
  Database,
} from 'lucide-react';

// SEO Components
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Hero Image
import CloudHeroImage from '../../../assets/images/howWeHelp/digitaltrans/cloud.png';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img4.png';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/cloud-integ/img5.png';


const CloudMigrationIntegration = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com'; // Replace with your actual domain

  // SEO Metadata
  const seoData = {
    title: 'Cloud Migration & Integration Services | AWS, Azure, GCP Migration Experts',
    description: 'Secure cloud migration and integration services with zero disruption. Legacy app modernization, multi-cloud strategy, and hybrid cloud solutions for AWS, Azure, GCP.',
    keywords: 'cloud migration services, cloud integration, AWS migration, Azure migration, GCP migration, hybrid cloud, legacy app modernization, cloud optimization, FinOps',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: Image1,
  };

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cloud Migration & Integration Services",
    "description": "Enterprise cloud migration and integration services for AWS, Azure, GCP, Oracle Cloud, and hybrid environments",
    "provider": {
      "@type": "Organization",
      "name": "ONAS"
    },
    "serviceType": [
      "Cloud Migration",
      "Cloud Integration",
      "Legacy Modernization",
      "Multi-Cloud Strategy",
      "Cloud Optimization"
    ],
    "areaServed": "Global"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": `${baseUrl}/services`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Cloud Migration & Integration",
        "item": `${baseUrl}${location.pathname}`
      }
    ]
  };

  const offerings = [
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: 'Cloud Migration Services',
      text: `Legacy app rehosting, replatforming, and refactoring
Application and database modernization
Multi-cloud and hybrid cloud migration
Data center exit and infrastructure consolidation`,
    },
    {
      icon: <Link className="w-12 h-12 text-green-600" />,
      title: 'Cloud Integration Services',
      text: `API and microservices enablement
SaaS and on-prem system integration
Hybrid cloud orchestration and DevOps workflows
Secure data sync and operational unification`,
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-600" />,
      title: 'Cloud Management & Optimization',
      text: `Cloud monitoring, alerting, and uptime visibility
FinOps strategies for spend optimization
Workload tuning and auto-scaling
Security and compliance automation`,
    },
  ];

  const valueDelivery = [
    {
      icon: <GitBranch className="w-12 h-12 text-blue-600" />,
      title: 'Cloud-Agnostic Expertise',
      text: 'Deep platform experience across AWS, Azure, GCP, Oracle Cloud, and Snowflake.',
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: 'Full-Lifecycle Delivery',
      text: 'From cloud assessment to post-deployment optimization, we manage every stage.',
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Business-Focused Outcomes',
      text: 'Every migration is mapped to KPIs: performance, uptime, cost savings, and agility.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-600" />,
      title: 'Built-In Security & Governance',
      text: 'Zero-trust architecture, encryption, IAM, and regulatory alignment at every layer.',
    },
  ];

  return (
    <Box>
      {/* SEO Implementation */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={seoData.canonicalUrl} />
        <meta property="twitter:title" content={seoData.title} />
        <meta property="twitter:description" content={seoData.description} />
        <meta property="twitter:image" content={seoData.ogImage} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Your Company Name" />
      </Helmet>

      {/* Hidden Semantic Content for SEO */}
      <Box sx={{ display: 'none' }}>
        <h1>Cloud Migration and Integration Services</h1>
        <p>Expert cloud migration and integration services for AWS, Azure, Google Cloud Platform. Legacy application modernization, multi-cloud strategy, and hybrid cloud solutions.</p>

        <h2>Cloud Migration Services</h2>
        <p>Comprehensive cloud migration strategy including rehosting, replatforming, and refactoring of legacy applications. Data center exit and infrastructure consolidation services.</p>

        <h3>Cloud Platforms We Support</h3>
        <ul>
          <li>AWS (Amazon Web Services) Migration</li>
          <li>Microsoft Azure Cloud Migration</li>
          <li>Google Cloud Platform (GCP) Migration</li>
          <li>Oracle Cloud Infrastructure</li>
          <li>Multi-Cloud and Hybrid Cloud Solutions</li>
        </ul>
      </Box>

      {/* Your existing hero section - unchanged */}
      <HeroMain
        heading="Cloud Migration & Integration Services That De-Risk and Deliver ROI"
        description="Modernize with confidence through comprehensive cloud migration and integration services that ensure zero disruption and deliver measurable outcomes.
              From replatforming legacy systems to enabling hybrid cloud agility, our solutions support secure, scalable integration across AWS, Azure, and GCP."
        images={[Image1, Image2, Image3, Image4, Image5]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* Offerings Section with semantic enhancements */}
      <Box sx={{ py: 5 }} itemScope itemType="https://schema.org/Service">
        <Typography variant="h2" color="#0B4C74" sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: '1.8rem', md: '2.2rem' }
        }} itemProp="name">
          Our Cloud Services
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}
                  itemScope itemType="https://schema.org/Offer">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    px: 3,
                    py: 4,
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 3,
                    boxShadow: 3,
                    maxWidth: 280,
                    height: '100%',
                  }}
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                    {item.icon}
                  </motion.div>
                  <Typography color="#0B4C74" variant="h3" sx={{
                    mb: 1,
                    fontSize: '1.3rem',
                    fontWeight: 600
                  }} itemProp="name">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    color: 'text.secondary',
                    whiteSpace: 'pre-line',
                    flexGrow: 1
                  }} itemProp="description">
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Delivery Section */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h2" color="#0B4C74" sx={{
          fontWeight: 700,
          mb: 6,
          textAlign: 'center',
          fontSize: { xs: '1.8rem', md: '2.2rem' }
        }}>
          Why Cloud Migration & Integration Matters
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {valueDelivery.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    px: 3,
                    py: 4,
                    backgroundColor: '#fff',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: 3,
                    boxShadow: 3,
                    maxWidth: 250,
                    height: '100%',
                  }}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                    {item.icon}
                  </motion.div>
                  <Typography color="#0B4C74" variant="h3" sx={{
                    mb: 1,
                    fontSize: '1.2rem',
                    fontWeight: 600
                  }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'text.secondary',
                    flexGrow: 1
                  }}>
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Additional SEO-rich content (minimally visible) */}
      <Box sx={{
        backgroundColor: 'rgba(11, 76, 116, 0.05)',
        p: 4,
        borderRadius: 2,
        mx: { xs: 2, md: 4 },
        my: 4,
        opacity: 0.95
      }}>
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          As a leading cloud migration and integration services provider, we specialize in helping enterprises transition from legacy systems to modern cloud infrastructure. Our expertise spans across AWS, Azure, GCP, and hybrid cloud environments, ensuring business continuity and zero disruption during migration.
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: 'white' }}>
          Whether you're planning a data center exit, legacy application modernization, or implementing a multi-cloud strategy, our cloud consulting services deliver measurable ROI through optimized performance, reduced operational costs, and enhanced security compliance.
        </Typography>
      </Box>
    </Box>
  );
};

export default CloudMigrationIntegration;