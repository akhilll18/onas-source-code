import React from "react";
import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import WebDevImage1 from "../../../assets/images/howWeHelp/webdevlopment/webdesign.png";
import WebDevImage2 from "../../../assets/images/howWeHelp/webdevlopment/webdev2.png";


export default function WebDevelopment() {
  const keyBenefits = [
    "Expanded Reach",
    "Increased Online Presence",
    "Credibility & Branding",
    "Direct Customer Interaction",
    "Cost-Effective Marketing",
    "Competitive Advantage",
  ];

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
      {/* Top Heading */}
      <Typography
        variant="h4" color="#0B4C74"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 8,
          // textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
        }}
      >
        <span className="gradient-underline">
          Web Designing & Development
        </span>
      </Typography>

      {/* Section 1 - Image Left / Text Right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          mb: 12,
          gap: { xs: 4, md: 8 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "500px" },
              mx: "auto",
            }}
          >
            <Box
              component="img"
              src={WebDevImage1}
              alt="Web Designing"
              sx={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow: 3,
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
            <Typography color="#0B4C74" variant="h4" sx={{ mb: 3 }}>
              What is Web Designing and Development?
            </Typography>
            <Typography color="White" sx={{ mb: 3 }}>
              In today’s digital world, website designing and development play a
              crucial role in establishing a strong online presence for
              businesses. A well-designed and professionally developed website
              serves as the virtual storefront, offering a window into your
              brand, products, and services. It is the foundation upon which
              your online identity is built and can significantly impact your
              business’s success.
            </Typography>
            <Typography color="White">
              Website designing involves creating an aesthetically appealing and
              user-friendly interface that effectively communicates your brand’s
              message. It encompasses the layout, colors, typography, and
              overall visual appeal of your website. On the other hand, website
              development focuses on the technical aspects, ensuring the
              functionality, responsiveness, and seamless user experience across
              different devices.
            </Typography>
          </Box>
        </motion.div>
      </Box>

      {/* Section 2 - Text Left / Image Right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
          mb: 12,
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
            <Typography color="#0B4C74" variant="h4" sx={{ mb: 3 }}>
              Key Aspects
            </Typography>
            <Typography color="White" sx={{ mb: 3 }}>
              One key aspect of website development is mobile optimization. With
              the growing number of mobile users, having a mobile-friendly
              website is no longer optional but essential. A responsive website
              design ensures that your website adapts and looks great on various
              screen sizes, providing an optimal user experience regardless of
              the device used.
            </Typography>
            <Typography color="White">
              This is crucial as search engines like Google prioritize
              mobile-friendly websites in their rankings, making mobile
              optimization an important factor for visibility and search engine
              optimization (SEO). A professionally designed and developed
              website not only enhances your brand’s credibility but also serves
              as a powerful marketing tool. It enables you to showcase your
              products and services, engage with your target audience, and drive
              conversions. A well-optimized website can attract more visitors,
              improve user engagement, and ultimately increase your online
              visibility and reach.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: { xs: "100%", md: "500px" },
              mx: "auto",
            }}
          >
            <Box
              component="img"
              src={WebDevImage2}
              alt="Web Development"
              sx={{
                width: "100%",
                maxWidth: "100%",
                height: "auto",
                borderRadius: 3,
                boxShadow: 3,
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </Box>

      {/* Section 3 - Bullet List Left / Text Right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: 4, md: 8 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box color="White" sx={{ width: "100%", maxWidth: { xs: "100%", md: "400px" }, mx: "auto" }}>
            <List dense>
              {keyBenefits.map((benefit, idx) => (
                <ListItem key={idx} sx={{ py: 0 }}>
                  <ListItemText primary={`• ${benefit}`} />
                </ListItem>
              ))}
            </List>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <Box sx={{ width: "100%", maxWidth: { xs: "100%", md: "600px" }, mx: "auto" }}>
            <Typography variant="h4" color="#0B4C74" sx={{ mb: 3 }}>
              Key Benefits
            </Typography>
            <Typography color="White" >
              Having a website offers numerous benefits for businesses in
              today’s digital landscape. Firstly, it provides a global platform
              to showcase products or services, expanding your reach beyond
              geographical limitations. A website acts as a 24/7 virtual
              storefront, enabling customers to access information and make
              purchases anytime, anywhere.
            </Typography>
            <Typography color="White" sx={{ mt: 2 }}>
              Additionally, a website enhances credibility and brand image,
              establishing trust among potential customers. It serves as a
              powerful marketing tool, allowing businesses to showcase their
              offerings, share valuable content, and engage with their target
              audience. Moreover, a well-designed and optimized website improves
              online visibility, boosting search engine rankings and attracting
              organic traffic. By leveraging features like contact forms or chat
              support, businesses can also enhance customer interaction and
              provide personalized experiences.
            </Typography>
          </Box>
        </motion.div>
      </Box>

    </Box>
  );
}
