import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const HeroMain = forwardRef(({ images = [], heading, subheading, description, buttons = [], bgImages = {} }, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [currentImage, setCurrentImage] = useState(0);

  // Responsive background
  const bgImage = typeof bgImages === 'object' ? (isMobile ? bgImages.xs : bgImages.md) : bgImages;

  // Auto-slide
  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImage(prev => (prev + 1) % images.length);
      }, 4000); // 4 sec per slide
      return () => clearInterval(interval);
    }
  }, [images]);

  // Expose setImage to parent via ref
  useImperativeHandle(ref, () => ({
    setImage: index => {
      if (index >= 0 && index < images.length) setCurrentImage(index);
    },
  }));

  const variants = {
    enter: { x: 100, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <Box
      sx={{
        width: '100%',
        mx:'auto',
        maxWidth:'2000px',
        minHeight: { xs: '60vh',sm:'60vh', md: '80vh', lg: '90vh', xl: '100vh', xxl: '110vh' },
        position: 'relative',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: { xs: 'center', md: 'space-between' },
        alignItems: { xs: 'center', md: 'center' },
        gap: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10, xxl: 12 },
        px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 10, xxl: 12 },
        pt: { xs: 16, sm: 16, md: 20, lg: 22, xl: 20, xxl: 28 },
        pb: { xs: 4, sm: 6, md: 6, lg: 8, xl: 10, xxl: 12 },
        overflowX: 'hidden',
      }}
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        {bgImage && (
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
        )}
      </AnimatePresence>

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}
      >
        {heading && (
          <Typography
            variant="h4"
            color="#0B4C74"
            sx={{
              lineHeight: 1.3,
              mb: 2,
              fontFamily: 'sans-serif',
              fontSize: '10px',
              // textShadow: '2px 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            {heading}
          </Typography>
        )}

        {subheading && (
          <Typography
            variant="h5"
            color="white"
            sx={{ mb: 3, textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}
          >
            {subheading}
          </Typography>
        )}

        {description && (
          <Typography
            variant="body1"
            color="white"
            sx={{
              mb: 4,
              fontFamily: 'sans-serif',
              fontSize: '16px',
              maxWidth: { xs: '100%', md: 640, lg: 720, xl: 800, xxl: 900 },
              overflowX: 'hidden',
            }}
          >
            {description}
          </Typography>
        )}

        {buttons.length > 0 && (
          <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 2 }}>
            {buttons.map((btn, idx) => {
              const isExternal = /^https?:\/\//.test(btn.href);
              return (
                <Button
                  key={idx}
                  variant={btn.variant || 'primaryFilled'}
                  size="large"
                  {...(isExternal
                    ? { component: 'a', href: btn.href, target: '_blank', rel: 'noopener noreferrer' }
                    : { component: RouterLink, to: btn.href }
                  )}
                >
                  {btn.text}
                </Button>
              );
            })}
          </Box>
        )}
      </motion.div>

      {/* Right Image */}
      {images.length > 0 && (
        <Box
          sx={{
            width: { xs: '100%', sm: 320, md: 360, lg: 550, xl: 650, xxl: 850 },
            height: { xs: 220, sm: 280, md: 320, lg: 340, xl: 400, xxl: 500 },
            maxWidth: '100%',
            aspectRatio: '16/9',
            borderRadius: 2,
            bgcolor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            position: 'relative',
            overflow: 'hidden',
            border: '6px solid #000',
            flexShrink: 0,
            mx: { xs: 'auto', md: 0 },
            mt: { xs: 4, md: 0 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={images[currentImage]}
              alt={`Hero Visual ${currentImage + 1}`}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              style={{ width: '100%', height: '100%', objectFit: 'contain', position: 'absolute', top: 0, left: 0 }}
            />
          </AnimatePresence>
        </Box>
      )}
    </Box>
  );
});

export default HeroMain;
