import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Wifi,
  Smartphone,
  Cloud,
  Zap,
  Database,
  Layers,
  Compass,
  GitBranch,
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img5.jpg';

const IOTServices = () => {
  const baseUrl = window.location.origin;
  const pageUrl = `${baseUrl}/services/iot-application-development`;

  // SEO Metadata for Google and Social Networks
  const seoData = {
    title: 'IoT Application Development Services | IoT Solutions & Consulting 2024',
    description: 'Professional IoT application development services: IoT ecosystems, mobile apps, data analytics, device integration for smart manufacturing, healthcare, and smart cities.',
    keywords: 'IoT development, IoT solutions, IoT applications, IoT consulting, IoT ecosystem, IoT data analytics, IoT integration, smart devices, IoT platforms, Azure IoT, AWS IoT, Arduino, NodeMCU, IoT sensors, IoT connectivity, IoT security, IoT consulting services, IoT development company, Internet of Things, IoT software development, industrial IoT, IoT cloud, IoT mobile apps, IoT dashboards, IoT sensors, IoT connectivity protocols, IoT security solutions',
    canonicalUrl: pageUrl,
    ogImage: Image1,
    twitterImage: Image1,
  };

  // Structured Data for IoT Services
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IoT Application Development Services",
    "description": "Professional IoT development services for smart ecosystems, device integration, data analytics, and mobile applications",
    "provider": {
      "@type": "Organization",
      "name": "ONAS",
      "url": baseUrl,
      "logo": `${baseUrl}/logo.png`
    },
    "serviceType": [
      "IoT Ecosystem Development",
      "IoT Mobile & Web Applications",
      "IoT Data & Analytics",
      "Device Integration & Connectivity"
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

  // FAQ Schema for IoT
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is IoT application development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IoT application development involves creating software solutions for Internet of Things devices, including sensor integration, data processing, mobile/web interfaces, and cloud connectivity to enable smart, connected ecosystems."
        }
      },
      {
        "@type": "Question",
        "name": "Which IoT platforms do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We develop IoT solutions using Azure IoT Hub, AWS IoT Core, Google Cloud IoT, Arduino, NodeMCU, Raspberry Pi, and various IoT platforms for industrial and consumer applications."
        }
      },
      {
        "@type": "Question",
        "name": "What industries use IoT solutions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IoT solutions serve multiple industries including smart manufacturing, healthcare (IoMT), smart cities, agriculture, logistics, retail, energy management, and building automation."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure IoT security?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement end-to-end IoT security including device authentication, data encryption, secure communication protocols, regular firmware updates, and compliance with industry security standards."
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
        "name": "IoT Application Development",
        "item": seoData.canonicalUrl
      }
    ]
  };

  const offerings = [
    {
      icon: <Wifi className="w-12 h-12 text-blue-600" />,
      title: 'IoT Ecosystem Development',
      text: `Design and develop interconnected IoT systems across devices and platforms
Leverage IoT platforms like Azure IoT Hub, AWS IoT, Arduino, NodeMCU
Integrate sensors for temperature, humidity, motion, light, and more
Enable secure and scalable device communication`,
    },
    {
      icon: <Smartphone className="w-12 h-12 text-green-600" />,
      title: 'IoT Mobile & Web Applications',
      text: `Build mobile apps and web dashboards for real-time IoT data visualization
Enable remote monitoring and device management
Develop using Node.js, Python, .NET MAUI, Flutter for cross-platform support
Integrate actionable insights into enterprise workflows`,
    },
    {
      icon: <Cloud className="w-12 h-12 text-purple-600" />,
      title: 'IoT Data & Analytics',
      text: `Collect, process, and analyze IoT sensor data
Leverage predictive analytics and actionable insights
Integrate with cloud services for scalability and real-time decision-making
Support industry use cases like smart manufacturing, wearables, and smart buildings`,
    },
    {
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      title: 'Device Integration & Connectivity',
      text: `Enable Bluetooth, NFC, WiFi, 4G LTE, and 5G connectivity
Support communication protocols like Modbus, BLE, TCP/IP, UDP, and Beacons
Ensure secure device onboarding and lifecycle management
Optimize connectivity for performance and reliability`,
    },
  ];

  const valueDelivery = [
    {
      icon: <Compass className="w-12 h-12 text-blue-600" />,
      title: 'End-to-End IoT Development',
      text: 'From IoT ecosystem design to mobile apps, dashboards, and analytics—complete end-to-end delivery.',
    },
    {
      icon: <Database className="w-12 h-12 text-green-600" />,
      title: 'Cross-Industry Expertise',
      text: 'IoT solutions tailored for manufacturing, healthcare, logistics, wearables, smart buildings, and more.',
    },
    {
      icon: <GitBranch className="w-12 h-12 text-purple-600" />,
      title: 'Scalable & Secure Solutions',
      text: 'Secure, reliable, and scalable IoT applications with encryption, authentication, and zero-trust architecture.',
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: 'Innovation-Driven Approach',
      text: 'Leverage latest technologies, sensors, protocols, and platforms to deliver cutting-edge IoT solutions.',
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
        <meta property="og:title" content="IoT Application Development Services | Smart IoT Solutions" />
        <meta property="og:description" content="Build smart IoT ecosystems with professional IoT application development services for enterprises and industries." />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="ONAS IoT Solutions" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@YourCompany" />
        <meta name="twitter:creator" content="@YourCompany" />
        <meta name="twitter:title" content="IoT Application Development Services | IoT Solutions" />
        <meta name="twitter:description" content="Professional IoT development services for smart devices, sensors, and connected ecosystems." />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content="IoT Application Development Services" />

        {/* LinkedIn */}
        <meta property="linkedin:title" content="IoT Application Development Services" />
        <meta property="linkedin:description" content="Enterprise IoT solutions for smart manufacturing, healthcare, and connected devices." />
        <meta property="linkedin:image" content={seoData.ogImage} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="ONAS IoT Solutions" />
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
            "description": "IoT application development and consulting services"
          })}
        </script>
      </Helmet>

      {/* Hidden SEO content for search engines */}
      <div style={{ display: 'none' }}>
        <h1>IoT Application Development Services</h1>
        <p>Professional IoT application development services for enterprises. We build custom IoT solutions including smart device integration, sensor networks, data analytics, mobile applications, and cloud platforms for industrial IoT, smart cities, healthcare, and manufacturing.</p>

        <h2>IoT Development Services</h2>
        <p>Comprehensive IoT development including hardware integration, software development, cloud connectivity, data analytics, and mobile/web applications for connected devices and smart ecosystems.</p>

        <h3>IoT Technologies We Use</h3>
        <ul>
          <li>IoT Platforms: Azure IoT Hub, AWS IoT Core, Google Cloud IoT</li>
          <li>Hardware: Arduino, Raspberry Pi, NodeMCU, ESP32</li>
          <li>Connectivity: Bluetooth, WiFi, LoRaWAN, 5G, NB-IoT</li>
          <li>Sensors: Temperature, Humidity, Motion, GPS, Pressure</li>
          <li>Protocols: MQTT, CoAP, HTTP, Modbus, BLE</li>
        </ul>

        <h4>IoT Applications by Industry</h4>
        <p>Industrial IoT (IIoT), Smart Manufacturing, Healthcare IoT, Smart Cities, Agriculture IoT, Retail IoT, Logistics and Supply Chain, Energy Management, Building Automation, Wearable Devices.</p>
      </div>

      {/* Hero Section */}
      <HeroMain
        heading="IoT Application Development Services"
        description="As a premier IoT software development company, we help you build smart ecosystems and tailored IoT solutions by integrating your vision into the software ecosystem. Enhance device communication, real-time visibility, and actionable insights across industries."
        images={[Image1, Image2, Image3, Image4, Image5]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* SEO Introduction */}
      <Box sx={{
        maxWidth: '900px',
        mx: 'auto',
        px: { xs: 2, md: 0 },
        py: 4,
        textAlign: 'center'
      }}>
        <Typography variant="h6" color="#0B4C74" sx={{
          fontWeight: 600,
          mb: 3,
          fontSize: { xs: '1.1rem', md: '1.3rem' }
        }}>
          Build Smart Connected Ecosystems with Professional IoT Development
        </Typography>
        <Typography variant="body1" color="#F2F3F4" sx={{
          lineHeight: 1.7,
          mb: 4
        }}>
          Our IoT application development services transform physical devices into intelligent, connected systems.
          We specialize in end-to-end IoT solutions including sensor integration, data analytics, cloud platforms,
          and mobile applications for various industries.
        </Typography>
      </Box>

      {/* Offerings */}
      <Box sx={{ py: 5, px: { xs: 2, md: 4 } }}>
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
          Our IoT Development Offerings
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid
              item xs={12} sm={6} md={3}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
              itemScope
              itemType="https://schema.org/Service"
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
                    border: '1px solid rgba(11, 76, 116, 0.1)'
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

      {/* Value Delivery */}
      <Box sx={{ py: 5, px: { xs: 2, md: 4 } }}>
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
          Why Choose ONAS for IoT Development?
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

      {/* SEO Content Section */}
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, md: 4 },
        py: 6,
        backgroundColor: 'rgba(11, 76, 116, 0.03)',
        borderRadius: 3,
        mt: 6
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h5"
              color="#0B4C74"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              IoT Technology Stack & Expertise
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              We utilize cutting-edge IoT technologies including Azure IoT Hub, AWS IoT Core, Google Cloud IoT,
              Arduino, Raspberry Pi, and various sensor technologies. Our expertise covers the full IoT stack
              from edge computing to cloud analytics.
            </Typography>
            <Typography variant="body1" color="#F2F3F4" paragraph>
              From industrial IoT (IIoT) to consumer applications, we build scalable, secure, and reliable
              IoT solutions that deliver actionable insights and business value.
            </Typography>
            <Typography variant="body1" color="#F2F3F4">
              Our IoT development services include custom firmware, mobile applications, web dashboards,
              data analytics, and integration with enterprise systems.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{
              backgroundColor: 'white',
              p: 3,
              borderRadius: 2,
              boxShadow: 2
            }}>
              <Typography
                variant="h6"
                color="#0B4C74"
                gutterBottom
                sx={{ fontWeight: 600, mb: 2 }}
              >
                IoT Application Areas
              </Typography>
              <Grid container spacing={2}>
                {[
                  'Smart Manufacturing & Industry 4.0',
                  'Healthcare & Medical Devices',
                  'Smart Cities & Infrastructure',
                  'Agriculture & Environmental Monitoring',
                  'Retail & Supply Chain',
                  'Energy Management & Smart Grid'
                ].map((area, idx) => (
                  <Grid item xs={12} sm={6} key={idx}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      mb: 1
                    }}>
                      <Box sx={{
                        width: 8,
                        height: 8,
                        backgroundColor: '#0B4C74',
                        borderRadius: '50%',
                        mr: 1.5
                      }} />
                      <Typography variant="body2" color="text.secondary">
                        {area}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default IOTServices;