import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import img1 from '../../assets/images/processSteps/tailored.png';
import img2 from '../../assets/images/processSteps/expertise.png';
import img3 from '../../assets/images/processSteps/communication.png';
import img4 from '../../assets/images/processSteps/innovation.png';
import {Link as RouterLink} from 'react-router-dom';
const steps = [
  {
    title: 'Customized IT & Digital Solutions',
    desc: 'We don’t believe in one-size-fits-all. Every business is unique, and we take the time to understand your challenges and design IT and digital strategies that align seamlessly with your goals.',
    img: img1,
  },
  {
    title: 'Comprehensive Expertise Across Technologies',
    desc: 'From ERP and CRM to cloud solutions, cybersecurity, and data analytics — our multidisciplinary team ensures smooth integration, flawless execution, and measurable results.',
    img: img2,
  },
  {
    title: 'Clear, Proactive Communication',
    desc: 'With ONAS, you’re never left in the dark. We provide regular updates, maintain full transparency, and keep you informed at every stage of the process.',
    img: img3,
  },
  {
    title: 'Driving Innovation & Growth',
    desc: 'We don’t just adapt to change — we lead it. By embracing innovation and next-gen solutions, we position your business to stay competitive, scale faster, and achieve sustainable growth.',
    img: img4,
  },
];

export default function ProcessSteps() {
  return (
    <Box sx={{ py: { xs: 6, md: 8 }, textAlign: 'center' }}>
      {/* Heading */}
      <Typography variant="h4" sx={{ mb: 0 }}>
        <span style={{color: '#FFFFFF'}}>Why Choose</span>
        <Box component="span" sx={{ color: '#FFFFFF' }}> ONAS Global Services </Box>
      </Typography>

      <Typography
        variant="body1"
        sx={{ mb: 8, maxWidth: 700, mx: 'auto'}}
      >
      <span style={{color: '#0FFCBE'}}>
        Our expert <b>IT</b>, <b>staffing</b>, and <b>EdTech solutions</b> make it easy to accelerate growth and innovation for your business.
      </span>
      </Typography>


      {/* Steps */}
      <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center">
        {steps.map((step, i) => (
          <Grid item key={i} xs={12} sm={6} md={6}>
            <Box>
              <Box
                component="img"
                src={step.img}
                alt={step.title}
                sx={{
                  height: 80,
                  mb: 2,
                  mx: 'auto',
                  display: 'block',
                }}
              />
              <Typography variant="subtitle1" color="white" sx={{ fontWeight: 700, mb: 1 }}>
                {step.title}
              </Typography>
              <Typography
                variant="body2"
                color="white"
                sx={{ maxWidth: 300, mx: 'auto', lineHeight: 1.6 }}
              >
                {step.desc}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* CTA button */}
      <Box sx={{ mt: 8 }}>
        <Button
          size="large"
          variant="primaryFilled"
          component={RouterLink}
          to="/#explore-us"
        >
          Explore Services ➤
        </Button>
      </Box>
    </Box>
  );
}
