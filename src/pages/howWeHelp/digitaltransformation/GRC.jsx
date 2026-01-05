import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import GovernanceImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/governance.png';
import RiskImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/riskmanagement.png';
import ComplianceImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/compliance.jpg';
import DataPrivacyImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/dataPP.png';
import ControlsImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/internalcontrol.png';
import ReportingImg from '../../../assets/images/howWeHelp/digitaltrans/GRC/reporting.png';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img6.jpg';
import Image7 from '../../../assets/images/howWeHelp/digitaltrans/GRC/img7.png';

const grcSections = [
  {
    title: 'Governance',
    items: [
      'Policy Definition, Documentation, and Enforcement',
      'Role-Based Access and Accountability Management',
    ],
    image: GovernanceImg,
    bg: '#fff',
    reverse: false,
  },
  {
    title: 'Risk Management',
    items: [
      'Risk Identification, Assessment, and Mitigation Planning',
      'Continuous Monitoring of Operational, Financial, and IT Risks',
    ],
    image: RiskImg,
    bg: '#fff',
    reverse: true,
  },
  {
    title: 'Compliance',
    items: [
      'Regulatory Alignment (GDPR, HIPAA, SOX, ISO 27001, PCI DSS)',
      'Audit-Ready Reporting and Evidence Management',
    ],
    image: ComplianceImg,
    bg: '#fff',
    reverse: false,
  },
  {
    title: 'Data Privacy & Protection',
    items: [
      'Data Classification, Encryption, and Secure Access Controls',
      'Privacy Impact Assessments and Cross-Border Compliance',
    ],
    image: DataPrivacyImg,
    bg: '#fff',
    reverse: true,
  },
  {
    title: 'Internal Controls & Monitoring',
    items: [
      'Automated Control Implementation and Effectiveness Testing',
      'Continuous Monitoring of Business and IT Processes',
    ],
    image: ControlsImg,
    bg: '#fff',
    reverse: false,
  },
  {
    title: 'Reporting & Analytics',
    items: [
      'Real-Time Dashboards for Risk and Compliance Metrics',
      'Customizable Reports for Management and Regulators',
    ],
    image: ReportingImg,
    bg: '#fff',
    reverse: true,
  },
];

