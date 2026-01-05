import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import CmdbImage from '../../../assets/images/howWeHelp/ITAssetMangement/cmdb.png';
import WorkflowImage from '../../../assets/images/howWeHelp/ITAssetMangement/workflow.png';
import RiskImage from '../../../assets/images/howWeHelp/ITAssetMangement/risk.png';
import SpeedImage from '../../../assets/images/howWeHelp/ITAssetMangement/speed.png';
import LicenseImage from '../../../assets/images/howWeHelp/ITAssetMangement/license.png';
import OptimizeImage from '../../../assets/images/howWeHelp/ITAssetMangement/optimize.png';
import LifecycleImage from '../../../assets/images/howWeHelp/ITAssetMangement/lifecycle.png';
import ITAMImage from '../../../assets/images/howWeHelp/ITAssetMangement/itam_main.png';

import HeroMain from '../../../components/HeroMain';

// Images
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/AssetMangement/img4.jpg';

const ITAssetManagement = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/it-asset-management`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'IT Asset Management (ITAM) Solutions | Hardware & Software Asset Management 2024',
    description: 'Complete IT Asset Management solutions for hardware tracking, software license management, CMDB, lifecycle management, and cost optimization. Enterprise ITAM services.',
    keywords: 'IT Asset Management, ITAM, software asset management, hardware asset management, CMDB, IT inventory management, license management, SAM, ITAM solutions, IT asset tracking, IT lifecycle management, IT cost optimization, ITAM software, IT asset discovery, IT compliance, IT procurement, IT inventory tracking, IT audit, software license optimization, hardware lifecycle, ITAM consulting, IT asset management services, ITAM platform, IT asset repository, ITAM best practices, ITAM implementation',
    canonicalUrl: pageUrl,
    ogImage: ITAMImage,
    twitterImage: ITAMImage,
  };

  // Structured Data for IT Asset Management Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IT Asset Management Solutions",
    "description": "Comprehensive IT Asset Management services including hardware tracking, software license management, CMDB implementation, and IT lifecycle management",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Hardware Asset Management",
      "Software Asset Management",
      "CMDB Implementation",
      "IT Asset Discovery",
      "License Management",
      "IT Cost Optimization"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "offers": {
      "@type": "Offer",
      "category": "TechnologyServices"
    }
  };

  // FAQ Schema for ITAM
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is IT Asset Management (ITAM)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IT Asset Management (ITAM) is a systematic approach to tracking, managing, and optimizing IT assets throughout their lifecycle, including hardware, software, and licenses, to reduce costs, ensure compliance, and improve operational efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of IT Asset Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ITAM benefits include cost savings through license optimization, improved security and compliance, better resource utilization, enhanced decision-making through asset visibility, reduced audit risks, and streamlined IT procurement and lifecycle management."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Hardware and Software Asset Management?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hardware Asset Management tracks physical IT assets (servers, computers, network devices) while Software Asset Management focuses on software licenses, installations, and compliance. Both are essential components of comprehensive IT Asset Management."
        }
      },
      {
        "@type": "Question",
        "name": "What is a CMDB and why is it important for ITAM?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CMDB (Configuration Management Database) is a centralized repository that stores information about IT assets and their relationships. It's crucial for ITAM as it provides visibility into asset dependencies, supports change management, and enables better decision-making and incident resolution."
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
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
        "name": "IT Asset Management",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const keyCapabilities = [
    'Hardware Asset Management',
    'Software Asset Management',
    'CMDB',
  ];

  const outcomeDeployment = [
    {
      image: CmdbImage,
      title: 'CMDB',
      text: 'End-to-end visibility of IT assets to maintain a clean CMDB and achieve accuracy for asset inventory',
    },
    {
      image: WorkflowImage,
      title: 'Workflows',
      text: 'Simplify and streamline asset allocation/workflows – request, receive, deploy, swap, and dispose',
    },
    {
      image: RiskImage,
      title: 'Risk Management',
      text: 'Mitigate risks related to asset cost by minimizing waste and enabling compliance',
    },
    {
      image: SpeedImage,
      title: 'Speed',
      text: 'Speed up business outcomes by leveraging software data workflows that are already a key aspect of the platform',
    },
    {
      image: LicenseImage,
      title: 'Software License',
      text: 'Reduce risks related to software licenses by embedding SAM and IT change management, and taking actions on unlicensed deployments',
    },
    {
      image: OptimizeImage,
      title: 'Optimization',
      text: 'Optimize license use and mitigate overlap to reduce software and cloud spend',
    },
    {
      image: LifecycleImage,
      title: 'Digital Lifecycle',
      text: 'Manage digital lifecycles by breaking down silos with a single system of action across tables, views, and apps',
    },
  ];

  return (
    <Box>
      {/* =========================================== */}
      {/* SEO META TAGS FOR GOOGLE & SOCIAL NETWORKS */}
      {/* =========================================== */}
      <Helmet>
        {/* Primary Meta Tags for Google */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="IT Asset Management Solutions | Hardware & Software Asset Tracking" />
        <meta property="og:description" content="Enterprise IT Asset Management solutions for hardware tracking, software license management, CMDB, and IT lifecycle optimization." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS IT Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="IT Asset Management Solutions | ITAM Services" />
        <meta name="twitter:description" content="Professional IT Asset Management services for hardware, software, and license tracking." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="IT Asset Management Solutions" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="IT Asset Management Solutions" />
        <meta property="linkedin:description" content="Enterprise ITAM solutions for hardware tracking, software license management, and CMDB implementation." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS IT Solutions" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="date" content={new Date().toISOString().split('T')[0]} />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>

        {/* Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ONAS",
            "url": baseUrl,
            "logo": `${baseUrl}/logo.png`,
            "sameAs": [
              "https://twitter.com/yourcompany",
              "https://linkedin.com/company/yourcompany",
              "https://facebook.com/yourcompany"
            ],
            "description": "IT Asset Management consulting and implementation services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>IT Asset Management (ITAM) Solutions</h1>
        <p>Comprehensive IT Asset Management services for enterprise organizations. Our ITAM solutions provide complete visibility, control, and optimization of hardware, software, and cloud assets throughout their lifecycle.</p>

        <h2>IT Asset Management Services</h2>
        <p>Professional ITAM implementation including hardware asset tracking, software license management, CMDB configuration, IT inventory management, and compliance reporting for enterprises.</p>

        <h3>Key ITAM Capabilities</h3>
        <ul>
          <li>Hardware Asset Tracking and Lifecycle Management</li>
          <li>Software Asset Management (SAM) and License Optimization</li>
          <li>CMDB Implementation and Configuration Management</li>
          <li>IT Asset Discovery and Inventory Management</li>
          <li>Software License Compliance and Audit Support</li>
          <li>IT Procurement and Vendor Management</li>
          <li>Cloud Asset Management and Cost Optimization</li>
        </ul>

        <h4>ITAM Benefits and ROI</h4>
        <p>Reduce IT costs by 15-30%, improve compliance with software licensing agreements, enhance security through better asset visibility, streamline IT operations, and make data-driven decisions for IT investments.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="IT Asset Management Solutions"
        subheading="Drive full lifecycle tracking and visibility into hardware assets and software licenses with costs, processes, and data on a single platform."
        description={`Key Capabilities: ${keyCapabilities.join(' • ')}`}
        images={[ITAMImage, Image2, Image3, Image4]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* SEO Introduction Section */}
      <Box sx={{
        maxWidth: '1000px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 4,
        textAlign: 'center'
      }}>
        <Typography
          variant="h6"
          color="#0B4C74"
          sx={{
            fontWeight: 600,
            mb: 3,
            fontSize: { xs: '1.1rem', md: '1.3rem' }
          }}
        >
          Enterprise IT Asset Management for Cost Control and Compliance
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our IT Asset Management solutions provide comprehensive tracking, management, and optimization
          of IT assets throughout their lifecycle. We help organizations reduce costs, ensure compliance,
          improve security, and make informed IT investment decisions.
        </Typography>
      </Box>

      {/* Outcome Focused Deployment Section */}
      <Box sx={{
        px: { xs: 2, md: 8 },
        py: 5,
        backgroundColor: 'rgba(11, 76, 116, 0.02)',
        borderRadius: 2,
        mx: { xs: 1, md: 4 }
      }}>
        <Typography
          component="h2"
          variant="h3"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' }
          }}
        >
          Outcome Focused Deployment
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {outcomeDeployment.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
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
                    px: 2,
                    py: 3,
                    backgroundColor: 'white',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: 280,
                    borderRadius: 2,
                    boxShadow: 1,
                    border: '1px solid rgba(11, 76, 116, 0.1)',
                    height: '100%'
                  }}
                >
                  {item.image && (
                    <motion.img
                      src={item.image}
                      alt={`IT Asset Management - ${item.title}`}
                      title={`${item.title} - ITAM Solution`}
                      style={{
                        width: 70,
                        height: 70,
                        marginBottom: 16,
                        objectFit: 'contain'
                      }}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 200 }}
                    />
                  )}
                  <Typography
                    variant="body1"
                    color="#0B4C74"
                    sx={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      mb: 1
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* SEO Content Section */}
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        mt: 4
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="#0B4C74"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              IT Asset Management Benefits
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our IT Asset Management solutions deliver measurable benefits including cost reduction,
              improved compliance, enhanced security, and better decision-making through comprehensive
              asset visibility and control.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By implementing a structured ITAM program, organizations can achieve 15-30% cost savings
              through license optimization, reduce audit risks, improve resource utilization, and
              streamline IT operations.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our approach combines industry best practices with technology solutions to deliver
              sustainable ITAM results that support business objectives and digital transformation initiatives.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'rgba(11, 76, 116, 0.05)',
              p: 3,
              borderRadius: 2,
              border: '1px solid rgba(11, 76, 116, 0.1)'
            }}>
              <Typography
                variant="h6"
                color="#0B4C74"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                ITAM Key Performance Indicators
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Cost Savings', value: '15-30%' },
                  { label: 'License Compliance', value: '99%+' },
                  { label: 'Asset Visibility', value: '100%' },
                  { label: 'Audit Readiness', value: '24/7' },
                  { label: 'Lifecycle Management', value: 'End-to-End' },
                  { label: 'ROI Timeline', value: '6-12 Months' }
                ].map((kpi, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Box sx={{
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      boxShadow: 1
                    }}>
                      <Typography variant="h6" color="#0B4C74" fontWeight="bold">
                        {kpi.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {kpi.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* ITAM Statistics Section */}
      <Box sx={{
        backgroundColor: 'rgba(11, 76, 116, 0.08)',
        py: 6,
        mt: 4,
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 4 }}
        >
          IT Asset Management Impact
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { stat: '40%', desc: 'Average cost savings from ITAM implementation' },
            { stat: '40%', desc: 'Reduction in software audit risks' },
            { stat: '95%', desc: 'Improvement in asset tracking accuracy' },
            { stat: '50%', desc: 'Faster IT procurement processes' }
          ].map((item, idx) => (
            <Grid item xs={6} md={3} key={idx}>
              <Box>
                <Typography variant="h3" color="#F2F3F4" fontWeight="bold">
                  {item.stat}
                </Typography>
                <Typography variant="body2" color="#F2F3F4" sx={{ mt: 1 }}>
                  {item.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ITAssetManagement;