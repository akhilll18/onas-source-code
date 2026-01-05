import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import { motion } from "framer-motion";

//Images
import Image1 from '../../../assets/images/howWeHelp/ERP/workday/img1.png';
import Image2 from '../../../assets/images/howWeHelp/ERP/workday/img2.jpg';
import Image3 from '../../../assets/images/howWeHelp/ERP/workday/img3.jpg';
import Image4 from '../../../assets/images/howWeHelp/ERP/workday/img4.png';

const sections = [
  {
    title: "The enterprise AI platform for people, money, and agents",
    text: "Manage HR, finance, and all your AI agents. All in one place.",
    image: Image1,
  },
  {
    title: "Faster insights. Better decisions. Automated actions",
    text: "Illuminate drives innovation and growth for organizations of any size, in any industry. Built on the largest, cleanest HR and finance dataset with unrivaled business context, Illuminate deeply understands and optimizes how work gets done to deliver the most accurate, reliable results.",
    image: Image2,
  },
  {
    title: "HR Management with Workday",
    text: "Streamline human capital processes with real-time insights, reporting, and analytics to empower your workforce.",
    image: Image3,
  },
  {
    title: "Finance Management with Workday",
    text: "Gain visibility into financial performance, automate workflows, and accelerate decision-making across your organization.",
    image: Image4,
  },
];

export default function Workday() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
      }}
    >
      <Typography variant="h3" color="#0B4C74" sx={{ mb: 6, textAlign: "center" }}>
        Workday - Enterprise AI Platform
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {sections.map((sec, i) => (
          <Grid item xs="auto" sm={6} md={4} key={i} sx={{ display: "flex", justifyContent: "center" }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: { xs: 'auto', sm: 500 }, width: { xs: '100%', sm: 345 }, borderRadius: 3, boxShadow: 4, display: "flex", flexDirection: "column" }}>
                {sec.image && (
                  <CardMedia component="img" height="160" image={sec.image} alt={sec.title} sx={{ objectFit: "cover" }} />
                )}

                <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <Typography color="#0B4C74" variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{sec.title}</Typography>

                  <TruncatedText text={sec.text} isExpanded={expanded[i]} toggleExpand={() => toggleExpand(i)} />
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

// Reusable Responsive TruncatedText Component
export function TruncatedText({ text, isExpanded, toggleExpand }) {
  const textRef = useRef();
  const [textExceedsLimit, setTextExceedsLimit] = useState(false);
  const [maxLines, setMaxLines] = useState(3);

  useEffect(() => {
    const updateLines = () => {
      if (window.innerWidth < 600) setMaxLines(4); // mobile
      else if (window.innerWidth < 900) setMaxLines(3); // tablet
      else setMaxLines(4); // desktop
    };
    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  useEffect(() => {
    if (textRef.current) {
      setTextExceedsLimit(textRef.current.scrollHeight > textRef.current.clientHeight);
    }
  }, [text, maxLines]);

  return (
    <Box>
      <Typography
        ref={textRef}
        variant="body2"
        sx={{
          color: "text.secondary",
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: isExpanded ? 'none' : maxLines,
          WebkitBoxOrient: "vertical",
        }}
      >
        {text}
      </Typography>

      {textExceedsLimit && (
        <Button
          size="small"
          variant="text"
          sx={{ textTransform: "none", p: 0, mt: 1 }}
          onClick={toggleExpand}
        >
          {isExpanded ? "Show less" : "Read more"}
        </Button>
      )}
    </Box>
  );
}