export default function GRC() {
  const baseUrl = window.location.origin;

  // SEO Metadata for GRC
  const seoData = {
    title: 'GRC Solutions | Governance, Risk & Compliance Services 2024',
    description: 'Enterprise GRC solutions for governance, risk management, compliance (GDPR, HIPAA, SOX), data privacy, internal controls, and regulatory reporting.',
    keywords: 'GRC, governance risk compliance, GRC software, risk management, compliance management, GDPR compliance, HIPAA compliance, SOX compliance, ISO 27001, PCI DSS, data privacy, internal controls, regulatory compliance, audit management, enterprise risk management, compliance automation, risk assessment, corporate governance, cybersecurity compliance, third-party risk management',
    canonicalUrl: `${baseUrl}/services/grc`,
    ogImage: Image1,
  };

  // Structured Data for GRC Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Governance, Risk and Compliance (GRC) Solutions",
    "description": "Comprehensive GRC services including governance frameworks, risk management, regulatory compliance, data privacy, and internal controls.",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl
    },
    "serviceType": [
      "Governance Services",
      "Risk Management",
      "Compliance Management",
      "Data Privacy",
      "Internal Controls",
      "Regulatory Reporting"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    }
  };

  // FAQ Schema for GRC
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is GRC (Governance, Risk and Compliance)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRC is an integrated approach to governance, risk management, and compliance that helps organizations achieve objectives, manage uncertainty, and ensure regulatory compliance through coordinated strategy and processes."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key components of a GRC framework?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A comprehensive GRC framework includes governance structures, risk management processes, compliance programs, internal controls, data privacy measures, and reporting mechanisms to ensure organizational integrity and regulatory adherence."
        }
      },
      {
        "@type": "Question",
        "name": "Which regulations does GRC software help manage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRC solutions help manage GDPR, HIPAA, SOX, ISO 27001, PCI DSS, CCPA, NIST, FedRAMP, FISMA, CMMC, MAS, and other industry-specific regulatory requirements."
        }
      },
      {
        "@type": "Question",
        "name": "How does GRC improve organizational performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GRC improves performance by reducing risks, ensuring compliance, enhancing decision-making, increasing operational efficiency, protecting reputation, and building stakeholder trust through transparent governance."
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
        "name": "GRC Solutions",
        "item": seoData.canonicalUrl
      }
    ]
  };

  return (
    <Box>
      {/* SEO Meta Tags */}
      <Helmet>
        {/* Primary Meta Tags */}
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:title" content="GRC Solutions | Enterprise Governance, Risk & Compliance Services" />
        <meta property="og:description" content="Comprehensive GRC services for governance, risk management, compliance, data privacy, and regulatory reporting." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GRC Solutions | Governance, Risk & Compliance" />
        <meta name="twitter:description" content="Enterprise GRC services for compliance, risk management, and governance frameworks." />
        <meta name="twitter:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS GRC Solutions" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
            "description": "GRC consulting and solutions provider specializing in governance, risk management, and compliance services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO Content for Search Engines */}
      <div style={{ display: 'none' }}>
        <h1>GRC Solutions - Governance, Risk and Compliance Services</h1>
        <p>Comprehensive GRC (Governance, Risk and Compliance) solutions for enterprise organizations. Our GRC services include governance frameworks, risk management programs, regulatory compliance, data privacy, internal controls, and audit management.</p>

        <h2>GRC Framework Components</h2>
        <ul>
          <li>Governance Structures and Policy Management</li>
          <li>Risk Assessment and Mitigation Strategies</li>
          <li>Compliance Management for GDPR, HIPAA, SOX, ISO 27001</li>
          <li>Data Privacy and Protection Programs</li>
          <li>Internal Controls and Process Monitoring</li>
          <li>Regulatory Reporting and Audit Management</li>
        </ul>

        <h3>GRC Compliance Standards</h3>
        <p>Our GRC solutions support compliance with GDPR, HIPAA, SOX, PCI DSS, ISO 27001, NIST, CCPA, CMMC, FedRAMP, and other regulatory frameworks. We provide audit-ready documentation and continuous compliance monitoring.</p>

        <h4>GRC Software Features</h4>
        <p>Integrated GRC platform with risk assessment tools, compliance tracking, policy management, incident reporting, control testing, and real-time dashboards for enterprise risk management.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Governance, Risk, and Compliance (GRC)"
        description="Build stronger organizations by aligning governance, managing risks effectively, and ensuring regulatory compliance across all operations."
        images={[Image1, Image2, Image3, Image4, Image5, Image6, Image7]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* GRC Sections - Enhanced with semantic markup */}
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6
      }}>
        <Typography
          component="h2"
          variant="h3"
          color="#0B4C74"
          sx={{
            textAlign: 'center',
            mb: 6,
            fontWeight: 700,
            fontSize: { xs: '1.8rem', md: '2.4rem' }
          }}
        >
          Comprehensive GRC Framework Components
        </Typography>

        {/* SEO Introduction */}
        <Typography
          variant="body1"
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 8,
            color: '#F2F3F4',
            fontSize: '1.1rem',
            lineHeight: 1.7
          }}
        >
          Our integrated GRC framework provides comprehensive governance, risk management, and compliance solutions
          to help organizations navigate regulatory complexities, manage risks, and build resilient governance structures.
        </Typography>

        {grcSections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: {
                  xs: 'column',
                  md: section.reverse ? 'row-reverse' : 'row',
                },
                backgroundColor: section.bg,
                borderRadius: 3,
                mb: 6,
                overflow: 'hidden',
                boxShadow: 3,
                border: '1px solid rgba(11, 76, 116, 0.1)',
              }}
              itemScope
              itemType={`https://schema.org/${section.title === 'Governance' ? 'GovernmentOrganization' : 'Service'}`}
            >
              {/* Left Side - Image */}
              <Box
                sx={{
                  width: { xs: '100%', md: '40%' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 2,
                }}
              >
                <motion.img
                  src={section.image}
                  alt={`GRC ${section.title.toLowerCase()} solutions and services`}
                  title={`${section.title} - GRC Framework Component`}
                  style={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: '8px',
                    boxShadow: '0px 4px 10px rgba(0,0,0,0.3)',
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  itemProp="image"
                />
              </Box>

              {/* Right Side - Text + List */}
              <Box
                sx={{
                  width: { xs: '100%', md: '60%' },
                  p: { xs: 3, md: 6 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography
                  color="#0B4C74"
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: '1.3rem', md: '1.5rem' }
                  }}
                  itemProp="name"
                >
                  {section.title}
                </Typography>
                <List dense sx={{ mb: 2 }}>
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <ListItem sx={{ py: 0.5 }}>
                        <ListItemText
                          primary={item}
                          primaryTypographyProps={{
                            fontSize: { xs: '0.95rem', md: '1rem' },
                            color: 'text.secondary',
                            lineHeight: 1.6
                          }}
                          itemProp="description"
                        />
                      </ListItem>
                    </motion.div>
                  ))}
                </List>
              </Box>
            </Box>
          </motion.div>
        ))}

        {/* SEO Content Section */}
        <Box sx={{
          mt: 10,
          p: { xs: 3, md: 4 },
          backgroundColor: 'rgba(11, 76, 116, 0.05)',
          borderRadius: 3,
          border: '1px solid rgba(11, 76, 116, 0.1)'
        }}>
          <Typography
            variant="h5"
            color="#0B4C74"
            gutterBottom
            sx={{ fontWeight: 700, mb: 3, textAlign: 'center' }}
          >
            Benefits of Integrated GRC Solutions
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="#F2F3F4" paragraph>
                <strong>Risk Reduction:</strong> Proactively identify, assess, and mitigate enterprise risks with continuous monitoring and automated controls.
              </Typography>
              <Typography variant="body1" color="#F2F3F4" paragraph>
                <strong>Compliance Efficiency:</strong> Streamline compliance with GDPR, HIPAA, SOX, ISO 27001, and other regulations through centralized management.
              </Typography>
              <Typography variant="body1" color="#F2F3F4" paragraph>
                <strong>Operational Excellence:</strong> Improve decision-making with integrated risk and compliance data, reducing silos and increasing transparency.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" color="#F2F3F4" paragraph>
                <strong>Cost Optimization:</strong> Reduce audit costs, avoid regulatory fines, and optimize resource allocation with automated GRC processes.
              </Typography>
              <Typography variant="body1" color="#F2F3F4" paragraph>
                <strong>Stakeholder Confidence:</strong> Build trust with customers, investors, and regulators through robust governance and compliance practices.
              </Typography>
              <Typography variant="body1" color="#F2F3F4">
                <strong>Strategic Alignment:</strong> Align GRC activities with business objectives to drive growth while maintaining compliance and managing risks.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* GRC Compliance Table */}
        <Box sx={{
          mt: 8,
          p: 3,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 2
        }}>
          <Typography
            variant="h6"
            color="#0B4C74"
            gutterBottom
            sx={{ fontWeight: 600, mb: 3 }}
          >
            Key Regulatory Frameworks We Support
          </Typography>
          <Grid container spacing={2}>
            {[
              { name: 'GDPR', desc: 'General Data Protection Regulation' },
              { name: 'HIPAA', desc: 'Health Insurance Portability and Accountability Act' },
              { name: 'SOX', desc: 'Sarbanes-Oxley Act' },
              { name: 'ISO 27001', desc: 'Information Security Management' },
              { name: 'PCI DSS', desc: 'Payment Card Industry Data Security Standard' },
              { name: 'CCPA', desc: 'California Consumer Privacy Act' },
            ].map((framework, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box sx={{
                  p: 2,
                  border: '1px solid rgba(11, 76, 116, 0.2)',
                  borderRadius: 2,
                  textAlign: 'center'
                }}>
                  <Typography variant="subtitle1" color="#0B4C74" fontWeight="600">
                    {framework.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {framework.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

// Add Grid import if not already present
import { Grid } from '@mui/material';