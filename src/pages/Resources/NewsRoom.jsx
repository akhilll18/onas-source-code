import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const NewsRoom = () => {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      }}
    >
      {/* Heading */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography color="#0B4C74" variant="h3" sx={{ mb: 2 }}>
            News Room
          </Typography>
          <Typography color="#0B4C74" variant="h5" sx={{ mb: 3 }}>
            ONAS Featured on Clutch and GoodFirms for Its Technology and Business Services Excellence
          </Typography>
        </motion.div>
      </Box>

      {/* Content */}
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography color="White" sx={{ mb: 3 }}>
            Every client engagement at ONAS starts with a promise: solve real-world challenges with precision, innovation, and integrity. Over the years, this promise has evolved into long-term partnerships built on measurable outcomes and mutual trust. Now, with our listings on Clutch and GoodFirms, and a consecutive two-year recognition in the Gartner Magic Quadrant for Finance & Accounting BPO, this trust is independently validated.
          </Typography>
          <Typography color="White" sx={{ mb: 3 }}>
            Our presence on these industry-standard platforms is a reflection of ONAS’s domain strength across IT services, enterprise application support, business process modernization, and finance and accounting transformation. And it opens doors to new conversations with enterprises looking for proven partners.
          </Typography>
          <Typography color="#0B4C74" sx={{ mb: 3, fontWeight: 600 }}>
            Why Clutch and Good Firms Matter
          </Typography>
          <Typography color="White" sx={{ mb: 3 }}>
            These aren’t paid listings. Clutch and Good Firms evaluate companies through a rigorous, transparent review process based on verified client feedback, service delivery, market presence, and technical expertise.
          </Typography>
          <Box sx={{ textAlign: 'center', mt: 4 }}>

            <Button
              size="small"
              variant="primaryFilled"
              component={RouterLink}
              to="/"
              sx={{ mx: 2 }}
            >
              Visit Clutch
            </Button>
            <Button
              size="small"
              variant="secondaryFilled"
              component={RouterLink}
              to="/"
              sx={{ mx: 2 }}
            >
              Visit GoodFirms
            </Button>

          </Box>
        </motion.div>
      </Box>
    </Box>
  );
};

export default NewsRoom;