import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
// Image
import Image1 from '../../assets/images/whyOnas/investors/img1.png';

const Investors = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 20, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        maxWidth: 1800,
        mx: 'auto',
        overflowX: "hidden",

      }}>
      {/* Heading */}
      < Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography color="#0B4C74" variant="h3" sx={{ mb: 2 }}>
          Invest
        </Typography>
        <Typography color="#0B4C74" variant="h5">
          In People We Trust and Invest
        </Typography>
      </Box >

      {/* Content */}
      < Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ width: '100%' }}>
          <Box sx={{ maxWidth: { xs: '100%', md: '600px' }, mx: 'auto' }}>
            <Typography color="White" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.1rem' } }}>
              Here, you will find company performance details, board of directors, and important announcements from key investor relations events.
            </Typography>
            <Button
              component={RouterLink}
              to="/why-onas/investors/"
              variant="primaryFilled"
              size="large"
            >
              Learn More
            </Button>
          </Box>
        </motion.div>

        {/* Hero Image */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ width: '100%' }}>
          <Box sx={{ width: { xs: '100%', md: '500px' } }}>
            <Box component="img" src={Image1} alt="Investors" sx={{ width: '100%', borderRadius: 3, boxShadow: 3 }} />
          </Box>
        </motion.div>
      </Box >
    </Box >
  );
};

export default Investors;
