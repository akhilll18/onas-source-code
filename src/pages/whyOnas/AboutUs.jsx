import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Images
import PurposeImg from '../../assets/images/whoWeAre/purpose.png';
import VisionImg from '../../assets/images/whoWeAre/vision.jpg';
import MissionImg from '../../assets/images/whoWeAre/mission.jpg';
import IntegrityImg from '../../assets/images/whoWeAre/integrity.jpg';
import CustomerSuccessImg from '../../assets/images/whoWeAre/customersuccess.png';
import ConsultingMindsetImg from '../../assets/images/whoWeAre/consultingmindset.png';
import TrustImg from '../../assets/images/whoWeAre/trust.jpg';
import EqualityOnenessImg from '../../assets/images/whoWeAre/equalityoneness.webp';

const aboutSections = [
  {
    id: 'purpose',
    title: 'Our Purpose',
    description:
      'Deliver outcome focused technology solutions that enhance business performance and organizational value of our customers; making positive impact on our people and society',
    image: PurposeImg,
    reverse: false,
  },
  {
    id: 'vision',
    title: 'Vision',
    description:
      'To be a global business solution partner empowering value propositions for organizations, people, and society steered by our Intelligent Frameworks',
    image: VisionImg,
    reverse: true,
  },
  {
    id: 'mission',
    title: 'Mission',
    description:
      'Nurture our workforce with world-class niche technology skills and knowledge development, and utilize their prowess in serving our customers on the promise of thought leadership, innovation and technological agility',
    image: MissionImg,
    reverse: false,
  },
];

const coreValues = [
  {
    title: 'Integrity',
    description:
      'Embracing honesty by sincerely owning up to our actions and abiding by organizational responsibilities at all times and by all means',
    image: IntegrityImg,
    reverse: true,
  },
  {
    title: 'Customer Success',
    description:
      'Aiming to align all our actions that not only cater to specific customer requirements, but go above and beyond to reap customer business success',
    image: CustomerSuccessImg,
    reverse: false,
  },
  {
    title: 'Consulting Mindset',
    description:
      'Going beyond just offering services, we help customers by delivering on the promise of thought leadership through recommending best-in-class solutions that target specific business challenges with structured problem-solving processes',
    image: ConsultingMindsetImg,
    reverse: true,
  },
  {
    title: 'Trust',
    description:
      'Moving forward with deep faith and trust in every member of our teams, so we all are inspired to be our own boss, and can freely exhibit innovation in all our actions and deliverables',
    image: TrustImg,
    reverse: false,
  },
  {
    title: 'Equality & Oneness',
    description:
      'Respecting cultural diversity that people bring at workplace and seeing all people across the organization as one team, all delivering on the promise of outcome focused solutions',
    image: EqualityOnenessImg,
    reverse: true,
  },
];

export default function AboutUs() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        maxWidth: 1800,
        mx: 'auto',
      }}
    >
      {/* WHO WE ARE */}
      <Box  sx={{ textAlign: 'center', mb: 12 }}>
        <Typography color="#0B4C74" variant="h3" sx={{ mb: 1 }}>
          WHO WE ARE
        </Typography>
        <Typography color="White" variant="h5" sx={{ maxWidth: 700, mx: 'auto' }}>
          We are Outcome-Focused, Global IT Consulting, Innovation and Services organization.
        </Typography>
      </Box>

      {/* Purpose, Vision, Mission */}
      {aboutSections.map((section, idx) => (
        <motion.div
          key={idx}
          id={section.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: section.reverse ? 'row-reverse' : 'row',
              },
              mb: 6,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: { xs: '100%', md: '40%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <motion.img
                src={section.image}
                alt={section.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </Box>

            {/* Text */}
            <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                p: { xs: 3, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              <Typography color="White" sx={{ whiteSpace: 'pre-line' }}>{section.description}</Typography>
            </Box>
          </Box>
        </motion.div>
      ))}

      {/* Core Values */}
      <Box sx={{ textAlign: 'center', mb: 6, mt: 12 }}>
        <Typography color="#0B4C74" variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
          Core Values
        </Typography>
        <Typography color="White" variant="h5" sx={{ maxWidth: 700, mx: 'auto' }}>
          Our principles guide every decision we make and every action we take.
        </Typography>
      </Box>

      {coreValues.map((value, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: value.reverse ? 'row-reverse' : 'row',
              },
              mb: 6,
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            {/* Image */}
            <Box
              sx={{
                width: { xs: '100%', md: '40%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <motion.img
                src={value.image}
                alt={value.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </Box>

            {/* Text */}
            <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                p: { xs: 3, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography color="White" sx={{ whiteSpace: 'pre-line' }}>{value.description}</Typography>
              <Typography color="White" sx={{ whiteSpace: 'pre-line' }}>{value.description}</Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}


