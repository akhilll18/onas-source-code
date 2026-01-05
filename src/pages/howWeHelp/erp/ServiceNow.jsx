import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Hero Component
import HeroMain from '../../../components/HeroMain';

// Hero Images
import Image1 from '../../../assets/images/howWeHelp/ERP/servicenow/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/ERP/servicenow/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/ERP/servicenow/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/ERP/servicenow/img4.jpg';

// Card Images
import HealthImg from '../../../assets/images/howWeHelp/ERP/servicenow/health.png';
import AdoptionImg from '../../../assets/images/howWeHelp/ERP/servicenow/adoption.png';
import StrategyImg from '../../../assets/images/howWeHelp/ERP/servicenow/strategy.png';
import ReviveImg from '../../../assets/images/howWeHelp/ERP/servicenow/health.png';
import InfuzeImg from '../../../assets/images/howWeHelp/ERP/servicenow/infuz.png';
import ExtendImg from '../../../assets/images/howWeHelp/ERP/servicenow/extend.png';
import DoneForYouImg from '../../../assets/images/howWeHelp/ERP/servicenow/doneforyou.png';

const ServiceNowPage = () => {
  // REVIVE Engagement Cards
  const reviveEngagements = [
    {
      title: 'REVIVE HEALTH Engagement',
      description: 'Best for clients looking to get an understanding of their current platform and identify gaps.',
      includes: [
        'ONAS proprietary platform health check',
        'Mapping challenges to current entitlements',
        'Findings & recommendation playback',
        'Tailored governance strategy'
      ],
      image: HealthImg
    },
    {
      title: 'REVIVE ADOPTION Engagement',
      description: 'Best for clients looking to increase adoption and build a technical roadmap for near-term value realization.',
      includes: [
        'Current adoption vs target maturity of focus applications',
        'Reverse demo of current processes',
        'Core, engagement layer & data model problem identification & prioritization'
      ],
      image: AdoptionImg
    },
    {
      title: 'REVIVE STRATEGY Engagement',
      description: 'Best for clients looking to have IT take a lead in innovation across multiple business units or areas of the platform.',
      includes: [
        'MAXIMUM ROI with full platform, cross enterprise roadmap',
        'Advisory Services for ServiceNow',
        'Establish a ServiceNow vision and roadmap aligned to your business priorities'
      ],
      image: StrategyImg
    }
  ];

  // SMART Offerings Cards
  const smartOfferings = [
    { title: 'STRATEGIC', description: 'Expert-led implementation, fast and on budget.', image: ReviveImg },
    { title: 'MARKET-TESTED', description: 'Proven solution with accelerated go-live.', image: ReviveImg },
    { title: 'AFFORDABLE', description: 'Rapid ROI with no technical debt.', image: ReviveImg },
    { title: 'RAPID DEPLOYMENT', description: 'Fast, easy, and on-budget implementation.', image: ReviveImg },
    { title: 'TRANSPARENT', description: 'Full visibility with robust documentation.', image: ReviveImg }
  ];

  // Support Services Cards
  const supportServices = [
    { title: 'INFUZE™', description: '24/7 customer support portal & reporting, minimum annual investment with full rollover of funds. On-demand access to all Crossfuze resources.', image: InfuzeImg },
    { title: 'EXTEND™', description: 'Flexible term starting at 3 months, monthly investment, hybrid team of dedicated developers.', image: ExtendImg },
    { title: 'DONE-FOR-YOU Managed Service', description: 'Platform health and support: upgrades, health scan, patching, engagement manager. Platform development: enhancements, development, miscellaneous activities. Platform strategy: COEI assessment.', image: DoneForYouImg }
  ];

  // Function to render cards
  const renderCard = (item, i) => (
    <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            boxShadow: 3,
            width: '100%',
            maxWidth: 280,
            minHeight: 300
          }}
        >
          {item.image && (
            <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
              <Box component="img" src={item.image} alt={item.title} sx={{ width: 60, height: 60 }} />
            </motion.div>
          )}
          <Typography variant="h6" sx={{ mb: item.includes ? 2 : 1 }}>{item.title}</Typography>
          <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary', mb: item.includes ? 2 : 0 }}>{item.description}</Typography>
          {item.includes && (
            <Box component="ul" sx={{ textAlign: 'left', px: 2, mb: 0 }}>
              {item.includes.map((point, idx) => <li key={idx}>{point}</li>)}
            </Box>
          )}
        </Box>
      </motion.div>
    </Grid>
  );

  return (
    <Box>
      {/* Hero Section */}
      <HeroMain
        heading="We help business leaders on their digital transformation journey with ServiceNow."
        subheading="ONAS is a ServiceNow Partner and Consulting & Implementation Partner - built to guide you through every stage of your journey with the ServiceNow platform."
        description="Whether you are new to ServiceNow or an existing ServiceNow customer, ONAS has you covered."
        images={[Image1, Image2, Image3, Image4]}
        buttons={[{ text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' }]}
      />

      {/* REVIVE Program - Heading + Details */}
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
        <Grid container spacing={4} alignItems="flex-start" justifyContent="center" sx={{ maxWidth: 1200 }}>
          {/* Left Column - Heading + Goal */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h5" color="#0B4C74"  sx={{ fontWeight: 700, mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                Introducing REVIVE, ONAS Program
              </Typography>
              <Typography color="white" sx={{ mb: 4, textAlign: { xs: 'center', md: 'left' } }}>
                The goal is simple: Maximize the value ServiceNow <br />
                delivers to your organization.
              </Typography>
            </motion.div>
          </Grid>

          {/* Right Column - Lists */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Typography color="white" variant="h6" sx={{ fontWeight: 600, mt: 3 }}>
                Assess to Understand Current State
              </Typography>
              <ul style={{color: 'white'}} >
                <li>Operational Objectives</li>
                <li>Licensing & Usage</li>
                <li>Instance Health</li>
              </ul>

              <Typography variant="h6" color="white" sx={{ fontWeight: 600, mt: 3 }}>
                Prepare to Enhance ROI
              </Typography>
              <ul style={{color: 'white'}}>
                <li>Gap Analysis</li>
                <li>Licensing Enablement</li>
                <li>Strategic & Tactical Recommendations</li>
              </ul>
            </motion.div>
          </Grid>
        </Grid>
      </Box>


      {/* REVIVE Engagements - Cards Section */}
      <Box color="#0B4C74" sx={{ py: 8, px: { xs: 2, md: 4 }, textAlign: 'center' }}>
        {/* Section Heading */}
        <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
          REVIVE Program
        </Typography>

        {/* Description */}
        <Typography variant="body1" color="white" sx={{ mb: 6, maxWidth: 700, mx: 'auto', lineHeight: 1.6 }}>
          Best for clients looking to get an understanding of their current platform and identify gaps.
        </Typography>

        {/* Cards */}
        <Grid container spacing={4} justifyContent="center">
          {reviveEngagements.map(renderCard)}
        </Grid>
      </Box>


      {/* SMART Offerings */}
      <Box color="#0B4C74" sx={{ py: 5, px: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>SMART Offerings</Typography>
        <Grid container spacing={4} justifyContent="center">{smartOfferings.map(renderCard)}</Grid>
      </Box>

      {/* Support Services */}
      <Box color="#0B4C74" sx={{ py: 5, px: 4 }}>
        <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, mb: 4, textAlign: 'center' }}>Support Services for ServiceNow</Typography>
        <Grid container spacing={4} justifyContent="center">{supportServices.map(renderCard)}</Grid>
      </Box>
    </Box>
  );
};

export default ServiceNowPage;
