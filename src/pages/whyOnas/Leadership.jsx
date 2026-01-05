import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Eye, Handshake, Zap, Users } from 'lucide-react';

const Leadership = () => {
  const pillars = [
    {
      icon: <Eye className="w-12 h-12 text-blue-600" />,
      title: 'Vision & Guidance',
      points: [
        'Leading with clarity, delivering with purpose we guide your business to its next horizon.',
        'Our leadership is your advantage: shaping strategies today for tomorrow’s success.',
        'We navigate complexity with foresight, helping your organization achieve more.'
      ]
    },
    {
      icon: <Handshake className="w-12 h-12 text-green-600" />,
      title: 'Trust & Partnership',
      points: [
        'Leadership is not about authority it’s about earning your trust every day.',
        'We lead by example, ensuring our partnership creates sustainable value for you.',
        'Your goals inspire our leadership; together, we turn challenges into opportunities.'
      ]
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-600" />,
      title: 'Innovation & Growth',
      points: [
        'Transformative leadership fuels innovation your growth is our mission.',
        'Leading through change, we bring insight, strategy, and solutions that move you forward.',
        'We combine experience with vision to lead your organization toward smarter, faster outcomes.'
      ]
    },
    {
      icon: <Users className="w-12 h-12 text-orange-600" />,
      title: 'Customer-Centric Leadership',
      points: [
        'True leadership listens first, acts decisively, and delivers measurable impact.',
        'We empower your business with leadership that prioritizes your success above all.',
        'Our leadership philosophy is simple: your growth is the measure of our success.'
      ]
    },
  ];

  return (
    <Box sx={{
      px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
    }}>
      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography color="#0B4C74" variant="h3" sx={{ mb: 2 }}>
          Leadership
        </Typography>
        <Typography color="White" variant="h5">
          Guiding with Vision, Trust, Innovation & Customer-Centricity
        </Typography>
      </Box>

      {/* Pillars Grid */}
      <Grid container spacing={4} justifyContent="center">
        {pillars.map((pillar, i) => (
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
                  maxWidth: 300,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{ marginBottom: 16 }}
                >
                  {pillar.icon}
                </motion.div>
                <Typography color="#0B4C74" variant="h6" sx={{ mb: 2 }}>
                  {pillar.title}
                </Typography>
                <Box sx={{ textAlign: 'left' }}>
                  {pillar.points.map((point, idx) => (
                    <Typography key={idx} variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary', mb: 1 }}>
                      • {point}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Leadership;