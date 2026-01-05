import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CompanyImage from "../../../public/Logo2.jpg";

export default function Company() {
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
                <Typography color="#0B4C74" variant="h3">
                    Solving Today. Scaling Tomorrow
                </Typography>
                <Typography color="White" variant="h6">
                    For over two decades, ONAS has powered businesses that lead, disrupt, and redefine industries.
                </Typography>
            </Box>

            {/* Section - Company Description */}
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
                            Technology Evolves. So Do We.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            We don’t just fix problems we engineer scalable, intelligent, and resilient digital ecosystems.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            From a technology solutions provider to a global force in innovation, we enable enterprises to support critical operations, modernize infrastructure, automate workflows, reinforce security, and transform industries—all through our <strong>SMART@ONAS</strong> framework.
                        </Typography>
                        <Typography color="White" sx={{ mb: 2 }}>
                            This isn’t just what we do. It’s who we are.
                        </Typography>
                    </Box>
                </motion.div>

                {/* Right - Optional Image */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ width: "100%" }}
                >
                    <Box
                        component="img"
                        src={CompanyImage}
                        alt="ONAS Company"
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


