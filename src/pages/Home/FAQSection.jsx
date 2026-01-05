import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import faqicon from '../../assets/images/faqsec/question.png';

    const faqs = [
      { q: 'What ERP systems does ONAS Global specialize in?', a: 'We specialize in implementing and supporting major ERP platforms including SAP, Oracle Cloud, Salesforce, Microsoft Dynamics, Workday, and ServiceNow. Our team has certified experts in each system.' },
      { q: 'How do you handle ERP implementation projects?', a: 'We follow a structured implementation methodology including requirements analysis, system configuration, data migration, user training, and post-implementation support. Our approach minimizes disruption to your business operations.' },
      { q: 'Can you help migrate from legacy ERP systems to modern platforms?', a: 'Yes, we specialize in ERP modernization and migration projects. We help businesses transition from outdated systems to cloud-based ERP solutions with minimal downtime and maximum data integrity.' },
      { q: 'What industries do you serve with ERP solutions?', a: 'We serve multiple industries including manufacturing, healthcare, finance, retail, education, and professional services with industry-specific ERP configurations and best practices.' },
        {
            q: 'What does your digital transformation process involve?',
            a: 'Our digital transformation process includes assessment, strategy development, technology selection, implementation, and continuous optimization to help businesses leverage digital technologies for growth and efficiency.'
          },
      {
            q: 'How do you measure success in digital transformation projects?',
            a: 'We measure success through KPIs like operational efficiency, cost reduction, revenue growth, customer satisfaction, and digital adoption rates. We establish clear metrics before project initiation.'
          },
          {
            q: 'Do you provide ongoing support after digital transformation?',
            a: 'Yes, we offer comprehensive managed services including system monitoring, updates, security management, and continuous improvement services to ensure long-term success.'
          },
      {
            q: 'Can you help with legacy system modernization?',
            a: 'Absolutely. We specialize in modernizing legacy systems through cloud migration, API integration, and platform upgrades while preserving critical business logic and data.'
          },
          {
            q: 'What services are included in your managed IT offerings?',
            a: 'Our managed IT services include 24/7 monitoring, help desk support, cybersecurity management, cloud infrastructure management, backup and disaster recovery, and proactive maintenance.'
          },
          {
            q: 'How do you ensure security in managed IT operations?',
            a: 'We implement multi-layered security including firewalls, intrusion detection, endpoint protection, regular vulnerability assessments, compliance monitoring, and employee security training.'
          },
{
      q: 'What is your response time for IT support requests?',
      a: 'We offer tiered SLAs with response times ranging from 15 minutes for critical issues to 4 hours for standard requests, with 24/7 availability for all support levels.'
    },
    {
      q: 'Can you manage hybrid IT environments?',
      a: 'Yes, we specialize in managing hybrid environments that combine on-premises infrastructure with cloud services, ensuring seamless integration and optimal performance.'
    },
{
      q: 'What types of IT staffing do you offer?',
      a: 'We offer permanent placement, contract staffing, staff augmentation, project-based teams, executive search, and contract-to-hire solutions across all IT domains.'
    },
    {
      q: 'How do you vet IT professionals?',
      a: 'Our vetting process includes technical assessments, behavioral interviews, reference checks, background verification, and skill validation through practical tests and certifications.'
    },
    {
      q: 'What industries do you serve for staffing needs?',
      a: 'We serve banking & finance, healthcare, manufacturing, retail, technology, education, energy, and government sectors with industry-specific IT talent.'
    },
    {
      q: 'Do you offer remote staffing solutions?',
      a: 'Yes, we provide comprehensive remote staffing solutions with collaboration tools, performance tracking, and management support for distributed teams.'
    },
    {
      q: 'What cybersecurity services do you provide?',
      a: 'We offer security assessments, penetration testing, threat monitoring, incident response, compliance management, and security awareness training.'
    },
    {
      q: 'Do you offer custom software development?',
      a: 'Yes, we provide end-to-end custom software development including web applications, mobile apps, enterprise solutions, and integration services.'
    },
    {
      q: 'What data analytics and BI services do you offer?',
      a: 'We offer data warehouse design, business intelligence implementation, predictive analytics, data visualization, and AI/ML solutions for data-driven decision making.'
    },
    {
      q: 'Can you help with cloud migration and optimization?',
      a: 'We provide comprehensive cloud services including migration strategy, implementation, cost optimization, security configuration, and ongoing cloud management.'
    },

    ];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false);

  const fadeInVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box sx={{ py: { xs: 4, sm: 6, md: 4 }, px: { xs: 2, sm: 3, md: 4 } }}>
      <Grid
        container
        spacing={{ xs: 4, md: 6 }}
        alignItems="flex-start"
        justifyContent="center"
      >
        {/* LEFT COLUMN */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInVariant}>
            <Box sx={{ mb: 3 }}>
              <Box
                component="img"
                src={faqicon}
                alt="FAQ Icon"
                sx={{ height: { xs: 50, sm: 55, md: 60 }, mb: 2 }}
              />
              <Typography
                variant="h6"
                color="white"
                sx={{
                  mb: 2,
                  lineHeight: { xs: 1.2, md: 1.3 },
                  fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                }}
              >
                FAQs about <br /> ONAS <br /> Design with ONAS
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{
                  mb: 3,
                  lineHeight: 1.5,
                  fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                }}
              >
                Everything you want to know <br />
                (and maybe some things <br /> you didn’t think to ask)
              </Typography>
              <Button
                size="large"
                variant="primaryFilled"
                component={RouterLink}
                to="/#explore-us"
              >
                Explore Services
              </Button>

            </Box>
          </motion.div>
        </Grid>

        {/* RIGHT COLUMN */}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                width: '100%',
                maxWidth: 700,
                marginBottom: expanded === i ? 24 : 12,
                transition: 'margin 0.3s ease',
              }}
            >
              <Accordion
                expanded={expanded === i}
                onChange={handleChange(i)}
                disableGutters
                square
                sx={{
                  mb: { xs: 1.5, sm: 2, md: 2.5, lg: 3, xl: 3.5, xxl: 4 },
                  borderRadius: 2,
                  boxShadow: 1,
                  bgcolor: '#0B4C74',
                  width: '100%',
                  '& .MuiAccordionSummary-root': { px: { xs: 2, sm: 3 } },
                  '& .MuiAccordionDetails-root': { px: { xs: 2, sm: 3 }, py: 1 },
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      fontSize: { xs: 13, sm: 14, md: 15 },
                      color: 'white',
                    }}
                  >
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontSize: { xs: '0.85rem', sm: '0.95rem', md: '1rem' },
                      lineHeight: 1.6,
                      color: 'rgba(255,255,255,0.85)',
                    }}
                  >
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
