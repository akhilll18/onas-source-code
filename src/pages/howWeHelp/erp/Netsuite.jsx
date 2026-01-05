import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

// Lucide Icons
import {
  Server,
  Users,
  Link,
  Wrench,
  Headphones,
  BarChart3,
  Compass,
  Settings,
  Cloud,
  BookOpen,
  Layers,
  Zap,
  GitBranch,
  Database,
} from 'lucide-react';

// Hero Image
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/ERP/Netsuite/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/ERP/Netsuite/img2.png';
import Image3 from '../../../assets/images/howWeHelp/ERP/Netsuite/img3.png';
import Image4 from '../../../assets/images/howWeHelp/ERP/Netsuite/img4.png';

const NetSuite = () => {
  // Comprehensive NetSuite Keywords - Enhanced with new categories
  const netSuiteKeywords = [
    // ====================
    // PRIMARY HIGH-INTENT KEYWORDS (Transactional)
    // ====================
    'NetSuite consulting services',
    'NetSuite implementation partner',
    'NetSuite ERP implementation',
    'NetSuite consulting company',
    'NetSuite implementation services',
    'NetSuite ERP consulting',
    'Oracle NetSuite services',
    'NetSuite implementation partner',

    // ====================
    // CORE AI TERMS
    // ====================
    'NetSuite Text Enhance features',
    'NetSuite Bill Capture automation',
    'NetSuite Analytics Warehouse AI',
    'Intelligent Performance Management (IPM) NetSuite',
    'Generative AI in NetSuite ERP',
    'NetSuite SuiteAnalytics Assistant',
    'Unified data for AI NetSuite',

    // ====================
    // PREDICTIVE TECHNOLOGY
    // ====================
    'NetSuite churn prediction model',
    'Stockout forecasting in NetSuite',
    'AI-driven financial exception management',
    'predictive analytics NetSuite',
    'machine learning NetSuite',
    'AI-powered NetSuite automation',
    'smart NetSuite workflows',

    // ====================
    // THE "SUITE" ADVANTAGE
    // ====================
    'Unified data for AI NetSuite',
    'Generative AI in NetSuite ERP',
    'NetSuite SuiteAnalytics Assistant',
    'SuiteCloud AI integration',
    'NetSuite AI-driven insights',
    'Intelligent SuiteScript development',
    'Smart SuiteFlow automation',

    // ====================
    // THE "SWITCH" INTENT
    // ====================
    'QuickBooks to NetSuite migration cost',
    'NetSuite implementation timeline 2025',
    'NetSuite vs Microsoft Dynamics 365 Business Central',
    'Best NetSuite implementation partners',
    'SAP to NetSuite migration',
    'Microsoft Dynamics to NetSuite',
    'ERP migration to NetSuite',
    'Legacy system to NetSuite migration',

    // ====================
    // PHASE-SPECIFIC KEYWORDS
    // ====================
    'NetSuite ERP discovery and planning',
    'NetSuite data migration best practices',
    'NetSuite post-go-live hypercare',
    'NetSuite implementation roadmap',
    'NetSuite deployment strategy',
    'NetSuite testing and validation',
    'NetSuite training and adoption',
    'NetSuite continuous optimization',

    // ====================
    // INDUSTRY SPECIFIC
    // ====================
    'NetSuite for food and beverage',
    'NetSuite for nonprofits pricing',
    'NetSuite for wholesale distribution',
    'NetSuite for manufacturing',
    'NetSuite for retail',
    'NetSuite for services',
    'NetSuite for software companies',
    'NetSuite for healthcare',
    'NetSuite for construction',
    'NetSuite for professional services',

    // ====================
    // TOP-SEARCHED MODULES & SUITEAPP TAGS
    // ====================

    // Financials
    'NetSuite Advanced Revenue Management (ARM)',
    'NetSuite Multi-book accounting',
    'NetSuite EPM (Enterprise Performance Management)',
    'NetSuite fixed assets management',
    'NetSuite financial reporting',
    'NetSuite general ledger',
    'NetSuite accounts payable',
    'NetSuite accounts receivable',

    // Supply Chain/WMS
    'NetSuite WMS mobile features',
    'NetSuite Smart Operations',
    'Demand planning in NetSuite',
    'NetSuite inventory management',
    'NetSuite warehouse management',
    'NetSuite order management',
    'NetSuite procurement',
    'NetSuite supply chain planning',

    // HR/People
    'NetSuite SuitePeople workforce management',
    'NetSuite Payroll enhancements 2025',
    'NetSuite HR management',
    'NetSuite employee self-service',
    'NetSuite talent management',
    'NetSuite performance management',

    // Commerce
    'SuiteCommerce Advanced vs Shopify',
    'NetSuite Connector for Amazon',
    'NetSuite MyAccount portal features',
    'NetSuite ecommerce integration',
    'NetSuite B2B commerce',
    'NetSuite B2C commerce',
    'NetSuite customer portal',
    'NetSuite web store',

    // ====================
    // NETSUITE IMPLEMENTATION SERVICES
    // ====================
    'NetSuite ERP implementation',
    'NetSuite CRM implementation',
    'NetSuite financials implementation',
    'NetSuite supply chain implementation',
    'NetSuite project management',
    'NetSuite deployment services',
    'NetSuite migration services',
    'NetSuite upgrade services',

    // ====================
    // NETSUITE CUSTOMIZATION & DEVELOPMENT
    // ====================
    'NetSuite customization services',
    'SuiteScript development',
    'NetSuite SuiteBuilder',
    'NetSuite SuiteFlow',
    'NetSuite SuiteAnalytics',
    'NetSuite SuiteCloud development',
    'NetSuite custom development',
    'NetSuite workflow automation',

    // ====================
    // NETSUITE INTEGRATION SERVICES
    // ====================
    'NetSuite integration services',
    'NetSuite API integration',
    'NetSuite third-party integration',
    'NetSuite ecommerce integration',
    'NetSuite CRM integration',
    'NetSuite ERP integration',
    'NetSuite cloud integration',
    'NetSuite middleware integration',

    // ====================
    // NETSUITE SUPPORT & MANAGED SERVICES
    // ====================
    'NetSuite managed services',
    'NetSuite support services',
    'NetSuite maintenance services',
    'NetSuite AMS services',
    'NetSuite 24/7 support',
    'NetSuite managed services provider',
    'NetSuite ongoing support',
    'NetSuite technical support',

    // ====================
    // REGIONAL KEYWORDS
    // ====================
    // ASIA Region
    'NetSuite services Asia',
    'NetSuite consulting Singapore',
    'NetSuite implementation Japan',
    'NetSuite services Australia',
    'NetSuite consulting India',
    'NetSuite Hong Kong',
    'NetSuite Malaysia',
    'NetSuite Philippines',

    // EMEA Region
    'NetSuite services Europe',
    'NetSuite consulting UK',
    'NetSuite implementation Germany',
    'NetSuite services France',
    'NetSuite consulting UAE',
    'NetSuite Saudi Arabia',
    'NetSuite South Africa',
    'NetSuite Netherlands',

    // EMAR Region
    'NetSuite Middle East services',
    'NetSuite Africa implementation',
    'NetSuite Qatar',
    'NetSuite Kuwait',
    'NetSuite Oman',
    'NetSuite Bahrain',
    'NetSuite Egypt',
    'NetSuite Nigeria',

    // LATAM Region
    'NetSuite Latin America',
    'NetSuite Mexico',
    'NetSuite Brazil',
    'NetSuite Argentina',
    'NetSuite Chile',
    'NetSuite Colombia',
    'NetSuite Peru',
    'NetSuite Costa Rica',

    // NORDIC Region
    'NetSuite Nordic',
    'NetSuite Sweden',
    'NetSuite Norway',
    'NetSuite Denmark',
    'NetSuite Finland',
    'NetSuite Iceland',
    'NetSuite Baltic',
    'NetSuite Scandinavia',

    // ====================
    // ADVANCED NETSUITE SERVICES
    // ====================
    'NetSuite SuiteSuccess implementation',
    'NetSuite OneWorld implementation',
    'NetSuite multi-company setup',
    'NetSuite multi-currency setup',
    'NetSuite tax compliance',
    'NetSuite financial reporting',
    'NetSuite dashboard development',
    'NetSuite KPI reporting'
  ].join(', ');

  const offerings = [
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: 'NetSuite ERP Implementation Services',
      text: 'Streamline core business operations—finance, procurement, inventory, and billing—through tailored ERP configurations.',
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'NetSuite CRM Services',
      text: 'Enable lead-to-cash journeys with customized NetSuite CRM modules for sales automation, customer data, and engagement tracking.',
    },
    {
      icon: <Link className="w-12 h-12 text-purple-600" />,
      title: 'NetSuite Integration Services',
      text: 'Connect NetSuite with HRMS, eCommerce, logistics, and third-party systems through scalable API and middleware integrations.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: 'NetSuite Customization & SuiteFlex',
      text: 'Use SuiteScript, SuiteBuilder, and SuiteFlow to build industry-specific workflows, reports, and UI experiences.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'NetSuite Support & Managed Services',
      text: '24/7/365 proactive monitoring, release management, bug resolution, and NetSuite admin support—on SLA-backed models.',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
      title: 'NetSuite Analytics & Dashboards',
      text: 'Design interactive dashboards, KPI reports, and BI insights across finance, sales, and inventory using SuiteAnalytics.',
    },
  ];

  const endToEnd = [
    {
      icon: <Compass className="w-12 h-12 text-indigo-600" />,
      title: 'Consult & Map',
      text: 'Define ERP goals, business processes, and role-based requirements to design the right NetSuite deployment plan.',
    },
    {
      icon: <Settings className="w-12 h-12 text-orange-600" />,
      title: 'Configure & Deploy',
      text: 'Customize NetSuite modules, roles, fields, and workflows, ensuring smooth go-live with minimal disruption.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-pink-600" />,
      title: 'Integrate & Automate',
      text: 'Develop bi-directional integrations with third-party systems, automate order-to-cash, and enable real-time data sync.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      title: 'Train & Support',
      text: 'Drive adoption through tailored training, knowledge transfer, and dedicated go-live assistance.',
    },
    {
      icon: <Layers className="w-12 h-12 text-cyan-600" />,
      title: 'Monitor & Optimize',
      text: 'Ensure continuous improvements through monthly audits, enhancement releases, and performance tuning.',
    },
  ];

  const valueDelivery = [
    {
      icon: <GitBranch className="w-12 h-12 text-blue-600" />,
      title: 'Business-Aligned Architecture',
      text: 'We build configurations and flows around your industry needs, not just the system defaults.',
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: 'Faster Go-Lives',
      text: 'Accelerated sprints, sandbox validations, and user testing for seamless transitions.',
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Low-Code & No-Code Extensions',
      text: 'Enhance functionality with SuiteBuilder, SuiteFlow, and SuiteAnalytics, without heavy development overhead.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-600" />,
      title: 'Hybrid Delivery Models',
      text: 'Offshore, onshore, and blended support models to suit your project scope and budget.',
    },
  ];

  const whyMatters = [
    'Finance, and Supply Chain into a unified cloud platform',
    'ImprovesCentralizes ERP, CRM operational agility with real-time visibility across departments',
    'Reduces IT overhead through automation and managed services',
    'Enhances financial accuracy and audit-readiness with custom reporting',
    'Scales with you—modular, cloud-native, and built for mid-size to enterprise firms',
  ];

  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global</title>
        <meta name="description" content="ONAS provides expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services. Certified NetSuite partner serving global enterprises." />
        <meta name="keywords" content={netSuiteKeywords} />
        <link rel="canonical" href="https://www.onasglobal.com/netsuite-consulting-services" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.onasglobal.com/netsuite-consulting-services" />
        <meta property="og:title" content="NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global" />
        <meta property="og:description" content="Expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services." />
        <meta property="og:image" content="https://www.onasglobal.com/assets/images/seo/netsuite/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="NetSuite Consulting Services by ONAS Global" />
        <meta property="og:site_name" content="ONAS Global" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.onasglobal.com/netsuite-consulting-services" />
        <meta name="twitter:title" content="NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global" />
        <meta name="twitter:description" content="Expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services." />
        <meta name="twitter:image" content="https://www.onasglobal.com/assets/images/seo/netsuite/twitter-card.jpg" />
        <meta name="twitter:creator" content="@onasglobal" />
        <meta name="twitter:site" content="@onasglobal" />

        {/* LinkedIn Specific Tags */}
        <meta property="linkedin:title" content="NetSuite Consulting Services | AI-Powered NetSuite ERP Implementation Partner | ONAS Global" />
        <meta property="linkedin:description" content="Expert NetSuite consulting services with AI integration, ERP implementation, CRM setup, cloud integration, and managed services." />
        <meta property="linkedin:image" content="https://www.onasglobal.com/assets/images/seo/netsuite/linkedin-image.jpg" />

        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B4C74" />

        {/* Hreflang Tags for Regional Targeting */}
        {/* ASIA Region */}
        <link rel="alternate" hreflang="en-sg" href="https://www.onasglobal.com/asia/singapore/netsuite" />
        <link rel="alternate" hreflang="en-jp" href="https://www.onasglobal.com/asia/japan/netsuite" />
        <link rel="alternate" hreflang="en-au" href="https://www.onasglobal.com/asia/australia/netsuite" />
        <link rel="alternate" hreflang="en-in" href="https://www.onasglobal.com/asia/india/netsuite" />
        <link rel="alternate" hreflang="en-hk" href="https://www.onasglobal.com/asia/hongkong/netsuite" />
        <link rel="alternate" hreflang="en-my" href="https://www.onasglobal.com/asia/malaysia/netsuite" />
        <link rel="alternate" hreflang="en-ph" href="https://www.onasglobal.com/asia/philippines/netsuite" />

        {/* EMEA Region */}
        <link rel="alternate" hreflang="en-gb" href="https://www.onasglobal.com/emea/uk/netsuite" />
        <link rel="alternate" hreflang="en-de" href="https://www.onasglobal.com/emea/germany/netsuite" />
        <link rel="alternate" hreflang="en-fr" href="https://www.onasglobal.com/emea/france/netsuite" />
        <link rel="alternate" hreflang="en-nl" href="https://www.onasglobal.com/emea/netherlands/netsuite" />
        <link rel="alternate" hreflang="en-es" href="https://www.onasglobal.com/emea/spain/netsuite" />
        <link rel="alternate" hreflang="en-it" href="https://www.onasglobal.com/emea/italy/netsuite" />
        <link rel="alternate" hreflang="en-be" href="https://www.onasglobal.com/emea/belgium/netsuite" />

        {/* EMAR Region (Extended Middle East & Africa) */}
        <link rel="alternate" hreflang="en-ae" href="https://www.onasglobal.com/emar/uae/netsuite" />
        <link rel="alternate" hreflang="en-sa" href="https://www.onasglobal.com/emar/saudiarabia/netsuite" />
        <link rel="alternate" hreflang="en-qa" href="https://www.onasglobal.com/emar/qatar/netsuite" />
        <link rel="alternate" hreflang="en-kw" href="https://www.onasglobal.com/emar/kuwait/netsuite" />
        <link rel="alternate" hreflang="en-om" href="https://www.onasglobal.com/emar/oman/netsuite" />
        <link rel="alternate" hreflang="en-eg" href="https://www.onasglobal.com/emar/egypt/netsuite" />
        <link rel="alternate" hreflang="en-ng" href="https://www.onasglobal.com/emar/nigeria/netsuite" />

        {/* LATAM Region */}
        <link rel="alternate" hreflang="es-mx" href="https://www.onasglobal.com/latam/mexico/netsuite" />
        <link rel="alternate" hreflang="pt-br" href="https://www.onasglobal.com/latam/brazil/netsuite" />
        <link rel="alternate" hreflang="es-ar" href="https://www.onasglobal.com/latam/argentina/netsuite" />
        <link rel="alternate" hreflang="es-cl" href="https://www.onasglobal.com/latam/chile/netsuite" />
        <link rel="alternate" hreflang="es-co" href="https://www.onasglobal.com/latam/colombia/netsuite" />
        <link rel="alternate" hreflang="es-pe" href="https://www.onasglobal.com/latam/peru/netsuite" />
        <link rel="alternate" hreflang="es-cr" href="https://www.onasglobal.com/latam/costarica/netsuite" />

        {/* NORDIC Region */}
        <link rel="alternate" hreflang="en-se" href="https://www.onasglobal.com/nordic/sweden/netsuite" />
        <link rel="alternate" hreflang="en-no" href="https://www.onasglobal.com/nordic/norway/netsuite" />
        <link rel="alternate" hreflang="en-dk" href="https://www.onasglobal.com/nordic/denmark/netsuite" />
        <link rel="alternate" hreflang="en-fi" href="https://www.onasglobal.com/nordic/finland/netsuite" />
        <link rel="alternate" hreflang="en-is" href="https://www.onasglobal.com/nordic/iceland/netsuite" />
        <link rel="alternate" hreflang="en-lt" href="https://www.onasglobal.com/nordic/lithuania/netsuite" />
        <link rel="alternate" hreflang="en-lv" href="https://www.onasglobal.com/nordic/latvia/netsuite" />
        <link rel="alternate" hreflang="en-ee" href="https://www.onasglobal.com/nordic/estonia/netsuite" />

        {/* Default and English variants */}
        <link rel="alternate" hreflang="x-default" href="https://www.onasglobal.com/netsuite-consulting-services" />
        <link rel="alternate" hreflang="en" href="https://www.onasglobal.com/netsuite-consulting-services" />

        {/* Mobile Specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data for SEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "NetSuite Consulting Services",
            "description": "Expert NetSuite ERP implementation, customization, integration and managed services with AI integration. Certified NetSuite partner serving global enterprises.",
            "provider": {
              "@type": "Organization",
              "name": "ONAS Global",
              "url": "https://www.onasglobal.com",
              "logo": "https://www.onasglobal.com/assets/images/logo/onas-logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/onas-global-services-pvt-ltd/",
                "https://x.com/ONAS261679",
                "https://www.facebook.com/people/ONAS-Global-Services-Pvt-Ltd/61581619530716/",
                "https://www.instagram.com/onasglobalservices/?igsh=aXVmdjVjdWVqcXE4#",
                "https://www.youtube.com/@onasglobalservices"
              ]
            },
            "areaServed": {
              "@type": "Place",
              "name": "Global Coverage"
            },
            "serviceType": [
              "ERP Implementation",
              "Cloud Consulting",
              "Business Software Integration",
              "Managed IT Services",
              "AI-Powered Solutions"
            ],
            "offers": {
              "@type": "Offer",
              "category": "Business Services"
            }
          })}
        </script>

        {/* Breadcrumb Structured Data */}
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
                "name": "ERP Solutions",
                "item": "https://www.onasglobal.com/services/erp"
              },
              {
                "@type": "ListItem",
                "position": 4,
                "name": "NetSuite Consulting",
                "item": "https://www.onasglobal.com/netsuite-consulting-services"
              }
            ]
          })}
        </script>
      </Helmet>

      <Box color="white">
        {/* Hero Section */}
        <HeroMain
          heading="Modern NetSuite Consulting Services for Agile Enterprises"
          description="Supercharge growth with NetSuite consulting services tailored to your workflows.
                From ERP implementation and CRM setup to cloud integration, we deliver agility,
                insight, and scalability - without the overhead."
          images={[Image1, Image2, Image3, Image4]}
          buttons={[
            { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
          ]}
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
            style={{ width: '100%' }}
          >
            <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700 }}>
              Scalable NetSuite Deployments That Drive Efficiency
            </Typography>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ width: '100%' }}
            viewport={{ once: true }}
          >
            <Box sx={{ width: { xs: '100%', md: '85%' } }}>
              <Typography sx={{ mb: 2 }}>
                As a certified NetSuite implementation partner, we offer complete support—from ERP setup to system tuning.
                Our experts specialize in aligning NetSuite ERP, CRM, Financials, and Supply Chain modules with your
                business goals, shortening time-to-value.
              </Typography>
              <Typography>
                Every deployment is mapped to operational KPIs, so your teams gain clarity, speed, and measurable results from day one.
                We reduce system sprawl, automate repetitive tasks, and provide actionable insights across departments
                through a unified NetSuite cloud platform.
              </Typography>
            </Box>
          </motion.div>
        </Box>

        {/* Offerings */}
        <Box sx={{ py: 5 , maxWidth: 1800,
            mx: 'auto',}}>
          <Typography variant="h4" color="#0B4C74"sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            NetSuite Core Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {offerings.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                >
                  <Box color="#0B4C74"
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
                    <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* End-to-End */}
        <Box color="#0B4C74" sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            Our End-to-End NetSuite Services
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {endToEnd.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
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
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                      {item.icon}
                    </motion.div>
                    <Typography variant="h5" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Value Delivery */}
        <Box color="#0B4C74" sx={{ py: 5 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
            How We Deliver NetSuite Success
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
                  <Box color="#0B4C74"
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
                    }}
                  >
                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                      {item.icon}
                    </motion.div>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'text.secondary' }}>
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Why NetSuite Matters */}
        <Box sx={{ py: 5, textAlign: 'center' }}>
          <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
            Why NetSuite Consulting Services Matters
          </Typography>
          <Box component="ul" sx={{ maxWidth: 800, mx: 'auto', textAlign: 'left', color: '#F2F3F4' }}>
            {whyMatters.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ marginBottom: '12px', fontSize: '1rem' }}
              >
                {point}
              </motion.li>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default NetSuite;