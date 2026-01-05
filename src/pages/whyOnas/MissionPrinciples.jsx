import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Users, Smile, Cog } from 'lucide-react';
// Images
import MissionHero from '../../assets/images/whyOnas/mission/mission.png';

import HeroMain from '../../components/HeroMain';

// Images	
import Image1 from '../../assets/images/whyOnas/mission/img1.png';
import Image2 from '../../assets/images/whyOnas/mission/img2.png';
import Image3 from '../../assets/images/whyOnas/mission/img3.png';
import Image4 from '../../assets/images/whyOnas/mission/img4.png';


const MissionPrinciples = () => {
  const principles = [
    { icon: <CheckCircle className="w-12 h-12 text-blue-600" />, title: 'We Solve Problems', text: 'We are always friendly and help our clients resolve challenges effectively.' },
    { icon: <Clock className="w-12 h-12 text-green-600" />, title: 'We Are Reliable', text: 'We are punctual, keep our word, and commit to high quality.' },
    { icon: <Cog className="w-12 h-12 text-purple-600" />, title: 'We Are Effective', text: 'We focus on achieving company goals efficiently, improving ourselves personally and professionally.' },
    { icon: <Users className="w-12 h-12 text-orange-600" />, title: 'We Are a Team', text: 'We communicate openly, provide mutual support, and collaborate globally.' },
    { icon: <Smile className="w-12 h-12 text-red-600" />, title: 'We Enthuse Our Customers', text: 'We always exceed expectations in every customer contact.' },
  ];

  return (
    <Box> color="#0B4C74"
      {/* Hero Section */}
      <HeroMain
        heading="Our Mission & Principles"
        description="Simply enthused customers – this is our mission as a global IT infrastructure service provider. We go the extra mile and take end-to-end accountability, always finding a solution and never stopping until the job is done."
        images={[Image2,MissionHero,Image1,Image2,Image3,Image4 ]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />

      {/* Principles Grid */}
      <Box sx={{ py: 5 }}>
        <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 6, textAlign: 'center' }}>Our Guiding Principles</Typography>
        <Grid container spacing={3} justifyContent="center">
          {principles.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i} sx={{ display: 'flex', justifyContent: 'center' }}>
              <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ scale: 1.05 }} style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center', px: 3, py: 4, backgroundColor: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: 3, boxShadow: 3, maxWidth: 280 }}>
                  <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: 'spring', stiffness: 200 }} style={{ marginBottom: 16 }}>
                    {item.icon}
                  </motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{ mb: 1 }}>{item.title}</Typography>
                  <Typography variant="body2" sx={{ fontSize: '0.95rem', lineHeight: 1.6, color: 'text.secondary' }}>{item.text}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MissionPrinciples;
