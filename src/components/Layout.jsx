import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Box, CssBaseline } from '@mui/material';
import ScrollControl from '../pages/Home/ScrollToTopAndBottom';
import MainFooter from '../pages/Home/MainFooter';

export default function Layout({ children }) {
    return (
        <>
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                id="bg-video"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            >
                <source src="/videos/BG.mp4" type="video/mp4" />
            </video>

            <CssBaseline />
            <Header />

            <Box
                sx={{
                    minHeight: '100vh',
                    py: { xs: 1, md: 2 },
                    px: { xs: 1, md: 2 },
                    position: "relative",
                    zIndex: 1, // ensure content is above the video
                }}
            >
                {React.Children.map(children, child => {
                    if (child && child.props && child.props.fullWidth) {
                        return child;
                    }
                    return <>{child}</>;
                })}
            </Box>

            <ScrollControl />

            <Box
                sx={{
                    px: { xs: 2, md: 8 },
                    position: "relative",
                    zIndex: 1
                }}
            >
                <MainFooter />
            </Box>

            <Footer />
        </>
    );
}