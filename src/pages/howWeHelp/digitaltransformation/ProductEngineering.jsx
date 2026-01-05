import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Compass,
  Layers,
  Zap,
  GitBranch,
  Server,
  Smartphone,
  Wrench,
} from 'lucide-react';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/productengg/img4.jpg';

const ProductEngineering = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/product-engineering`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'Product Engineering Services | End-to-End Product Development 2024',
    description: 'Comprehensive product engineering services: product consulting, development, modernization, testing, and maintenance. Build scalable digital products with expert engineering teams.',
    keywords: 'product engineering, product development, software product engineering, product consulting, MVP development, product modernization, SaaS development, cloud-native applications, product testing, quality engineering, product maintenance, software development lifecycle, agile product development, product architecture, UI/UX design, microservices, API development, DevOps for products, product lifecycle management, digital product engineering, product engineering company, custom software product development, product engineering services, product engineering solutions',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  // Structured Data for Product Engineering Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Product Engineering Services",
    "description": "End-to-end product engineering services including product consulting, development, modernization, testing, and maintenance",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "Product Consulting & Design",
      "Platform & Application Development",
      "Product Modernization & Transformation",
      "Product Testing & Quality Engineering",
      "Product Maintenance & Support"
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

  // FAQ Schema for Product Engineering
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Product Engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Product engineering is the process of designing, developing, testing, and maintaining software products from concept to launch and beyond. It encompasses the entire software development lifecycle with a focus on building scalable, reliable, and market-ready digital products."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key stages of product engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Key stages include product discovery and consulting, design and architecture, development and coding, testing and quality assurance, deployment, and ongoing maintenance and support. Modern product engineering also includes DevOps, CI/CD, and agile methodologies."
        }
      },
      {
        "@type": "Question",
        "name": "What types of products do you develop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop web applications, mobile apps (iOS/Android), SaaS platforms, enterprise software, cloud-native applications, IoT solutions, embedded systems, and modernize legacy applications across various industries including healthcare, finance, retail, and technology."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you use for product engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We use modern technology stacks including React, Angular, Vue.js, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), microservices architecture, containerization (Docker, Kubernetes), and various databases and DevOps tools."
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
        "name": "Product Engineering",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Compass className="w-12 h-12 text-blue-600" />,
      title: 'Product Consulting & Design',
      text: `Product Discovery & Feasibility Study
Tech Stack Evaluation & Architecture Planning
UI/UX Design and Wireframing
Prototype & MVP Development`,
      schemaType: "ConsultingService"
    },
    {
      icon: <Server className="w-12 h-12 text-green-600" />,
      title: 'Platform & Application Development',
      text: `Web, Mobile & Desktop App Development
SaaS & Cloud-Native Product Engineering
Embedded & IoT Device Engineering
Low-Code / No-Code Application Development`,
      schemaType: "SoftwareApplication"
    },
    {
      icon: <Layers className="w-12 h-12 text-purple-600" />,
      title: 'Product Modernization & Transformation',
      text: `Legacy System Re-engineering
Cloud Migration & Microservices Architecture
API-First Development & Performance Optimization`,
      schemaType: "ModernizationService"
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      title: 'Product Testing & Quality Engineering',
      text: `Test Strategy Design & Automation
CI/CD, Functional & Security Testing
Compliance Testing (HIPAA, FDA, ISO, etc.)`,
      schemaType: "QualityAssuranceService"
    },
    {
      icon: <GitBranch className="w-12 h-12 text-red-600" />,
      title: 'Product Maintenance & Support',
      text: `L1–L3 Application Support
