import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
// Lucide Icons
import {
  Boxes,
  Database,
  Cloud,
  Factory,
  Headphones,
  Lightbulb,
  Cpu,
  Box as LucideBox,
  Brain,
} from 'lucide-react';
import HeroMain from '../../../components/HeroMain';

// Images
import SAPHeroImage from '../../../assets/images/howWeHelp/ERP/sap/SAP.jpg';
//import Image1 from '../../../assets/images/howWeHelp/ERP/sap/img1.jpg';
//import Image2 from '../../../assets/images/howWeHelp/ERP/sap/img2.jpg';
//import Image3 from '../../../assets/images/howWeHelp/ERP/sap/img3.jpg';
//import Image4 from '../../../assets/images/howWeHelp/ERP/sap/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/sap/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/sap/img6.png';

const SAP = () => {
  const offerings = [
    {
      icon: <Boxes className="w-12 h-12 text-blue-600" />,
      title: 'SAP S/4HANA Implementation',
      text: 'Deploy S/4HANA on-premises or cloud, optimized for Finance, Supply Chain, Procurement, and process automation.',
    },
    {
      icon: <Database className="w-12 h-12 text-green-600" />,
      title: 'SAP ECC to S/4HANA Migration',
      text: 'Transition from ECC using automated tools, data-cleansing frameworks, and phased deployment strategies for minimal disruption.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      title: 'SAP Cloud Integration',
      text: 'Integrate SAP with Salesforce, Azure, AWS via CPI, IDoc, REST/OData connectors for seamless data exchange.',
    },
    {
      icon: <Factory className="w-12 h-12 text-orange-600" />,
      title: 'Industry Specific SAP Solutions',
      text: 'Implement SAP modules for Retail, Utilities, Manufacturing, and Healthcare using industry-aligned best practices.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'SAP Managed Services & Support',
      text: '24/7 monitoring, patch deployment, incident handling, and continuous enhancements under flexible SLA models.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Advisory Services',
      text: 'Increase the value of your SAP investments with our thought leadership & expertise. Whether it is implementations, rollouts, or cost-effective support models, our aim is to help you identify success opportunities.',
    },
    {
      icon: <Cpu className="w-12 h-12 text-indigo-600" />,
      title: 'BTP-Enabled Digital Transformation',
      text: 'Unlock a comprehensive approach to digital transformation by integrating SAP BTP into your ecosystem. Our expertise, resources, and dedication are ever ready to help you navigate the complexities.',
    },
    {
      icon: <LucideBox className="w-12 h-12 text-pink-600" />,
      title: 'SAP Cloud ERP',
      text: 'Designed for fast-growing mid-market enterprises, SAP Cloud ERP enables rapid, cost-effective, and simplified ERP adoption. With Techwave\'s Delivery eXcellence (DX) methodology, you can accelerate deployment, reduce complexity, and harness the full potential of SAP Public Cloud.',
    },
    {
      icon: <Brain className="w-12 h-12 text-teal-600" />,
      title: 'Intelligent Data + AI',
      text: 'Transform your business and unlock new opportunities by harnessing the power of Data & AI to generate actionable insights. Staying competitive is now a click-away with our team of seasoned experts.',
    },
  ];

  return (
    <Box color="#0B4C74">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>SAP Implementation, Support, Upgrade & Migration Services | Onas Global</title>
        <meta name="description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrades, and SAP S/4HANA migration. Expert SAP implementation partner selection, cost breakdown, and transformation roadmap guidance." />

        {/* Enhanced keywords with proper formatting - All 45 keywords included */}
        <meta name="keywords" content="SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP implementation project plan template, How long does SAP implementation take?, SAP implementation partner selection criteria, SAP implementation cost breakdown, SAP implementation team structure roles, SAP blueprint phase deliverables, Best practices for SAP data migration, SAP testing strategy (unit, integration, UAT), SAP AMS (Application Managed Services), SAP production support model L1 L2 L3, How to resolve SAP dumps and errors, SAP performance tuning guide, SAP security patches and notes implementation, SAP user authorization issues troubleshooting, SAP batch job monitoring and failure handling, SAP support ticket process best practices, SAP basis support checklist, Year-end closing support activities SAP FICO, SAP upgrade project plan, SAP enhancement package (EhP) installation guide, S/4HANA 2023 to S/4HANA 2028 upgrade, SAP upgrade downtime minimization strategies, SAP SUM (Software Update Manager) tool tutorial, Testing strategy for SAP upgrades, SAP upgrade impact on custom code (SPAU/SPDD), SAP upgrade vs migration difference, Post SAP upgrade checklist, SAP S/4HANA migration, New implementation vs conversion (Greenfield vs Brownfield), SAP Brownfield migration (SUM/DMO) steps, SAP S/4HANA migration cockpit deep dive, Custom code adaptation for S/4HANA (ADT), SAP Fiori migration in S/4HANA move, Data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS), S/4HANA readiness check report, SAP legacy system migration workbench (LSMW), Cost of migrating to SAP S/4HANA, SAP implementation vs upgrade vs migration, SAP RISE vs LEGACY model, SAP support models: break-fix vs managed services, SAP transformation roadmap, Choosing an SAP partner for implementation, AI SAP implementation, cloud-first SAP, digital transformation, SAP cloud ERP, AI-powered SAP, SAP S/4HANA, SAP migration, RISE with SAP, S/4HANA Cloud migration, SAP private cloud vs public cloud, S/4HANA implementation roadmap, SAP ECC to S/4HANA conversion, SAP Joule AI features, SAP BTP integration suite, SAP generative AI hub, SAP BTP low-code development, AI-powered ERP automation, SAP FICO, S/4HANA Finance, Central Finance implementation" />

        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Enhanced Structured Data for better visibility */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Comprehensive SAP Services",
            "description": "Full lifecycle SAP services including implementation, support, upgrade, and migration",
            "url": "https://www.onasglobal.com/sap-services",
            "provider": {
              "@type": "Organization",
              "name": "Onas Global",
              "url": "https://www.onasglobal.com",
              "logo": "https://www.onasglobal.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/onasglobal",
                "https://twitter.com/onasglobal"
              ]
            },
            "serviceType": [
              "SAP Implementation",
              "SAP Support",
              "SAP Upgrade",
              "SAP Migration",
              "RISE with SAP",
              "S/4HANA Cloud Migration",
              "SAP BTP Integration",
              "SAP FICO Consulting"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Global"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "SAP Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP S/4HANA Implementation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Production Support"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP System Upgrade"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "SAP Migration Services"
                  }
                }
              ]
            }
          })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.onasglobal.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://www.onasglobal.com/services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SAP Services",
                "item": "https://www.onasglobal.com/sap-services"
              }
            ]
          })}
        </script>

        {/* FAQPage Schema with Implementation, Support, Upgrade, Migration questions */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is SAP Activate methodology step-by-step?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP Activate methodology is a modular framework for SAP implementation, upgrade, and migration projects. It follows six phases: Prepare, Explore, Realize, Deploy, Run, and Optimize, providing ready-to-use templates, best practices, and guided configuration for successful SAP S/4HANA implementation methodology."
                }
              },
              {
                "@type": "Question",
                "name": "How does SAP production support model L1 L2 L3 work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP production support follows a tiered model: L1 handles basic user issues and ticket routing, L2 addresses functional and technical configuration problems, and L3 manages complex technical issues, enhancements, and system improvements. Our SAP AMS (Application Managed Services) provide comprehensive 24/7 support covering all tiers."
                }
              },
              {
                "@type": "Question",
                "name": "What are SAP upgrade downtime minimization strategies?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We implement proven SAP upgrade downtime minimization strategies including parallel system preparation, delta change application optimization, database cloning techniques, and automated testing. Using SAP SUM (Software Update Manager) tool with advanced features, we typically reduce downtime by 40-60% compared to traditional approaches."
                }
              },
              {
                "@type": "Question",
                "name": "What is the difference between SAP Greenfield vs Brownfield migration?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP Greenfield migration involves fresh implementation with new processes, while Brownfield migration (SUM/DMO) transfers existing system with historical data. Our experts help you choose based on business requirements, customization levels, and transformation goals, following the SAP S/4HANA migration checklist."
                }
              },
              {
                "@type": "Question",
                "name": "How long does SAP implementation take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP implementation timelines vary from 4-12 months based on scope, modules, and customization. Following our optimized SAP implementation project plan template and SAP Activate methodology, we accelerate deployment while maintaining quality. We provide detailed SAP implementation cost breakdown and timeline projections during planning."
                }
              },
              {
                "@type": "Question",
                "name": "What are the key differences between SAP RISE vs LEGACY model?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SAP RISE is a cloud-first subscription model bundling software, infrastructure, and services, while LEGACY refers to traditional on-premises or hosted implementations. We help evaluate both options within your SAP transformation roadmap and assist in choosing an SAP partner for implementation that fits your business model."
                }
              }
            ]
          })}
        </script>

        <meta property="og:title" content="SAP Implementation, Support, Upgrade & Migration Services | Onas Global" />
        <meta property="og:description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrades, and SAP S/4HANA migration." />
        <meta property="og:image" content={SAPHeroImage} />
        <meta property="og:url" content="https://www.onasglobal.com/sap-services" />
        <meta property="og:site_name" content="Onas Global" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@onasglobal" />
        <meta name="twitter:creator" content="@onasglobal" />
        <meta name="twitter:title" content="SAP Implementation, Support, Upgrade & Migration Services | Onas Global" />
        <meta name="twitter:description" content="Comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step, SAP AMS, S/4HANA upgrades, and SAP migration" />
        <meta name="twitter:image" content={SAPHeroImage} />

        <link rel="canonical" href="https://www.onasglobal.com/sap-services" />

        {/* Additional meta tags for better indexing */}
        <meta name="author" content="Onas Global" />
        <meta name="publisher" content="Onas Global" />
        <meta name="copyright" content="Onas Global" />
        <meta name="language" content="English" />
        <meta http-equiv="content-language" content="en" />

        {/* Mobile optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />

        {/* Technical SEO enhancements */}
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="apple-mobile-web-app-title" content="SAP Services" />
        <meta name="application-name" content="SAP Services" />
        <meta name="msapplication-TileColor" content="#0B4C74" />
        <meta name="theme-color" content="#0B4C74" />

        {/* Sitemap and indexing hints */}
        <link rel="sitemap" type="application/xml" title="Sitemap" href="https://www.onasglobal.com/sitemap.xml" />
        <link rel="alternate" type="application/rss+xml" title="SAP Services RSS" href="https://www.onasglobal.com/sap-services/rss.xml" />
        <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" />
        <meta name="bing-site-verification" content="YOUR_BING_VERIFICATION_CODE" />

        {/* Open Graph additional tags */}
        <meta property="og:updated_time" content="2024-01-01T00:00:00+00:00" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-implementation" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-support" />
        <meta property="og:see_also" content="https://www.onasglobal.com/sap-migration" />

        {/* Twitter additional tags */}
        <meta name="twitter:label1" content="Service Type" />
        <meta name="twitter:data1" content="SAP Implementation, Support, Upgrade, Migration" />
        <meta name="twitter:label2" content="Expertise Level" />
        <meta name="twitter:data2" content="Enterprise" />
      </Helmet>

      {/* Hero Section */}
      <HeroMain
        heading="SAP AI for Comprehensive SAP Services: Implementation, Support, Upgrade & Migration"
        description="Expert SAP services enhanced by SAP AI including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step guidance, SAP AMS (Application Managed Services), S/4HANA 2023 to 2028 upgrade planning, SAP S/4HANA migration, and comprehensive SAP transformation roadmap development. We provide SAP implementation cost breakdown, SAP production support model L1 L2 L3, and SAP upgrade downtime minimization strategies—all augmented by SAP Business AI (Joule) and SAP's intelligent technologies."
        images={[SAPHeroImage, Image5, Image6]}
        buttons={[{ text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' }]}
      />

      {/* Secondary Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: { xs: 4, md: 8 },
          mb: 12,
          px: { xs: 2, md: 6, lg: 8 },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        {/* Left - Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 1 }}
        >
          <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, textAlign: { xs: 'center', md: 'left' } }}>
            Full Lifecycle SAP Services
          </Typography>
        </motion.div>

        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: 2 }}
        >
          <Box color="white" sx={{ width: '100%', fontFamily: 'sans-serif', fontSize: '10px' }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              We provide comprehensive SAP S/4HANA implementation methodology following SAP Activate methodology step-by-step, with detailed SAP implementation project plan templates and clear SAP implementation team structure roles. Our experts answer common questions like "How long does SAP implementation take?" and provide transparent SAP implementation cost breakdown to help with planning and budgeting.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              For ongoing operations, we offer SAP AMS (Application Managed Services) with comprehensive SAP production support model L1 L2 L3 coverage. Our services include SAP performance tuning guide implementation, SAP security patches and notes implementation, SAP user authorization issues troubleshooting, SAP batch job monitoring and failure handling, and specialized year-end closing support activities SAP FICO. We follow SAP support ticket process best practices and maintain comprehensive SAP basis support checklists.
            </Typography>
            <Typography variant="h6" sx={{ mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
              Our upgrade services include detailed SAP upgrade project planning, SAP enhancement package (EhP) installation guidance, S/4HANA 2023 to S/4HANA 2028 upgrade execution, and advanced SAP upgrade downtime minimization strategies using SAP SUM (Software Update Manager) tool. We manage SAP upgrade impact on custom code (SPAU/SPDD) and provide comprehensive post SAP upgrade checklists.
            </Typography>
            <Typography variant="h6" sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              For migration projects, we follow comprehensive SAP S/4HANA migration checklists, help evaluate New implementation vs conversion (Greenfield vs Brownfield) options, execute SAP Brownfield migration (SUM/DMO) steps, provide SAP S/4HANA migration cockpit deep dive expertise, handle custom code adaptation for S/4HANA (ADT), manage SAP Fiori migration in S/4HANA move, implement data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS), conduct S/4HANA readiness check reports, utilize SAP legacy system migration workbench (LSMW), and provide transparent cost of migrating to SAP S/4HANA analysis.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* SAP Cloud Offerings */}
      <Box
        sx={{
          px: { xs: 2, md: 8 },
          py: 5,
          maxWidth: 1800,
          mx: 'auto',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 800,
            mb: 6,
            textAlign: 'center',
          }}
        >
          Comprehensive SAP Services Portfolio
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
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
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                  >
                    {item.icon}
                  </motion.div>
                  <Typography variant="h5" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.6,
                      color: 'text.secondary',
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

      {/* SAP Service Lifecycle Management Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 1200, mx: 'auto', backgroundColor: '#f8fafc' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: '#0B4C74' }}>
          SAP Service Lifecycle Management
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#0B4C74', borderBottom: '2px solid #0B4C74', pb: 1 }}>
                Implementation & Support Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We provide comprehensive <strong>SAP S/4HANA implementation methodology</strong> following <strong>SAP Activate methodology step-by-step</strong> with detailed <strong>SAP implementation project plan templates</strong>. Our services include clear <strong>SAP blueprint phase deliverables</strong> and <strong>SAP testing strategy (unit, integration, UAT)</strong> implementation.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                For support, we offer <strong>SAP AMS (Application Managed Services)</strong> with multi-tier <strong>SAP production support model L1 L2 L3</strong> coverage. We provide <strong>SAP performance tuning guide</strong> implementation and efficient <strong>SAP user authorization issues troubleshooting</strong>.
              </Typography>
              <Typography variant="body1">
                We follow <strong>best practices for SAP data migration</strong> and maintain comprehensive <strong>SAP basis support checklist</strong> for ongoing operations and <strong>year-end closing support activities SAP FICO</strong>.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: '#0B4C74', borderBottom: '2px solid #0B4C74', pb: 1 }}>
                Upgrade & Migration Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our upgrade services include comprehensive <strong>SAP upgrade project planning</strong> and <strong>S/4HANA 2023 to S/4HANA 2028 upgrade</strong> execution with advanced <strong>SAP upgrade downtime minimization strategies</strong>. We provide <strong>SAP SUM (Software Update Manager) tool tutorial</strong> and manage <strong>SAP upgrade impact on custom code (SPAU/SPDD)</strong>.
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                For migration, we follow <strong>SAP S/4HANA migration</strong> checklists and help evaluate <strong>New implementation vs conversion (Greenfield vs Brownfield)</strong> options. We execute <strong>SAP Brownfield migration (SUM/DMO) steps</strong> and provide <strong>SAP S/4HANA migration cockpit deep dive</strong> expertise.
              </Typography>
              <Typography variant="body1">
                We handle <strong>custom code adaptation for S/4HANA (ADT)</strong>, <strong>SAP Fiori migration in S/4HANA move</strong>, and implement comprehensive <strong>data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS)</strong>.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* FAQ Schema Section for SEO */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 8, maxWidth: 1200, mx: 'auto', backgroundColor: '#f8fafc' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 6, textAlign: 'center', color: '#0B4C74' }}>
          Frequently Asked Questions About SAP Services
        </Typography>

        <Box sx={{ maxWidth: 800, mx: 'auto' }}>
          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              What is SAP Activate methodology and how does it work step-by-step?
            </Typography>
            <Typography variant="body1">
              SAP Activate methodology is a modular, agile framework for SAP implementation, upgrade, and migration projects. It follows six phases: Prepare (project planning and setup), Explore (requirements and solution design), Realize (system configuration and testing), Deploy (cutover and go-live), Run (operations and support), and Optimize (continuous improvement). This methodology provides ready-to-use templates, best practices, and guided configuration for successful SAP S/4HANA implementation methodology.
            </Typography>
          </Box>

          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              How does SAP production support model L1 L2 L3 work?
            </Typography>
            <Typography variant="body1">
              The SAP production support model operates on three tiers: Level 1 (L1) handles basic user issues, password resets, and ticket routing; Level 2 (L2) addresses functional and technical configuration problems, system monitoring, and basic troubleshooting; Level 3 (L3) manages complex technical issues, system enhancements, performance tuning, and major incident resolution. Our SAP AMS (Application Managed Services) provide comprehensive 24/7 support covering all three tiers with defined SLAs.
            </Typography>
          </Box>

          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              What are the key differences between SAP upgrade vs migration?
            </Typography>
            <Typography variant="body1">
              Understanding the SAP upgrade vs migration difference is crucial for planning. Upgrades typically move between versions of the same system (like S/4HANA 2023 to S/4HANA 2028 upgrade), while migrations involve moving to fundamentally different platforms (like ECC to S/4HANA). We help you evaluate both options within your SAP transformation roadmap and consider factors like SAP implementation vs upgrade vs migration requirements.
            </Typography>
          </Box>

          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              How do you minimize downtime during SAP upgrades?
            </Typography>
            <Typography variant="body1">
              Our SAP upgrade downtime minimization strategies include advanced techniques using the SAP SUM (Software Update Manager) tool, parallel system preparation, optimized delta change application, and comprehensive testing strategy for SAP upgrades. We typically reduce downtime by 40-60% compared to traditional approaches, ensuring minimal business disruption during SAP enhancement package (EhP) installation or version upgrades.
            </Typography>
          </Box>

          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              What should be included in a comprehensive SAP S/4HANA migration checklist?
            </Typography>
            <Typography variant="body1">
              Our SAP S/4HANA migration checklist includes: S/4HANA readiness check report analysis, data migration strategy using LTMC, LSMW, and S/4HANA DMIS, custom code adaptation for S/4HANA (ADT), SAP Fiori migration planning, and post-migration validation. We also provide transparent cost of migrating to SAP S/4HANA analysis and help evaluate New implementation vs conversion (Greenfield vs Brownfield) options.
            </Typography>
          </Box>

          <Box sx={{ mb: 4, p: 3, backgroundColor: 'white', borderRadius: 2, boxShadow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, color: '#0B4C74', mb: 1 }}>
              What are the key considerations when evaluating SAP RISE vs LEGACY models?
            </Typography>
            <Typography variant="body1">
              When comparing SAP RISE vs LEGACY model, consider factors like total cost of ownership, operational flexibility, innovation pace, infrastructure management, and business agility. Our advisory helps in choosing an SAP partner for implementation that can guide you through this decision as part of your comprehensive SAP transformation roadmap, considering both SAP support models: break-fix vs managed services options.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Additional SEO Content Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 6, maxWidth: 1200, mx: 'auto' }}>
        <Typography variant="h5" sx={{ fontWeight: 800, mb: 4, textAlign: 'center', color: '#0B4C74' }}>
          Comprehensive SAP Service Delivery Framework
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: '#f0f7ff', borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74' }}>
                SAP Implementation Excellence
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our <strong>SAP S/4HANA implementation methodology</strong> follows <strong>SAP Activate methodology step-by-step</strong> with clear <strong>SAP blueprint phase deliverables</strong> and comprehensive <strong>SAP testing strategy (unit, integration, UAT)</strong>. We provide detailed <strong>SAP implementation project plan templates</strong> and follow <strong>best practices for SAP data migration</strong> to ensure successful deployment.
              </Typography>
              <Typography variant="body1">
                Our approach includes thorough <strong>SAP implementation partner selection criteria</strong> evaluation and clear <strong>SAP implementation team structure roles</strong> definition to ensure project success from inception to go-live. We provide transparent <strong>SAP implementation cost breakdown</strong> and answer common questions like "<strong>How long does SAP implementation take?</strong>" with realistic timelines.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: '#f0f7ff', borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74' }}>
                SAP Support & Maintenance
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We offer comprehensive <strong>SAP AMS (Application Managed Services)</strong> with multi-tier <strong>SAP production support model L1 L2 L3</strong> coverage. Our services include efficient <strong>SAP support ticket process best practices</strong>, proactive <strong>SAP performance tuning guide</strong> implementation, and timely <strong>SAP security patches and notes implementation</strong>.
              </Typography>
              <Typography variant="body1">
                Our <strong>SAP basis support checklist</strong> ensures system health, while specialized <strong>SAP user authorization issues troubleshooting</strong> and <strong>SAP batch job monitoring and failure handling</strong> maintain optimal operations. We provide dedicated <strong>year-end closing support activities SAP FICO</strong> for financial compliance and expert guidance on <strong>how to resolve SAP dumps and errors</strong>.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: '#f0f7ff', borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74' }}>
                SAP Upgrade Services
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our <strong>SAP upgrade project planning</strong> includes comprehensive <strong>SAP enhancement package (EhP) installation guide</strong> implementation and strategic <strong>S/4HANA 2023 to S/4HANA 2028 upgrade</strong> execution. We specialize in <strong>SAP upgrade downtime minimization strategies</strong> using advanced <strong>SAP SUM (Software Update Manager) tool</strong> techniques.
              </Typography>
              <Typography variant="body1">
                We provide thorough <strong>testing strategy for SAP upgrades</strong> and manage <strong>SAP upgrade impact on custom code (SPAU/SPDD)</strong> with minimal disruption. Our comprehensive <strong>post SAP upgrade checklist</strong> ensures system stability and performance after each upgrade cycle, helping you understand the <strong>SAP upgrade vs migration difference</strong> for proper planning.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ p: 3, backgroundColor: '#f0f7ff', borderRadius: 2, height: '100%' }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#0B4C74' }}>
                SAP Migration Expertise
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We provide end-to-end <strong>SAP S/4HANA migration</strong> services with comprehensive migration checklists. Our expertise covers both <strong>New implementation vs conversion (Greenfield vs Brownfield)</strong> approaches with detailed <strong>SAP Brownfield migration (SUM/DMO) steps</strong>.
              </Typography>
              <Typography variant="body1">
                We handle complex <strong>custom code adaptation for S/4HANA (ADT)</strong>, <strong>SAP Fiori migration in S/4HANA move</strong>, and implement comprehensive <strong>data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS)</strong>. Our services include thorough <strong>S/4HANA readiness check report</strong> analysis and efficient <strong>SAP legacy system migration workbench (LSMW)</strong> utilization, with transparent <strong>cost of migrating to SAP S/4HANA</strong> analysis.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Keyword Rich Footer Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 4, backgroundColor: '#0B4C74', color: 'white', mt: 4 }}>
        <Typography variant="body2" sx={{ textAlign: 'center', opacity: 0.8 }}>
          ONAS provides comprehensive SAP services including SAP S/4HANA implementation methodology, SAP Activate methodology step-by-step guidance, SAP implementation project plan templates, SAP implementation partner selection criteria, SAP implementation cost breakdown, SAP implementation team structure roles, SAP blueprint phase deliverables, best practices for SAP data migration, SAP testing strategy (unit, integration, UAT), SAP AMS (Application Managed Services), SAP production support model L1 L2 L3, SAP performance tuning guide, SAP security patches and notes implementation, SAP user authorization issues troubleshooting, SAP batch job monitoring and failure handling, SAP support ticket process best practices, SAP basis support checklist, year-end closing support activities SAP FICO, SAP upgrade project planning, SAP enhancement package (EhP) installation guidance, S/4HANA 2023 to S/4HANA 2028 upgrade services, SAP upgrade downtime minimization strategies, SAP SUM (Software Update Manager) tool tutorials, testing strategy for SAP upgrades, SAP upgrade impact on custom code (SPAU/SPDD) management, SAP upgrade vs migration difference analysis, post SAP upgrade checklists, SAP S/4HANA migration services, New implementation vs conversion (Greenfield vs Brownfield) evaluation, SAP Brownfield migration (SUM/DMO) steps execution, SAP S/4HANA migration cockpit deep dive expertise, custom code adaptation for S/4HANA (ADT), SAP Fiori migration in S/4HANA move, data migration strategy for S/4HANA (LTMC, LSMW, S/4HANA DMIS), S/4HANA readiness check reports, SAP legacy system migration workbench (LSMW) utilization, cost of migrating to SAP S/4HANA analysis, SAP implementation vs upgrade vs migration comparison, SAP RISE vs LEGACY model evaluation, SAP support models: break-fix vs managed services selection, SAP transformation roadmap development, and assistance in choosing an SAP partner for implementation.
        </Typography>
      </Box>
    </Box>
  );
};

export default SAP;