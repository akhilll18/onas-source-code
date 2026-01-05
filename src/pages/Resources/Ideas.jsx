import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Cpu, Users, BookOpen } from 'lucide-react';

const IdeasThatMatter = () => {
  const ideas = [
    {
      icon: <Cpu className="w-12 h-12 text-blue-600" />,
      title: 'IT & Digital Consulting',
      idea: 'Empowering organizations to transform with precision and foresight.',
      points: [
        'AI-driven insights help businesses optimize processes, reduce costs, and predict market trends.',
        'Data-backed strategies enable faster, smarter decision-making.',
        'Focus on intelligent automation, cloud solutions, and digital resilience.',
      ],
      message: 'We don’t just implement technology — we craft AI-powered strategies that turn complexity into competitive advantage.'
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Expert Staffing Solutions',
      idea: 'Matching the right talent to the right opportunity, powered by intelligence.',
      points: [
        'AI evaluates skills, experience, and cultural fit to streamline recruitment.',
        'Predictive analytics anticipate workforce needs before they arise.',
        'Reduces hiring time, cost, and turnover, ensuring sustainable growth.',
      ],
      message: 'Our AI-driven staffing solutions ensure your teams are built for today’s demands and tomorrow’s challenges.'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-purple-600" />,
      title: 'EdTech & AI-Enabled Learning',
      idea: 'Transforming learning into a personalized, scalable, and future-ready experience.',
      points: [
        'Adaptive AI platforms tailor learning paths for every individual.',
        'Real-time analytics measure engagement, comprehension, and skill mastery.',
        'Enables continuous upskilling, reskilling, and career acceleration.',
      ],
      message: 'We leverage AI to make learning smarter, faster, and more impactful — equipping talent for the jobs of tomorrow.'
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
        <Typography color="#0B4C74" variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
          Ideas That Matter
        </Typography>
        <Typography color="White" variant="h6" sx={{ fontWeight: 500 }}>
          Innovative solutions powered by AI, expertise, and future-ready strategies
        </Typography>
      </Box>

      {/* Ideas Grid */}
      <Grid container spacing={4} justifyContent="center">
        {ideas.map((idea, i) => (
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
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{ marginBottom: 16 }}
                >
                  {idea.icon}
                </motion.div>
                <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>
                  {idea.title}
                </Typography>
                <Typography color="#0B4C74" variant="subtitle2" sx={{ mb: 2, fontStyle: 'italic', color: 'text.secondary' }}>
                  {idea.idea}
                </Typography>
                <Box sx={{ textAlign: 'left', mb: 2 }}>
                  {idea.points.map((point, idx) => (
                    <Typography key={idx} variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary', mb: 1 }}>
                      • {point}
                    </Typography>
                  ))}
                </Box>
                <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, fontWeight: 500 }}>
                  {idea.message}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IdeasThatMatter;