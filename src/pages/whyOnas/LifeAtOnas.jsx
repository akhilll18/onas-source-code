import React from "react";
import { Box, Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import { motion } from "framer-motion";

// Culture photos
import Culture1 from "../../assets/images/whyOnas/lifeAtOnas/1.jpg";
import Culture2 from "../../assets/images/whyOnas/lifeAtOnas/2.jpg";
import Culture3 from "../../assets/images/whyOnas/lifeAtOnas/3.jpg";
import Culture4 from "../../assets/images/whyOnas/lifeAtOnas/4.jpg";
import Culture5 from "../../assets/images/whyOnas/lifeAtOnas/5.jpg";
import Culture6 from "../../assets/images/whyOnas/lifeAtOnas/6.jpg";
import Culture7 from "../../assets/images/whyOnas/lifeAtOnas/7.jpg";
import Culture8 from "../../assets/images/whyOnas/lifeAtOnas/8.jpg";
import Culture9 from "../../assets/images/whyOnas/lifeAtOnas/9.jpg";
import Culture10 from "../../assets/images/whyOnas/lifeAtOnas/10.jpg";
import Culture11 from "../../assets/images/whyOnas/lifeAtOnas/11.jpg";
import Culture12 from "../../assets/images/whyOnas/lifeAtOnas/12.jpg";
import Culture13 from "../../assets/images/whyOnas/lifeAtOnas/13.jpg";
import Culture14 from "../../assets/images/whyOnas/lifeAtOnas/14.jpg";
import Culture15 from "../../assets/images/whyOnas/lifeAtOnas/15.jpg";


export default function LifeAtOnas() {
    const culturePhotos = [Culture1, Culture2, Culture3, Culture4,
        Culture5, Culture5, Culture6,
        Culture7, Culture8, Culture9,
        Culture10, Culture11, Culture12,
        Culture13, Culture14, Culture15,
    ];

    return (
        <Box
            sx={{
                px: { xs: 2, md: 8, lg: 12, xl: 16 },
                pt: { xs: 18, md: 20, lg: 28, xl: 32 },
                pb: { xs: 8, md: 8, lg: 12, xl: 16 },
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
                    Life @ Onas
                </Typography>
                <Typography color="white" variant="h5" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
                    A Glimpse Into Our Culture, People, and Everyday Energy
                </Typography>
            </Box>

            {/* Section - Photos or Cards */}
            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="stretch"
            >
                {culturePhotos && culturePhotos.length > 0 ? (
                    // If photos exist → show them
                    culturePhotos.map((photo, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: idx * 0.05 }}

                            >
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 4,
                                        overflow: "hidden",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={photo}
                                        alt={`Culture ${idx + 1}`}
                                        sx={{ height: 260, objectFit: "cover" }}
                                    />
                                </Card>
                            </motion.div>
                        </Grid>
                    ))
                ) : (
                    // Else → fallback to Cards
                    ["Innovation", "Collaboration", "Sucess", "Growth"].map((title, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                            >
                                <Card
                                    sx={{
                                        borderRadius: 3,
                                        boxShadow: 3,
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Typography variant="h6" fontWeight={600}>
                                            {title}
                                        </Typography>
                                        <Typography sx={{ mt: 1, color: "text.secondary" }}>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
}


