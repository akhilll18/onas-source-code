import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Database,
  BarChart3,
  Layers,
  Zap,
  Cloud,
  GitBranch,
  Compass,
} from 'lucide-react';

import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img1.jpg';
import Image2 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img4.jpg';
import Image5 from '../../../assets/images/howWeHelp/digitaltrans/dataengganalytics/img5.jpg';

const DataEngineeringAnalytics = () => {
  const offerings = [
    {
      icon: <Database className="w-12 h-12 text-blue-600" />,
      title: 'Data Engineering & Modernization',
      text: `Legacy data warehouse modernization
Cloud-native data lake and pipeline development
ETL/ELT optimization across platforms
Scalable migration to AWS, Azure, and GCP`,
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-green-600" />,
      title: 'Business Intelligence & Visualization',
      text: `Self-service BI and real-time dashboards
KPI monitoring with Power BI, Tableau, and Looker
Executive-level reporting and performance tracking
Data storytelling and visualization consulting`,
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: 'Advanced Analytics & AI/ML',
      text: `Predictive and prescriptive analytics
AI/ML model development and deployment
Customer segmentation and personalization
Demand forecasting and churn prediction`,
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: 'Data Governance & Quality',
      text: `Master Data Management (MDM) strategies
Data lineage, cataloging, and metadata control
Security, compliance (HIPAA, GDPR), and access control
Quality monitoring, validation, and remediation`,
    },
  ];

  const valueDelivery = [
    {
      icon: <Compass className="w-12 h-12 text-blue-600" />,
      title: 'Full-Stack Analytics Delivery',
      text: 'From data ingestion to predictive outcomes, we cover the entire analytics lifecycle.',
    },
    {
      icon: <Cloud className="w-12 h-12 text-green-600" />,
      title: 'Cloud-Ready, Tool-Agnostic Expertise',
      text: 'We work across AWS, Azure, GCP, Databricks, Power BI, Snowflake, Tableau, and more.',
    },
    {
      icon: <GitBranch className="w-12 h-12 text-purple-600" />,
      title: 'Business-Driven Approach',
      text: 'We don’t just enable dashboards; we align every solution with business KPIs and ROI expectations.',
    },
    {
      icon: <Layers className="w-12 h-12 text-orange-600" />,
      title: 'Security & Compliance First',
      text: 'Security frameworks and compliance practices including GDPR, HIPAA, and industry-specific mandates.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroMain
        heading="Data Analytics Services That Turn Intelligence into Enterprise Impact"
        // subheading="optioanl"
        description=" Unlock enterprise-wide insights and accelerate smarter decisions with our end-to-end data analytics services.
              From building robust data pipelines to delivering AI-powered intelligence, we simplify complexity and drive actionable outcomes."
        images={[Image1, Image2, Image3, Image4, Image5]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      // bgImages={{ xs: bgMobile, md: bgDesktop }}
      />


      {/* Offerings */}
      <Box sx={{ py: 5 }}>
        <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
          Our Data Analytics Offerings
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
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
                    maxWidth: 280,
                  }}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                    {item.icon}
                  </motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary', whiteSpace: 'pre-line' }}>
                    {item.text}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Delivery */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>
          Why ONAS for Data Analytics?
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
                  }}
                >
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                    {item.icon}
                  </motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>
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
    </Box>
  );
};

export default DataEngineeringAnalytics;