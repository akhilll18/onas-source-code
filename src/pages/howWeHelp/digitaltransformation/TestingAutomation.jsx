import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Wrench,
  Zap,
  BarChart3,
  Shield,
  Smartphone,
  Layers,
} from 'lucide-react';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img2.png';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/testingauto/img4.png';

const TestingAutomation = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/testing-qa`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'Software Testing & QA Services | Quality Assurance & Test Automation 2024',
    description: 'Professional software testing and QA services: functional testing, test automation, performance testing, security testing, mobile/web testing, and API testing. Enterprise QA solutions.',
    keywords: 'software testing, QA services, quality assurance, test automation, automated testing, performance testing, security testing, mobile testing, web testing, API testing, software testing company, QA testing services, test automation framework, selenium testing, cypress testing, load testing, penetration testing, functional testing, regression testing, software quality assurance, test management, QA automation, testing as a service, software testing solutions, QA consulting, software testing tools, automated test scripts, testing lifecycle, continuous testing',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  // Structured Data for Testing Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Software Testing & QA Services",
    "description": "Comprehensive software testing and quality assurance services including automation, performance, security, and functional testing",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Functional Testing",
      "Test Automation",
      "Performance Testing",
      "Security Testing",
      "Mobile & Web Testing",
      "API & Microservices Testing"
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

  // FAQ Schema for Testing Services
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is software testing and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software testing is the process of evaluating software applications to identify defects, ensure quality, and verify that they meet requirements. It's crucial for delivering reliable, secure, and high-performing software that meets user expectations and business objectives."
        }
      },
      {
        "@type": "Question",
        "name": "What types of testing services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive testing services including functional testing, test automation, performance testing, security testing, mobile/web testing, API testing, regression testing, usability testing, and compliance testing for various industries and applications."
        }
      },
      {
        "@type": "Question",
        "name": "What test automation tools do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use industry-standard test automation tools including Selenium, Cypress, Appium, TestComplete, Katalon Studio, JMeter, LoadRunner, Postman, SoapUI, and custom automation frameworks tailored to client requirements and technology stacks."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure testing quality and coverage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We follow structured testing methodologies, create comprehensive test plans, implement test automation frameworks, conduct code reviews, perform risk-based testing, use test management tools, and maintain detailed documentation to ensure maximum test coverage and quality assurance."
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
        "name": "Software Testing & QA",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Layers className="w-12 h-12 text-blue-600" />,
      title: 'Functional Testing',
      text: `End-to-end scenario testing for enterprise applications
Use-case validation, UI/UX checks, and business logic testing`,
      schemaType: "TestingService"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: 'Test Automation',
      text: `Framework-driven automation (Selenium, Appium, Cypress)
Scriptless automation and reusable test assets`,
      schemaType: "AutomationService"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: 'Performance Testing',
      text: `Load, stress, and endurance testing for web and mobile apps
Scalability and failover readiness under peak loads`,
      schemaType: "PerformanceTestingService"
    },
    {
      icon: <Shield className="w-12 h-12 text-orange-600" />,
      title: 'Security Testing',
      text: `Threat modeling, vulnerability scanning, and penetration testing
Compliance assurance (HIPAA, PCI, OWASP, ISO, SOC2)`,
      schemaType: "SecurityTestingService"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-red-600" />,
      title: 'Mobile & Web Testing',
      text: `Multi-platform and browser/device testing
Responsive design, cross-device behaviour, and compatibility checks`,
      schemaType: "MobileTestingService"
    },
    {
      icon: <Wrench className="w-12 h-12 text-teal-600" />,
      title: 'API & Microservices Testing',
      text: `Interface testing, service validation, and integration assurance
