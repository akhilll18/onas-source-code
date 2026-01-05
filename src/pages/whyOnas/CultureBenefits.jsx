import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Bolt, BookOpen, Gift, Users } from 'lucide-react';

const CultureBenefits = () => {
  const cards = [
    {
      icon: <Bolt className="w-12 h-12 text-orange-600" />,
      title: 'Can-Do Attitude',
      text: 'Orange Blooded Pros take on responsibility, unite their strengths, and go the extra mile to enthuse customers. Challenges are seen as opportunities to get creative and find solutions. Our can-do attitude fuels constant success and growth.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: 'Continuous Learning & Development',
      text: 'At ONAS, we are continuous learners. Training is offered via our internal Global Campus platform and dedicated development programs to help colleagues grow personally and professionally, developing crucial skills for their roles.'
    },
    {
      icon: <Gift className="w-12 h-12 text-green-600" />,
      title: 'Benefits at ONAS',
      text: 'Colleagues enjoy perks beyond the standard. Global benefits are complemented by country- and role-specific perks, ensuring a rewarding employment experience.'
    },
    {
      icon: <Users className="w-12 h-12 text-purple-600" />,
      title: 'Unique Employment Experience',
      text: 'Join a vibrant team collaborating across the globe, taking end-to-end accountability from day one. Work contributes to a greater social purpose, making your experience at ONAS more than just a job.'
    },
  ];

  return (
    <Box sx={{px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 }, }}>
      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography color="#0B4C74" variant="h3" sx={{ mb: 2 }}>
          Culture & Benefits
        </Typography>
        <Typography color="White" variant="h5">
          Building a winning team through collaboration, growth, and purpose
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {cards.map((card, i) => (
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
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{ marginBottom: 16 }}
                >
                  {card.icon}
                </motion.div>
                <Typography color="#0B4C74" variant="h6" sx={{ mb: 2 }}>
                  {card.title}
                </Typography>
                <Typography color="#0B4C74" variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>
                  {card.text}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CultureBenefits;