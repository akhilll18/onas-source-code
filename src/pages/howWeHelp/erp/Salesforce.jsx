import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

// Lucide Icons
import {
  Users,
  Link,
  Settings,
  Headphones,
  BarChart3,
  Compass,
  Wrench,
  Cloud,
  BookOpen,
  Layers,
} from 'lucide-react';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/ERP/SalesForce/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/ERP/SalesForce/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/ERP/SalesForce/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/ERP/SalesForce/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/ERP/SalesForce/img5.jpg';
import Image6 from '../../../assets/images/howWeHelp/ERP/SalesForce/img6.png';
import Image7 from '../../../assets/images/howWeHelp/ERP/SalesForce/img7.jpg';
import Image8 from '../../../assets/images/howWeHelp/ERP/SalesForce/img8.jpg';


const Salesforce = () => {
  const offerings = [
    {
      icon: <Users className="w-12 h-12 text-blue-600" fontWeight ="bold"/>,
      title: 'Salesforce Implementation Services',
      text: 'Tailored deployments for Sales, Service, and Experience Clouds—designed to fit your processes and user roles.',
    },
    {
      icon: <Link className="w-12 h-12 text-green-600" />,
      title: 'Salesforce Integration Services',
      text: 'Connect Salesforce with ERP, marketing systems, CPQ, and back-office tools via APIs and middleware.',
    },
    {
      icon: <Settings className="w-12 h-12 text-purple-600" />,
      title: 'Salesforce Customization Services',
      text: 'Configure page layouts, build Apex and Lightning components, and implement automation to drive user adoption.',
    },
    {
      icon: <Headphones className="w-12 h-12 text-red-600" />,
      title: 'Salesforce Managed Services',
      text: '24/7 monitoring, release readiness, ticket support, and ongoing enhancements under SLA-backed models.',
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
      title: 'Salesforce Analytics & Reporting',
      text: 'Build dashboards, Einstein Analytics, and reporting frameworks to turn CRM data into real-time intelligence.',
    },
  ];

  const endToEnd = [
    {
      icon: <Compass className="w-12 h-12 text-indigo-600" />,
      title: 'Consult & Strategize',
      text: 'Define CRM goals, maturity stage, user personas, and best-fit Salesforce roadmap.',
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-600" />,
      title: 'Configure & Build',
      text: 'Customize Salesforce with Flows, Apex, Lightning, UI details, and secure permission sets.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-pink-600" />,
      title: 'Integrate & Automate',
      text: 'Build middleware funnels, API endpoints, data syncs, and integration patterns.',
    },
    {
      icon: <BookOpen className="w-12 h-12 text-teal-600" />,
      title: 'Train & Change',
      text: 'Equip teams with hands-on workshops, user guides, and go-live readiness.',
    },
    {
      icon: <Layers className="w-12 h-12 text-cyan-600" />,
      title: 'Support & Optimize',
      text: 'Post-implementation support includes system health, release management, and AI capabilities.',
    },
  ];

  return (
    <Box color="#0B4C74">
      {/* Hero Section */}
      <HeroMain
        heading="Salesforce Consulting Services That Turn CRM Into ROI"
        // subheading="optioanl"
        description="Unlock CRM power through tailored Salesforce consulting services. From
              strategic deployment to ongoing enhancements, we help businesses
              streamline sales, service, and marketing operations with measurable,
              scalable impact."
        images={[Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      // bgImages={{ xs: bgMobile, md: bgDesktop }}
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
          transition={{ duration: 0.6 }}
          style={{ width: '100%' }}
          viewport={{ once: true }}
        >
          <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, fontFamily: 'sans-serif', fontSize: '16px' }}>
            Powering CRM Success with Expert Salesforce Consulting
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
          <Box color="white" sx={{ width: { xs: '100%', md: '85%' } }}>
            <Typography sx={{ mb: 2, fontFamily: 'sans-serif', fontSize: '16px'  }}>
              With deep domain knowledge and certified Salesforce consultants, we
              turn CRM vision into operational excellence. Whether it's a greenfield
              implementation, org optimization, or multi-cloud integration, our team
              ensures best-practice alignment at every step.
            </Typography>
            <Typography sx={{ mb: 2, fontFamily: 'sans-serif', fontSize: '16px' }}>
              From Sales and Service Clouds to Marketing, Commerce, and Pardot, our
              full-spectrum Salesforce consulting services help you engage
              effectively, drive efficiency, and grow sustainably.
            </Typography>
            <Typography sx={{ mb: 2, fontFamily: 'sans-serif', fontSize: '16px' }}>
              We focus on configuring Salesforce to mirror your business
              processes—so adoption improves, automation performs, and ROI becomes
              measurable.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Offerings Section */}
      <Box color="#0B4C74" sx={{ px: { xs: 2, md: 8 }, py: 5 }}>
        <Typography
          variant="h4"
          color="#0B4C74"

          sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}
        >
          Salesforce Core Services
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

      {/* End-to-End Section */}
      <Box sx={{ px: { xs: 2, md: 8 }, py: 5 }}>
        <Typography
          variant="h5"
          sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}
        >
          Our End-to-End Salesforce Services
        </Typography>

        <Grid container spacing={2} justifyContent="center">
          {endToEnd.map((item, i) => (
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
    </Box>
  );
};

export default Salesforce;
