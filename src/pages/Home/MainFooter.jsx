import React from 'react';
import { Box, Typography, Grid, Link as MuiLink, Container, Stack, alpha } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SocialIcons from './SocialIcons';
import Logo from '../../../public/images/logo.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function MainFooter() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0B4C74',
        color: 'white',
        pt: { xs: 6, md: 1 },
        pb: { xs: 4, md: 2 },
        mt: 'auto',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #2E8BC0 0%, #64B5F6 100%)',
        }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={{ xs: 4, md: 6 }}>
          {/* Logo & About */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 4 }}>
              <img
                src={Logo}
                alt="ONAS Global Services"
                style={{
                  width: '120px',
                  height: 'auto',
                  filter: 'brightness(0) invert(1)',
                }}
              />
            </Box>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                lineHeight: 1.8,
                color: alpha('#fff', 0.85),
                fontSize: '0.95rem',
                maxWidth: '320px',
              }}
            >
              We understand that every business is unique. That's why we offer personalized
              global services designed to drive growth and success.
            </Typography>
            <Box>
              <Typography variant="subtitle2" sx={{ mb: 2, color: alpha('#fff', 0.9), fontWeight: 600 }}>
                Connect With Us
              </Typography>
              <SocialIcons color="white" />
            </Box>
          </Grid>

          {/* Links Columns */}
          <Grid item xs={4} sm={3} md={2}>
            <Typography variant="h8" sx={{
              mb: 3,
              fontWeight: 700,
              color: 'white',
              fontSize: '1rem',
              pb: 1,
              borderBottom: `2px solid ${alpha('#fff', 0.2)}`,
            }}>
              Services
            </Typography>
            <Stack spacing={0.5}>
              {[
                { label: 'SAP', href: '/how-we-help/erp/sap' },
                { label: 'Oracle', href: 'https://www.onasit.com/', external: true },
                { label: 'Salesforce', href: '/how-we-help/erp/salesforce' },
                { label: 'Netsuite', href: '/how-we-help/erp/netsuite' },
                { label: 'ServiceNow', href: '/how-we-help/erp/servicenow' },
                { label: 'Workday', href: '/how-we-help/erp/workday' },
              ].map((item, idx) => (
                <MuiLink
                  key={idx}
                  component={item.external ? 'a' : RouterLink}
                  href={item.external ? item.href : undefined}
                  to={!item.external ? item.href : undefined}
                  underline="none"
                  sx={{
                    color: alpha('#fff', 0.8),
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    py: 0.5,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#64B5F6',
                      transform: 'translateX(4px)',
                    },
                  }}
                  {...(item.external ? {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  } : {})}
                >
                  <ChevronRightIcon sx={{ fontSize: 14, mr: 1, opacity: 0.7 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="h6" sx={{
              mb: 3,
              fontWeight: 700,
              color: 'white',
              fontSize: '1rem',
              pb: 1,
              borderBottom: `2px solid ${alpha('#fff', 0.2)}`,
            }}>
              Quick Links
            </Typography>
            <Stack spacing={0.5}>
              {[
                { label: 'About Us', href: '/why-onas/about-us/' },
                { label: 'Industries', href: '/who-we-help/industries' },
                { label: 'Careers', href: '/resources/careers' },
                { label: 'Blog', href: '/resources/blogs' },
                { label: 'Contact Us', href: '/resources/contact-us' },
              ].map((item, idx) => (
                <MuiLink
                  key={idx}
                  component={RouterLink}
                  to={item.href}
                  underline="none"
                  sx={{
                    color: alpha('#fff', 0.8),
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    py: 0.5,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: '#64B5F6',
                      transform: 'translateX(4px)',
                    },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 16, mr: 1, opacity: 0.25 }} />
                  {item.label}
                </MuiLink>
              ))}
            </Stack>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{
              mb: 3,
              fontWeight: 700,
              color: 'white',
              fontSize: '1rem',
              pb: 1,
              borderBottom: `2px solid ${alpha('#fff', 0.2)}`,
            }}>
              Get in Touch
            </Typography>

            <Stack spacing={2}>
              {/* Email */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <EmailIcon sx={{
                  color: '#64B5F6',
                  mr: 2,
                  mt: 0.25,
                  fontSize: 20
                }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.5 }}>
                    Email
                  </Typography>
                  <MuiLink
                    href="mailto:sales@onasglobal.com"
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      '&:hover': {
                        color: '#64B5F6',
                      }
                    }}
                  >
                    sales@onasglobal.com
                  </MuiLink>
                </Box>
              </Box>

              {/* Phone */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <PhoneIcon sx={{
                  color: '#64B5F6',
                  mr: 2,
                  mt: 0.25,
                  fontSize: 20
                }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.5 }}>
                    Phone
                  </Typography>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} flexWrap="wrap">
                    <MuiLink
                      href="tel:+919087086777"
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        '&:hover': { color: '#64B5F6' }
                      }}
                    >
                      +91-9087 086 777
                    </MuiLink>
                    <MuiLink
                      href="tel:+919848004777"
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        '&:hover': { color: '#64B5F6' }
                      }}
                    >
                      +91-9848 00 4777
                    </MuiLink>
                    <MuiLink
                      href="tel:+12015898827"
                      sx={{
                        color: 'white',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textDecoration: 'none',
                        '&:hover': { color: '#64B5F6' }
                      }}
                    >
                      +1 201-589-8827
                    </MuiLink>
                  </Stack>
                </Box>
              </Box>

              {/* Headquarters */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{
                  color: '#64B5F6',
                  mr: 2,
                  mt: 0.25,
                  fontSize: 20
                }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.0 }}>
                    Headquarters
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: alpha('#fff', 0.9),
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}>
                    ONAS Global Services LLC<br />
                    701 Tillery Street Unit 12<br />
                    #3338, Austin, TX 78702
                  </Typography>
                </Box>
              </Box>

              {/* Innovation Center */}
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{
                  color: '#64B5F6',
                  mr: 2,
                  mt: 0.25,
                  fontSize: 20
                }} />
                <Box>
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.7), mb: 0.00 }}>
                    Innovation Center
                  </Typography>
                  <Typography variant="body2" sx={{
                    color: alpha('#fff', 0.9),
                    fontSize: '0.9rem',
                    lineHeight: 1.6
                  }}>
                    Vasavi Sky City, 8th Floor<br />
                    Gachibowli, Hyderabad<br />
                    Telangana - 500032, India
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}