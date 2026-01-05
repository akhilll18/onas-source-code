import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Shield, Zap, Layers, Database, Wrench, Cloud } from 'lucide-react';
import CyberHero from '../../../assets/images/howWeHelp/mitoper/cybersecurity.png';
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img4.png';

const CyberSecurity = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/cybersecurity`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'Cyber Security Services | 24/7 Managed SOC & Threat Protection 2024',
    description: 'Professional cybersecurity services: managed SOC, vulnerability management, cloud security, EDR protection, network security, and compliance for GDPR, HIPAA, PCI DSS.',
    keywords: 'cybersecurity services, managed security services, SOC as a service, vulnerability management, cloud security, EDR protection, network security, threat detection, 24/7 security monitoring, cybersecurity consulting, security operations center, threat intelligence, cybersecurity solutions, cybersecurity company, managed security, security monitoring, cyber threat protection, data protection, ransomware protection, cybersecurity assessment, security compliance, cybersecurity framework, cybersecurity risk management, cybersecurity audit, penetration testing, security incident response, cybersecurity consulting services, cybersecurity managed services',
    canonicalUrl: pageUrl,
    ogImage: CyberHero,
    twitterImage: CyberHero,
  };

  // Structured Data for Cybersecurity Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cyber Security Services",
    "description": "Professional cybersecurity services including managed SOC, vulnerability management, cloud security, EDR protection, network security, and compliance management",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Vulnerability Management",
      "Cloud Security",
      "Managed SOC",
      "EDR Protection",
      "Network Security",
      "SIEM & Threat Intelligence"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "offers": {
      "@type": "Offer",
      "category": "TechnologyServices",
      "availability": "https://schema.org/InStock"
    }
  };

  // FAQ Schema for Cybersecurity
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are managed cybersecurity services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Managed cybersecurity services provide 24/7 monitoring, threat detection, incident response, vulnerability management, and security operations through a Security Operations Center (SOC) to protect organizations from cyber threats, data breaches, and security incidents."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Security Operations Center (SOC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A SOC is a centralized unit that provides 24/7 monitoring, detection, analysis, and response to cybersecurity incidents using security information and event management (SIEM) systems, threat intelligence, and security analysts to protect organizational assets and data."
        }
      },
      {
        "@type": "Question",
        "name": "Which compliance standards do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We support compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST, CMMC, FedRAMP, FISMA, CCPA, and other industry-specific cybersecurity and data protection regulations and frameworks."
        }
      },
      {
        "@type": "Question",
        "name": "What is EDR (Endpoint Detection and Response)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EDR is a cybersecurity technology that continuously monitors endpoints (computers, mobile devices, servers) for threats, provides real-time detection, investigation, and response capabilities to identify and mitigate advanced threats that bypass traditional security measures."
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
        "name": "Cyber Security",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Shield className="w-12 h-12 text-blue-600" />,
      title: 'Vulnerability Management (VMaaS)',
      text: 'Continuous scanning, risk classification, and prioritized remediation across infrastructure, endpoints, and apps.',
      schemaType: "SecurityService"
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-600" />,
      title: 'Cloud Security Services',
      text: 'Protection for public, private, and hybrid cloud workloads with CSPM, container security, and policy enforcement.',
      schemaType: "CloudSecurityService"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: 'Managed SOC',
      text: '24/7 threat detection, real-time alert triage, incident response, threat hunting, and forensic analysis.',
      schemaType: "SecurityService"
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: 'EDR Endpoint Protection',
      text: 'Behavioral monitoring, anomaly detection, isolation, and rapid containment of endpoint threats.',
      schemaType: "EndpointSecurityService"
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: 'Network Security & Firewall',
      text: 'Next-gen firewall configuration, network segmentation, intrusion prevention, and encrypted traffic inspection.',
      schemaType: "NetworkSecurityService"
    },
    {
      icon: <Zap className="w-12 h-12 text-teal-600" />,
      title: 'SIEM & Threat Intelligence',
      text: 'Real-time log analysis, threat integration, compliance-ready reporting, and threat actor profiling.',
      schemaType: "ThreatIntelligenceService"
    },
  ];

  const valueDelivery = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: '24/7 Monitoring',
      text: 'Always-on detection and response for business-critical assets.'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Compliance Ready',
      text: 'Aligns with HIPAA, PCI DSS, GDPR, SOC 2, ISO 27001, and internal policies.'
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Threat Intelligence',
      text: 'Proactive threat hunting using global attack feed integration.'
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: 'Risk Mitigation',
      text: 'Layered security approach minimizing exposure and downtime.'
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
        <meta property="og:title" content="Cyber Security Services | Managed SOC & Threat Protection" />
        <meta property="og:description" content="Professional cybersecurity services for 24/7 threat detection, vulnerability management, cloud security, and compliance." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Security Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Cyber Security Services | 24/7 Managed SOC" />
        <meta name="twitter:description" content="Comprehensive cybersecurity services for threat detection, vulnerability management, and compliance." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Cyber Security Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="Cyber Security Services" />
        <meta property="linkedin:description" content="Enterprise cybersecurity services including managed SOC, EDR protection, and cloud security." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Security Services" />
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
              "https://github.com/yourcompany"
            ],
            "description": "Cybersecurity and managed security services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>Cyber Security and Managed Security Services</h1>
        <p>Professional cybersecurity services for 24/7 threat detection, vulnerability management, cloud security, EDR protection, and compliance with GDPR, HIPAA, PCI DSS, SOC 2, and ISO 27001 standards.</p>

        <h2>Cybersecurity Services Overview</h2>
        <p>Comprehensive cybersecurity solutions including Security Operations Center (SOC) as a service, vulnerability assessment, penetration testing, incident response, threat intelligence, and security compliance management for enterprises.</p>

        <h3>Cybersecurity Solutions</h3>
        <ul>
          <li>Managed Security Operations Center (SOC) Services</li>
          <li>Vulnerability Management and Penetration Testing</li>
          <li>Cloud Security (AWS, Azure, Google Cloud)</li>
          <li>Endpoint Detection and Response (EDR)</li>
          <li>Network Security and Firewall Management</li>
          <li>Security Information and Event Management (SIEM)</li>
          <li>Threat Intelligence and Threat Hunting</li>
          <li>Security Compliance and Risk Management</li>
        </ul>

        <h4>Cybersecurity Compliance Standards</h4>
        <p>We help organizations achieve compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, NIST, CMMC, FedRAMP, FISMA, and other industry-specific cybersecurity regulations and frameworks.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Cyber Security Services"
        description="Protect your critical infrastructure with services designed to detect threats, manage risks, and guarantee business continuity across hybrid and multi-cloud environments."
        images={[CyberHero, Image1, Image2, Image3, Image4]}
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
          Professional Cybersecurity Services for Threat Detection and Risk Management
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our cybersecurity services provide comprehensive protection against cyber threats
          through 24/7 monitoring, advanced threat detection, vulnerability management,
          and compliance with industry security standards and regulations.
        </Typography>
      </Box>

      {/* Offerings Section with enhanced SEO */}
      <Box sx={{
        py: 5,
        px: { xs: 2, md: 4 },
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
          Our Cyber Security Offerings
        </Typography>

        {/* SEO Description */}
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.7
          }}
        >
          Comprehensive cybersecurity services designed to protect your organization
          from advanced threats, data breaches, and security vulnerabilities across
          all infrastructure, endpoints, and cloud environments.
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid
              item xs={12} sm={6} md={4}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
              itemScope
              itemType={`https://schema.org/${item.schemaType}`}
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
                    border: '1px solid rgba(11, 76, 116, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: i === 0 ? '#3b82f6' :
                                 i === 1 ? '#10b981' :
                                 i === 2 ? '#8b5cf6' :
                                 i === 3 ? '#f97316' :
                                 i === 4 ? '#ef4444' : '#0d9488'
                    }
                  }}
                  itemProp="offers"
                  itemScope
                  itemType="https://schema.org/Offer"
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                  >
                    {item.icon}
                  </motion.div>
                  <Typography
                    color="#0B4C74"
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                    itemProp="name"
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      flexGrow: 1
                    }}
                    itemProp="description"
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Delivery Section */}
      <Box sx={{
        py: 5,
        px: { xs: 2, md: 4 },
        mt: 4
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
          How We Deliver Long-Term Value
        </Typography>

        {/* SEO Description */}
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.7
          }}
        >
          Our cybersecurity approach focuses on delivering sustainable value through
          proactive threat management, continuous monitoring, risk reduction, and
          compliance alignment with your business objectives and industry standards.
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
                    border: '1px solid rgba(11, 76, 116, 0.1)'
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                  >
                    {item.icon}
                  </motion.div>
                  <Typography
                    color="#0B4C74"
                    variant="h6"
                    sx={{
                      mb: 1,
                      fontSize: '1.1rem',
                      fontWeight: 600
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.9rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
                      flexGrow: 1
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

      {/* Cybersecurity Benefits Section */}
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        mt: 4,
        backgroundColor: 'rgba(11, 76, 116, 0.05)',
        borderRadius: 2
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="#0B4C74"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Benefits of Professional Cybersecurity Services
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our cybersecurity services deliver significant business benefits including
              reduced risk of data breaches, improved threat detection and response times,
              enhanced compliance with regulations, protection against ransomware, and
              safeguarding of critical business assets and reputation.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By implementing comprehensive security strategies and leveraging advanced
              threat intelligence, we help organizations prevent security incidents,
              minimize business disruption, and maintain customer trust in an increasingly
              complex threat landscape.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our expertise spans across various security domains including network security,
              cloud security, endpoint protection, threat intelligence, and compliance
              management across different industries and regulatory environments.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'white',
              p: 3,
              borderRadius: 2,
              border: '1px solid rgba(11, 76, 116, 0.1)',
              boxShadow: 2
            }}>
              <Typography
                variant="h6"
                color="#0B4C74"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                Cybersecurity Impact Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Threat Detection', value: '90-95%' },
                  { label: 'Response Time', value: 'Minutes' },
                  { label: 'Risk Reduction', value: '70-85%' },
                  { label: 'Compliance Rate', value: '100%' },
                  { label: 'Downtime Reduction', value: '80-95%' },
                  { label: 'ROI on Security', value: '3-5x' }
                ].map((metric, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Box sx={{
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: 'rgba(11, 76, 116, 0.08)',
                      borderRadius: 1,
                      height: '100%'
                    }}>
                      <Typography variant="h6" color="#0B4C74" fontWeight="bold">
                        {metric.value}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {metric.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Cybersecurity Technologies Section */}
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
          Cybersecurity Technologies & Solutions
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { category: 'SIEM & Log Management', tech: 'Splunk, ArcSight, QRadar, LogRhythm, Sentinel, Elastic Stack' },
            { category: 'Endpoint Protection', tech: 'CrowdStrike, SentinelOne, Microsoft Defender, Carbon Black, Trend Micro' },
            { category: 'Cloud Security', tech: 'AWS Security Hub, Azure Security Center, GCP Security Command, Prisma Cloud' },
            { category: 'Network Security', tech: 'Palo Alto, Fortinet, Cisco, Check Point, FireEye, Zscaler' },
            { category: 'Threat Intelligence', tech: 'Recorded Future, ThreatConnect, Anomali, MISP, IBM X-Force' },
            { category: 'Vulnerability Management', tech: 'Tenable, Qualys, Rapid7, OpenVAS, Nessus, Nexpose' }
          ].map((stack, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Box sx={{
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2,
                boxShadow: 2,
                height: '100%'
              }}>
                <Typography variant="h6" color="#0B4C74" fontWeight="600" gutterBottom>
                  {stack.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stack.tech}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* CTA Section */}
      <Box sx={{
        maxWidth: '800px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 3 }}
        >
          Secure Your Organization with Expert Cybersecurity Services
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Contact our cybersecurity experts to discuss your security requirements,
          implement comprehensive protection strategies, and ensure your organization
          is protected against evolving cyber threats and compliance requirements.
        </Typography>
        <Button
          variant="contained"
          href="/resources/contact-us"
          sx={{
            backgroundColor: '#0B4C74',
            color: 'white',
            px: 4,
            py: 1.5,
            borderRadius: 2,
            '&:hover': {
              backgroundColor: '#093b5a'
            }
          }}
        >
          Request Security Assessment
        </Button>
      </Box>
    </Box>
  );
};

export default CyberSecurity;