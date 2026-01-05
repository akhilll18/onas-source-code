import React from 'react';
import { Helmet } from 'react-helmet';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Laptop, Smartphone, Headphones, Shield, Zap, BookOpen, Users, Database } from 'lucide-react';
import HelpdeskHero from '../../../assets/images/howWeHelp/mitoper/helpdesk.png';
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/helpdesk/img4.png';

const Helpdesk = () => {
  // SEO Meta Data
  const seoData = {
    title: '24x7 Helpdesk Support Services | Enterprise IT Help Desk Solutions',
    description: 'Professional 24x7 helpdesk support services with remote desktop support, end-user device management, IT outsourcing & incident reporting. Improve productivity with SLA-based IT support.',
    keywords: '24x7 helpdesk support, IT help desk services, remote desktop support, end-user device management, IT outsourcing, password management, incident reporting, enterprise IT support, SLA-based helpdesk',
    canonicalUrl: 'https://yourdomain.com/services/helpdesk-support',
    ogImage: HelpdeskHero,
    ogImageAlt: '24x7 Helpdesk Support Team - IT Support Services',
    twitterImage: HelpdeskHero,
    twitterImageAlt: 'Professional 24x7 IT Helpdesk Support Services',
  };

  const offerings = [
    { icon: <Laptop className="w-12 h-12 text-blue-600" />, title: 'Remote Desktop Support Services', text: 'Comprehensive support for desktops, laptops, printers, and peripheral devices. Includes remote diagnostics, hardware coordination, and system configuration.' },
    { icon: <Smartphone className="w-12 h-12 text-green-600" />, title: 'End-User Device Management', text: 'Lifecycle management of desktops, laptops, and mobile devices. Includes OS patching, driver updates, antivirus management, and software deployment.' },
    { icon: <Headphones className="w-12 h-12 text-purple-600" />, title: 'IT Helpdesk Outsourcing', text: 'Complete outsourced helpdesk support with multi-channel ticket resolution (email, chat, phone, and web) backed by performance analytics and SLA-based response.' },
    { icon: <Database className="w-12 h-12 text-orange-600" />, title: 'Application & Software Support', text: 'Support for productivity and enterprise software suites including installation, license validation, bug resolution, and usage assistance.' },
    { icon: <Users className="w-12 h-12 text-red-600" />, title: 'User Onboarding & Access Provisioning', text: 'Automated user provisioning and access configuration for systems, VPNs, enterprise apps, and collaboration tools.' },
    { icon: <Shield className="w-12 h-12 text-teal-600" />, title: 'Password & Access Management', text: 'Round-the-clock support for password resets, multi-factor authentication, account lockouts, and single sign-on (SSO) configuration.' },
    { icon: <BookOpen className="w-12 h-12 text-yellow-600" />, title: 'Knowledge Management & Training', text: 'Curated knowledge base creation, how-to guides, and training materials to enable self-service and improve first-contact resolution.' },
    { icon: <Zap className="w-12 h-12 text-pink-600" />, title: 'Incident Reporting & Analytics', text: 'Daily, weekly, and monthly reports on ticket trends, response metrics, and resolution times to enable continuous improvement.' },
  ];

  // Schema.org structured data for Helpdesk Service
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "24x7 Helpdesk Support Services",
    "description": seoData.description,
    "provider": {
      "@type": "Organization",
      "name": "ONAS"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "serviceType": "IT Support Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Helpdesk Services",
      "itemListElement": offerings.map((item, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": item.title,
          "description": item.text
        }
      }))
    }
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
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:image" content={seoData.ogImage} />
        <meta property="og:image:alt" content={seoData.ogImageAlt} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={seoData.canonicalUrl} />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content={seoData.twitterImage} />
        <meta name="twitter:image:alt" content={seoData.twitterImageAlt} />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Your Company Name" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Hero Section */}
      <HeroMain
        heading="24x7 Helpdesk Support Services"
        // subheading="optional"
        description="Empower your workforce with uninterrupted IT support. Our 24x7 helpdesk support services ensure timely, accurate, and seamless resolution of user issues, improving productivity and minimizing business downtime."
        images={[Image1, HelpdeskHero, Image2, Image3, Image4]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* Offerings Section with Semantic HTML */}
      <Box component="section" sx={{ py: 5 }}>
        <Typography
          component="h2"
          variant="h5"
          color="#0B4C74"
          sx={{
            fontWeight: 700,
            mb: 6,
            textAlign: 'center',
            fontSize: { xs: '1.5rem', md: '2rem' }
          }}
        >
          Our 24x7 Helpdesk Services Portfolio
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={i}
              sx={{ display: 'flex', justifyContent: 'center' }}
            >
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: 6 }}
                style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
              >
                <Box
                  component="article"
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
                    maxWidth: 320,
                    height: '100%',
                    minHeight: 320
                  }}
                >
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    style={{ marginBottom: 16 }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </motion.div>
                  <Typography
                    component="h3"
                    color="#0B4C74"
                    variant="h6"
                    sx={{
                      mb: 2,
                      fontWeight: 600,
                      fontSize: { xs: '1rem', sm: '1.1rem' }
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      color: 'text.secondary',
                      flexGrow: 1
                    }}
                  >
                    {item.text}
                  </Typography>
                </Box>
              </motion.article>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Helpdesk;