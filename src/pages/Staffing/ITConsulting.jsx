import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';

import BankingImg from '../../assets/images/staffing/itconsulting/banking.png';
import FinanceImg from '../../assets/images/staffing/itconsulting/finance.png';
import HRImg from '../../assets/images/staffing/itconsulting/hr.png';
import LegalImg from '../../assets/images/staffing/itconsulting/legal.png';
import PharmaImg from '../../assets/images/staffing/itconsulting/pharma.png';
import SalesImg from '../../assets/images/staffing/itconsulting/sales.png';
import RetailImg from '../../assets/images/staffing/itconsulting/retail.png';

// Section data
const itConsultingSections = [
  {
    id: 'banking-finance',
    title: 'Banking Finance Sales',
    description: 'As specialists in the BFSI sector, we understand the critical demand for compliant, skilled talent. We leverage innovative sourcing solutions and a vast pool of pre-screened, audit-ready candidates to fill crucial Legal, Compliance, Finance, and Sales roles efficiently. Partner with us to secure professional talent that drives growth while mitigating organizational risk.',
    image: BankingImg,
    items: [' - Comprehensive recruiting solutions', ' - Deep market insights', ' - Specialized talent management'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'finance-accounting',
    title: 'Finance & Accounting',
    description: 'Stop searching, start leading. We connect you with a curated portfolio of in-demand Finance and Accounting roles at top-tier employers. Leverage our specialized career support and industry access to ensure your next placement is a strategic step toward building a rewarding and high-trajectory career.',
    image: FinanceImg,
    items: ['- Wide variety of finance roles', '- Career guidance and mentoring', '- Access to top employers'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'hr-support',
    title: 'HR & Support',
    description: 'We help fill crucial roles in Legal, Admin, Office, Surveillance, Drivers, and more.',
    image: HRImg,
    items: ['- HR strategy and recruitment', '- Admin and office staffing', '- Specialized talent management'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'legal-compliance',
    title: 'Legal & Compliance',
    description: 'A Partner for talent in legal & compliance roles. We help fill crucial roles with professional talent efficiently and effectively.',
    image: LegalImg,
    items: ['- Regulatory compliance staffing', '- Legal role specialization', '- Audit-ready talent solutions'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'pharma-healthcare-lifesciences',
    title: 'Pharma, Healthcare & Life Sciences',
    description: 'A Partner for talent in pharma, healthcare, and lifesciences. Access pre-screened candidates and specialized recruiting solutions.',
    image: PharmaImg,
    items: ['- Healthcare staffing', '- Pharma recruitment solutions', '- Life sciences talent pool'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'sales-trade-marketing',
    title: 'Sales & Trade Marketing',
    description: 'A partner for talent in sales & trade marketing roles. Fill crucial roles efficiently with professional and pre-screened candidates.',
    image: SalesImg,
    items: ['- Sales and marketing recruitment', '- Trade marketing specialists', '- Market insights and analytics'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'wholesale-retail',
    title: 'Wholesale & Retail',
    description: 'A Partner for talent in wholesale & retail. Leverage our global footprint and innovative recruiting processes to fill key positions.',
    image: RetailImg,
    items: ['- Retail and wholesale talent', '- Pre screened professionals', '- Customizable recruitment solutions'],
    bg: '#FDFDFD',
    reverse: false,
  },
];

export default function ITConsulting() {
  // Get menu items from NAV_LINKS
  const menuItems =
    NAV_LINKS.find(link => link.label === 'Staffing')
      ?.children.find(cat => cat.category === 'IT Consulting')
      ?.items.map(item => ({
        label: item.label,
        path: item.path.includes('#') ? `#${item.path.split('#')[1]}` : item.path,
      })) || [];

  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 20, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        maxWidth: 1800,
        mx: 'auto',
      }}
    >
      {/* Page Title */}
      <Typography color="#0B4C74" variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        IT Consulting
      </Typography>
      <Typography color="White" variant="h6" sx={{ mb: 6, textAlign: "center",fontFamily: 'sans-serif' }}>
        Delivering workforce and IT solutions tailored to help businesses adapt, scale, and succeed in a fast-changing world.
      </Typography>

      {/* Menu */}
      {/* <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 6 }}>
        {menuItems.map((item, idx) => (
          <a
            key={idx}
            href={item.path}
            style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}
          >
            {item.label}
          </a>
        ))}
      </Box> */}


      {/* Sections */}
      {itConsultingSections.map((section, i) => (
        <motion.div
          key={i}
          id={section.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: section.reverse ? 'row-reverse' : 'row' },
              backgroundColor: section.bg,
              borderRadius: 3,
              mb: 6,
              overflow: 'hidden',
              boxShadow: 2,
              fontFamily: 'sans-serif',
                            fontSize: '10px',
            }}
          >
            {/* Left Image */}
            <Box sx={{ width: { xs: '100%', md: '40%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2 }}>
              <motion.img
                src={section.image}
                alt={section.title}
                style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </Box>

            {/* Right Text */}
            <Box sx={{ width: { xs: '100%', md: '60%' }, p: { xs: 3, md: 6 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              <Typography variant="h6"sx={{ mb: 2 }}>{section.description}</Typography>
              <List dense sx={{ mb: 2 }}>
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <ListItem sx={{ py: 0.5 }}>
                      <ListItemText
                        primary={item}
                        primaryTypographyProps={{ fontSize: { xs: '10 px', md: '10 px' } }}
                      />
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

