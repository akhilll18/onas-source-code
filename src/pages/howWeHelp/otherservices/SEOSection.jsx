import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SeoImage from "../../../assets/images/howWeHelp/seo/seo.png";

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
            fontWeight: 700,
            mb: 2,
            // textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
          }}
        >
          Search Engine Optimization
        </Typography>
        <Typography color="white"
          variant="h5"
          sx={{
            fontWeight: 500,
            color: "#6c6464ff",
            // textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
          }}
        >
          Best SEO Services
        </Typography>
        <Typography color="White" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
          Unlock your online potential with our SEO services for
          results-driven SEO strategies, boosting visibility, sales, and cost
          efficiency for your business.
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
              What is Search engine optimization (SEO) ?
            </Typography>
            <Typography color="White" sx={{ mb: 2 }}>
              A search engine optimization (SEO) technique is used to improve a
              website’s visibility and ranking in search engine results. It
              involves various techniques, such as keyword research, on-page
              optimization, and link building, to make your website more
              appealing to search engines.
            </Typography>
            <Typography color="White" sx={{ mb: 2 }}>
              The importance of SEO lies in its ability to drive organic,
              targeted traffic to your website, increase brand visibility, and
              boost online credibility. By appearing higher in search results,
              you can attract more potential customers, establish your business
              as an authority in your industry, and ultimately drive more
              conversions and revenue.
            </Typography>
            <Typography color="White">
              In today’s highly competitive online landscape, investing in SEO
              services is essential for businesses looking to stay ahead and
              succeed in the digital realm.
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
            src={SeoImage}
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
