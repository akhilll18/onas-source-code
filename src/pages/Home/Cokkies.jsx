import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Paper,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Switch,
  Divider,
  Fade,
  Slide,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import CookieIcon from '@mui/icons-material/Cookie';
import AdsClickIcon from '@mui/icons-material/AdsClick';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BlockIcon from '@mui/icons-material/Block';

const PrivacyConsentBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [cookies, setCookies] = useState({
    necessary: { enabled: true, required: true, label: 'Necessary Cookies', description: 'Required for basic site functionality' },
    preferences: { enabled: false, required: false, label: 'Preference Cookies', description: 'Remember your settings and preferences' },
    analytics: { enabled: false, required: false, label: 'Analytics Cookies', description: 'Help us improve our website' },
    marketing: { enabled: false, required: false, label: 'Marketing Cookies', description: 'Used to deliver relevant ads' },
    social: { enabled: false, required: false, label: 'Social Media Cookies', description: 'Enable social sharing features' }
  });

  // Show banner on initial load (check if consent was already given)
  useEffect(() => {
    const consentGiven = localStorage.getItem('privacyConsent');
    if (!consentGiven) {
      setTimeout(() => setOpen(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    const updatedCookies = { ...cookies };
    Object.keys(updatedCookies).forEach(key => {
      updatedCookies[key].enabled = true;
    });
    setCookies(updatedCookies);
    localStorage.setItem('privacyConsent', JSON.stringify(updatedCookies));
    setOpen(false);
  };

  const handleDisableAll = () => {
    const updatedCookies = { ...cookies };
    Object.keys(updatedCookies).forEach(key => {
      if (!updatedCookies[key].required) {
        updatedCookies[key].enabled = false;
      }
    });
    setCookies(updatedCookies);
    localStorage.setItem('privacyConsent', JSON.stringify(updatedCookies));
    setOpen(false);
  };

  const handleSaveSettings = () => {
    localStorage.setItem('privacyConsent', JSON.stringify(cookies));
    setOpenSettings(false);
    setOpen(false);
  };

  const handleCookieToggle = (cookieType) => {
    if (cookies[cookieType].required) return; // Don't allow disabling required cookies
    setCookies({
      ...cookies,
      [cookieType]: {
        ...cookies[cookieType],
        enabled: !cookies[cookieType].enabled
      }
    });
  };

  const getCookieIcon = (type) => {
    switch (type) {
      case 'necessary': return <PrivacyTipIcon sx={{ fontSize: 18 }} />;
      case 'preferences': return <SettingsIcon sx={{ fontSize: 18 }} />;
      case 'analytics': return <AnalyticsIcon sx={{ fontSize: 18 }} />;
      case 'marketing': return <AdsClickIcon sx={{ fontSize: 18 }} />;
      case 'social': return <CookieIcon sx={{ fontSize: 18 }} />;
      default: return <CookieIcon sx={{ fontSize: 18 }} />;
    }
  };

  return (
    <>
      {/* Privacy Settings Dialog */}
      <Dialog
        open={openSettings}
        onClose={() => setOpenSettings(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 2 }
        }}
      >
        <DialogTitle sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: '#0B4C74',
          color: 'white'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsIcon />
            <Typography variant="h6">Privacy Settings</Typography>
          </Box>
          <IconButton
            onClick={() => setOpenSettings(false)}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ pt: 3 }}>
          <DialogContentText sx={{ mb: 3, color: 'text.primary' }}>
            Manage your consent preferences for cookies and data processing. You can change these settings at any time.
          </DialogContentText>

          <List sx={{ width: '100%' }}>
            {Object.entries(cookies).map(([key, cookie]) => (
              <React.Fragment key={key}>
                <ListItem
                  sx={{
                    py: 2,
                    px: 0,
                    borderBottom: '1px solid',
                    borderColor: 'divider'
                  }}
                  secondaryAction={
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Typography
                        variant="caption"
                        sx={{
                          color: cookie.required ? 'success.main' : 'text.secondary',
                          fontWeight: 600
                        }}
                      >
                        {cookie.required ? 'Always Active' : cookie.enabled ? 'Active' : 'Inactive'}
                      </Typography>
                      <Switch
                        edge="end"
                        checked={cookie.enabled}
                        onChange={() => handleCookieToggle(key)}
                        disabled={cookie.required}
                        color="primary"
                      />
                    </Box>
                  }
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                    <Box sx={{
                      color: cookie.required ? 'success.main' : 'primary.main',
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {getCookieIcon(key)}
                    </Box>
                    <ListItemText
                      primary={
                        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                          {cookie.label}
                        </Typography>
                      }
                      secondary={
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {cookie.description}
                        </Typography>
                      }
                    />
                  </Box>
                </ListItem>
              </React.Fragment>
            ))}
          </List>

          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              <strong>Note:</strong> Necessary cookies are required for the website to function and cannot be disabled.
              Your preferences will be stored for 12 months.
            </Typography>
          </Box>
        </DialogContent>

        <DialogActions sx={{ px: 3, py: 2, borderTop: '1px solid', borderColor: 'divider' }}>
          <Button
            onClick={() => {
              Object.keys(cookies).forEach(key => {
                if (!cookies[key].required) {
                  handleCookieToggle(key);
                }
              });
            }}
            startIcon={<BlockIcon />}
            sx={{ textTransform: 'none' }}
          >
            Disable All Optional
          </Button>
          <Button
            onClick={() => {
              Object.keys(cookies).forEach(key => {
                if (!cookies[key].enabled && !cookies[key].required) {
                  handleCookieToggle(key);
                }
              });
            }}
            startIcon={<CheckCircleIcon />}
            sx={{ textTransform: 'none' }}
          >
            Allow All
          </Button>
          <Button
            onClick={handleSaveSettings}
            variant="contained"
            sx={{
              bgcolor: '#0B4C74',
              textTransform: 'none',
              '&:hover': { bgcolor: '#083A5A' }
            }}
          >
            Save Preferences
          </Button>
        </DialogActions>
      </Dialog>

      {/* Privacy Consent Banner */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={24}
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            borderRadius: isMobile ? 0 : '16px 16px 0 0',
            borderTop: '4px solid',
            borderTopColor: '#0B4C74',
            p: { xs: 2, sm: 3 },
            m: isMobile ? 0 : 2,
            maxWidth: isMobile ? '100%' : 1200,
            mx: 'auto',
            bgcolor: 'background.paper'
          }}
        >
          <Container maxWidth="lg" sx={{ p: 0 }}>
            <Box sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { md: 'flex-start' },
              gap: 3
            }}>
              {/* Left Content */}
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    mb: 1,
                    color: '#0B4C74',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1
                  }}
                >
                  <PrivacyTipIcon />
                  We Care About Your Privacy
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6, mb: 2 }}>
                  By clicking <strong>"Accept All"</strong> you provide consent to our website, sub-domains and all the third parties
                  mentioned in our{' '}
                  <Link
                    href="/privacy-policy"
                    sx={{
                      color: '#0B4C74',
                      fontWeight: 600,
                      textDecoration: 'none',
                      '&:hover': { textDecoration: 'underline' }
                    }}
                  >
                    Privacy and Cookies Preference Setting
                  </Link>
                  {' '}to store cookies and other technologies to enhance your experience on our website,
                  process your personal data, show you personalized content and advertisements, analyze website
                  efficiency, and improve our marketing efforts.
                </Typography>

                <Link
                  href="/privacy-policy"
                  sx={{
                    color: '#0B4C74',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Privacy Policy
                </Link>
              </Box>

              {/* Right Actions */}
              <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                minWidth: { md: 280 }
              }}>
                <Button
                  variant="outlined"
                  onClick={() => setOpenSettings(true)}
                  startIcon={<SettingsIcon />}
                  sx={{
                    borderColor: '#0B4C74',
                    color: '#0B4C74',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    '&:hover': {
                      borderColor: '#083A5A',
                      bgcolor: 'rgba(11, 76, 116, 0.04)'
                    }
                  }}
                >
                  Privacy Settings
                </Button>

                <Button
                  variant="outlined"
                  onClick={handleDisableAll}
                  startIcon={<BlockIcon />}
                  sx={{
                    borderColor: 'error.main',
                    color: 'error.main',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    '&:hover': {
                      borderColor: 'error.dark',
                      bgcolor: 'rgba(211, 47, 47, 0.04)'
                    }
                  }}
                >
                  Disable All
                </Button>

                <Button
                  variant="contained"
                  onClick={handleAcceptAll}
                  startIcon={<CheckCircleIcon />}
                  sx={{
                    bgcolor: '#0B4C74',
                    textTransform: 'none',
                    fontWeight: 600,
                    px: 3,
                    '&:hover': {
                      bgcolor: '#083A5A',
                      boxShadow: '0 4px 12px rgba(11, 76, 116, 0.3)'
                    }
                  }}
                >
                  Accept All
                </Button>
              </Box>
            </Box>

            {/* Close Button */}
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                color: 'text.secondary'
              }}
              size="small"
            >
              <CloseIcon />
            </IconButton>
          </Container>
        </Paper>
      </Slide>

      {/* Show Privacy Settings Button (for testing) */}
      {!open && (
        <Button
          variant="outlined"
          onClick={() => setOpenSettings(true)}
          startIcon={<SettingsIcon />}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 9998,
            bgcolor: 'background.paper',
            textTransform: 'none',
            borderRadius: 20,
            boxShadow: 3,
            '&:hover': {
              boxShadow: 6
            }
          }}
        >
          Privacy Settings
        </Button>
      )}
    </>
  );
};

export default PrivacyConsentBanner;