Contract testing and continuous test automation`,
      schemaType: "APITestingService"
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
        <meta property="og:title" content="Software Testing & QA Services | Quality Assurance Solutions" />
        <meta property="og:description" content="Professional software testing services for functional, automation, performance, and security testing of web and mobile applications." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Testing Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Software Testing & QA Services | Test Automation" />
        <meta name="twitter:description" content="Comprehensive software testing and quality assurance services for enterprise applications." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Software Testing & QA Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="Software Testing & QA Services" />
        <meta property="linkedin:description" content="Enterprise software testing services including automation, performance, and security testing." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Testing Solutions" />
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
            "description": "Software testing and quality assurance services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>Software Testing & Quality Assurance Services</h1>
        <p>Comprehensive software testing and QA services for web, mobile, and enterprise applications. Our testing services ensure software quality, reliability, security, and performance across all platforms and devices.</p>

        <h2>Software Testing Services</h2>
        <p>Professional software testing services including functional testing, test automation, performance testing, security testing, mobile testing, web testing, API testing, and compliance testing for enterprise applications.</p>

        <h3>Testing Methodologies & Frameworks</h3>
        <ul>
          <li>Test Automation Frameworks: Selenium, Cypress, Appium, TestComplete</li>
          <li>Performance Testing Tools: JMeter, LoadRunner, Gatling, BlazeMeter</li>
          <li>Security Testing Tools: OWASP ZAP, Burp Suite, Nessus, Metasploit</li>
          <li>API Testing Tools: Postman, SoapUI, Rest-Assured, Karate</li>
          <li>Test Management Tools: Jira, TestRail, Zephyr, qTest</li>
        </ul>

        <h4>Testing Best Practices</h4>
        <p>We follow industry best practices including test-driven development (TDD), behavior-driven development (BDD), continuous testing, shift-left testing, risk-based testing, and comprehensive test documentation for maximum coverage and quality assurance.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Software Testing & QA Services"
        description="Go beyond traditional checkpoints—embed confidence into every release. Our software testing services integrate automation, precision, and performance engineering to ensure flawless user experiences at scale."
        images={[Image1, Image2, Image3, Image4]}
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
          Comprehensive Software Testing Solutions for Quality Assurance
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our software testing and QA services ensure your applications are reliable, secure,
          and performant. We implement industry-best practices, advanced automation frameworks,
          and comprehensive testing strategies to deliver high-quality software solutions.
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
          Our Testing & QA Services
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
          Comprehensive software testing services covering all aspects of quality assurance,
          from functional validation to performance optimization and security compliance.
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
                      whiteSpace: 'pre-line',
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

      {/* Testing Benefits Section */}
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
              Benefits of Professional Software Testing
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our software testing services deliver significant business benefits including
              improved software quality, reduced maintenance costs, enhanced user satisfaction,
              faster time-to-market, and compliance with industry standards and regulations.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By implementing comprehensive testing strategies and automation frameworks,
              we help organizations identify defects early, reduce rework, improve application
              performance, and ensure security and reliability across all platforms.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our testing expertise spans across various industries including healthcare,
              finance, e-commerce, enterprise software, and mobile applications, ensuring
              domain-specific testing approaches and compliance requirements are met.
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
                Testing Service Impact Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Defect Detection', value: '90-95%' },
                  { label: 'Test Automation', value: '70-80%' },
                  { label: 'Cost Reduction', value: '30-50%' },
                  { label: 'Time Savings', value: '40-60%' },
                  { label: 'Quality Improvement', value: '50-70%' },
                  { label: 'ROI on Testing', value: '3-5x' }
                ].map((metric, idx) => (
                  <Grid item xs={6} key={idx}>
                    <Box sx={{
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: 'white',
                      borderRadius: 1,
                      boxShadow: 1,
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

      {/* Testing Tools & Technologies Section */}
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
          Testing Tools & Technologies
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { category: 'Test Automation', tech: 'Selenium, Cypress, Appium, TestComplete' },
            { category: 'Performance Testing', tech: 'JMeter, LoadRunner, Gatling, BlazeMeter' },
            { category: 'Security Testing', tech: 'OWASP ZAP, Burp Suite, Nessus, Metasploit' },
            { category: 'API Testing', tech: 'Postman, SoapUI, Rest-Assured, Karate' },
            { category: 'Mobile Testing', tech: 'Appium, XCUITest, Espresso, BrowserStack' },
            { category: 'Test Management', tech: 'Jira, TestRail, Zephyr, qTest, Xray' }
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

      {/* Testing Methodology Section */}
      <Box sx={{
        maxWidth: '1000px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        mt: 4
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 0, textAlign: 'center' }}
        >
          Our Testing Methodology
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              phase: 'Planning & Analysis',
              description: 'Requirement analysis, test strategy development, test plan creation, and risk assessment.'
            },
            {
              phase: 'Test Design',
              description: 'Test case development, test data preparation, automation framework design, and environment setup.'
            },
            {
              phase: 'Test Execution',
              description: 'Manual testing, automated test execution, defect logging, and progress tracking.'
            },
            {
              phase: 'Reporting & Closure',
              description: 'Test result analysis, defect reporting, test summary reports, and process improvement.'
            }
          ].map((phase, idx) => (
            <Grid item xs={12} sm={6} md={3} key={idx}>
              <Box sx={{
                p: 3,
                backgroundColor: 'rgba(11, 76, 116, 0.05)',
                borderRadius: 2,
                height: '100%',
                textAlign: 'center'
              }}>
                <Box sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: '#0B4C74',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  mx: 'auto',
                  mb: 2
                }}>
                  {idx + 1}
                </Box>
                <Typography variant="h6" color="#0B4C74" fontWeight="600" gutterBottom>
                  {phase.phase}
                </Typography>
                <Typography variant="body2" color="#F2F3F4">
                  {phase.description}
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
        px: { xs: 2, md: 0 },
        py: 6,
        textAlign: 'center'
      }}>
        <Typography
          variant="h5"
          color="#0B4C74"
          gutterBottom
          sx={{ fontWeight: 700, mb: 3 }}
        >
          Ensure Software Quality with Expert Testing Services
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 0
          }}
        >
          Contact our software testing experts to discuss your testing requirements,
          implement comprehensive QA strategies, and ensure your software meets the highest
          quality standards.
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
          Request Testing Consultation
        </Button>
      </Box>
    </Box>
  );
};

export default TestingAutomation;