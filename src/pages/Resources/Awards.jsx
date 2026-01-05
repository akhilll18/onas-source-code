import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Awards() {
  return (
    <Box sx={{
      textAlign: 'center', px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 18, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
    }}>
      <Typography color="#0B4C74" variant="h3">Awards</Typography>
      <Typography color="White" variant="h4">Something Big is on the Way!</Typography>
    </Box>
  );
}


