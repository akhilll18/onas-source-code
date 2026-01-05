import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Database, Layers, Zap, Shield, Cloud, Wrench } from 'lucide-react';
import ITInfraHero from '../../../assets/images/howWeHelp/mitoper/itinfra.png';
import HeroMain from '../../../components/HeroMain';

// Images
import Image1 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/cybersecurity/img4.png';

const ITInfra = () => {
  const offerings = [
    { icon: <Wrench className="w-12 h-12 text-blue-600" />, title: 'Managed OS Services', text: 'Operating system support across Linux, Windows, and Unix platforms, including updates, security hardening, and lifecycle management.' },
    { icon: <Database className="w-12 h-12 text-green-600" />, title: 'Managed Database Services', text: 'Performance tuning, replication setup, backup, and scaling across SQL, Oracle, PostgreSQL, and NoSQL databases.' },
    { icon: <Layers className="w-12 h-12 text-purple-600" />, title: 'Remote Infrastructure Management', text: 'Centralized control and real-time support across servers, storage, and network devices with performance insights and rapid issue resolution.' },
    { icon: <Cloud className="w-12 h-12 text-orange-600" />, title: 'Cloud Infrastructure Management', text: 'Proactive management of multi-cloud environments (AWS, Azure, GCP), including workload balancing, patching, and access controls.' },
    { icon: <Zap className="w-12 h-12 text-red-600" />, title: 'IT Infrastructure Monitoring', text: '24x7 system health tracking, predictive alerting, root-cause analysis, and SLA-based issue escalation.' },
    { icon: <Shield className="w-12 h-12 text-teal-600" />, title: 'Network & Compliance Support', text: 'NOC support, ITSM integration, and infrastructure compliance across HIPAA, SOC2, ISO 27001, and internal standards.' },
  ];

  const valueDelivery = [
    { icon: <Zap className="w-12 h-12 text-blue-600" />, title: 'Always-On Support', text: 'Ensure uptime and reliability across hybrid, cloud, and on-prem environments.' },
    { icon: <Shield className="w-12 h-12 text-green-600" />, title: 'Risk Mitigation', text: 'Proactive issue detection, patching, and vulnerability management.' },
    { icon: <Database className="w-12 h-12 text-purple-600" />, title: 'Operational Efficiency', text: 'Streamlined IT operations, monitoring, and reporting to reduce overhead.' },
    { icon: <Layers className="w-12 h-12 text-orange-600" />, title: 'Scalable Infrastructure', text: 'Flexible systems that grow with business needs and hybrid workloads.' },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroMain
        heading="IT Infrastructure Management Services"
        description="Guarantee agility, performance, and uptime with IT infrastructure management services designed to support your hybrid workloads, distributed teams, and critical IT operations."
        images={[ITInfraHero, Image1, Image2, Image3, Image4]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />


      {/* Offerings */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>Our Core IT Infrastructure Services</Typography>
        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.05 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', px: 3, py: 4, backgroundColor: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 3, boxShadow: 3, maxWidth: 280 }}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>{item.icon}</motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>{item.text}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Value Delivery */}
      <Box sx={{ py: 5 }}>
        <Typography variant="h5" color="#0B4C74" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>How We Deliver Long-Term Value</Typography>
        <Grid container spacing={2} justifyContent="center">
          {valueDelivery.map((item, i) => (
            <Grid item xs={12} sm={6} md={3} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.05 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', px: 3, py: 4, backgroundColor: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 3, boxShadow: 3, maxWidth: 250 }}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>{item.icon}</motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'text.secondary' }}>{item.text}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ITInfra;
