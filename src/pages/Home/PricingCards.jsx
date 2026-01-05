import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Check as CheckIcon,
  Star as StarIcon,
  DesignServices as DesignIcon,
  Build as BuildIcon,
  AutoAwesome as CustomIcon
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const plans = [
  {
    id: 1,
    title: 'Templates',
    icon: <DesignIcon />,
    price: '$299',
    period: 'one-time',
    description: 'For those looking to DIY a ready-made high-conversion template. Explore our library of designs and get started instantly.',
    features: [
      '10+ Ready-to-use Templates',
      'Mobile Responsive',
      'Basic Customization',
      'SEO Optimized',
      '1-Month Support'
    ],
    cta: 'COMING SOON →',
    href: '#templates',
    highlight: false,
    color: '#4CAF50',
    popular: false
  },
  {
    id: 2,
    title: 'Semi-Custom Design',
    icon: <BuildIcon />,
    price: '$2,500',
    period: 'one-time',
    description: 'Perfect for startups or solopreneurs who want an elevated custom feel on their template of choice.',
    features: [
      'Custom Design from Template',
      'Up to 5 Pages',
      'Content Integration',
      'Mobile & Tablet Optimized',
      '3-Month Support',
      'Basic SEO Setup',
      'Contact Form Integration'
    ],
    cta: 'BOOK NOW →',
    href: '#semi-custom',
    highlight: true,
    color: '#2196F3',
    popular: true
  },
  {
    id: 3,
    title: 'Custom Design',
    icon: <CustomIcon />,
    price: 'Starting at $4,750',
    period: 'project-based',
    description: 'Ideal for businesses wanting a fully custom site with advanced features, multiple pages, or complex functionality.',
    features: [
      'Fully Custom Design',
      'Up to 10+ Pages',
      'Advanced Animations',
      'E-commerce Ready',
      '6-Month Support',
      'Advanced SEO',
      'Performance Optimization',
      'CMS Integration',
      'Custom Graphics'
    ],
    cta: 'GET QUOTE →',
    href: '#custom',
    highlight: false,
    color: '#9C27B0',
    popular: false
  },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -10,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function PricingCards() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const handleCardClick = (plan) => {
    console.log('Selected plan:', plan.title);
    // Add your click handler logic here
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 2, sm: 3, md: 4 },
        bgcolor: 'background.default',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          bgcolor: 'primary.light',
          opacity: 0.05,
          zIndex: 0
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            background: 'linear-gradient(45deg, #1976d2 30%, #2196F3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          Website Packages & Pricing
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          sx={{
            mb: { xs: 6, md: 8 },
            color: 'text.secondary',
            maxWidth: 600,
            mx: 'auto',
            fontSize: { xs: '1rem', md: '1.1rem' }
          }}
        >
          Choose the perfect package for your business. All packages include hosting,
          SSL certificate, and responsive design.
        </Typography>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Grid
            container
            spacing={{ xs: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
            sx={{ maxWidth: 1400, mx: 'auto' }}
          >
            {plans.map((plan, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                key={plan.id}
                sx={{
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <motion.div
                  variants={cardVariants}
                  whileHover="hover"
                  style={{
                    width: '100%',
                    maxWidth: 400,
                    height: '100%'
                  }}
                  onClick={() => handleCardClick(plan)}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      border: plan.highlight ? `2px solid ${plan.color}` : '1px solid',
                      borderColor: plan.highlight ? plan.color : 'divider',
                      bgcolor: 'background.paper',
                      boxShadow: plan.highlight
                        ? `0 10px 30px ${plan.color}40`
                        : '0 4px 20px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'visible',
                      '&:hover': {
                        boxShadow: `0 20px 40px ${plan.color}30`,
                      }
                    }}
                  >
                    {/* Popular Badge */}
                    {plan.popular && (
                      <Chip
                        icon={<StarIcon />}
                        label="Most Popular"
                        sx={{
                          position: 'absolute',
                          top: -12,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          bgcolor: plan.color,
                          color: 'white',
                          fontWeight: 700,
                          px: 2,
                          '& .MuiChip-icon': {
                            color: 'white'
                          }
                        }}
                      />
                    )}

                    {/* Card Header */}
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        pb: 0,
                        textAlign: 'center',
                        borderBottom: '1px solid',
                        borderColor: 'divider'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2
                        }}
                      >
                        <Box
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            bgcolor: `${plan.color}15`,
                            color: plan.color,
                            mr: 2
                          }}
                        >
                          {plan.icon}
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: 700,
                            color: 'text.primary'
                          }}
                        >
                          {plan.title}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 800,
                          mb: 0.5,
                          fontSize: { xs: '2rem', md: '2.5rem' },
                          color: plan.color
                        }}
                      >
                        {plan.price}
                      </Typography>

                      <Typography
                        variant="caption"
                        sx={{
                          color: 'text.secondary',
                          fontSize: '0.9rem'
                        }}
                      >
                        {plan.period}
                      </Typography>
                    </Box>

                    {/* Card Content */}
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        p: { xs: 3, md: 4 },
                        pt: 3
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          mb: 3,
                          color: 'text.secondary',
                          lineHeight: 1.6
                        }}
                      >
                        {plan.description}
                      </Typography>

                      {/* Features List */}
                      <Box sx={{ mb: 3 }}>
                        {plan.features.map((feature, idx) => (
                          <Box
                            key={idx}
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 1.5
                            }}
                          >
                            <CheckIcon
                              sx={{
                                fontSize: 18,
                                color: plan.color,
                                mr: 1.5,
                                mt: 0.25,
                                flexShrink: 0
                              }}
                            />
                            <Typography
                              variant="body2"
                              sx={{
                                color: 'text.primary',
                                fontSize: '0.9rem'
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </CardContent>

                    {/* CTA Button */}
                    <Box
                      sx={{
                        p: { xs: 3, md: 4 },
                        pt: 0
                      }}
                    >
                      <Button
                        component="a"
                        href={plan.href}
                        variant={plan.highlight ? 'contained' : 'outlined'}
                        size="large"
                        fullWidth
                        sx={{
                          borderRadius: 2,
                          py: 1.5,
                          fontWeight: 700,
                          fontSize: '1rem',
                          textTransform: 'none',
                          bgcolor: plan.highlight ? plan.color : 'transparent',
                          color: plan.highlight ? 'white' : plan.color,
                          borderColor: plan.color,
                          borderWidth: 2,
                          '&:hover': {
                            bgcolor: plan.highlight ? `${plan.color}E6` : `${plan.color}10`,
                            borderColor: plan.color,
                            borderWidth: 2,
                            transform: 'translateY(-2px)',
                            boxShadow: `0 8px 16px ${plan.color}30`
                          },
                          transition: 'all 0.3s ease'
                        }}
                      >
                        {plan.cta}
                      </Button>

                      {!plan.highlight && (
                        <Typography
                          variant="caption"
                          sx={{
                            display: 'block',
                            textAlign: 'center',
                            mt: 1,
                            color: 'text.secondary'
                          }}
                        >
                          No credit card required
                        </Typography>
                      )}
                    </Box>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Additional Info */}
        <Box
          sx={{
            mt: 8,
            textAlign: 'center',
            maxWidth: 800,
            mx: 'auto'
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              mb: 2
            }}
          >
            👋 Need a custom plan?
          </Typography>
          <Button
            variant="text"
            size="large"
            sx={{
              fontWeight: 600,
              textTransform: 'none',
              fontSize: '1rem'
            }}
          >
            Contact us for a personalized quote →
          </Button>
        </Box>
      </Box>
    </Box>
  );
}