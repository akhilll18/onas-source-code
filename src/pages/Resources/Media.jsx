import React from "react";
import { Box, Typography, Card, CardContent, Grid } from "@mui/material";
import { motion } from "framer-motion";

// local video import
import LocalVideo from "../../assets/videos/resourcesPage/video1.mp4";
export default function Media() {
  // Mixed media array (YouTube, Vimeo, local mp4s)
  const mediaVideos = [
    //  "https://youtu.be/QDfDvYeNWLg?si=9Nq-WZ-jlB3mcZ2M", // YouTube short w/ params
    // "https://www.youtube.com/watch?v=dQw4w9WgXcQ",      // YouTube long
    // "https://vimeo.com/76979871",                       // Vimeo
    LocalVideo
    // LocalVideo1,

  ];

  // Convert links into embeddable formats
  const getEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);

      // Already embed → return as-is
      if (
        parsedUrl.hostname.includes("youtube.com") &&
        parsedUrl.pathname.startsWith("/embed/")
      ) {
        return url;
      }

      // YouTube watch URL → convert to embed
      if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
        const videoId = parsedUrl.searchParams.get("v");
        // Preserve all other query params like "si"
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      // YouTube shorts
      if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/shorts/")[1].split("?")[0];
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      // YouTube short link youtu.be
      if (parsedUrl.hostname.includes("youtu.be")) {
        const videoId = parsedUrl.pathname.replace("/", "");
        const searchParams = parsedUrl.searchParams.toString();
        return `https://www.youtube.com/embed/${videoId}?${searchParams}`;
      }

      // Vimeo → same as before
      if (parsedUrl.hostname.includes("vimeo.com")) {
        const videoId = parsedUrl.pathname.replace("/", "");
        return `https://player.vimeo.com/video/${videoId}`;
      }

      // Local or unsupported → return original
      return url;
    } catch (err) {
      console.error("Invalid video URL:", url);
      return url;
    }
  };


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
          Media
        </Typography>
        <Typography color="White" variant="h4" sx={{ mt: 2, maxWidth: 700, mx: "auto" }}>
          Watch our culture, events, and behind-the-scenes moments
        </Typography>
      </Box>

      {/* Section - Mixed Videos or Fallback Cards */}
      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {mediaVideos && mediaVideos.length > 0 ? (
          mediaVideos.map((videoUrl, idx) => {
            const isYouTube = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
            const isVimeo = videoUrl.includes("vimeo.com");
            const isLocal = !isYouTube && !isVimeo;

            return (
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
                      boxShadow: 4,
                      overflow: "hidden",
                    }}
                  >
                    {isYouTube || isVimeo ? (
                      <Box
                        component="iframe"
                        src={getEmbedUrl(videoUrl)}
                        title={`Media ${idx + 1}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        sx={{
                          width: "100%",
                          height: 260,
                          objectFit: "cover",
                          border: "none",
                        }}
                      />

                    ) : (
                      <Box
                        component="video"
                        src={videoUrl}
                        controls
                        sx={{
                          width: "100%",
                          height: 260,
                          objectFit: "cover",
                        }}
                      />
                    )}
                  </Card>
                </motion.div>
              </Grid>
            );
          })
        ) : (
          // Fallback → text cards
          ["Events", "Behind the Scenes", "Stories"].map((title, idx) => (
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
                      Exciting video content coming soon.
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


