import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Images
import BankingImg from '../../assets/images/whoWeHelp/banking.jpg';
import LifeSciencesImg from '../../assets/images/whoWeHelp/life.jpg';
import PublicServicesImg from '../../assets/images/whoWeHelp/public.jpg';
import ProfessionalServicesImg from '../../assets/images/whoWeHelp/professional.jpg';
import EngineeringImg from '../../assets/images/whoWeHelp/engineering.png';
import MediaImg from '../../assets/images/whoWeHelp/media.webp';
import EducationImg from '../../assets/images/whoWeHelp/education.jpg';
import HealthcareImg from '../../assets/images/whoWeHelp/healthcare.webp';
import InsuranceImg from '../../assets/images/whoWeHelp/Insurance.jpg';
import ManufacturingImg from '../../assets/images/whoWeHelp/manufacturing.jpg';
import RetailImg from '../../assets/images/whoWeHelp/retail.jpg';
import CapitalMarketsImg from '../../assets/images/whoWeHelp/capitalmarkets.jpg';
import ConsumerGoodsImg from '../../assets/images/whoWeHelp/consumer.jpeg';
import EnergyImg from '../../assets/images/whoWeHelp/energy.jpg';
import HiTechImg from '../../assets/images/whoWeHelp/hitech.jpg';
import ITImg from '../../assets/images/whoWeHelp/it.png';

const industriesSections = [
  {
    id: 'banking',
    title: 'Banking',
    description: `With ONAS’s strong expertise in banking and technology, corporate customers are embracing new opportunities to transform their offerings and capabilities…and move from commoditized products to added-value solutions.   
Move to the cloud
Successful financial services leaders in cloud adoption are using the cloud as a transformative platform to achieve new revenue streams, innovation, and business growth at significantly higher levels.
Unlike traditional, decentralized financial services systems, cloud systems ensure consistency of processes and controls in all situations. This adds an extra layer of robustness against extraordinary events like capacity strain that can arise in remote working, cyber-attacks, and volume spikes.`,
    image: BankingImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'life-sciences',
    title: 'Life Sciences & Pharma',
    description: `Create the foundation for the future with systems that deliver accountable, affordable and accessible healthcare
ONAS works with the pioneers and leaders in pharma to fuel innovation and recalibrate business towards more accountable, affordable and accessible care using technology.`,
    image: LifeSciencesImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'public-services',
    title: 'Public Services',
    description: `Create an engaging and empowering environment across every aspect of governance
ONAS Public Sector practice provides governments the means to engage citizens, government agencies, businesses and NGO’s and deliver services to them in a cost-effective manner. We use our wide partnerships to simplify digital technology (core infrastructure and applications) to create innovative e-governance models. Governments across the world have deployed our expertise in areas such as public safety, transport, smart cities and digital governance for efficiency and scalable services.`,
    image: PublicServicesImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'professional-services',
    title: 'Professional Services',
    description: `Augment service delivery capabilities, improve customer-centricity and create differentiation
Improving customer-centricity, creating differentiation, building operational efficiency and cost optimization in the Healthcare industry are urgent needs. To aid in meeting these goals, ONAS provides clients with services and customized solutions for prudent financial management, business performance management, continuous operational improvement, responsiveness to customer needs and processes to attract and retain top talent. We do this using next-gen business platforms, SLA-driven IT service delivery, risk-assessment, etc. Among the demonstrated outcomes are performance improvement, lowered cost of operations, reduced time to market and enhanced customer experience.`,
    image: ProfessionalServicesImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'engineering-construction-operations',
    title: 'Engineering, Construction & Operations',
    description: `Creating a digital culture delivering operational efficiencies while enhancing user experience and safety
The Construction, Operations and Airport sectors are undergoing a revolutionary transformation, exploring new ways to improve efficiency, accuracy and transparency of their key business processes, while enhancing overall performance and user experience. They are continuously being challenged by fast adoption with newer technologies, need for innovation, data driven operations and many more.`,
    image: EngineeringImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'communication-media-info',
    title: 'Communication Media & Information Services',
    description: `The communications industry is undergoing a major transformation, driven by the rise of new technologies like 5G, Generative AI and advanced AR/VR (Augmented Reality/Virtual Reality). These technologies are creating new opportunities for Communication Service Providers (CSPs) to engage with customers, deliver new services, and improve operational efficiency. At Wipro, we are at the forefront of this evolution, leveraging our expertise to help CSPs thrive in this new era. We collaborate with top CSPs and Network Equipment providers to deliver innovative services like Network as a Service (NaaS), Secure Access Service Edge (SASE), and managed private 5G solutions while helping them tap into new markets and revenue streams.`,
    image: MediaImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'education',
    title: 'Education',
    description: `The educational sector is experiencing significant change. From preschool to high school, and universities to technical training, educational institutions must navigate changes across their operations and service delivery. Hybrid and flexible learning models alter how students learn, and also how faculty support new delivery mechanisms. Without question, the need for rapid digital transformation in education has never been greater.

ONAS helps organizations design, customize, implement, manage and improve a number of systems, from the student information system (SIS), learning management system and CRM to workflow management systems, HRMS and financial management systems. These diverse capabilities reflect the full range of functions affected by digital transformation in education.`,
    image: EducationImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: `Healthcare clients who are quickly realizing that the future belongs to the fee-for-value model leverage Wipro’s Healthcare services to deliver cost-effective, high-quality care through robust systems, products and commercial models.`,
    image: HealthcareImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'insurance',
    title: 'Insurance',
    description: `Digital transformation aimed at delivering enhanced customer experience enabled by big data and analytical insights. 

ONAS delivers a seamless insurance sales and service journey for our clients by leveraging robust and elastic IT infrastructure (application and Infra) and automation (Cognitive and Robotic).

With our breadth of experience serving global insurance and re-insurance companies in sales and distribution, new business and underwriting, policy administration, claims, billing, accounting, risk and compliance, brokerage and third party administration, Wipro offers you a robust and comprehensive service portfolio, product offerings, and deep expertise in design and engineering.`,
    image: InsuranceImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: `Customers today buy experiences, not just products. Manufacturers need to build connected, cognitive, and collaborative networks which support adaptive innovation at scale. This calls for a neural approach where the manufacturing value chain mimics the human nervous system, reflexively sensing new information, perceiving its meaning, and taking the required action, all in real time.`,
    image: ManufacturingImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'retail',
    title: 'Retail',
    description: `We help you fuel growth and innovate continuously by enabling end-to-end business transformation across digital strategy, customer experience, operations, and commercial proposition optimization. Our deep industry expertise, unique outcome-driven engagement model, AI-powered products and platforms, innovation hubs, and partnership ecosystems accelerate your journey to a data-led, nimble enterprise of the future.`,
    image: RetailImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'capital-markets',
    title: 'Capital Markets',
    description: `Efficient and transparent capital markets are critical to economic growth and financial stability. Market volatility, high transaction volumes, demand for advisory services, and sustainability imperatives are pushing capital markets firms to focus on resilience, adaptability, and sustainable business practices. As they explore new frontiers through ecosystems and a purpose-centric approach, firms are anchoring their growth on a solid foundation of trust among all stakeholders.`,
    image: CapitalMarketsImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'consumer-goods-distribution',
    title: 'Consumer Good & Distribution',
    description: `Conscious consumers expect more than convenience. They want the products they buy to be ethically and sustainably sourced, produced, and distributed. For consumer goods companies, this means that, in addition to enabling pervasive commerce, they need to tailor their strategies to cater to these preferences. This shift in thinking is driving massive technology investments to accelerate consumer-first innovation, build resilient and responsible supply chains, and personalize experiences.`,
    image: ConsumerGoodsImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'energy-resources-utilities',
    title: 'Energy Source & Utilities',
    description: `The Energy Resources & utilities industry is changing dramatically as the world embraces planet-friendly fuels and the trend toward electrification moves utilities from value-chain players to the backbone of the energy transition.  Consumers and businesses alike are actively choosing low-carbon homes and offices, and they expect greater empowerment and a more sophisticated experience from their energy suppliers.  

Gradual decentralization of the energy market is allowing new entities to play an increasingly critical role by offering new services and creating new markets, diverting customer attention away from utilities. New technologies and aging assets compound matters, even as federal governments pledge billions of dollars to modernize infrastructure and make the grid smarter and more self-reliant. With a plethora of point solutions from energy tech companies, utilities are facing a new challenge: delivering a cohesive business value to its customers. Utilities are struggling to balance their fundamental obligations to provide ‘lights on’ reliability against the increasing demand to transform into a new-age energy service provider.`,
    image: EnergyImg,
    bg: '#FDFDFD',
    reverse: true,
  },
  {
    id: 'hi-tech',
    title: 'Hi-Tech',
    description: `The Hi-Tech industry is fiercely competitive. As product lifecycles become shorter, innovation has become their lifeblood. Today, to thrive, hi-tech organizations must quickly decipher customer needs while reducing costs and creating differentiators. The industry is also witnessing major M&As that provide organizations access to newer business areas, niche skills, and Intellectual Property. In this fast-moving and complex scenario, powerful technological solutions are needed to ensure business opportunities are not missed.`,
    image: HiTechImg,
    bg: '#FDFDFD',
    reverse: false,
  },
  {
    id: 'information-technology',
    title: 'Information Technology',
    description: `The IT sector powers innovation and transformation across all industries. From cloud computing and cybersecurity to AI and automation, IT enables enterprises to modernize systems, optimize operations, and unlock new business opportunities. ONAS partners with clients to design scalable IT strategies, implement next-gen solutions, and provide continuous support that drives resilience and growth.`,
    image: ITImg,
    bg: '#FDFDFD',
    reverse: true,
  },
];

