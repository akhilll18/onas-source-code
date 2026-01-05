import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
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

import HeroMain from '../../../components/HeroMain';

// SEO Components
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img6.jpg';
import Image7 from '../../../assets/images/howWeHelp/digitaltrans/AIML/img7.jpg';

const AIML = () => {
  const location = useLocation();
  const baseUrl = 'https://onasglobal.com'; // Replace with your actual domain

  // SEO Metadata
  const seoData = {
    title: 'AI & ML Consulting Services | Enterprise AI Solutions & Implementation',
    description: 'Drive enterprise performance with AI consulting services designed for intelligent automation, predictive analytics, and transformative customer experiences. Custom machine learning models and enterprise-grade generative AI solutions.',
    keywords: 'AI consulting, machine learning services, enterprise AI solutions, generative AI implementation, predictive analytics, computer vision, NLP, AI automation, MLOps',
    canonicalUrl: `${baseUrl}${location.pathname}`,
    ogImage: Image1,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "AI & ML Consulting Services",
      "description": "Enterprise AI solutions and machine learning consulting services",
      "provider": {
        "@type": "Organization",
        "name": "ONAS"
      },
      "serviceType": [
        "AI Strategy Consulting",
        "Machine Learning Development",
        "Computer Vision Solutions",
        "Natural Language Processing",
        "Generative AI Implementation",
        "Predictive Analytics"
      ],
      "areaServed": "Global",
      "offers": {
        "@type": "Offer",
        "category": "Professional Services"
      }
    }
  };

  const offerings = [
    {
      icon: <Server className="w-12 h-12 text-blue-600" />,
      title: 'AI Strategy & Consulting',
      text: `AI readiness assessments and maturity evaluation
Use-case mapping with ROI impact modeling
Responsible AI frameworks, governance, compliance`,
      schemaType: "ConsultingService"
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Computer Vision & NLP',
      text: `Video analytics, OCR, defect detection, facial recognition
NLP for sentiment analysis, summarization, and speech-to-text
Custom NLU pipelines for contextual understanding`,
      schemaType: "SoftwareApplication"
    },
    {
      icon: <Link className="w-12 h-12 text-purple-600" />,
      title: 'Machine Learning & Predictive Analytics',
      text: `Supervised and unsupervised learning models
Forecasting, churn prediction, anomaly detection
Model development, MLOps pipelines, continuous learning`,
      schemaType: "DataAnalysisService"
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: 'Generative AI Solutions',
      text: `Enterprise-grade GPT chatbot and knowledge assistants
LLM integrations using OpenAI, Azure, Claude, Bedrock
Text, code, and image generation use cases
Model fine-tuning and prompt engineering`,
      schemaType: "SoftwareApplication"
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'AI-Powered Automation',
      text: `Intelligent document processing and workflow automation
RPA augmentation with AI models
Hyper-personalization and real-time recommendations`,
      schemaType: "AutomationService"
    },
  ];

  const valueDelivery = [
    {
      icon: <GitBranch className="w-12 h-12 text-blue-600" />,
      title: 'Business-Aligned Intelligence',
      text: 'We address real-world challenges, including fraud detection, inventory forecasting, and dynamic customer experience personalization',
      schemaBenefit: "BusinessIntelligence"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-600" />,
      title: 'Cross-Industry Expertise',
      text: 'Healthcare, Retail, BFSI, Manufacturing, EdTech — all covered with domain-ready accelerators.',
      schemaBenefit: "IndustryExpertise"
    },
    {
      icon: <Database className="w-12 h-12 text-purple-600" />,
      title: 'Secure & Responsible AI',
      text: 'We follow ethical AI practices with compliance, privacy controls, and explainability at every level.',
      schemaBenefit: "SecurityFeature"
    },
    {
      icon: <Cloud className="w-12 h-12 text-orange-600" />,
      title: 'Rapid Scaling & ROI',
      text: 'From MVP to production-grade deployments, we optimize for speed, impact, and sustainability.',
      schemaBenefit: "PerformanceBenefit"
    },
  ];

  // Breadcrumb structured data
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
        "name": "AI & ML Consulting",
        "item": `${baseUrl}${location.pathname}`
      }
    ]
  };

  // FAQ structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What industries do you serve with AI consulting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve multiple industries including Healthcare, Retail, BFSI, Manufacturing, and EdTech with domain-specific AI solutions and accelerators."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure AI model security and compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement ethical AI practices with built-in privacy controls, explainability frameworks, and compliance with industry regulations including GDPR, HIPAA, and PCI-DSS."
        }
      },
      {
        "@type": "Question",
        "name": "What is your approach to generative AI implementation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide enterprise-grade generative AI solutions including custom GPT chatbots, LLM integrations with OpenAI/Azure/Claude, and specialized models for text, code, and image generation with proper fine-tuning and prompt engineering."
        }
      }
    ]
  };

  return (
    <Box>
      {/* ============================= */}
      {/* SEO IMPLEMENTATION STARTS HERE */}
      {/* ============================= */}
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
          {JSON.stringify(seoData.structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      {/* ============================ */}
      {/* SEO IMPLEMENTATION ENDS HERE */}
      {/* ============================ */}

      {/* Hidden semantic HTML for SEO */}
      <Box sx={{ display: 'none' }}>
        <h1>AI & Machine Learning Consulting Services</h1>
        <p>Enterprise AI solutions provider offering comprehensive artificial intelligence and machine learning services including AI strategy, computer vision, natural language processing, generative AI, and predictive analytics implementation.</p>

        <h2>AI Consulting Services Overview</h2>
        <p>Our AI consulting services help enterprises transform operations through intelligent automation and data-driven decision making. We specialize in custom machine learning model development and deployment across various industries.</p>

        <h3>Key AI Service Areas</h3>
        <ul>
          <li>AI Strategy & Digital Transformation Consulting</li>
          <li>Machine Learning Model Development & MLOps</li>
          <li>Computer Vision & Image Processing Solutions</li>
          <li>Natural Language Processing & Understanding</li>
          <li>Generative AI & Large Language Model Integration</li>
          <li>Predictive Analytics & Business Intelligence</li>
        </ul>
      </Box>

      {/* Hero Section */}
      <HeroMain
        heading="Artificial Intelligence Consulting Services for Enterprise Impact"
        description="Drive enterprise performance with AI consulting services designed to enable intelligent automation,
              predictive analytics, and transformative customer experiences. Whether it's custom machine learning
              models or enterprise-grade generative AI, accelerate your journey from pilot projects to scalable AI implementation."
        images={[Image1, Image2, Image3, Image4, Image5, Image6, Image7]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* Offerings Section with Schema Markup */}
      <Box sx={{ py: 5 }} itemScope itemType="https://schema.org/Service">
        <Typography
          variant="h2"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' } // Better for SEO hierarchy
          }}
          itemProp="name"
        >
          Our AI Consulting Offerings
        </Typography>
        <meta itemProp="description" content="Comprehensive AI and machine learning services for enterprise transformation" />

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
                    variant="h3"
                    sx={{
                      mb: 1,
                      fontSize: '1.3rem',
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

      {/* Value Delivery Section */}
      <Box sx={{ py: 5 }} itemScope itemType="https://schema.org/Benefits">
        <Typography
          variant="h2"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.8rem', md: '2.2rem' }
          }}
        >
          How We Deliver Value with AI
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {valueDelivery.map((item, i) => (
            <Grid
              item xs={12} sm={6} md={3}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
              itemScope
              itemType={`https://schema.org/${item.schemaBenefit}`}
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
                    maxWidth: 250,
                    height: '100%',
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
                    variant="h3"
                    sx={{
                      mb: 1,
                      fontSize: '1.2rem',
                      fontWeight: 600
                    }}
                    itemProp="name"
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

      {/* Additional SEO-rich content (hidden but readable by search engines) */}
      <Box sx={{ mt: 8, mb: 4, px: { xs: 2, md: 8 } }}>
        <Box sx={{
          backgroundColor: 'rgba(11, 76, 116, 0.05)',
          p: 4,
          borderRadius: 2,
          opacity: 0.9
        }}>
          <Typography variant="h3" sx={{ fontSize: '1.5rem', mb: 2, color: '#0B4C74' }}>
            Why Choose Our AI Consulting Services?
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'white' }}>
            As a leading AI consulting company, we provide end-to-end machine learning solutions that drive measurable business outcomes. Our expertise spans across artificial intelligence implementation, model deployment, and ongoing optimization.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'white' }}>
            With deep experience in both traditional machine learning and cutting-edge generative AI, we help enterprises navigate their digital transformation journey. Our data scientists and AI engineers work closely with your team to develop custom solutions that address specific business challenges.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: 'white' }}>
            Whether you need predictive analytics for better decision-making, computer vision for quality control, or NLP for customer service automation, our AI consulting services deliver scalable, production-ready solutions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AIML;