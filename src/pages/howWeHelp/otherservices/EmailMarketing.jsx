import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import EmailImage from "../../../assets/images/howWeHelp/EmailM/email.png";

export default function EmailMarketing() {
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

                    Email Marketing
                </Typography>
                <Typography color="White"
                    variant="h5"
                    sx={{
                        fontWeight: 500,
                        // textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
                    }}
                >
                    Best Content Email Marketing Services
                </Typography>
                <Typography color="White" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
                    Unleash the Power of Email Marketing: Elevate engagement, conversions, and brand loyalty with our targeted and personalized email campaigns.
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
                        <Typography color="#0B4C74" variant="h4" sx={{ mb: 3 }}>
                            What is Email Marketing ?
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            Email marketing is a powerful digital marketing strategy that involves sending targeted and personalized emails to a group of subscribers or potential customers. It allows businesses to build meaningful relationships with their audience, nurture leads, and drive conversions.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            The importance of email marketing lies in its ability to deliver highly relevant content directly to the inbox of interested recipients, creating a direct and personalized communication channel. It enables businesses to promote products, share valuable information, and engage with customers on a one-on-one basis, fostering trust and loyalty. Email marketing also offers a high return on investment (ROI) and is cost-effective compared to traditional marketing channels.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            By leveraging email marketing effectively, businesses can drive website traffic, increase sales, and strengthen their brand presence in the competitive digital landscape.
                        </Typography>

                    </Box>
                </motion.div>

                {/* Right - Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: "100%" }}
                >
                    <Box
                        component="img"
                        src={EmailImage}
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