export default function Industries() {
  return (
    <Box
      sx={{
        px: { xs: 2, md: 8, lg: 12, xl: 16 },
        pt: { xs: 18, md: 20, lg: 28, xl: 32 },
        pb: { xs: 8, md: 8, lg: 12, xl: 16 },
        maxWidth: 1800, 
        mx: 'auto',
      }}
    >
      <Typography color="#0B4C74" variant="h3" sx={{ mb: 2, textAlign: 'center' }}>
        Who We Help
      </Typography>
      <Typography color="White" variant="h5" sx={{ mb: 6, textAlign: 'center' }}>
        We partner with organizations across diverse industries to accelerate
        digital transformation, innovation, and operational efficiency.
      </Typography>

      {industriesSections.map((section, i) => (
        <motion.div
          key={i}
          id={section.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: {
                xs: 'column',
                md: section.reverse ? 'row-reverse' : 'row',
              },
              backgroundColor: section.bg,
              borderRadius: 3,
              mb: 6,
              overflow: 'hidden',
              boxShadow: 2,
            }}
          >
            {/* 🔹 Left side rectangular image */}
            <Box
              sx={{
                width: { xs: '100%', md: '40%' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <motion.img
                src={section.image}
                alt={section.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 200 }}
              />
            </Box>

            {/* 🔹 Right side text */}
            <Box
              sx={{
                width: { xs: '100%', md: '60%' },
                p: { xs: 3, md: 6 },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography color="#0B4C74" variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                {section.title}
              </Typography>
              <Typography variant="h6" sx={{ whiteSpace: 'pre-line' }}>
                {section.description}
              </Typography>
            </Box>
          </Box>
        </motion.div>
      ))}
    </Box>
  );
}

