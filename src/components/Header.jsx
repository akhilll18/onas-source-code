import React, { useState, useEffect, useRef } from "react";

import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Menu,
  Link as MuiLink,
  Typography,
} from "@mui/material";
import { Popper, Paper, ClickAwayListener, Grow, MenuList, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { NAV_LINKS } from "../utils/constants";
import CloseIcon from "@mui/icons-material/Close";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import XIcon from '@mui/icons-material/X';


import Logo from '../../public/images/logo.png';

export default function Header() {
  const scrollTimeout = useRef(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [expandedMenu, setExpandedMenu] = useState(null); // for parent
  const [expandedCategory, setExpandedCategory] = useState(null); // for sub category
  const [isHoveringPopper, setIsHoveringPopper] = useState(false);


  const handleMenuOpen = (event, label) => {
    setOpenMenu(label);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setOpenMenu(null);
    setAnchorEl(null);
  };

  const toggleMenu = (menuLabel) => {
    setExpandedMenu((prev) => (prev === menuLabel ? null : menuLabel));
    setExpandedCategory(null);
  };

  const toggleCategory = (categoryLabel) => {
    setExpandedCategory((prev) => (prev === categoryLabel ? null : categoryLabel));
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };
  const handleDrawerNavigation = () => {
    setDrawerOpen(false);
    setExpandedMenu(null);
    setExpandedCategory(null);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (!isHoveringPopper) {
        // Clear previous timeout
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

        // Set a new timeout to close after 200ms
        scrollTimeout.current = setTimeout(() => {
          handleMenuClose();
        }, 200);
      }
    };

    if (openMenu) {
      window.addEventListener("scroll", handleScroll, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [openMenu, isHoveringPopper]);



  // --- TopBar ---
  const TopBar = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: { xs: 1.5, sm: 3, md: 1 },
        px: { xs: 2, sm: 4, md: 0, lg: 4, xl: 10, xxl: 14 },
        py: { xs: 1, sm: 1.2, md: 0, lg: 1, xl: 1.25, xxl: 2 },
        height: { lg: 64, xl: 64, xxl: 72 },
        // Updated font family to modern sans-serif stack
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        // bgcolor: '#790604',
        bgcolor: '#282825',
        color: 'white',
        fontSize: { xs: '0.65rem', sm: '0.75rem', md: '0.85rem', lg: '0.95rem', xl: '1rem' },
        textAlign: 'center',
        fontWeight: 400,
        letterSpacing: '0.2px',
      }}
    >
      {/* Desktop: Email + Phone */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          gap: 3,
          alignItems: "center",
        }}
      >
        <MuiLink
          href="mailto:sales@onasglobal.com"
          underline="none"
          color="inherit"
          sx={{
            fontSize: '15px',
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
          }}
        >
          <MailOutlineIcon fontSize="small" /> sales@onasglobal.com
        </MuiLink>
        <Box sx={{
          fontSize: '15px',
          display: "flex",
          alignItems: "center",
          gap: 2,
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}>
          <MuiLink
            href="tel:+919087086777"
            underline="none"
            color="inherit"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
            }}
          >
            <PhoneIcon fontSize="small" /> +91-9087086777
          </MuiLink>&nbsp; &amp;&nbsp;
          <MuiLink
            href="tel:+12015898827"
            underline="none"
            color="inherit"
            sx={{
              fontSize: '15px',
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
            }}
          >
            <PhoneIcon fontSize="small" /> +1 201-589-8827
          </MuiLink>
        </Box>
      </Box>

      {/* Mobile: Only Phone */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          gap: 0.5,
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        <PhoneIcon fontSize="small" />
        <MuiLink
          href="tel:+919087086777"
          underline="none"
          color="inherit"
          sx={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}
        >
          +91-9087086777
        </MuiLink> &nbsp;&amp;&nbsp;
        <MuiLink
          href="tel:+12015898827"
          underline="none"
          color="inherit"
          sx={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}
        >
          +1 201-589-8827
        </MuiLink>
      </Box>

      {/* Desktop: Socials + Buttons */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          gap: 2,
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        <MuiLink
          href="https://www.facebook.com/profile.php?id=61581619530716"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <FacebookIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <InstagramIcon fontSize="small" />
        </MuiLink>
        <MuiLink
          href="https://www.linkedin.com/company/onas-global-services-pvt-ltd/ "
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <LinkedInIcon fontSize="small" />
        </MuiLink>

        <MuiLink
          href="https://youtube.com/@onasglobalservices?si=bd1DK8LtF52OvUb1"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <YouTubeIcon fontSize="small" />
        </MuiLink>

        <MuiLink
          href="https://x.com/ONAS261679"
          target="_blank"
          rel="noopener"
          color="inherit"
        >
          <XIcon fontSize="small" />
        </MuiLink>


        <Button
          size="small"
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          sx={{
            fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
            fontWeight: 500,
          }}
        >
          Contact Us
        </Button>
        <Button
          size="small"
          variant="secondaryFilled"
          component={RouterLink}
          to="/resources/careers/"
          sx={{
            fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
            fontWeight: 500,
          }}
        >
          Careers
        </Button>
      </Box>
    </Box>
  );

  // --- Desktop nav links ---
  const renderNavLinks = () => (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      gap: { lg: 2, xl: 1 },
      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
    }}>
      {NAV_LINKS.map((nav) =>
        nav.children ? (
          <Box
            key={nav.label}
            sx={{
              position: "relative",
              display: "inline-block",
              fontSize: { xs: '0.8rem', sm: '0.9rem', md: '0.7rem', color: '#0066ff ' },
              fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
            }}
          // onMouseEnter={(e) => handleMenuOpen(e, nav.label)}
          // onMouseLeave={handleMenuClose}
          >
            <Button
              onMouseEnter={(e) => handleMenuOpen(e, nav.label)}
              endIcon={<ArrowDropDownIcon />}
              sx={{
                // color: "#6b545aff",
                color: "#0B4C74",
                fontWeight: 600,
                textTransform: "none",
                gap: { lg: 2, xl: 1, xxl: 4 },
                fontSize: {
                  xs: "0.85rem",
                  sm: "0.95rem",
                  md: "1.05rem",
                  lg: "1.05rem",
                  xl: "1.25rem",
                  xxl: "1.35rem",
                },
                padding: '15px',
                "&:hover": { bgcolor: "transparent", color: "#2E8BC0" },
                fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                letterSpacing: '0.3px',
              }}
            >
              {nav.label}
            </Button>

            <Popper
              open={openMenu === nav.label}
              anchorEl={anchorEl}
              placement="bottom-start"
              transition
              disablePortal={false}
              style={{ zIndex: 1200 }}
              onMouseEnter={() => setIsHoveringPopper(true)}
              onMouseLeave={() => setIsHoveringPopper(false)}
            >
              {({ TransitionProps }) => (
                <Grow {...TransitionProps} style={{ transformOrigin: 'top left' }}>
                  <Paper
                    sx={{
                      maxHeight: "70vh",
                      overflowY: "auto",
                      borderRadius: 2,
                      mt: 1,
                      minWidth: "420px",
                      maxWidth: "1800px",
                      width: "auto",
                      bgcolor: "background.paper",
                      p: 3,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                    }}
                  >
                    <ClickAwayListener onClickAway={handleMenuClose}>
                      <MenuList autoFocusItem={openMenu === nav.label}>
                        <Box
                          sx={{
                            display: "grid",
                            gap: 3,
                            mt: 3,
                            gridTemplateColumns:
                              nav.children.length <= 2
                                ? "repeat(auto-fit, minmax(200px, 1fr))"
                                : {
                                  xs: "repeat(2, minmax(200px, 1fr))",
                                  sm: "repeat(3, minmax(200px, 1fr))",
                                  md: "repeat(4, minmax(220px, 1fr))",
                                  lg: "repeat(4, minmax(240px, 1fr))",
                                  xl: "repeat(4, minmax(260px, 1fr))",
                                  xxl: "repeat(4, minmax(260px, 1fr))",
                                },
                          }}
                        >
                          {nav.children.map((group, gi) => (
                            <Box key={gi} sx={{ minWidth: 220 }}>
                              {group.category && (
                                <Typography
                                  sx={{
                                    fontWeight: 700,
                                    fontSize: "12px",
                                    mb: 1,
                                    color: "primary.main",
                                    textTransform: "uppercase",
                                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                                    letterSpacing: '0.5px',
                                  }}
                                >
                                  {group.category}
                                </Typography>
                              )}
                              {(group.items || [group]).map((child, i) => (
                                <MenuItem
                                  key={child.label}
                                  component={child.path?.startsWith("http") ? "a" : RouterLink}
                                  href={child.path?.startsWith("http") ? child.path : undefined}
                                  to={!child.path?.startsWith("http") ? child.path : undefined}
                                  target={child.path?.startsWith("http") ? "_blank" : undefined}
                                  rel={child.path?.startsWith("http") ? "noopener noreferrer" : undefined}
                                  onClick={handleMenuClose}
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    borderRadius: 1,
                                    px: 1,
                                    fontSize: '14px',
                                    transition: "all 0.2s ease",
                                    "&:hover": {
                                      bgcolor: "#e6f0ff",
                                      color: "#0066ff",
                                      transform: "translateX(3px)",
                                    },
                                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                                    fontWeight: 400,
                                  }}

                                >
                                  <span style={{ color: "#888" }}>»</span> {child.label}
                                </MenuItem>
                              ))}
                            </Box>
                          ))}
                        </Box>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>

          </Box>
        ) : (
          <Button
            key={nav.label}
            component={RouterLink}
            to={nav.path}
            sx={{
              color: "#0B4C74",
              fontWeight: 600,
              textTransform: "none",
              fontSize: {
                xs: "0.85rem",
                sm: "0.95rem",
                md: "1.05rem",
                lg: "1.05rem",
                xl: "1.25rem",
                xxl: "1.35rem",
              },
              px: 2,
              "&:hover": { color: "#2E8BC0", bgcolor: "transparent" },
              fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
              letterSpacing: '0.3px',
            }}
          >
            {nav.label}
          </Button>
        )
      )}
    </Box>
  );


  // --- Mobile drawer ---
  const renderDrawerLinks = () => (
    <Box
      sx={{
        width: 260,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
      }}
    >

      {/* Top section with close button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        <IconButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ pt: 0 }}>
        {NAV_LINKS.map((nav) =>
          nav.children ? (
            <Box key={nav.label}>
              {/* Parent label */}
              <ListItem disablePadding>
                <ListItemButton onClick={() => toggleMenu(nav.label)}>
                  <ListItemText
                    primary={<strong style={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}>{nav.label}</strong>}
                    primaryTypographyProps={{
                      fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                      fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                      fontWeight: 600,
                    }}
                  />

                  <ArrowDropDownIcon />
                </ListItemButton>
              </ListItem>

              <Collapse in={expandedMenu === nav.label} timeout="auto" unmountOnExit>
                {nav.children.map((group) => (
                  <Box key={group.category || group.label}>
                    {group.category ? (
                      <>
                        {/* Category */}
                        <ListItem disablePadding>
                          <ListItemButton onClick={() => toggleCategory(group.category)} sx={{ pl: 4 }}>
                            <ListItemText
                              primary={<strong style={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}>{group.category}</strong>} // Parent label
                              primaryTypographyProps={{
                                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                                fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                                fontWeight: 600,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>

                        {/* Items under category */}
                        <Collapse in={expandedCategory === group.category}>
                          {(group.items || []).map((child) => (
                            <ListItem key={child.label} disablePadding>
                              <ListItemButton
                                component={RouterLink}
                                to={child.path || "#"}
                                onClick={() => setDrawerOpen(false)}
                                sx={{ pl: 8, display: "flex", gap: 1 }}
                              >
                                <ListItemText
                                  primary={
                                    <span style={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}>
                                      <span style={{ color: "#888" }}>»</span> {child.label}
                                    </span>
                                  }
                                  primaryTypographyProps={{
                                    fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                                    fontWeight: 400,
                                  }}
                                />
                              </ListItemButton>
                            </ListItem>
                          ))}
                        </Collapse>
                      </>
                    ) : (
                      /* Direct items (no category) */
                      (group.items || [group]).map((child) => (
                        <ListItem key={child.label} disablePadding>
                          <ListItemButton
                            component={RouterLink}
                            to={child.path || "#"}
                            onClick={() => setDrawerOpen(false)}
                            sx={{ pl: 4, display: "flex", gap: 1 }}
                          >
                            <ListItemText
                              primary={
                                <span style={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}>
                                  <span style={{ color: "#888" }}>»</span> {child.label}
                                </span>
                              }
                              primaryTypographyProps={{
                                fontSize: { xs: "0.8rem", sm: "0.9rem", md: "0.95rem" },
                                fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                                fontWeight: 400,
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      ))
                    )}
                  </Box>
                ))}
              </Collapse>

            </Box>
          ) : (
            <ListItem key={nav.label} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={nav.path || "#"}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText
                  primary={nav.label}
                  primaryTypographyProps={{
                    fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" },
                    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>


      {/* Bottom section */}
      <Box sx={{
        p: 2,
        borderTop: "1px solid #eee",
        textAlign: "center",
        fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
      }}>

        <Button
          fullWidth
          component={RouterLink}
          to="/resources/contact-us/"
          variant="primaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}
        >
          Contact Us
        </Button>

        <Button
          fullWidth
          component={RouterLink}
          to="/resources/careers/"
          variant="secondaryFilled"
          onClick={handleDrawerNavigation}
          sx={{ fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif" }}
        >
          Careers
        </Button>


        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <MuiLink
            href="https://www.facebook.com/profile.php?id=61581619530716"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <FacebookIcon />
          </MuiLink>
          <MuiLink
            href="https://www.instagram.com/onasglobalservices?igsh=aXVmdjVjdWVqcXE4"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <InstagramIcon />
          </MuiLink>
          <MuiLink
            href="https://www.linkedin.com/company/onas-global-services-pvt-ltd/ "
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <LinkedInIcon />
          </MuiLink>
          <MuiLink
            href="https://youtube.com/@onasglobalservices?si=bd1DK8LtF52OvUb1"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <YouTubeIcon fontSize="small" />
          </MuiLink>

          <MuiLink
            href="https://x.com/ONAS261679"
            target="_blank"
            rel="noopener"
            color="inherit"
          >
            <XIcon fontSize="small" />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "#046bd2",
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        <TopBar />
      </Box>

      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          top: { xs: 32, sm: 38, md: 60, lg: 58, xl: 72, xxl: 80 },
          zIndex: (theme) => theme.zIndex.appBar,
          bgcolor: "background.paper",
          borderBottom: "1px solid #eee",
          fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "relative",
            minHeight: { xs: 96, sm: 96, md: 72, lg: 80, xl: 90, xxl: 100 },
            height: { xs: 96, sm: 96, md: 72, lg: 80, xl: 90, xxl: 100 },
            px: { xs: 1, sm: 2, md: 2, lg: 3, xl: 4 },
            letterSpacing: { xs: 0, sm: 0, md: 0.5, lg: 3.3, xl: 3.5 },
            mt: { xl: 1 },
            fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
          }}
        >
          {/* Logo - Increased size and moved slightly right */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              height: { xs: 60, sm: 70, md: 80, lg: 90, xl: 100, xxl: 110 },
              minWidth: { xs: 200, sm: 220, md: 240, lg: 260, xl: 280, xxl: 300 },
              ml: { xs: 3, sm: 4, md: 5, lg: 6, xl: 8, xxl: 10 }, // Moved slightly right
              mt: { lg: 2, xl: 2, xxl: 3 },
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={Logo}
              alt="ONAS Logo"
              sx={{
                height: { xs: "60px", sm: "70px", md: "80px", lg: "90px", xl: "100px", xxl: "110px" },
                width: { xs: "200px", sm: "220px", md: "240px", lg: "260px", xl: "280px", xxl: "300px" },
                maxWidth: "none",
                objectFit: "contain",
                pt: { xs: 2, md: 0, lg: 0, xl: 0, xxl: 0 }
              }}
            />
          </Box>

          {/* Nav links - Now on the right side with flex: 1 to push to right */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              flex: 1,
              pr: { md: 2, lg: 4, xl: 6, xxl: 8 }
            }}
          >
            {renderNavLinks()}
          </Box>

          {/* Mobile Menu */}
          <IconButton
            onClick={() => setDrawerOpen(!drawerOpen)}
            sx={{
              display: { md: "none" },
              mr: 2
            }}
          >
            <MenuIcon />
          </IconButton>

          {/* Drawer */}
          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{
              sx: {
                zIndex: (theme) => theme.zIndex.modal + 2,
                fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif",
              }, // ensures drawer is on top
            }}
          >
            {renderDrawerLinks()}
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  );
}