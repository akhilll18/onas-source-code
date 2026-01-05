import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PPCImage from "../../../assets/images/howWeHelp/ppc/ppc.png";

export default function PPCAdvertising() {
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
                <Typography
                    variant="h3" color="#0B4C74"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        // textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
                    }}
                >

                    PPC Advertising
                </Typography>
                <Typography color="White" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
                    Accelerate Your Online Growth with Targeted Pay-Per-Click Advertising Solutions
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
                    <Box color="White" sx={{ maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
                        <ul>
                            <li>Instant Visibility</li>
                            <li>Targeted Audience</li>
                            <li>Cost Control</li>
                            <li>Measurable Results</li>
                            <li>Remarketing Opportunities</li>
                            <li>Enhanced Brand Exposure</li>
                        </ul>
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
                        src={PPCImage}
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
