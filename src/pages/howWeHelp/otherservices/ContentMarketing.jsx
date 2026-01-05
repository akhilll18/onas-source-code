import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CMImage from "../../../assets/images/howWeHelp/CM/cm.png";

export default function ContentMarketing() {
    return (
        <Box
            sx={{
                px: { xs: 2, md: 8, lg: 12, xl: 16 },
                pt: { xs: 20, md: 20, lg: 28, xl: 32 },
                pb: { xs: 8, md: 8, lg: 12, xl: 16 },
                maxWidth: 1800,
                mx: 'auto',
                overflowX: "hidden",
            }}
        >
            {/* Heading */}
            <Box sx={{ textAlign: "center", mb: 8 }}>
                <Typography color="#0B4C74"
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        // textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                    }}
                >

                    Content marketing
                </Typography>
                <Typography color="White"
                    variant="h5"
                    sx={{
                        fontWeight: 500,
                        // textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    }}
                >
                    Best Content marketing Services
                </Typography>
                <Typography color="White" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
                    Unlock the Power of Content: Engage, Educate, and Elevate Your Audience.
                </Typography>
            </Box>

            {/* Section - What is SEO? */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: { xs: 4, md: 8 },
                }}
            >
                {/* Left - Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%" }}
                >
                    <Box sx={{ maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
                        <Typography variant="h4" color="#0B4C74" sx={{ mb: 3 }}>
                            What is Content Marketing ?
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            Content marketing is a strategic digital marketing approach that focuses on creating and distributing valuable, relevant, and consistent content to attract and engage a specific target audience.                         </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            It involves the creation and sharing of informative, entertaining, and educational content that builds trust, establishes credibility, and drives customer action. In today’s digital age, content marketing is essential for businesses to connect with their audience, increase brand awareness, generate leads, and build customer loyalty. By delivering high-quality content tailored to their needs, businesses can position themselves as industry thought leaders, boost website traffic, enhance search engine visibility, and foster meaningful customer relationships.                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            As we are one of the best content marketing agency, we offer cost-effective content marketing strategy that adds value to the audience’s lives, establishes authority, and drives business growth in the competitive digital landscape.                        </Typography>

                    </Box>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: "100%" }}
                >
                    <Box
                        component="img"
                        src={CMImage}
                        alt="SEO Services"
                        sx={{
                            width: "100%",
                            maxWidth: 500,
                            borderRadius: 3,
                            boxShadow: 3,
                            mx: "auto",
                        }}
                    />
                </motion.div>
            </Box>
        </Box>
    );
}
