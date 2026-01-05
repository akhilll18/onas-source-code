import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundSection from './BackgroundSection';
import { Link as RouterLink } from 'react-router-dom';

const Hero = forwardRef((props, ref) => {
  const slides = props.slides || [];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    let timeout;

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    if (slides.length > 0) {
      const currentMedia = slides[currentSlide];
      if (currentMedia?.endsWith('.mp4')) {
        // Video: 20 sec
        timeout = setTimeout(nextSlide, 20000);
      } else {
        // Image: 4 sec
        timeout = setTimeout(nextSlide, 4000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentSlide, slides]);

  useImperativeHandle(ref, () => ({
    setSlide: (index) => {
      if (index >= 0 && index < slides.length) setCurrentSlide(index);
    },
  }));

  const variants = {
    enter: { opacity: 0 },
    center: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <BackgroundSection
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: 8, md: 0 },
        fontFamily: 'sans-serif',
      }}
    >
      {/* Background Media - Hidden from UI but visible */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, rgba(11, 76, 116, 0.85) 0%, rgba(0, 0, 0, 0.7) 100%)',
          }
        }}
      >
        <AnimatePresence mode="wait">
          {slides.length > 0 && slides[currentSlide] && (
            slides[currentSlide].endsWith('.mp4') ? (
              <motion.video
                key={currentSlide}
                src={slides[currentSlide]}
                autoPlay
                loop
                muted
                playsInline
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1.5 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              />
            ) : (
              <motion.img
                key={currentSlide}
                src={slides[currentSlide]}
                alt={`Background ${currentSlide + 1}`}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1.5 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  filter: 'brightness(0.7)',
                }}
              />
            )
          )}
        </AnimatePresence>
      </Box>

      {/* Content Overlay */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '1200px',
          px: { xs: 2, md: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Top Right Corner Badge - Foyerbasic.com Announcement */}
          <Box
            sx={{
              position: 'absolute',
              top: { xs: -20, md: -10 },
              right: { xs: -20, md: 0 },
              transform: 'rotate(5deg)',
              zIndex: 10,
            }}
          >
            <Box
              sx={{
                background: 'linear-gradient(135deg, #0B4C74 0%, #4CAF50 100%)',
                padding: { xs: '8px 16px', md: '10px 24px' },
                borderRadius: '8px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.4)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                }
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: { xs: '0.7rem', md: '0.85rem' },
                  fontFamily: 'sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                  whiteSpace: 'nowrap',
                  letterSpacing: '0.5px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box component="span" sx={{ fontSize: '1.1em' }}>🚀</Box>
                Coming Soon <Box component="span" sx={{ fontWeight: 900, color: '#FFEB3B' }}>Foyerbasic.com</Box> from ONAS
              </Typography>
            </Box>

            {/* Ribbon Tail */}
            <Box
              sx={{
                position: 'absolute',
                bottom: -8,
                right: 10,
                width: '20px',
                height: '10px',
                backgroundColor: '#0B4C74',
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />
          </Box>

          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              fontSize: {
                xs: '2.5rem',
                sm: '3.5rem',
                md: '1.5rem',
                lg: '5rem'
              },
              fontWeight: 700,
              lineHeight: 1.1,
              mb: 2,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
              fontFamily: 'sans-serif',
            }}
          >
            <Box component="span" sx={{ display: 'block', fontSize: '0.7em', fontFamily: 'sans-serif' }}>
              Transformation, Talent, and
            </Box>

            <Box component="span" sx={{ display: 'block', fontSize: '0.7em', fontFamily: 'sans-serif' }}>
              Technology for the Intelligent..
            </Box>
            <Box component="span" sx={{
              display: 'block',
              mt: 2,
              background: 'linear-gradient(90deg, #FFFFFF 0%, #0B4C74 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'sans-serif',
            }}>

            </Box>
            <Box component="span" sx={{
              display: 'block',
              fontSize: '0.6em',
              fontWeight: 800,
              background: 'linear-gradient(90deg, #0B4C74 0%, #4CAF50 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'sans-serif',
            }}>
              Future Powered by AI
            </Box>
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: '#0FFCBE',
              maxWidth: { xs: '100%', md: '600px' },
              mb: 5,
              fontSize: { xs: '1rem', md: '1.05rem' },
              textShadow: '0 1px 5px rgba(0,0,0,0.3)',
              fontFamily: 'sans-serif',
            }}
          >
            Driving innovation through cutting-edge AI solutions, exceptional talent,
            and transformative technologies that shape tomorrow's digital landscape.
          </Typography>

          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 2,
            '& .MuiButton-root': {
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontFamily: 'sans-serif',
            }
          }}>
            <Button
              size="large"
              variant="contained"
              component={RouterLink}
              to="/#explore-us"
              sx={{
                bgcolor: 'rgba(11, 76, 116, 0.9)',
                fontFamily: 'sans-serif',
                '&:hover': {
                  bgcolor: 'rgba(11, 76, 116, 1)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore Services
            </Button>

            <Button
              size="large"
              variant="outlined"
              component={RouterLink}
              to="/resources/contact-us/"
              sx={{
                color: '#FFFFFF',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                fontFamily: 'sans-serif',
                '&:hover': {
                  borderColor: '#FFFFFF',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Consult Us
            </Button>
          </Box>

          {/* Advertisement Foyer - ONAS Ecommerce Announcement */}
          <Box
            sx={{
              mt: { xs: 4, md: 6 },
              mb: 2,
              p: { xs: 2, md: 3 },
              background: 'linear-gradient(135deg, rgba(11, 76, 116, 0.95) 0%, rgba(76, 175, 80, 0.85) 100%)',
              borderRadius: '12px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              maxWidth: '500px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                borderRadius: '50%',
              }}
            />

            <Typography
              variant="h6"
              sx={{
                color: '#FFFFFF',
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontFamily: 'sans-serif',
                textShadow: '0 1px 3px rgba(0,0,0,0.3)',
              }}
            >
              Revolutionizing E-commerce
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#E3F2FD',
                mb: 2,
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontFamily: 'sans-serif',
                lineHeight: 1.5,
              }}
            >
              Get ready for our revolutionary e-commerce platform! Built with cutting-edge AI technology and seamless user experience at its core.
            </Typography>

            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}>
              <Box sx={{
                display: 'flex',
                gap: 0.5,
                mr: 2,
              }}>
                {['#0B4C74', '#4CAF50', '#FFFFFF'].map((color, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: color,
                      border: '1px solid rgba(255,255,255,0.3)',
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant="caption"
                sx={{
                  color: '#C8E6C9',
                  fontFamily: 'sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                Powered by ONAS Innovation
              </Typography>
            </Box>

            <Button
              size="small"
              variant="contained"
              sx={{
                mt: 2,
                bgcolor: '#FFFFFF',
                color: '#0B4C74',
                fontWeight: 700,
                fontSize: '0.8rem',
                fontFamily: 'sans-serif',
                '&:hover': {
                  bgcolor: '#F5F5F5',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 12px rgba(11, 76, 116, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => {
                // Add your notification signup or waitlist logic here
                alert('Join our waitlist for early access to Foyerbasic.com!');
              }}
            >
              Notify Me on Launch
            </Button>
          </Box>

          {/* Slide Indicators */}
          <Box
            sx={{
              position: 'absolute',
              bottom: { xs: 20, md: 40 },
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: 1,
              zIndex: 2,
            }}
          >
            {slides.map((_, index) => (
              <Box
                key={index}
                onClick={() => setCurrentSlide(index)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.3)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: currentSlide === index ? '#FFFFFF' : 'rgba(255, 255, 255, 0.5)',
                  }
                }}
              />
            ))}
          </Box>
        </motion.div>
      </Box>
    </BackgroundSection>
  );
});

export default Hero;