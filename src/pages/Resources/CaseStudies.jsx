import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Smart Factory Transformation for a Leading Beverage Manufacturer',
      text: 'A North American beverage leader leveraged AI-powered predictive maintenance to eliminate bottlenecks, optimize production, and reduce costs.'
    },
    {
      title: 'Patch Management & Zero-Day Security for a Global Medical Device Leader',
      text: 'Automated patch management to secure thousands of connected devices, minimize cybersecurity risks, and meet strict healthcare compliance standards, while reducing operational costs.'
    },
    {
      title: 'Oracle Fusion Cloud Test Automation for a Global Excavation Firm',
      text: 'Automated Oracle Fusion Cloud regression testing, eliminating 90% of manual effort, achieving faster patch validation, improved test coverage, and seamless CI/CD integration.'
    },
    {
      title: 'Cloud Modernization for a Global SaaS Provider',
      text: 'Re-engineered a legacy application into a cloud-native platform, enabling 5X customer growth while enhancing scalability, security, and cost efficiency.'
    },
    {
      title: 'Oracle: Enabled Healthcare Distribution Excellence',
      text: 'A transformation story through effective Oracle Fusion deployment.'
    },
    {
      title: 'SAP: Enabled Healthcare Distribution Excellence',
      text: 'A transformation story through effective SAP deployment.'
    },
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography color="#0B4C74" variant="h3" sx={{mb: 2 }}>
            Case Studies
          </Typography>
          <Typography color="White" variant="h5" sx={{ mb: 4 }}>
            Every Fix Has a Story
          </Typography>
          <Typography color="White" variant="h6" sx={{ maxWidth: 800, mx: 'auto' }}>
            Some problems are predictable. Others catch you off guard. Dive into the SMART moves we made to turn tech challenges into seamless solutions.
          </Typography>
        </motion.div>
      </Box>

      {/* Case Studies Grid */}
      <Grid container spacing={4} justifyContent="center">
        {caseStudies.map((study, i) => (
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
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 3,
                  boxShadow: 3,
                  maxWidth: 320,
                }}
              >
                <Briefcase className="w-12 h-12 text-blue-600" style={{ marginBottom: 16 }} />
                <Typography variant="h6" sx={{ mb: 2 }}>{study.title}</Typography>
                <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>{study.text}</Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CaseStudies;