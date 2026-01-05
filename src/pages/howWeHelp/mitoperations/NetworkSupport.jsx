import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Shield, Layers, Zap, Database, Cloud, Wrench } from 'lucide-react';
import NetworkHero from '../../../assets/images/howWeHelp/mitoper/networksupport.png';
	  
import HeroMain from '../../../components/HeroMain';

// Images	
import Image1 from '../../../assets/images/howWeHelp/mitoper/networksupport/img1.png';
import Image2 from '../../../assets/images/howWeHelp/mitoper/networksupport/img2.png';
import Image3 from '../../../assets/images/howWeHelp/mitoper/networksupport/img3.png';
import Image4 from '../../../assets/images/howWeHelp/mitoper/networksupport/img4.png';

const NetworkSupport= () => {
  const offerings = [
    { icon: <Database className="w-12 h-12 text-blue-600" />, title: 'Remote Network Monitoring & Management', text: 'Constant surveillance of routers, firewalls, switches, and WAN links using real-time dashboards and automated remediation triggers.' },
    { icon: <Layers className="w-12 h-12 text-green-600" />, title: '24/7 NOC Support', text: 'Tiered architecture staffed by certified network engineers handling incident detection, escalation, and resolution from a centralized NOC.' },
    { icon: <Zap className="w-12 h-12 text-purple-600" />, title: 'Network Performance Monitoring', text: 'Track metrics like latency, packet loss, jitter, and throughput. Predict congestion using trend analysis, traffic shaping, and QoS enforcement.' },
    { icon: <Shield className="w-12 h-12 text-orange-600" />, title: 'Secure Remote Access Solutions', text: 'Deploy and manage VPNs, NAC, MPLS, and SD-WAN frameworks for secure and reliable connectivity across remote teams and multi-site clusters.' },
    { icon: <Cloud className="w-12 h-12 text-red-600" />, title: 'Configuration & Change Management', text: 'Maintain standardized configs, version control, firmware updates, rollback mechanisms, and automation scripts—ensuring governance and stability.' },
    { icon: <Wrench className="w-12 h-12 text-teal-600" />, title: 'Network Optimization & Incident Management', text: 'Audits, traffic shaping, routing optimization, and SNMP-based incident detection to reduce mean time to resolution.' },
  ];

  return (
    <Box>
    {/* Hero Section */}
      <HeroMain
        heading="Network Support Services"
        description="Maintain high-performance connectivity with network support services designed for dispatch reliability. From LAN/WAN management to NOC operations, we deliver 24/7 support and deep technical insight, keeping your network infrastructure resilient, secure, and scalable."
        images={[NetworkHero, Image1, Image2, Image3, Image4]}
        buttons={[
          { text: 'Contact Us', href: '/resources/contact-us', variant: 'primaryFilled' },
        ]}
      />
	  
      {/* Offerings */}
      <Box sx={{ py:5 }}>
        <Typography variant="h5" color="#0B4C74" sx={{ fontWeight:700, mb:6, textAlign:'center' }}>Our Network Support Services Portfolio</Typography>
        <Grid container spacing={2} justifyContent="center">
          {offerings.map((item,i)=>(
            <Grid item xs={12} sm={6} md={4} key={i} sx={{display:'flex', justifyContent:'center'}}>
              <motion.div initial={{opacity:0, y:40}} whileInView={{opacity:1, y:0}}  viewport={{ once: true }} transition={{duration:0.6, delay:i*0.1}} whileHover={{scale:1.05}} style={{width:'100%', display:'flex', justifyContent:'center'}}>
                <Box sx={{textAlign:'center', px:3, py:4, backgroundColor:'#fff', flexGrow:1, display:'flex', flexDirection:'column', alignItems:'center', borderRadius:3, boxShadow:3, maxWidth:280}}>
                  <motion.div whileHover={{rotate:10,scale:1.1}} transition={{type:'spring', stiffness:200}} style={{marginBottom:16}}>{item.icon}</motion.div>
                  <Typography color="#0B4C74" variant="h6" sx={{mb:1}}>{item.title}</Typography>
                  <Typography variant="body2" sx={{fontSize:'0.95rem', lineHeight:1.6, color:'text.secondary'}}>{item.text}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default NetworkSupport;
