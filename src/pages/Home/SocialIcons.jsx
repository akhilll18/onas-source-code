import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import {
  Facebook,
  LinkedIn,
  Instagram,
  YouTube,
  X as XIcon
} from '@mui/icons-material';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/profile.php?id=61581619530716',
    color: '#1877F2',
    hoverColor: '#166FE5',
    label: 'Visit our Facebook page'
  },
  {
    name: 'LinkedIn',
    icon: LinkedIn,
    url: 'https://www.linkedin.com/company/onas-global-services-pvt-ltd/',
    color: '#0A66C2',
    hoverColor: '#004182',
    label: 'Follow us on LinkedIn'
  },
  {
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4',
    color: '#E4405F',
    hoverColor: '#D32D4F',
    gradient: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
    label: 'Follow us on Instagram'
  },
  {
    name: 'YouTube',
    icon: YouTube,
    url: 'https://youtube.com/@onasglobalservices?si=bd1DK8LtF52OvUb1',
    color: '#FF0000',
    hoverColor: '#CC0000',
    label: 'Subscribe to our YouTube channel'
  },
  {
    name: 'X (Twitter)',
    icon: XIcon,
    url: 'https://x.com/ONAS261679',
    color: '#000000',
    hoverColor: '#1DA1F2',
    label: 'Follow us on X (Twitter)'
  }
];

export default function SocialIcons({
  size = 'medium',
  color = 'inherit',
  variant = 'default', // 'default', 'filled', 'outlined'
  spacing = 1.5,
  direction = 'row'
}) {
  const getIconSize = () => {
    switch (size) {
      case 'small': return { fontSize: 20 };
      case 'large': return { fontSize: 28 };
      default: return { fontSize: 24 };
    }
  };

  const getButtonSize = () => {
    switch (size) {
      case 'small': return 'small';
      case 'large': return 'large';
      default: return 'medium';
    }
  };

  const renderIcon = (social) => {
    const IconComponent = social.icon;

    if (variant === 'filled') {
      return (
        <IconButton
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          size={getButtonSize()}
          sx={{
            bgcolor: social.color,
            color: 'white',
            '&:hover': {
              bgcolor: social.hoverColor,
              transform: 'translateY(-2px)',
            },
            transition: 'all 0.3s ease',
            boxShadow: 2,
          }}
        >
          <IconComponent sx={getIconSize()} />
        </IconButton>
      );
    }

    if (variant === 'outlined') {
      return (
        <IconButton
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          size={getButtonSize()}
          sx={{
            border: '2px solid',
            borderColor: social.color,
            color: social.color,
            '&:hover': {
              bgcolor: social.color,
              color: 'white',
              transform: 'scale(1.1)',
            },
            transition: 'all 0.3s ease',
          }}
        >
          <IconComponent sx={getIconSize()} />
        </IconButton>
      );
    }

    // Default variant
    return (
      <IconButton
        href={social.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={social.name}
        size={getButtonSize()}
        sx={{
          color: color === 'brand' ? social.color : color,
          '&:hover': {
            color: color === 'brand' ? social.hoverColor : 'primary.main',
            bgcolor: 'action.hover',
            transform: 'translateY(-2px)',
          },
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '2px',
            bgcolor: social.color,
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          }
        }}
      >
        <IconComponent sx={getIconSize()} />
      </IconButton>
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: spacing,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: direction,
      }}
    >
      {socialLinks.map((social) => (
        <Tooltip
          key={social.name}
          title={social.label}
          arrow
          placement="top"
          PopperProps={{
            sx: {
              '& .MuiTooltip-tooltip': {
                bgcolor: 'background.paper',
                color: 'text.primary',
                boxShadow: 3,
                border: '1px solid',
                borderColor: 'divider',
              },
              '& .MuiTooltip-arrow': {
                color: 'background.paper',
                '&::before': {
                  border: '1px solid',
                  borderColor: 'divider',
                }
              }
            }
          }}
        >
          {renderIcon(social)}
        </Tooltip>
      ))}
    </Box>
  );
}