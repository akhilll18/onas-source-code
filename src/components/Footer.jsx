import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { SITE } from '../utils/constants';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 2, sm: 3, md: 4, lg: 4, xl: 4 },
        px: { xs: 2, sm: 3, md: 6, lg: 12, xl: 20 },
        textAlign: 'center',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        // maxWidth: '1440px', 
        // mx: 'auto',  
        background:'#282825',
        color:'#ffffff',
        // background: 'linear-gradient(90deg, #00778E 30%, #959ca7ff 80%, #ffffff 100%)',

      }}
    >
      <Typography
        variant="body2"
        color="text.third"
        sx={{
          fontSize: {
            xs: '0.75rem', 
            sm: '0.85rem',
            md: '0.95rem', 
            lg: '1rem',    
            xl: '1.1rem', 
          },
          lineHeight: 1.8, 
        }}
      >
        {SITE.copyright}{' '}
        <Link
          href="/privacy-policy"
          color="text.third"
          underline="none"
          sx={{
            display: { xs: 'block', sm: 'inline' },
            mt: { xs: 1, sm: 0 },
            fontWeight: 500,
          }}
        >
          Privacy Policy
        </Link>
      </Typography>
    </Box>
  );
}
