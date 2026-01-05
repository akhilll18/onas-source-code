import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

// Client images
import Img1 from '../../assets/images/clients/bg1.png';
import Img2 from '../../assets/images/clients/bg1.png';
import Img3 from '../../assets/images/clients/bg1.png';
import Img4 from '../../assets/images/clients/bg1.png';

const clients = [
  { name: 'Drs. Flink Wholistic Wellness Center', industry: 'Health', image: Img1 },
  { name: 'Jersey Shore Financial Advisors', industry: 'Financial Planner', image: Img2 },
  { name: 'DroneTrace', industry: 'Technology', image: Img3 },
  { name: 'North Ridge Wealth Advisors', industry: 'Finance', image: Img4 },
];

export default function ClientsGrid() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 4, md: 8 } }}>
      <Typography variant="h5" align="center" sx={{ fontWeight: 700, mb: 2 }}>
        Check out a few of the 1,000+ websites we’ve built.
      </Typography>
      <Typography align="center" sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: 12, sm: 14 } }}>
        Want to see more?{' '}
        <a href="#" style={{ color: '#001B3A', textDecoration: 'underline' }}>
          Check out our full portfolio →
        </a>
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {clients.map((client, i) => (
          <Grid
            item
            key={i}
            xs={6}  // 2 per row on mobile
            sm={4}  // 3 per row on tablet
            md={3}  // 4 per row on desktop
            sx={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 220,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  borderRadius: 2,
                  bgcolor: '#045c5a',
                  p: 2,
                  overflow: 'hidden',
                  flexGrow: 1,
                }}
              >
                <CardMedia
                  component="img"
                  image={client.image}
                  alt={client.name}
                  sx={{
                    width: 120,
                    height: 100,
                    borderRadius: 2,
                    mb: 1.5,
                    objectFit: 'cover',
                  }}
                />
                <CardContent
                  sx={{
                    textAlign: 'center',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    width: '100%',
                    p: 0,
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      fontSize: { xs: 12, sm: 14 },
                      textAlign: 'center',
                    }}
                  >
                    {client.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: 10, sm: 12 },
                      textAlign: 'center',
                      wordBreak: 'break-word',
                    }}
                  >
                    {client.industry}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
