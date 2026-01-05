import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import {Link as RouterLink} from 'react-router-dom';

const Career = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Typography color="#0B4C74" variant="h3" sx={{ mb: 2 }}>
          Career
        </Typography>
        <Typography color="White" variant="h5" sx={{ mb: 3 }}>
          We appreciate your interest in joining our team
        </Typography>
        <Typography color="White" variant="h6" sx={{ maxWidth: 700, mx: 'auto' }}>
          Currently, there are no available openings, but we welcome you to stay connected and keep an eye on our careers page for future opportunities.
        </Typography>
        <Button
          size="small"
          variant="primaryFilled"
          component={RouterLink}
          to="/resources/careers/"
        >
          Visit Careers Page
        </Button>
      </motion.div>
    </Box>
  );
};

export default Career;