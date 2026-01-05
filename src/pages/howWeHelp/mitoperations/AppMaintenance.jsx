import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Wrench,
  BarChart3,
  Layers,
  Shield,
  Zap,
  Database,
} from 'lucide-react';

// Hero Image
import AppMaintenanceHero from '../../../assets/images/howWeHelp/mitoper/appmaintain.png';
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/AMS/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/mitoper/AMS/img2.jpg';

const ApplicationMaintenance = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/application-maintenance`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'Application Maintenance Services | 24/7 Application Support & Management 2024',
    description: 'Professional application maintenance services: 24/7 support, performance optimization, legacy modernization, cloud maintenance, and compliance management. Enterprise application support.',
    keywords: 'application maintenance, application maintenance services, application support, application management, legacy application maintenance, cloud application maintenance, application performance optimization, application modernization, application patching, application upgrades, 24/7 application support, managed application services, application monitoring, application troubleshooting, application security maintenance, application maintenance company, application support services, application maintenance solutions, application lifecycle management, application maintenance outsourcing, application maintenance and support, enterprise application maintenance, SaaS application maintenance, cloud application support',
    canonicalUrl: pageUrl,
    ogImage: AppMaintenanceHero,
    twitterImage: AppMaintenanceHero,
  };

  // Structured Data for Application Maintenance Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Application Maintenance Services",
    "description": "Comprehensive application maintenance and support services including 24/7 monitoring, performance optimization, legacy modernization, and cloud maintenance",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Application Maintenance",
      "Application Support",
      "Performance Optimization",
      "Legacy Modernization",
      "Cloud Application Support",
      "24/7 Managed Services"
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

  // FAQ Schema for Application Maintenance
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is application maintenance and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Application maintenance involves ongoing support, updates, and optimization of software applications to ensure they remain secure, performant, and aligned with business needs. It's crucial for preventing downtime, ensuring security, maintaining compliance, and extending application lifespan while reducing total cost of ownership."
        }
      },
      {
        "@type": "Question",
        "name": "What services are included in application maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our application maintenance services include 24/7 monitoring, incident management, performance optimization, security patching, bug fixes, version upgrades, compliance management, cloud maintenance, legacy modernization, and continuous improvement of applications across various platforms and technologies."
        }
      },
      {
        "@type": "Question",
        "name": "How do you handle legacy application maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide specialized legacy application maintenance including code refactoring, platform migration, security hardening, performance tuning, and gradual modernization strategies to extend the life of legacy systems while maintaining stability and preparing for future upgrades."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of outsourcing application maintenance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outsourcing application maintenance provides cost savings (30-50% reduction in maintenance costs), access to specialized expertise, 24/7 support coverage, improved application performance, enhanced security, faster issue resolution, and allows internal teams to focus on core business initiatives and innovation."
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
        "name": "Application Maintenance",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Preventive & Corrective Support',
      text: 'Monitor, detect, and resolve issues before they impact users or performance.',
      schemaType: "SupportService"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: 'Performance Optimization',
      text: 'Fine-tune runtime environments, eliminate latency, and ensure high responsiveness.',
      schemaType: "OptimizationService"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: 'Legacy Application Modernization',
      text: 'Upgrade legacy apps using replatforming, refactoring, or rehosting—without disruption.',
      schemaType: "ModernizationService"
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: 'Cloud & Hybrid App Support',
      text: 'Maintain, monitor, and optimize applications hosted on AWS, Azure, GCP, or hybrid setups.',
      schemaType: "CloudService"
    },
    {
      icon: <Zap className="w-12 h-12 text-red-600" />,
      title: 'Patch, Upgrade & Compliance Management',
      text: 'Timely release cycles, version control, and vulnerability patching to keep your systems secure.',
      schemaType: "ComplianceService"
    },
    {
      icon: <Shield className="w-12 h-12 text-teal-600" />,
      title: '24/7 Managed Application Services',
      text: 'Global helpdesk, ticket triage, and incident management tailored to business-critical SLAs.',
      schemaType: "ManagedService"
    },
  ];

  const valueDelivery = [
    {
      icon: <Zap className="w-12 h-12 text-blue-600" />,
      title: 'Stability That Sustains',
      text: 'Maximize uptime and system reliability with proactive issue prevention.'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Business-Centric Support',
      text: 'Align fixes, updates, and enhancements with real operational priorities.'
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: 'Preventive Over Reactive',
      text: 'Detect, resolve, and avoid risks before they disrupt critical functions.'
    },
    {
      icon: <Database className="w-12 h-12 text-orange-600" />,
      title: 'Cross-Platform Mastery',
      text: 'Support for legacy, cloud, hybrid, and enterprise-grade custom applications.'
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: 'Efficient Cost Models',
      text: 'Cut support costs with automation, issue trends, and TCO-driven strategies.'
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
        <meta property="og:title" content="Application Maintenance Services | 24/7 Application Support" />
        <meta property="og:description" content="Professional application maintenance and support services for enterprise applications, cloud platforms, and legacy systems." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Application Services" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Application Maintenance Services | Enterprise App Support" />
        <meta name="twitter:description" content="24/7 application maintenance and support services for business-critical applications." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Application Maintenance Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="Application Maintenance Services" />
        <meta property="linkedin:description" content="Enterprise application maintenance and support services for legacy, cloud, and hybrid applications." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Application Services" />
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
            "description": "Application maintenance and support services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>Application Maintenance and Support Services</h1>
        <p>Comprehensive application maintenance services for enterprise applications, legacy systems, cloud platforms, and hybrid environments. Our 24/7 application support ensures maximum uptime, performance, and security for your critical business applications.</p>

        <h2>Application Maintenance Services Overview</h2>
        <p>Professional application maintenance including monitoring, troubleshooting, performance optimization, security patching, version upgrades, legacy modernization, and cloud application support for various technologies and platforms.</p>

        <h3>Application Maintenance Benefits</h3>
        <ul>
          <li>Reduced application downtime and improved reliability</li>
          <li>Enhanced application performance and user experience</li>
          <li>Cost-effective maintenance through optimized processes</li>
          <li>Extended application lifecycle and return on investment</li>
          <li>Improved security through regular updates and patching</li>
          <li>Compliance with industry regulations and standards</li>
        </ul>

        <h4>Application Technologies We Support</h4>
        <p>We maintain applications built with Java, .NET, Node.js, Python, PHP, React, Angular, Vue.js, legacy systems, and various databases and cloud platforms including AWS, Azure, and Google Cloud.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Application Maintenance Services"
        description="Keep mission-critical systems stable, secure, and scalable with application maintenance services designed to eliminate downtime and optimize every layer of performance."
        images={[AppMaintenanceHero, Image1, Image2]}
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
          Professional Application Maintenance for Business-Critical Systems
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our application maintenance services ensure your software applications remain
          performant, secure, and aligned with business needs. We provide comprehensive
          support including monitoring, troubleshooting, optimization, and continuous
          improvement across all application types and platforms.
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
          Our Application Maintenance Offerings
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
          Comprehensive application maintenance services designed to ensure application
          reliability, performance, and security while reducing total cost of ownership
          and extending application lifespan.
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
                      color: 'black',
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

      {/* How We Deliver Long-Term Value */}
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
          Our application maintenance approach focuses on delivering sustainable value
          through proactive management, cost optimization, and continuous improvement
          aligned with your business objectives.
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
                      color: 'black',
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

      {/* Application Maintenance Benefits Section */}
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
              Benefits of Professional Application Maintenance
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our application maintenance services deliver significant business benefits
              including reduced downtime, improved performance, enhanced security,
              cost savings, and extended application lifecycle.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By implementing proactive maintenance strategies and leveraging automation,
              we help organizations prevent issues before they occur, optimize resource
              utilization, and ensure applications continue to meet evolving business needs.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our expertise spans across various application types including legacy systems,
              cloud-native applications, enterprise software, and custom business applications
              across different industries and technologies.
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
                Application Maintenance Impact Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Downtime Reduction', value: '70-90%' },
                  { label: 'Cost Savings', value: '30-50%' },
                  { label: 'Performance Improvement', value: '40-60%' },
                  { label: 'Issue Resolution Time', value: '50-70% Faster' },
                  { label: 'Application Lifespan', value: '2-3x Extension' },
                  { label: 'User Satisfaction', value: '80-95%' }
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
                      <Typography variant="caption" color="#F2F3F4">
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

      {/* Application Technologies Section */}
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
          Application Technologies We Maintain
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { category: 'Programming Languages', tech: 'Java, .NET, Node.js, Python, PHP, Ruby' },
            { category: 'Frontend Frameworks', tech: 'React, Angular, Vue.js, JavaScript, TypeScript' },
            { category: 'Databases', tech: 'Oracle, SQL Server, MySQL, PostgreSQL, MongoDB' },
            { category: 'Cloud Platforms', tech: 'AWS, Azure, Google Cloud, IBM Cloud' },
            { category: 'Legacy Systems', tech: 'COBOL, Mainframe, AS/400, VB6, Delphi' },
            { category: 'Middleware', tech: 'WebSphere, WebLogic, Tomcat, Apache, Nginx' }
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
                <Typography variant="body2" color="black">
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
          Ensure Application Reliability with Expert Maintenance
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Contact our application maintenance experts to discuss your support requirements,
          implement proactive maintenance strategies, and ensure your critical applications
          remain reliable, secure, and performant.
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
          Request Maintenance Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default ApplicationMaintenance;