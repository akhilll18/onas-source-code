import React, { useEffect, useState, useRef } from 'react';
import { Box, Fab, Tooltip, CircularProgress, useTheme, useMediaQuery } from '@mui/material';

export default function ScrollControl() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [visible, setVisible] = useState(false);
  const animatedRef = useRef(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const size = isMobile ? 50 : 60; // adjust size for mobile

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percent = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
      setScrollPercent(percent);
      setVisible(scrollTop > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth animation using requestAnimationFrame loop
  const [animatedPercent, setAnimatedPercent] = useState(0);
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      const diff = scrollPercent - animatedRef.current;
      if (Math.abs(diff) < 0.5) {
        animatedRef.current = scrollPercent;
        setAnimatedPercent(scrollPercent);
        return;
      }
      animatedRef.current += diff * 0.15; // speed factor
      setAnimatedPercent(animatedRef.current);
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [scrollPercent]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1300,
        transform: 'translateZ(0)', // fix mobile flicker
      }}
    >
      <Tooltip title="Scroll to Top" placement="left">
        <Box
          sx={{
            position: 'relative',
            width: size,
            height: size,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Background Circle */}
          <CircularProgress
            variant="determinate"
            value={100}
            size={size}
            thickness={4}
            sx={{
              position: 'absolute',
              color: '#333',
              opacity: 0.25,
            }}
          />
          {/* Foreground Animated Circle */}
          <CircularProgress
            variant="determinate"
            value={animatedPercent}
            size={size}
            thickness={4}
            sx={{
              position: 'absolute',
              color: '#888',
              transition: 'stroke-dashoffset 0.2s linear',
            }}
          />
          {/* Scroll Button */}
          <Fab
            size="small"
            onClick={scrollToTop}
            sx={{
              background: '#282825',
              color: '#0FFCBE',
              '&:hover': { background: '#3a3a36' },
              width: isMobile ? 40 : 44,
              height: isMobile ? 40 : 44,
              fontSize: '1rem',
              zIndex: 2,
            }}
          >
            ↑
          </Fab>
        </Box>
      </Tooltip>
    </Box>
  );
}