Feature Enhancements & Technical Upgrades
DevOps, Release Engineering & Documentation`,
      schemaType: "MaintenanceService"
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
        <meta property="og:title" content="Product Engineering Services | End-to-End Product Development" />
        <meta property="og:description" content="Build innovative digital products with our comprehensive product engineering services from concept to launch and beyond." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS Product Engineering" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="Product Engineering Services | Digital Product Development" />
        <meta name="twitter:description" content="Comprehensive product engineering services for building scalable, reliable software products." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="Product Engineering Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="Product Engineering Services" />
        <meta property="linkedin:description" content="End-to-end product engineering for web, mobile, SaaS, and enterprise applications." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS Product Engineering" />
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
            "description": "Product engineering and software development services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>Product Engineering Services</h1>
        <p>Comprehensive product engineering services for designing, developing, testing, and maintaining software products. Our end-to-end product engineering approach ensures successful product delivery from concept to launch and beyond.</p>

        <h2>Product Engineering Services Overview</h2>
        <p>Our product engineering services include product consulting, design, development, modernization, testing, and maintenance. We build scalable, reliable, and innovative digital products using modern technology stacks and agile methodologies.</p>

        <h3>Product Engineering Lifecycle</h3>
        <ul>
          <li>Product Discovery and Strategy Planning</li>
          <li>UI/UX Design and User Experience Research</li>
          <li>Full-Stack Development and Implementation</li>
          <li>Quality Assurance and Testing Automation</li>
          <li>DevOps and Continuous Deployment</li>
          <li>Product Maintenance and Support</li>
        </ul>

        <h4>Product Engineering Technologies</h4>
        <p>We use modern technologies including React, Angular, Vue.js, Node.js, Python, Java, .NET, cloud platforms (AWS, Azure, GCP), microservices, Docker, Kubernetes, and various databases for building scalable product solutions.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="Product Engineering Services"
        description="From idea to launch, and every iteration in between, our end-to-end product engineering services empower you to build innovative, reliable, and scalable digital solutions. Modern product engineering goes beyond writing code—it demands agility, resilience, and alignment with business goals."
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
          Build Innovative Digital Products with Expert Engineering
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Our product engineering services combine technical expertise with business strategy to deliver
          market-ready digital products. We follow agile methodologies, implement best practices, and
          leverage modern technologies to build products that users love and businesses need.
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
          Our Product Engineering Offerings
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
          Comprehensive product engineering services covering the entire software development lifecycle,
          from initial concept to ongoing maintenance and support.
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
                                 i === 3 ? '#f97316' : '#ef4444'
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

      {/* Product Engineering Benefits Section */}
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
              Benefits of Professional Product Engineering
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              Our product engineering approach delivers measurable business benefits including faster
              time-to-market, higher quality products, reduced development costs, and scalable
              architecture that supports future growth.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              By following agile methodologies and implementing DevOps practices, we ensure continuous
              delivery, rapid iteration, and quick adaptation to market changes and user feedback.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our expertise in modern technologies and cloud-native development enables us to build
              products that are scalable, secure, and performant, providing competitive advantage
              in today's digital marketplace.
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
                Product Engineering Success Metrics
              </Typography>
              <Grid container spacing={2}>
                {[
                  { label: 'Faster Time-to-Market', value: '30-50%' },
                  { label: 'Quality Improvement', value: '60-80%' },
                  { label: 'Cost Reduction', value: '20-40%' },
                  { label: 'Scalability Improvement', value: '3-5x' },
                  { label: 'User Satisfaction', value: '90%+' },
                  { label: 'Deployment Frequency', value: 'Daily' }
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

      {/* Technology Stack Section */}
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
          Technology Stack for Product Engineering
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
          {[
            { category: 'Frontend', tech: 'React, Angular, Vue.js, TypeScript' },
            { category: 'Backend', tech: 'Node.js, Python, Java, .NET, Go' },
            { category: 'Mobile', tech: 'React Native, Flutter, Swift, Kotlin' },
            { category: 'Cloud', tech: 'AWS, Azure, Google Cloud, Kubernetes' },
            { category: 'Databases', tech: 'PostgreSQL, MongoDB, MySQL, Redis' },
            { category: 'DevOps', tech: 'Docker, Jenkins, GitLab CI, Terraform' }
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
          Ready to Build Your Next Digital Product?
        </Typography>
        <Typography
          variant="body1"
          color="#F2F3F4"
          sx={{
            lineHeight: 1.7,
            mb: 4
          }}
        >
          Contact our product engineering experts to discuss your project requirements,
          explore technical solutions, and develop a roadmap for successful product delivery.
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
          Start Your Product Journey
        </Button>
      </Box>
    </Box>
  );
};

export default ProductEngineering;