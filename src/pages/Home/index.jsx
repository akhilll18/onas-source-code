import React from 'react';
import { Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Hero from './Hero';
import TrustedByMarquee from './TrustedByMarquee';
import PainPoints from './PainPoints';
import ProcessSteps from './ProcessSteps';
import FeatureGrid from './FeatureGrid';
import TestimonialsCarousel from './TestimonialsCarousel';
import NewsletterSection from './NewsletterSection';
import ScrollToTopAndBottom from './ScrollToTopAndBottom';
import ClientsGrid from './ClientsGrid';
import ExpertiseSection from './ExpertiseSection';
import FAQSection from './FAQSection';
import PricingCards from './PricingCards';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Full-width sections */}
      <Hero fullWidth sx={{ minHeight: '100vh' }} />

      {/* <TrustedByMarquee /> */}
      <PainPoints fullWidth />
      <ProcessSteps fullWidth />
      <FeatureGrid fullWidth />


      <NewsletterSection />

      {/* Scroll Controls */}
      <ScrollToTopAndBottom />

      {/* Centered sections */}
      {/* <ClientsGrid /> */}
      <ExpertiseSection />
      <FAQSection />
      {/* <PricingCards /> */}

    </Box>
  );
}

// ✅ SEO metadata
// export const head = {
//   title: 'ONAS | Accelerating Your Digital Future with AI & Data Intelligence',
//   meta: [
//     { name: 'description', content: 'ONAS provides ERP, AI/ML, Cloud, and IT services.' },
//     { name: 'keywords', content: 'ERP, SAP, Cloud, AI, ONAS' },
//   ],
// };