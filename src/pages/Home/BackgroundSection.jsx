import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackgroundSection({ image, children, sx = {} }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const bgImage =
    typeof image === 'object' ? (isMobile ? image.xs : image.md) : image;

  return (
    <Box
      sx={{
        width: '100%',
        mx:'auto',
        maxWidth:'2000px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', md: 'center' },
        justifyContent: 'center',
        gap: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10, xxl: 12 },
        px: { xs: 2, sm: 3, md: 4, lg: 6, xl: 8, xxl: 12 },
        pt: { xs: 16, sm: 20, md: 24, lg: 28, xl: 32, xxl: 36 },
        pb: { xs: 4, sm: 6, md: 6, lg: 8, xl: 10, xxl: 12 },
        minHeight: { xs: 'auto', md: '100vh', lg: '100vh', xl: '100vh', xxl: '110vh' },
        overflow: 'hidden',
        ...sx,
      }}
    >

      <AnimatePresence mode="wait">
        <motion.div
          key={bgImage}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1 }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `url(${bgImage}) center/cover no-repeat`,
            zIndex: -1,
          }}
        />
      </AnimatePresence>

      {children}
    </Box>
  );
}
