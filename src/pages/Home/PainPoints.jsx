import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { motion } from 'framer-motion';
import HireRecruitersImg from '../../assets/images/clients/Hire_Recruiters.jpg';

const painPoints = [
  'A strategic perspective on enterprise transformation',
  'Artificial intelligence (AI)',
  'The future of intelligent business',
];

export default function PainPoints() {
  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <Box
      id="pain-points"
      sx={{
        maxWidth: '1400px',         
        mx: 'auto',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 4, md: 6 },
        gap: { xs: 6, md: 10 },
      }}
    >
      {/* LEFT side: heading + image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        style={{ flex: 1 }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 700,
            color: '#FFF',
            textAlign: { xs: 'center', md: 'left' },  
          }}
        >
          Tailored IT Solutions for Your Business.
        </Typography>

        <Box
          component="img"
          src={HireRecruitersImg}
          alt="Hire Recruiters"
          sx={{
            width: {
              xs: '90%',
              sm: '70%',
              md: '80%',
              lg: '75%',
              xl: '70%',
              xxl: '65%', 
            },
            maxWidth: '600px',
            height: 'auto',
            display: 'block',
            mx: { xs: 'auto', md: 0 },
            borderRadius: 2,
            boxShadow: 3,
          }}
        />
      </motion.div>

      {/* RIGHT side: text + list */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        style={{ flex: 1 }}
      >
        <motion.div variants={itemVariants}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              color: '#2daac0ff',
              fontWeight: 600,
              textAlign: { xs: 'center', md: 'left' }, 
            }}
          >
            What Does It Take to Lead in an AI World?
          </Typography>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Typography
            variant="body1"
            sx={{
              mb: 3,
              color: '#0FFCBE',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Tech vision 2026 has all the answers.
          </Typography>
        </motion.div>

        <List
          sx={{
            maxWidth: 600,
            mx: { xs: 'auto', md: 0 },
            '& .MuiListItem-root': { py: 1 },
          }}
        >
          {painPoints.map((point, i) => (
            <motion.div key={i} variants={itemVariants}>
              <ListItem disableGutters>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <ErrorOutlineIcon sx={{ color: '#FFFFFF' }} />
                </ListItemIcon>
                <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                  {point}
                </Typography>
              </ListItem>
            </motion.div>
          ))}
        </List>
      </motion.div>
    </Box>
  );
}
