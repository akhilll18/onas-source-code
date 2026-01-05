import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SMMImage from "../../../assets/images/howWeHelp/SMM/smm.png";

export default function SEOSection() {
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
                        mb: 2,
                    }}
                >

                    Social Media Marketing
                </Typography>
                <Typography color="White"
                    variant="h5"
                >
                    Best Social Media Marketing Services
                </Typography>
                <Typography color="White" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
                    Unlock your online potential with our Social Media Marketing services.
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
                    animate={{ opacity: 1, x: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    style={{ width: "100%" }}
                >
                    <Box sx={{ maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
                        <Typography color="#0B4C74" variant="h4" sx={{ mb: 3 }}>
                            What is Social Media Marketing ?
                        </Typography>
                        <Typography color="White"  sx={{ mb: 2 }}>
                            In order to increase brand awareness, interact with their target audience, and spur commercial expansion, companies can benefit from the assistance of a Businesses may generate high-quality leads, enhance their reputation, and improve customer interactions with the aid of performance analytics, targeted advertising, and intelligent content creation.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            In the current digital era, where billions of people use social media, a data-driven strategy guarantees that companies maintain their competitiveness and optimise their marketing capabilities. Professional agencies that specialise in audience analytics, platform-specific tactics, and campaign optimisation assist businesses in achieving long-term success in the constantly changing digital market.
                        </Typography>
                        <Typography color="White"  sx={{ mb: 2 }}>
                            With expert social media advertising services in Hyderabad, Companies can produce significant ad campaigns that maximize engagement and conversions .A properly implemented plan improves brand visibility, positioning companies as industry leaders. Partnering with a trusted company in Hyderabad ensures tailored marketing solutions that drive measurable results and sustainable business growth.
                        </Typography>

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
                        src={SMMImage}
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
