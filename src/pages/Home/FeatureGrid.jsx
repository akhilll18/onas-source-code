import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import VBT from '../../assets/images/featureGrid/visionbt.png';
import HCL from '../../assets/images/featureGrid/hcl.png';
import DF from '../../assets/images/featureGrid/df.png';
import EC from '../../assets/images/featureGrid/ec.png';
import ALL from '../../assets/images/featureGrid/all.png';
import CMH from '../../assets/images/featureGrid/cmh.png';

const features = [
  {
    image: VBT,
    title: 'Vision Beyond Technology',
    description:
      'Leaders in an AI-driven world don’t just adopt tools — they <b>redefine strategy, business models, and value creation.</b> It takes vision to see where AI fits into long-term growth rather than chasing hype.',
    cta: { label: 'Vision Beyond Technology ➤', href: '/who-we-help/industries' },
    reverse: false,
    bg: '#FDFDFD',
  },
  {
    image: HCL,
    title: 'Human-Centered Leadership',
    description:
      'AI handles scale, speed, and complexity, but <b>trust, ethics, and empathy</b> remain uniquely human. Leaders need to balance automation with responsibility, ensuring AI augments people rather than replacing them blindly.',
    cta: { label: 'Human-Centered Leadership ➤', href: '/who-we-help/industries' },
    reverse: true,
    bg: '#FDFDFD',
  },
  {
    image: DF,
    title: 'Data & Decision Fluency',
    description:
      'You don’t need to code like an engineer, but you must <b>understand data, bias, risks, and possibilities.</b> Decision-making shifts from intuition alone to <b>evidence-guided leadership.</b>',
    cta: { label: 'Data & Decision Fluency ➤', href: '/who-we-help/industries' },
    reverse: false,
    bg: '#FDFDFD',
  },
  {
    image: EC,
    title: 'Ethical Compass',
    description:
      'In an AI world, leadership is tested by <b>responsible use of power.</b> Bias, transparency, and accountability become boardroom issues. What it takes is the courage to say not just what AI can do, but what it should do.',
    cta: { label: 'Ethical Compass ➤', href: '/who-we-help/industries' },
    reverse: true,
    bg: '#FDFDFD',
  },
  {
    image: ALL,
    title: 'Adaptability & Lifelong Learning',
    description:
      'AI evolves fast. Leaders must <b>embrace change, continuously learn, and build adaptive organizations</b> where curiosity is rewarded.',
    cta: { label: 'Adaptability & Lifelong Learning ➤', href: '/who-we-help/industries' },
    reverse: false,
    bg: '#FDFDFD',
  },
  {
    image: CMH,
    title: 'Collaboration Between Human + Machine',
    description:
      'True leadership means orchestrating <b>human talent and machine intelligence together —</b> unlocking creativity, efficiency, and innovation.',
    cta: { label: 'Collaboration Between Human + Machine ➤', href: '/who-we-help/industries' },
    reverse: true,
    bg: '#FDFDFD',
  },
];

export default function FeatureGrid() {
  return (
    <Box
      id="explore-us"
      sx={{
        maxWidth: '1800px',
        mx: 'auto',
        px: { xs: 2, sm: 4, md: 2, lg: 8, xl: 10, xxl: 12 },
        py: { xs: 4, sm: 6, md: 2 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography
        variant="h6"
        color="white"
        align="center"
        sx={{ fontWeight: 700, mb: 1, maxWidth: '500px' }}
      >
        With ONAS, Build Human-Centered Leadership for an AI-Driven World.
      </Typography>

      {features.map((feature, i) => (
        <Box
          key={i}
          sx={{
            display: 'flex',
            flexDirection: {
              xs: 'column',
              md: feature.reverse ? 'row-reverse' : 'row',
            },
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: feature.bg,
            borderRadius: 3,
            mb: 1,
            overflow: 'hidden',
            boxShadow: 1,
            width: '100%',
          }}
        >
          {/* Image + Button */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              p: { xs: 3, sm: 4 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: 3,
                mb: 2,
              }}
            >
              <Box
                component="img"
                src={feature.image}
                alt={feature.title}
                sx={{
                  width: {
                    xs: '85%',
                    sm: '80%',
                    md: '90%',
                    lg: '95%',
                    xl: '100%',
                    xxl: '100%',
                  },
                  maxHeight: {
                    xs: 160,
                    sm: 220,
                    md: 280,
                    lg: 320,
                    xl: 360,
                    xxl: 400,
                  },
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'scale(1.05)' },
                }}
              />
            </Box>
            <Button
              component={RouterLink}
              to={feature.cta.href}
              variant="primaryFilled"
              sx={{ width: '100%', maxWidth: 450 }}
            >
              {feature.cta.label}
            </Button>
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              p: { xs: 3, sm: 4, md: 3 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: { xs: 'center', md: 'flex-start' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {feature.title}
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <span dangerouslySetInnerHTML={{ __html: feature.description }} />
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
