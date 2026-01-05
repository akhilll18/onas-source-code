import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../../utils/constants';

// Example Images (replace with actual ones in your assets folder)
import ManagedITImg from '../../assets/images/staffing/professionalservices/managedit.png';
import StaffAugImg from '../../assets/images/staffing/professionalservices/staffaugmentation.webp';
import TempContractImg from '../../assets/images/staffing/professionalservices/tempcontract.jpg';
import PermanentImg from '../../assets/images/staffing/professionalservices/permanent.png';
import ContractHireImg from '../../assets/images/staffing/professionalservices/contracthire.png';
import RemoteImg from '../../assets/images/staffing/professionalservices/remote.webp';
import OffshoreImg from '../../assets/images/staffing/professionalservices/offshore.jpg';
import RpoImg from '../../assets/images/staffing/professionalservices/rpo.png';
import BpoImg from '../../assets/images/staffing/professionalservices/bpo.png';
import RecruitersImg from '../../assets/images/staffing/professionalservices/recruiters.webp';
import TechSupportImg from '../../assets/images/staffing/professionalservices/techsupport.webp';

// Section data
const professionalSections = [
  {
    id: 'managed-it',
    title: 'Managed IT & Resource Services',
    description:
      'Focus on your core business while we manage your IT infrastructure and resources. End-to-end support ensures cost optimization and growth-driven technology.',
    image: ManagedITImg,
    items: ['- End-to-end IT management', '- System monitoring & maintenance', '- Proactive resource optimization'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'staff-augmentation',
    title: 'Staff Augmentation Services',
    description:
      'Boost your team’s capabilities with skilled professionals who integrate seamlessly into your projects.',
    image: StaffAugImg,
    items: ['- Seamless project integration', '- Flexible engagement models', '- Access to wide talent pool'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'temporary-contract',
    title: 'Temporary / Contract Staffing',
    description:
      'Stay agile with skilled professionals for short and mid-term needs, manage workloads efficiently.',
    image: TempContractImg,
    items: ['- On-demand professionals', '- Short & mid-term support', '- Scalable workforce solutions'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'permanent-executive',
    title: 'Permanent Staffing / Executive Placement',
    description:
      'Find long-term success with qualified professionals and leaders focused on cultural fit and retention.',
    image: PermanentImg,
    items: ['- Specialized & leadership roles', '- Focus on cultural fit', '- Long-term hiring strategy'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'contract-to-hire',
    title: 'Contract-to-Hire Staffing',
    description:
      'Evaluate professionals before permanent hire—reducing risks and improving retention.',
    image: ContractHireImg,
    items: ['- Evaluate skills & performance', '- Lower hiring risks', '- Retention-focused approach'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'remote-virtual',
    title: 'Remote / Virtual Staffing',
    description:
      'Build high-performing teams without geographical limits. Scale flexibly and cost-efficiently.',
    image: RemoteImg,
    items: ['- Global talent access', '- Scalable & flexible', '- Cost-efficient staffing'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'offshore-staffing',
    title: 'Offshore Staffing',
    description:
      'Expand capabilities with cost-effective offshore teams, from IT to back-office functions.',
    image: OffshoreImg,
    items: ['- Cost-efficient offshore teams', '- Global expertise', '- Seamless business extension'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'rpo-services',
    title: 'RPO (Recruitment Process Outsourcing)',
    description:
      'Streamline recruitment with end-to-end lifecycle management, reducing costs and improving scalability.',
    image: RpoImg,
    items: ['- Full recruitment lifecycle', '- Faster hiring', '- Cost-efficient & scalable'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'bpo-services',
    title: 'BPO (Business Process Outsourcing)',
    description:
      'Outsource non-core processes like customer support, data entry, and back-office operations to improve efficiency and cut costs.',
    image: BpoImg,
    items: ['- Customer support services', '- Data entry & processing', '- Back-office operations'],
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'hire-recruiters',
    title: 'Hire Our Recruiters',
    description:
      'On-demand recruitment expertise tailored to your needs—helping you build your dream team faster.',
    image: RecruitersImg,
    items: ['- Expert recruiters on demand', '- Agile & efficient hiring', '- Scalable support'],
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'technical-support',
    title: 'Technical Support Services',
    description:
      'Reliable, responsive 24/7 technical support trusted by industry leaders to ensure seamless operations.',
    image: TechSupportImg,
    items: ['- 24/7 coverage', '- Trusted by industry leaders', '- Responsive & reliable'],
    bg: '#FDFDFD',
    reverse: false,
  },
];

export default function ProfessionalServices() {
  const menuItems =
    NAV_LINKS.find(link => link.label === 'Staffing')
      ?.children.find(cat => cat.category === 'Professional Services')
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
        fontFamily: 'sans-serif',
      }}
    >
      {/* Page Title */}
      <Typography color="#0B4C74" variant="h3" sx={{ mb: 2, textAlign: "center" }}>
        Professional Services
      </Typography>
      <Typography color="White"variant="h6" sx={{ mb: 6, textAlign: "center" }}>
        We provide comprehensive workforce and IT solutions designed to meet the evolving needs of modern businesses.
      </Typography>

      {/* Sections */}
      {professionalSections.map((section, i) => (
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
              <Typography color="#0B4C74" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              <Typography variant="h7"  sx={{ mb: 2 }}>{section.description}</Typography>
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

