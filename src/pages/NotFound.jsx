import React from 'react';
import { Typography, Box } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{
      textAlign: 'center', px: { xs: 2, md: 8, lg: 12, xl: 16 },
      pt: { xs: 20, md: 20, lg: 28, xl: 32 },
      pb: { xs: 8, md: 8, lg: 12, xl: 16 },
    }}>
      <Typography variant="h3">404 - Page Not Found</Typography>
    </Box>
  );
}
